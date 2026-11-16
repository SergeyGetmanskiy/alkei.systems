import { CaseTemplate } from '../../components/CaseTemplate/CaseTemplate';
import { Seo } from '../../components/Seo/Seo';
import { useLanding } from '../../hooks/useLanding';

export function CaseTwelveAiPage() {
  const { content, path } = useLanding();
  const data = content.cases.twelveai;

  return (
    <>
      <Seo title={data.meta.title} description={data.meta.description} lang={content.lang} path={path} />
      <CaseTemplate data={data} message={content.common.ctaMessages.default} />
    </>
  );
}
