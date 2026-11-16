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

export function StartupPage() {
  const { content, path } = useLanding();
  const { startup, common } = content;
  const { openCta } = useCta();
  const ctaMessage = common.ctaMessages.startup;

  return (
    <>
      <Seo title={startup.meta.title} description={startup.meta.description} lang={content.lang} path={path} />

      <PageHero
        title={startup.hero.title}
        lead={startup.hero.subtitle}
        actions={
          <Button variant="primary" size="lg" onClick={() => openCta(ctaMessage)}>
            {startup.hero.cta}
          </Button>
        }
      />

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={startup.essence.title} />
          <div className={blocks.prose}>
            {startup.essence.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={startup.directions.title} lead={startup.directions.lead} />
          <FeatureGrid items={startup.directions.items} columns={3} numbered />
          <p className={blocks.note}>{startup.directions.salesNote}</p>
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={startup.stages.title} lead={startup.stages.lead} />

          <ul className={[blocks.grid, blocks.grid2].join(' ')}>
            {startup.stages.items.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 80} className={blocks.card}>
                <h3 className={blocks.cardTitle}>{item.title}</h3>
                <div className={blocks.cardFooter}>
                  <BulletList items={item.items} />
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={startup.teamFormats.title} />
          <FeatureGrid items={startup.teamFormats.items} columns={2} />
          <p className={blocks.note}>{startup.teamFormats.note}</p>
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={startup.principles.title} />
          <FeatureGrid items={startup.principles.items} columns={3} numbered />
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={startup.model.title} />
          <div className={blocks.prose}>
            {startup.model.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={startup.boundaries.title} lead={startup.boundaries.lead} />
          <BulletList items={startup.boundaries.items} />
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={startup.combination.title} />
          <p className={blocks.statement}>{startup.combination.text}</p>
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={startup.terms.title} />
          <div className={blocks.prose}>
            <p>{startup.terms.text}</p>
          </div>
          <p className={blocks.note}>{startup.terms.note}</p>
        </div>
      </section>

      <ContactBlock message={ctaMessage} title={common.contact.title} />

      <FinalCta
        title={startup.finalCta.title}
        text={startup.finalCta.text}
        button={startup.finalCta.button}
        message={ctaMessage}
      />
    </>
  );
}
