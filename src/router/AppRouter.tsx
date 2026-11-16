import { Navigate, Route, Routes } from 'react-router-dom';

import { DEFAULT_LANGUAGE } from '../i18n/languages';
import { AboutPage } from '../pages/About/AboutPage';
import { CaseInStroyPage } from '../pages/Cases/CaseInStroyPage';
import { CaseTwelveAiPage } from '../pages/Cases/CaseTwelveAiPage';
import { ExperiencePage } from '../pages/Experience/ExperiencePage';
import { HomePage } from '../pages/Home/HomePage';
import { MentorPage } from '../pages/Mentor/MentorPage';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';
import { PartnersPage } from '../pages/Partners/PartnersPage';
import { PrivacyPage } from '../pages/Privacy/PrivacyPage';
import { ProductPage } from '../pages/Product/ProductPage';
import { StartupPage } from '../pages/Startup/StartupPage';
import { LangLayout } from './LangLayout';

/**
 * Маршруты сайта (раздел 3 ТЗ).
 * Каждая страница существует во всех трёх локализациях,
 * поэтому переключение языка сохраняет текущую страницу.
 */
export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${DEFAULT_LANGUAGE}`} replace />} />

      <Route path=":lang" element={<LangLayout />}>
        <Route index element={<HomePage />} />
        <Route path="mentor" element={<MentorPage />} />
        <Route path="startup" element={<StartupPage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="projects/instroy" element={<CaseInStroyPage />} />
        <Route path="projects/twelveai" element={<CaseTwelveAiPage />} />
        <Route path="partners" element={<PartnersPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      <Route path="*" element={<Navigate to={`/${DEFAULT_LANGUAGE}`} replace />} />
    </Routes>
  );
}
