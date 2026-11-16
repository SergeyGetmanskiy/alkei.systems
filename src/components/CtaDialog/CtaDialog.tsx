import { useCallback, useEffect, useRef, useState } from 'react';

import { useContent } from '../../i18n/LanguageContext';
import { Button } from '../Button/Button';
import { CHANNEL_ORDER, buildChannelHref } from './channels';
import styles from './CtaDialog.module.scss';

export interface CtaDialogProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

const FOCUSABLE = 'a[href], button:not([disabled])';

/** Компактный выбор канала связи вместо формы обратной связи (раздел 12 ТЗ). */
export function CtaDialog({ open, message, onClose }: CtaDialogProps) {
  const { common } = useContent();
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const [copied, setCopied] = useState(false);

  const close = useCallback(() => {
    setCopied(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      const node = dialogRef.current;

      if (!node) {
        return;
      }

      const focusable = Array.from(node.querySelectorAll<HTMLElement>(FOCUSABLE));

      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const focusTarget = dialogRef.current?.querySelector<HTMLElement>(FOCUSABLE);
    focusTarget?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }, [message]);

  if (!open) {
    return null;
  }

  return (
    <div
      className={styles.backdrop}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          close();
        }
      }}
    >
      <div
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cta-dialog-title"
      >
        <h2 className={styles.title} id="cta-dialog-title">
          {common.contact.dialogTitle}
        </h2>
        <p className={styles.text}>{common.contact.dialogText}</p>

        <div className={styles.channels}>
          {CHANNEL_ORDER.map((id) => {
            const channel = common.contact.channels[id];
            const href = buildChannelHref(id, message, common.contact.dialogTitle);

            return (
              <a
                key={id}
                className={styles.channel}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className={styles.channelLabel}>{channel.label}</span>
                <span className={styles.channelValue}>{channel.value}</span>
                <span className={styles.channelHint}>{channel.hint}</span>
                <span className={styles.channelAction}>
                  {common.contact.open}
                  <span aria-hidden="true">→</span>
                </span>
              </a>
            );
          })}
        </div>

        <div className={styles.message}>
          <span className={styles.messageLabel}>{common.contact.proposedMessage}</span>
          <p className={styles.messageText}>{message}</p>
          <Button variant="secondary" size="md" onClick={handleCopy}>
            {copied ? common.contact.copied : common.contact.copy}
          </Button>
        </div>

        <div className={styles.actions}>
          <Button variant="ghost" size="md" onClick={close} aria-label={common.contact.close}>
            {common.contact.close}
          </Button>
        </div>
      </div>
    </div>
  );
}
