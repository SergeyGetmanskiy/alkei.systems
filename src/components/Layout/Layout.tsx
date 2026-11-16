import { useMemo, useState, type ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import { useContent } from '../../i18n/LanguageContext';
import { CtaContext, type CtaContextValue } from '../CtaDialog/CtaContext';
import { CtaDialog } from '../CtaDialog/CtaDialog';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { ScrollToTop } from '../ScrollToTop/ScrollToTop';
import styles from './Layout.module.scss';

/** Общая обвязка сайта: навигация, футер и диалог выбора канала связи. */
export function Layout() {
  const { common } = useContent();
  const [ctaMessage, setCtaMessage] = useState<string | null>(null);

  const ctaValue = useMemo<CtaContextValue>(
    () => ({
      openCta: (message: string) => setCtaMessage(message),
    }),
    [],
  );

  return (
    <CtaContext.Provider value={ctaValue}>
      <ScrollToTop />
      <a className="skipLink" href="#main">
        {common.skipToContent}
      </a>
      <Header />
      <main className={styles.main} id="main">
        <Outlet />
      </main>
      <Footer />
      <CtaDialog
        open={ctaMessage !== null}
        message={ctaMessage ?? ''}
        onClose={() => setCtaMessage(null)}
      />
    </CtaContext.Provider>
  );
}

export interface PageShellProps {
  children: ReactNode;
}

/** Обёртка страницы для единообразной структуры. */
export function PageShell({ children }: PageShellProps) {
  return <div className={styles.page}>{children}</div>;
}
