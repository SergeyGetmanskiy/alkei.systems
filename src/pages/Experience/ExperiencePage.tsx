import { Link } from 'react-router-dom';

import { BulletList } from '../../components/BulletList/BulletList';
import { ContactBlock } from '../../components/ContactBlock/ContactBlock';
import { FinalCta } from '../../components/FinalCta/FinalCta';
import { PageHero } from '../../components/PageHero/PageHero';
import { Reveal } from '../../components/Reveal/Reveal';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { Seo } from '../../components/Seo/Seo';
import { useLanding } from '../../hooks/useLanding';
import { CASE_PATH } from '../../router/paths';
import blocks from '../../styles/blocks.module.scss';

export function ExperiencePage() {
  const { content, path, to } = useLanding();
  const { experience, common } = content;

  return (
    <>
      <Seo
        title={experience.meta.title}
        description={experience.meta.description}
        lang={content.lang}
        path={path}
      />

      <PageHero title={experience.hero.title} lead={experience.hero.subtitle} />

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={experience.founderBrief.title} />
          <div className={blocks.prose}>
            {experience.founderBrief.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={experience.projects.title} lead={experience.projects.lead} />

          <ul className={[blocks.grid, blocks.grid2].join(' ')}>
            {experience.projects.items.map((item, index) => (
              <Reveal
                as="li"
                key={item.id}
                delay={index * 80}
                className={[blocks.card, blocks.cardInteractive].join(' ')}
              >
                <span className={blocks.cardTag}>{item.name}</span>
                <p className={blocks.cardText}>{item.summary}</p>
                <p className={blocks.caseText}>{item.role}</p>
                <div className={blocks.cardFooter}>
                  <Link className={blocks.cardLink} to={to(CASE_PATH[item.id])}>
                    {item.link}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={experience.competence.title} lead={experience.competence.lead} />
          <BulletList items={experience.competence.items} twoColumns />
        </div>
      </section>

      <ContactBlock message={common.ctaMessages.default} title={common.contact.title} />

      <FinalCta
        title={experience.finalCta.title}
        text={experience.finalCta.text}
        button={experience.finalCta.button}
        message={common.ctaMessages.default}
      />
    </>
  );
}
