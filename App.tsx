import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Preloader from './components/Preloader';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import ScrollManager from './components/ScrollManager';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ImpressumPage from './pages/ImpressumPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import NotFound from './components/NotFound';
import ThreeDInteractivePage from './pages/services/3DInteractivePage';
import WebDevelopmentPage from './pages/services/WebDevelopmentPage';
import UXUIPage from './pages/services/UXUIPage';
import MobileAppsPage from './pages/services/MobileAppsPage';
import BackendAPIsPage from './pages/services/BackendAPIsPage';
import DevOpsPage from './pages/services/DevOpsPage';
import CustomSoftwarePage from './pages/services/CustomSoftwarePage';
import SEOStrategyPage from './pages/services/SEOStrategyPage';
import i18n from './i18n';
import { getLocaleFromPath } from './utils/locale';

const routeDefinitions = [
  { path: '', element: <HomePage /> },
  { path: 'portfolio', element: <PortfolioPage /> },
  { path: 'about', element: <AboutPage /> },
  { path: 'careers', element: <CareersPage /> },
  { path: 'services/3d-interactive', element: <ThreeDInteractivePage /> },
  { path: 'services/web-development', element: <WebDevelopmentPage /> },
  { path: 'services/ux-ui-design', element: <UXUIPage /> },
  { path: 'services/mobile-apps', element: <MobileAppsPage /> },
  { path: 'services/backend-apis', element: <BackendAPIsPage /> },
  { path: 'services/devops', element: <DevOpsPage /> },
  { path: 'services/custom-software', element: <CustomSoftwarePage /> },
  { path: 'services/seo-strategy', element: <SEOStrategyPage /> },
  { path: 'impressum', element: <ImpressumPage /> },
  { path: 'privacy', element: <PrivacyPolicyPage /> },
  { path: '*', element: <NotFound /> },
];

const buildPath = (base: string, path: string) => {
  if (path === '*') {
    return base ? `/${base}/*` : '*';
  }
  if (!base) {
    return path === '' ? '/' : `/${path}`;
  }
  return path === '' ? `/${base}` : `/${base}/${path}`;
};

const renderRoutes = (base: string) =>
  routeDefinitions.map((route) => (
    <Route key={`${base}-${route.path}`} path={buildPath(base, route.path)} element={route.element} />
  ));

const LocaleSync: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const locale = getLocaleFromPath(location.pathname);
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [location.pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <LocaleSync />
        <Preloader />
        <ScrollManager />
        <div className="bg-slate-950 dark:bg-slate-950 light:bg-slate-50 min-h-screen text-slate-50 dark:text-slate-50 light:text-slate-950 selection:bg-cyan-500/30 selection:text-cyan-200 transition-colors duration-300">
          <Navigation />

          <main>
            <Routes>
              {renderRoutes('')}
              {renderRoutes('el')}
            </Routes>
          </main>

          <Footer />
          <CookieBanner />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
