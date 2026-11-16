import blocks from '../../styles/blocks.module.scss';

export interface SectionHeadingProps {
  title: string;
  lead?: string;
  subtitle?: string;
  accent?: boolean;
  /** уровень заголовка: h2 по умолчанию */
  as?: 'h2' | 'h3';
  id?: string;
}

export function SectionHeading({
  title,
  lead,
  subtitle,
  accent = false,
  as = 'h2',
  id,
}: SectionHeadingProps) {
  const Tag = as;

  return (
    <div className={blocks.sectionHead}>
      <Tag className={[blocks.title, accent ? blocks.accentTitle : ''].filter(Boolean).join(' ')} id={id}>
        {title}
      </Tag>
      {lead ? <p className={blocks.lead}>{lead}</p> : null}
      {subtitle ? <p className={blocks.subtitle}>{subtitle}</p> : null}
    </div>
  );
}
