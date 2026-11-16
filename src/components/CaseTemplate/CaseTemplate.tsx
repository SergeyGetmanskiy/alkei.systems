import { Link } from 'react-router-dom';

import type { CaseContent } from '../../content/types';
import { useLanguage } from '../../i18n/LanguageContext';
import { PAGE_PATHS } from '../../router/paths';
import blocks from '../../styles/blocks.module.scss';
import { Button } from '../Button/Button';
import { useCta } from '../CtaDialog/CtaContext';
import { FinalCta } from '../FinalCta/FinalCta';
import { PageHero } from '../PageHero/PageHero';
import { Reveal } from '../Reveal/Reveal';
import { SectionHeading } from '../SectionHeading/SectionHeading';

export interface CaseTemplateProps {
  data: CaseContent;
  /** подготовленное сообщение для выбранного канала */
  message: string;
}

/**
 * Единый шаблон страницы кейса (раздел 9 ТЗ).
 * Неподтверждённые данные не публикуются: каждый раздел показывает
 * нейтральное состояние «информация уточняется».
 */
export function CaseTemplate({ data, message }: CaseTemplateProps) {
  const { to } = useLanguage();
  const { openCta } = useCta();

  return (
    <>
      <PageHero
        badge={data.kind}
        title={data.hero.title}
        lead={data.hero.subtitle}
        actions={
          <Button variant="primary" size="lg" onClick={() => openCta(message)}>
            {data.hero.cta}
          </Button>
        }
      />

      <section className={blocks.sectionTight}>
        <div className={blocks.sectionInner}>
          <div className={blocks.notice}>
            <strong>{data.status.badge}.</strong> {data.status.text}
          </div>

          <div className={blocks.divider} />

          <SectionHeading title={data.sectionsTitle} />

          <ul className={[blocks.grid, blocks.grid3].join(' ')}>
            {data.sections.map((section, index) => (
              <Reveal as="li" key={section.id} delay={index * 60} className={blocks.caseSection}>
                <span className={blocks.caseIndex}>{String(index + 1).padStart(2, '0')}</span>
                <h3 className={blocks.caseTitle}>{section.title}</h3>
                <span className={blocks.casePending}>
                  <span className={blocks.casePendingDot} aria-hidden="true" />
                  {data.status.badge}
                </span>
                <p className={blocks.caseText}>{section.pending}</p>
              </Reveal>
            ))}
          </ul>

          <p className={blocks.notice}>{data.notice}</p>

          <Link className={blocks.backLink} to={to(PAGE_PATHS.experience)}>
            <span aria-hidden="true">←</span>
            {data.backLink}
          </Link>
        </div>
      </section>

      <FinalCta
        title={data.finalCta.title}
        text={data.finalCta.text}
        button={data.finalCta.button}
        message={message}
      />
    </>
  );
}
