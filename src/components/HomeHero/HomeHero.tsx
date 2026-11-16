import { useEffect, useState } from 'react';

import { useLanguage } from '../../i18n/LanguageContext';
import { PAGE_PATHS } from '../../router/paths';
import { Button, LinkButton } from '../Button/Button';
import { useCta } from '../CtaDialog/CtaContext';
import styles from './HomeHero.module.scss';

type Phase = 'idle' | 'striking' | 'done';

/**
 * Первый экран главной страницы (раздел 4.1 ТЗ).
 * Первоначальная фраза зачёркивается и исчезает, после чего появляется
 * итоговая формулировка. Итоговый текст присутствует в h1 с самого начала,
 * поэтому контент не зависит от анимации, а prefers-reduced-motion
 * отключает движение полностью.
 */
export function HomeHero() {
  const { content, to } = useLanguage();
  const { hero } = content.home;
  const { openCta } = useCta();
  const [phase, setPhase] = useState<Phase>('idle');
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      setReduced(true);
      setPhase('done');
      return undefined;
    }

    const strikeTimer = window.setTimeout(() => setPhase('striking'), 1500);
    const doneTimer = window.setTimeout(() => setPhase('done'), 2400);

    return () => {
      window.clearTimeout(strikeTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  const overlayClass = [
    styles.overlay,
    phase === 'striking' ? styles.striking : '',
    phase === 'done' ? styles.overlayHidden : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <span className={styles.eyebrow}>{hero.eyebrow}</span>

        <div className={styles.titleArea}>
          <h1
            className={[styles.title, phase === 'done' ? styles.titleVisible : '']
              .filter(Boolean)
              .join(' ')}
          >
            {hero.finalPhrase}
          </h1>

          <p className={overlayClass} aria-hidden="true">
            <span className={styles.overlayText}>{hero.struckPhrase}</span>
          </p>
        </div>

        <p className={styles.subtitle}>{hero.subtitle}</p>

        <div className={styles.actions}>
          <Button variant="primary" size="lg" onClick={() => openCta(content.common.ctaMessages.default)}>
            {hero.cta}
          </Button>
          <LinkButton variant="secondary" size="lg" to={to(PAGE_PATHS.mentor)}>
            {content.home.directions.items[0].link}
          </LinkButton>
        </div>

        {reduced ? null : <span className="visually-hidden">{hero.struckPhrase}</span>}
      </div>
    </section>
  );
}
