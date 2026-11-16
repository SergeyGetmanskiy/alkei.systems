import { useLocation } from 'react-router-dom';

import { useLanguage } from '../i18n/LanguageContext';

/**
 * Вспомогательные данные страницы: текущий путь без языкового префикса
 * и подготовленные сообщения для CTA.
 */
export function useLanding() {
  const { content, to } = useLanguage();
  const { pathname } = useLocation();

  const segments = pathname.split('/').filter(Boolean);
  const path = segments.slice(1).join('/');

  return {
    content,
    to,
    path,
    /** сообщение по умолчанию для контактного блока */
    message: content.common.ctaMessages.default,
    /** основное сообщение страницы для кнопок CTA */
    heroMessage: content.common.ctaMessages.default,
  };
}
