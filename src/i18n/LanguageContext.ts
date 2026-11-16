import { createContext, useContext } from 'react';
import type { LanguageCode, SiteContent } from '../content/types';

export interface LanguageContextValue {
  lang: LanguageCode;
  content: SiteContent;
  /** Построить локализованный путь: to('mentor') → '/ru/mentor'. */
  to: (path: string) => string;
  /** Текущий языковой префикс пути с сохранением страницы. */
  switchTo: (lang: LanguageCode) => string;
  /** Текущий путь без языкового префикса, например 'mentor'. */
  currentPath: string;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage(): LanguageContextValue {
  const value = useContext(LanguageContext);

  if (!value) {
    throw new Error('useLanguage должен использоваться внутри LanguageProvider');
  }

  return value;
}

/** Быстрый доступ к контенту текущего языка. */
export function useContent(): SiteContent {
  return useLanguage().content;
}
