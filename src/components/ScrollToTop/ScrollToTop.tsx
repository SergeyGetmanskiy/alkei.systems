import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Переводит фокус и прокрутку в начало страницы при смене маршрута.
 * Смена только языка (тот же путь) не вызывает прокрутку к началу.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  }, [pathname]);

  return null;
}
