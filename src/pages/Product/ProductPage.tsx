import { Accordion } from '../../components/Accordion/Accordion';
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

export function ProductPage() {
  const { content, path } = useLanding();
  const { product, common } = content;
  const { openCta } = useCta();
  const ctaMessage = common.ctaMessages.product;

  return (
    <>
      <Seo title={product.meta.title} description={product.meta.description} lang={content.lang} path={path} />

      <PageHero
        title={product.hero.title}
        lead={product.hero.subtitle}
        actions={
          <Button variant="primary" size="lg" onClick={() => openCta(ctaMessage)}>
            {product.hero.cta}
          </Button>
        }
      />

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={product.position.title} />
          <div className={blocks.prose}>
            {product.position.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={product.solutionTypes.title} lead={product.solutionTypes.lead} />

          <ul className={[blocks.grid, blocks.grid4].join(' ')}>
            {product.solutionTypes.items.map((item, index) => (
              <Reveal as="li" key={item} delay={index * 50} className={blocks.card}>
                <p className={blocks.cardLead}>{item}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={product.process.title} lead={product.process.lead} />

          <ol className={[blocks.grid, blocks.grid4].join(' ')}>
            {product.process.steps.map((step, index) => (
              <Reveal as="li" key={step} delay={index * 50} className={blocks.card}>
                <span className={blocks.cardNumber}>{String(index + 1).padStart(2, '0')}</span>
                <p className={blocks.cardText}>{step}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={product.methodologies.title} subtitle={product.methodologies.subtitle} />

          <Accordion
            items={product.methodologies.items.map((item) => ({
              id: item.id,
              title: item.name,
              subtitle: item.fullName,
              purpose: item.purpose,
              details: item.details,
            }))}
            defaultOpenId={product.methodologies.items[0]?.id}
          />

          <p className={blocks.note}>{product.methodologies.disclaimer}</p>
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={product.marketResearch.title} />
          <div className={blocks.prose}>
            {product.marketResearch.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={product.engineering.title} lead={product.engineering.lead} />
          <FeatureGrid items={product.engineering.items} columns={4} />
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={product.formats.title} lead={product.formats.lead} />
          <FeatureGrid items={product.formats.items} columns={2} />
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={product.commercialModel.title} />
          <BulletList items={product.commercialModel.items} twoColumns square />
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={product.boundaries.title} />
          <BulletList items={product.boundaries.items} />
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={product.combination.title} />
          <p className={blocks.statement}>{product.combination.text}</p>
        </div>
      </section>

      <ContactBlock message={ctaMessage} title={common.contact.title} />

      <FinalCta
        title={product.finalCta.title}
        text={product.finalCta.text}
        button={product.finalCta.button}
        message={ctaMessage}
      />
    </>
  );
}
