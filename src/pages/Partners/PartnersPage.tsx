import { Button } from '../../components/Button/Button';
import { ContactBlock } from '../../components/ContactBlock/ContactBlock';
import { useCta } from '../../components/CtaDialog/CtaContext';
import { FeatureGrid } from '../../components/FeatureGrid/FeatureGrid';
import { FinalCta } from '../../components/FinalCta/FinalCta';
import { PageHero } from '../../components/PageHero/PageHero';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { Seo } from '../../components/Seo/Seo';
import { useLanding } from '../../hooks/useLanding';
import blocks from '../../styles/blocks.module.scss';

export function PartnersPage() {
  const { content, path } = useLanding();
  const { partners, common } = content;
  const { openCta } = useCta();
  const ctaMessage = common.ctaMessages.partners;

  return (
    <>
      <Seo title={partners.meta.title} description={partners.meta.description} lang={content.lang} path={path} />

      <PageHero
        title={partners.hero.title}
        lead={partners.hero.subtitle}
        actions={
          <Button variant="primary" size="lg" onClick={() => openCta(ctaMessage)}>
            {partners.hero.cta}
          </Button>
        }
      />

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={partners.idea.title} />
          <p className={blocks.statement}>{partners.idea.text}</p>
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={partners.blocks.title} />
          <FeatureGrid items={partners.blocks.items} columns={2} numbered />
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={partners.limits.title} />
          <p className={blocks.notice}>{partners.limits.text}</p>
        </div>
      </section>

      <ContactBlock message={ctaMessage} title={common.contact.title} />

      <FinalCta
        title={partners.finalCta.title}
        text={partners.finalCta.text}
        button={partners.finalCta.button}
        message={ctaMessage}
      />
    </>
  );
}
