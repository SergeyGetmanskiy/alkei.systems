import { useState } from 'react';

import styles from './Accordion.module.scss';

export interface AccordionItem {
  id: string;
  title: string;
  subtitle: string;
  purpose: string;
  details: string[];
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
}

/** Раскрывающиеся карточки методологий (SDF, DPE, ODF). */
export function Accordion({ items, defaultOpenId }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  return (
    <div className={styles.accordion}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `accordion-panel-${item.id}`;
        const buttonId = `accordion-button-${item.id}`;

        return (
          <article className={[styles.item, isOpen ? styles.itemOpen : ''].filter(Boolean).join(' ')} key={item.id}>
            <h3 className={styles.heading}>
              <button
                className={styles.trigger}
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span className={styles.triggerText}>
                  <span className={styles.title}>
                    {item.title} <span className={styles.fullName}>{item.subtitle}</span>
                  </span>
                  <span className={styles.purpose}>{item.purpose}</span>
                </span>
                <span className={[styles.indicator, isOpen ? styles.indicatorOpen : ''].filter(Boolean).join(' ')} aria-hidden="true" />
              </button>
            </h3>

            <div
              className={[styles.panel, isOpen ? styles.panelOpen : ''].filter(Boolean).join(' ')}
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
            >
              <ul className={styles.details}>
                {item.details.map((detail) => (
                  <li className={styles.detail} key={detail}>
                    <span className={styles.detailMarker} aria-hidden="true" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        );
      })}
    </div>
  );
}
