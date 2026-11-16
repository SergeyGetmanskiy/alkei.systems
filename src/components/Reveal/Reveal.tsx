import { useEffect, useRef, useState, type ReactNode } from 'react';

import styles from './Reveal.module.scss';

export interface RevealProps {
  children: ReactNode;
  /** задержка появления, мс */
  delay?: number;
  className?: string;
  as?: 'div' | 'li' | 'section';
}

/**
 * Появление элемента при прокрутке. Уважает prefers-reduced-motion:
 * при отключённой анимации контент показывается сразу.
 */
export function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!node || reduceMotion || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as;
  const props = {
    ref: ref as never,
    className: [styles.reveal, visible ? styles.visible : '', className ?? '']
      .filter(Boolean)
      .join(' '),
    style: { transitionDelay: visible ? `${delay}ms` : '0ms' },
    children,
  };

  return <Tag {...props} />;
}
