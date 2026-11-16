import { useMemo } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';

import { contentByLanguage } from '../content';
import { LanguageContext, type LanguageContextValue } from '../i18n/LanguageContext';
import { DEFAULT_LANGUAGE, isLanguageCode } from '../i18n/languages';
import { Layout } from '../components/Layout/Layout';

/**
 * Определяет язык по первому сегменту URL, проверяет его корректность
 * и предоставляет контент страницы. Неизвестный язык приводит
 * на соответствующую страницу основного языка.
 */
export function LangLayout() {
  const { lang } = useParams<{ lang: string }>();
  const location = useLocation();

  const restPath = location.pathname.split('/').filter(Boolean).slice(1).join('/');
  const isValid = isLanguageCode(lang);

  const value = useMemo<LanguageContextValue | null>(() => {
    if (!isValid) {
      return null;
    }

    return {
      lang,
      content: contentByLanguage[lang],
      currentPath: restPath,
      to: (path: string) => (path ? `/${lang}/${path}` : `/${lang}`),
      switchTo: (nextLang) => (restPath ? `/${nextLang}/${restPath}` : `/${nextLang}`),
    };
  }, [isValid, lang, restPath]);

  if (!value) {
    const fallback = restPath ? `/${DEFAULT_LANGUAGE}/${restPath}` : `/${DEFAULT_LANGUAGE}`;
    return <Navigate to={fallback} replace />;
  }

  return (
    <LanguageContext.Provider value={value}>
      <Layout />
    </LanguageContext.Provider>
  );
}
