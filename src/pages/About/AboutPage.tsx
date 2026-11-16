import { Link } from 'react-router-dom';

import { ContactBlock } from '../../components/ContactBlock/ContactBlock';
import { FeatureGrid } from '../../components/FeatureGrid/FeatureGrid';
import { FinalCta } from '../../components/FinalCta/FinalCta';
import { PageHero } from '../../components/PageHero/PageHero';
import { Reveal } from '../../components/Reveal/Reveal';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { Seo } from '../../components/Seo/Seo';
import { useLanding } from '../../hooks/useLanding';
import { PAGE_PATHS } from '../../router/paths';
import blocks from '../../styles/blocks.module.scss';

export function AboutPage() {
  const { content, path, to } = useLanding();
  const { about, common } = content;

  return (
    <>
      <Seo title={about.meta.title} description={about.meta.description} lang={content.lang} path={path} />

      <PageHero title={about.hero.title} lead={about.hero.subtitle} />

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={about.what.title} />
          <div className={blocks.prose}>
            {about.what.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={about.whyThree.title} lead={about.whyThree.lead} />
          <FeatureGrid items={about.whyThree.items} columns={3} />
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={about.approach.title} />
          <div className={blocks.prose}>
            {about.approach.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <div className={blocks.twoColumn}>
            <div>
              <SectionHeading title={about.founder.title} subtitle={about.founder.subtitle} />
              <div className={blocks.prose}>
                {about.founder.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className={blocks.heroActions}>
                <Link className={blocks.cardLink} to={to(PAGE_PATHS.experience)}>
                  {about.founder.link}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <Reveal className={blocks.photo}>
              <img
                className={blocks.photoImg}
                src="/images/founder.jpg"
                width={480}
                height={480}
                alt={about.founder.photoAlt}
                loading="lazy"
                decoding="async"
              />
              <div className={blocks.photoMeta}>
                <span className={blocks.photoName}>{about.founder.title}</span>
                <span className={blocks.photoRole}>{about.founder.subtitle}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={about.experience.title} />
          <div className={blocks.prose}>
            <p>{about.experience.text}</p>
          </div>

          <ul className={blocks.stats}>
            {about.experience.stats.map((stat, index) => (
              <Reveal as="li" key={stat.label} delay={index * 70} className={blocks.stat}>
                <span className={blocks.statValue}>{stat.value}</span>
                <span className={blocks.statLabel}>{stat.label}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={about.philosophy.title} lead={about.philosophy.lead} />
          <FeatureGrid items={about.philosophy.items} columns={3} />
        </div>
      </section>

      <ContactBlock message={common.ctaMessages.default} title={common.contact.title} />

      <FinalCta
        title={about.finalCta.title}
        text={about.finalCta.text}
        button={about.finalCta.button}
        message={common.ctaMessages.default}
      />
    </>
  );
}
