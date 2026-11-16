import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { useLanguage } from '../../i18n/LanguageContext';
import { PAGE_PATHS } from '../../router/paths';
import { Button } from '../Button/Button';
import { useCta } from '../CtaDialog/CtaContext';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { Logo } from '../Logo/Logo';
import styles from './Header.module.scss';

const NAV_ITEMS = [
  { key: 'mentor', path: PAGE_PATHS.mentor },
  { key: 'startup', path: PAGE_PATHS.startup },
  { key: 'product', path: PAGE_PATHS.product },
  { key: 'experience', path: PAGE_PATHS.experience },
  { key: 'partners', path: PAGE_PATHS.partners },
  { key: 'about', path: PAGE_PATHS.about },
] as const;

export function Header() {
  const { content, to } = useLanguage();
  const { nav, menu, coreCta, ctaMessages } = content.common;
  const { openCta } = useCta();
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to={to(PAGE_PATHS.home)} className={styles.brand} aria-label={nav.home.label}>
          <Logo size={32} />
        </NavLink>

        <nav className={styles.nav} aria-label={nav.ariaLabel}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.key}
              to={to(item.path)}
              className={({ isActive }) =>
                [styles.link, isActive ? styles.linkActive : ''].filter(Boolean).join(' ')
              }
            >
              {nav[item.key].label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <LanguageSwitcher className={styles.switcherDesktop} />

          <Button
            variant="primary"
            size="md"
            className={styles.ctaDesktop}
            onClick={() => openCta(ctaMessages.default)}
          >
            {coreCta}
          </Button>

          <button
            type="button"
            className={styles.burger}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? menu.close : menu.open}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span className={styles.burgerLines} aria-hidden="true" />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className={styles.mobilePanel} id="mobile-menu">
          <nav className={styles.mobileNav} aria-label={menu.title}>
            <NavLink to={to(PAGE_PATHS.home)} className={styles.mobileLink} onClick={closeMenu}>
              {nav.home.label}
            </NavLink>
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.key}
                to={to(item.path)}
                className={({ isActive }) =>
                  [styles.mobileLink, isActive ? styles.linkActive : ''].filter(Boolean).join(' ')
                }
                onClick={closeMenu}
              >
                {nav[item.key].label}
              </NavLink>
            ))}
          </nav>

          <LanguageSwitcher stacked onNavigate={closeMenu} className={styles.switcherMobile} />

          <Button
            variant="primary"
            size="lg"
            full
            onClick={() => {
              closeMenu();
              openCta(ctaMessages.default);
            }}
          >
            {coreCta}
          </Button>
        </div>
      ) : null}
    </header>
  );
}
