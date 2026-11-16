import type { LanguageCode } from '../content/types';

/** Все поддерживаемые языки сайта (раздел 3.3 ТЗ). */
export const LANGUAGE_CODES: LanguageCode[] = ['ru', 'kz', 'en'];

/** Основной язык контента. */
export const DEFAULT_LANGUAGE: LanguageCode = 'ru';

/** Язык интерфейса и региональные настройки для каждого языка. */
export const LANGUAGE_META: Record<LanguageCode, { htmlLang: string; label: string }> = {
  ru: { htmlLang: 'ru', label: 'Русский' },
  kz: { htmlLang: 'kk', label: 'Қазақша' },
  en: { htmlLang: 'en', label: 'English' },
};

export function isLanguageCode(value: string | undefined): value is LanguageCode {
  return value !== undefined && (LANGUAGE_CODES as string[]).includes(value);
}
