import { LinkButton } from '../../components/Button/Button';
import { Seo } from '../../components/Seo/Seo';
import { useLanding } from '../../hooks/useLanding';
import { PAGE_PATHS } from '../../router/paths';
import blocks from '../../styles/blocks.module.scss';

export function NotFoundPage() {
  const { content, path, to } = useLanding();
  const { notFound } = content;

  return (
    <>
      <Seo title={notFound.meta.title} description={notFound.meta.description} lang={content.lang} path={path} />

      <section className={blocks.hero}>
        <div className={blocks.heroInner}>
          <span className={blocks.eyebrow}>404</span>
          <h1 className={blocks.heroTitle}>{notFound.title}</h1>
          <p className={blocks.heroLead}>{notFound.text}</p>
          <div className={blocks.heroActions}>
            <LinkButton to={to(PAGE_PATHS.home)} variant="primary" size="lg">
              {notFound.backHome}
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
