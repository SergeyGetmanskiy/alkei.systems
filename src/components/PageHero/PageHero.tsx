import type { ReactNode } from 'react';

import blocks from '../../styles/blocks.module.scss';

export interface PageHeroProps {
  eyebrow?: string;
  badge?: string;
  title: string;
  lead?: string;
  actions?: ReactNode;
}

/** Первый экран внутренней страницы. */
export function PageHero({ eyebrow, badge, title, lead, actions }: PageHeroProps) {
  return (
    <section className={blocks.hero}>
      <div className={blocks.heroInner}>
        {badge ? <span className={blocks.badge}>{badge}</span> : null}
        {eyebrow ? <span className={blocks.eyebrow}>{eyebrow}</span> : null}
        <h1 className={blocks.heroTitle}>{title}</h1>
        {lead ? <p className={blocks.heroLead}>{lead}</p> : null}
        {actions ? <div className={blocks.heroActions}>{actions}</div> : null}
      </div>
    </section>
  );
}
