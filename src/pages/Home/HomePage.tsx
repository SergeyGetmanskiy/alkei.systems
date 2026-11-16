import { Link } from 'react-router-dom';

import { ContactBlock } from '../../components/ContactBlock/ContactBlock';
import { FeatureGrid } from '../../components/FeatureGrid/FeatureGrid';
import { FinalCta } from '../../components/FinalCta/FinalCta';
import { HomeHero } from '../../components/HomeHero/HomeHero';
import { Reveal } from '../../components/Reveal/Reveal';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { Seo } from '../../components/Seo/Seo';
import { useLanding } from '../../hooks/useLanding';
import { CASE_PATH, SERVICE_PATH } from '../../router/paths';
import blocks from '../../styles/blocks.module.scss';

export function HomePage() {
  const { content, path, to, message, heroMessage } = useLanding();
  const { home, common, cases } = content;

  return (
    <>
      <Seo title={home.meta.title} description={home.meta.description} lang={content.lang} path={path} />

      <HomeHero />

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={home.intro.title} />
          <div className={blocks.prose}>
            {home.intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={home.directions.title} lead={home.directions.lead} />

          <ul className={[blocks.grid, blocks.grid3].join(' ')}>
            {home.directions.items.map((item, index) => {
              return (
                <Reveal
                  as="li"
                  key={item.id}
                  delay={index * 80}
                  className={[blocks.card, blocks.cardInteractive].join(' ')}
                >
                  <span className={blocks.cardTag}>{item.tag}</span>
                  <p className={blocks.cardLead}>{item.lead}</p>
                  <p className={blocks.cardText}>{item.text}</p>
                  <div className={blocks.cardFooter}>
                    <Link className={blocks.cardLink} to={to(SERVICE_PATH[item.id])}>
                      {item.link}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={home.method.title} lead={home.method.lead} />
          <FeatureGrid items={home.method.steps} columns={3} numbered />
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <div className={blocks.twoColumn}>
            <div>
              <SectionHeading title={home.founder.title} subtitle={home.founder.subtitle} />
              <div className={blocks.prose}>
                {home.founder.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className={blocks.heroActions}>
                <Link className={blocks.cardLink} to={to('experience')}>
                  {home.founder.link}
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
                alt={home.founder.photoAlt}
                loading="lazy"
                decoding="async"
              />
              <div className={blocks.photoMeta}>
                <span className={blocks.photoName}>{home.founder.title}</span>
                <span className={blocks.photoRole}>{home.founder.subtitle}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={blocks.section}>
        <div className={blocks.sectionInner}>
          <SectionHeading title={home.projects.title} lead={home.projects.lead} />

          <ul className={[blocks.grid, blocks.grid2].join(' ')}>
            {home.projects.items.map((item, index) => (
              <Reveal
                as="li"
                key={item.id}
                delay={index * 80}
                className={[blocks.card, blocks.cardInteractive].join(' ')}
              >
                <span className={blocks.cardTag}>{item.name}</span>
                <p className={blocks.cardText}>{item.summary}</p>
                <span className={blocks.caseText}>{cases[item.id].kind}</span>
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

      <ContactBlock message={message} title={common.contact.title} />

      <FinalCta
        title={home.finalCta.title}
        text={home.finalCta.text}
        button={home.finalCta.button}
        message={heroMessage}
      />
    </>
  );
}
