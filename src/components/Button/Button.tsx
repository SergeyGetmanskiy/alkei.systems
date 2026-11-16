import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  full?: boolean;
  className?: string;
  children: ReactNode;
}

function buildClass(
  variant: ButtonVariant,
  size: ButtonSize,
  full: boolean | undefined,
  className: string | undefined,
): string {
  return [styles.button, styles[variant], styles[size], full ? styles.full : '', className ?? '']
    .filter(Boolean)
    .join(' ');
}

export type ButtonProps = BaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>;

export function Button({
  variant = 'primary',
  size = 'md',
  full,
  className,
  children,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={buildClass(variant, size, full, className)} {...rest}>
      {children}
    </button>
  );
}

export interface LinkButtonProps extends BaseProps {
  to: string;
  arrow?: boolean;
}

export function LinkButton({
  to,
  variant = 'primary',
  size = 'md',
  full,
  className,
  children,
  arrow = true,
}: LinkButtonProps) {
  return (
    <Link to={to} className={buildClass(variant, size, full, className)}>
      {children}
      {arrow ? (
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      ) : null}
    </Link>
  );
}

export interface AnchorButtonProps
  extends BaseProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'> {
  href: string;
  arrow?: boolean;
  /** открывать ссылку в новой вкладке */
  external?: boolean;
}

export function AnchorButton({
  href,
  variant = 'secondary',
  size = 'md',
  full,
  className,
  children,
  arrow = true,
  external = true,
  ...rest
}: AnchorButtonProps) {
  return (
    <a
      href={href}
      className={buildClass(variant, size, full, className)}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer noopener' : undefined}
      {...rest}
    >
      {children}
      {arrow ? (
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      ) : null}
    </a>
  );
}
