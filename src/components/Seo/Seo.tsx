import { useEffect } from 'react';

import { SITE_URL } from '../../config/site';
import { LANGUAGE_CODES, LANGUAGE_META } from '../../i18n/languages';
import type { LanguageCode } from '../../content/types';

export interface SeoProps {
  title: string;
  description: string;
  /** текущий язык */
  lang: LanguageCode;
  /** путь страницы без языкового префикса, например 'mentor' */
  path: string;
}

const OG_IMAGE = `${SITE_URL}/images/founder.jpg`;

function setMeta(attribute: 'name' | 'property', key: string, content: string): void {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function setCanonical(href: string): void {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }

  link.setAttribute('href', href);
}

function setAlternates(currentPath: string): void {
  document.head
    .querySelectorAll('link[rel="alternate"][hreflang]')
    .forEach((node) => node.parentNode?.removeChild(node));

  LANGUAGE_CODES.forEach((code) => {
    const link = document.createElement('link');
    link.setAttribute('rel', 'alternate');
    // URL использует префикс /kz/, а корректный языковой тег для казахского — kk
    link.setAttribute('hreflang', LANGUAGE_META[code].htmlLang);
    link.setAttribute('href', pageUrl(code, currentPath));
    document.head.appendChild(link);
  });

  const fallback = document.createElement('link');
  fallback.setAttribute('rel', 'alternate');
  fallback.setAttribute('hreflang', 'x-default');
  fallback.setAttribute('href', pageUrl('ru', currentPath));
  document.head.appendChild(fallback);
}

export function pageUrl(lang: LanguageCode, path: string): string {
  const suffix = path ? `/${path}` : '/';
  return `${SITE_URL}/${lang}${suffix}`;
}

/**
 * Обновляет title, description, canonical, hreflang и Open Graph
 * для текущей страницы и языка (раздел 15.5 ТЗ).
 */
export function Seo({ title, description, lang, path }: SeoProps) {
  useEffect(() => {
    const url = pageUrl(lang, path);

    document.documentElement.lang = LANGUAGE_META[lang].htmlLang;
    document.title = title;

    setMeta('name', 'description', description);
    setMeta('name', 'robots', 'index, follow');
    setCanonical(url);
    setAlternates(path);

    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', 'Alkei.Systems');
    setMeta('property', 'og:locale', lang === 'kz' ? 'kk_KZ' : lang === 'en' ? 'en_US' : 'ru_RU');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', OG_IMAGE);

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', OG_IMAGE);
  }, [title, description, lang, path]);

  return null;
}
