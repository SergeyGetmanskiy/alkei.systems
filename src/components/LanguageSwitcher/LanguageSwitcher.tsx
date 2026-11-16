import { useLanguage } from '../../i18n/LanguageContext';
import { LANGUAGE_CODES, LANGUAGE_META } from '../../i18n/languages';
import styles from './LanguageSwitcher.module.scss';

export interface LanguageSwitcherProps {
  /** Вертикальный список для мобильного меню */
  stacked?: boolean;
  onNavigate?: () => void;
  className?: string;
}

/** Переключатель языка: сохраняет текущую страницу (раздел 3.3 ТЗ). */
export function LanguageSwitcher({
  stacked = false,
  onNavigate,
  className,
}: LanguageSwitcherProps) {
  const { lang, switchTo, content } = useLanguage();

  return (
    <nav
      className={[styles.switcher, stacked ? styles.stacked : '', className ?? '']
        .filter(Boolean)
        .join(' ')}
      aria-label={content.common.languageSwitcher.label}
    >
      {LANGUAGE_CODES.map((code) => {
        const isActive = code === lang;

        return (
          <a
            key={code}
            className={[styles.item, isActive ? styles.active : ''].filter(Boolean).join(' ')}
            href={switchTo(code)}
            hrefLang={LANGUAGE_META[code].htmlLang}
            aria-current={isActive ? 'true' : undefined}
            onClick={onNavigate}
          >
            {LANGUAGE_META[code].label}
          </a>
        );
      })}
    </nav>
  );
}
