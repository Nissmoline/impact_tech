import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Preloader from './components/Preloader';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollManager from './components/ScrollManager';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ImpressumPage from './pages/ImpressumPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import NotFound from './components/NotFound';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Preloader />
        <ScrollManager />
        <div className="bg-slate-950 dark:bg-slate-950 light:bg-slate-50 min-h-screen text-slate-50 dark:text-slate-50 light:text-slate-950 selection:bg-cyan-500/30 selection:text-cyan-200 transition-colors duration-300">
          <Navigation />

          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/impressum" element={<ImpressumPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
