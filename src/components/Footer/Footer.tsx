import { NavLink } from 'react-router-dom';

import { useLanguage } from '../../i18n/LanguageContext';
import { PAGE_PATHS } from '../../router/paths';
import { buildChannelHref } from '../CtaDialog/channels';
import { Logo } from '../Logo/Logo';
import type { ChannelId } from '../../content/types';
import styles from './Footer.module.scss';

const PAGE_LINKS = [
  PAGE_PATHS.mentor,
  PAGE_PATHS.startup,
  PAGE_PATHS.product,
  PAGE_PATHS.experience,
  PAGE_PATHS.partners,
  PAGE_PATHS.about,
] as const;

const FOOTER_CHANNELS: ChannelId[] = ['telegram', 'whatsapp', 'email'];

export function Footer() {
  const { content, to } = useLanguage();
  const { common } = content;
  const { nav, footer, contact } = common;
  const year = new Date().getFullYear();

  const navEntries = [
    nav.home,
    nav.mentor,
    nav.startup,
    nav.product,
    nav.experience,
    nav.partners,
    nav.about,
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandColumn}>
          <Logo size={30} />
          <p className={styles.tagline}>{footer.tagline}</p>
          <p className={styles.legal}>{footer.legal}</p>
        </div>

        <nav className={styles.column} aria-label={footer.navTitle}>
          <h2 className={styles.columnTitle}>{footer.navTitle}</h2>
          <ul className={styles.list}>
            {navEntries.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={to(item.path)}
                  className={({ isActive }) =>
                    [styles.link, isActive ? styles.linkActive : ''].filter(Boolean).join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <nav className={styles.column} aria-label={footer.servicesTitle}>
          <h2 className={styles.columnTitle}>{footer.servicesTitle}</h2>
          <ul className={styles.list}>
            {PAGE_LINKS.slice(0, 3).map((path) => (
              <li key={path}>
                <NavLink to={to(path)} className={styles.link}>
                  {path.toUpperCase()}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.column}>
          <h2 className={styles.columnTitle}>{footer.contactsTitle}</h2>
          <ul className={styles.list}>
            {FOOTER_CHANNELS.map((id) => {
              const channel = contact.channels[id];

              return (
                <li key={id}>
                  <a
                    className={styles.link}
                    href={buildChannelHref(id, common.ctaMessages.default, contact.dialogTitle)}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className={styles.linkValue}>{channel.value}</span>
                    <span className={styles.linkHint}>{channel.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            © {year} Alkei.Systems. {footer.rights}
          </p>
          <NavLink to={to(PAGE_PATHS.privacy)} className={styles.privacyLink}>
            {footer.privacy}
          </NavLink>
        </div>
      </div>
    </footer>
  );
}
