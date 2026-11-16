import { useId } from 'react';

import styles from './Logo.module.scss';

export type LogoVariant = 'full' | 'light' | 'dark';

export interface LogoProps {
  /** full — градиентный знак, light/dark — монохромные версии */
  variant?: LogoVariant;
  /** высота знака в пикселях */
  size?: number;
  showWordmark?: boolean;
  className?: string;
}

/**
 * Модульная буква A из трёх скруглённых сегментов с градиентом
 * фиолетовый → голубой → синий. Геометрия зафиксирована в брендбуке.
 */
export function Logo({
  variant = 'full',
  size = 34,
  showWordmark = true,
  className,
}: LogoProps) {
  const uid = useId().replace(/:/g, '');
  const leftId = `logo-left-${uid}`;
  const rightId = `logo-right-${uid}`;
  const baseId = `logo-base-${uid}`;

  const monochrome = variant === 'light' ? '#FFFFFF' : variant === 'dark' ? '#0B0F1A' : null;

  return (
    <span className={[styles.logo, className ?? ''].filter(Boolean).join(' ')}>
      <svg
        className={styles.mark}
        width={size}
        height={size}
        viewBox="0 0 64 64"
        role="img"
        aria-hidden="true"
        focusable="false"
      >
        {monochrome === null ? (
          <defs>
            <linearGradient id={leftId} x1="31" y1="11" x2="9" y2="71" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#A855F7" />
              <stop offset="0.55" stopColor="#8B5CF6" />
              <stop offset="1" stopColor="#6366F1" />
            </linearGradient>
            <linearGradient id={rightId} x1="33" y1="15" x2="55" y2="71" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#6366F1" />
              <stop offset="0.5" stopColor="#3B82F6" />
              <stop offset="1" stopColor="#22D3EE" />
            </linearGradient>
            <linearGradient id={baseId} x1="20" y1="44" x2="44" y2="68" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#8B5CF6" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        ) : null}
        <path
          d="M31 12 L10 70"
          fill="none"
          stroke={monochrome ?? `url(#${leftId})`}
          strokeWidth="16"
          strokeLinecap="round"
        />
        <path
          d="M33 12 L54 70"
          fill="none"
          stroke={monochrome ?? `url(#${rightId})`}
          strokeWidth="16"
          strokeLinecap="round"
        />
        <path
          d="M32 45.5 L42.6 65.6 Q44.6 69.6 40.1 69.6 L23.9 69.6 Q19.4 69.6 21.4 65.6 Z"
          fill={monochrome ?? `url(#${baseId})`}
        />
      </svg>
      {showWordmark ? (
        <span className={[styles.wordmark, styles[variant]].join(' ')}>Alkei.Systems</span>
      ) : null}
    </span>
  );
}
