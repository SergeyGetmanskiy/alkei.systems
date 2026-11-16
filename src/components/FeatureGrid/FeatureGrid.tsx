import type { StepBlock } from '../../content/types';
import blocks from '../../styles/blocks.module.scss';
import { Reveal } from '../Reveal/Reveal';

export interface FeatureGridProps {
  items: StepBlock[];
  columns?: 2 | 3 | 4;
  numbered?: boolean;
}

/** Сетка карточек «заголовок + текст» с модульной анимацией появления. */
export function FeatureGrid({ items, columns = 3, numbered = false }: FeatureGridProps) {
  const gridClass = {
    2: blocks.grid2,
    3: blocks.grid3,
    4: blocks.grid4,
  }[columns];

  return (
    <ul className={[blocks.grid, gridClass].join(' ')}>
      {items.map((item, index) => (
        <Reveal as="li" key={item.title} delay={index * 70} className={[blocks.card, blocks.cardInteractive].join(' ')}>
          {numbered ? (
            <span className={blocks.cardNumber}>{String(index + 1).padStart(2, '0')}</span>
          ) : null}
          <h3 className={blocks.cardTitle}>{item.title}</h3>
          <p className={blocks.cardText}>{item.text}</p>
        </Reveal>
      ))}
    </ul>
  );
}
