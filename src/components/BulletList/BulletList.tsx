import blocks from '../../styles/blocks.module.scss';
import { Reveal } from '../Reveal/Reveal';

export interface BulletListProps {
  items: string[];
  twoColumns?: boolean;
  /** квадратный маркер вместо ромба */
  square?: boolean;
}

/** Список с фирменным маркером в виде сегмента логотипа. */
export function BulletList({ items, twoColumns = false, square = false }: BulletListProps) {
  return (
    <ul
      className={[blocks.list, twoColumns ? blocks.listTwo : ''].filter(Boolean).join(' ')}
    >
      {items.map((item, index) => (
        <Reveal as="li" key={item} delay={index * 40} className={blocks.listItem}>
          <span
            className={[blocks.listMarker, square ? blocks.listMarkerSquare : '']
              .filter(Boolean)
              .join(' ')}
            aria-hidden="true"
          />
          <span>{item}</span>
        </Reveal>
      ))}
    </ul>
  );
}
