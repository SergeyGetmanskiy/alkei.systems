import { BulletList } from '../../components/BulletList/BulletList';
import { Button } from '../../components/Button/Button';
import { ContactBlock } from '../../components/ContactBlock/ContactBlock';
import { useCta } from '../../components/CtaDialog/CtaContext';
import { FeatureGrid } from '../../components/FeatureGrid/FeatureGrid';
import { FinalCta } from '../../components/FinalCta/FinalCta';
import { PageHero } from '../../components/PageHero/PageHero';
import { Reveal } from '../../components/Reveal/Reveal';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { Seo } from '../../components/Seo/Seo';
import { useLanding } from '../../hooks/useLanding';
import blocks from '../../styles/blocks.module.scss';

export function MentorPage() {
  const { content, path, message } = useLanding();
  const { mentor, common } = content;
  const { openCta } = useCta();
  const ctaMessage = common.ctaMessages.mentor;

  return (
    <>
      <Seo title={mentor.meta.title} description={mentor.meta.description} lang={content.lang} path={path} />

      <PageHero
        title={mentor.hero.title}
        lead={mentor.hero.subtitle}
        actions={
          <Button variant="primary" size="lg" onClick={() => openCta(ctaMessage)}>
            {mentor.hero.cta}
          </Button>
        }
      />

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={mentor.essence.title} />
          <div className={blocks.prose}>
            {mentor.essence.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={mentor.approach.title} />
          <FeatureGrid items={mentor.approach.items} columns={3} numbered />
          <p className={blocks.note}>{mentor.approach.note}</p>
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={mentor.map.title} lead={mentor.map.lead} accent />
          <FeatureGrid items={mentor.map.steps} columns={3} />
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={mentor.topics.title} />
          <BulletList items={mentor.topics.items} twoColumns />
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={mentor.outcomes.title} />
          <BulletList items={mentor.outcomes.items} twoColumns />
          <p className={blocks.statement}>{mentor.outcomes.statement}</p>
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={mentor.formats.title} lead={mentor.formats.lead} />

          <ul className={[blocks.grid, blocks.grid2].join(' ')}>
            {mentor.formats.items.map((item, index) => (
              <Reveal
                as="li"
                key={item.name}
                delay={index * 80}
                className={[blocks.card, blocks.cardInteractive].join(' ')}
              >
                <span className={blocks.cardTag}>{item.name}</span>
                <p className={blocks.cardPrice}>{item.price}</p>
                <p className={blocks.cardText}>{item.description}</p>
              </Reveal>
            ))}
          </ul>

          <p className={blocks.note}>{mentor.formats.note}</p>
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={mentor.boundaries.title} />
          <BulletList items={mentor.boundaries.items} />
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={mentor.combination.title} />
          <p className={blocks.statement}>{mentor.combination.text}</p>
        </div>
      </section>

      <ContactBlock message={ctaMessage} title={common.contact.title} />

      <FinalCta
        title={mentor.finalCta.title}
        text={mentor.finalCta.text}
        button={mentor.finalCta.button}
        message={message}
      />
    </>
  );
}
