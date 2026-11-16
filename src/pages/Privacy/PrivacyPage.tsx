import { useContent } from '../../i18n/LanguageContext';
import { useLanding } from '../../hooks/useLanding';
import { Seo } from '../../components/Seo/Seo';
import blocks from '../../styles/blocks.module.scss';

export function PrivacyPage() {
  const { content, path } = useLanding();
  const { privacy } = content;
  const { common } = useContent();

  return (
    <>
      <Seo title={privacy.meta.title} description={privacy.meta.description} lang={content.lang} path={path} />

      <section className={blocks.hero}>
        <div className={blocks.heroInner}>
          <span className={blocks.eyebrow}>{common.siteName}</span>
          <h1 className={blocks.heroTitle}>{privacy.title}</h1>
          <p className={blocks.heroLead}>{privacy.intro}</p>
          <p className={blocks.note}>{privacy.updated}</p>
        </div>
      </section>

      <section className={blocks.sectionTight}>
        <div className={blocks.sectionInner}>
          {privacy.sections.map((section) => (
            <article key={section.title} className={blocks.privacySection}>
              <h2 className={blocks.caseTitle}>{section.title}</h2>
              <div className={blocks.prose}>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.items ? (
                <ul className={[blocks.list, blocks.listTwo, blocks.privacyList].join(' ')}>
                  {section.items.map((item) => (
                    <li className={blocks.listItem} key={item}>
                      <span className={blocks.listMarker} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}

          <article className={blocks.privacySection}>
            <h2 className={blocks.caseTitle}>{privacy.contactTitle}</h2>
            <p className={blocks.caseText}>{privacy.contactText}</p>
          </article>
        </div>
      </section>
    </>
  );
}
