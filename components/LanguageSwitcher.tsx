import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion } from 'framer-motion';
import { buildLocalizedPath, Locale } from '../utils/locale';

type LanguageSwitcherProps = {
  className?: string;
};

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className }) => {
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const activeLocale: Locale = i18n.language.startsWith('el') ? 'el' : 'en';
  const reduceMotion = useReducedMotion();

  const persistLocale = (locale: Locale) => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem('preferredLocale', locale);
    } catch {
      // Ignore storage access errors
    }
  };

  const handleChange = (locale: Locale) => {
    if (locale === activeLocale) return;
    persistLocale(locale);
    const nextPath = buildLocalizedPath(location.pathname, locale);
    navigate(`${nextPath}${location.search}${location.hash}`, { replace: true });
    i18n.changeLanguage(locale);
  };

  return (
    <div
      className={`relative inline-grid grid-cols-2 items-center rounded-full border border-white/10 bg-slate-900/80 p-1 text-[11px] font-semibold tracking-[0.2em] uppercase shadow-[inset_0_0_12px_rgba(15,23,42,0.6)] ${className ?? ''}`}
    >
      <motion.span
        aria-hidden="true"
        className="absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-gradient-to-r from-cyan-500/90 to-blue-500/90 shadow-[0_0_16px_rgba(34,211,238,0.55)]"
        animate={{ x: activeLocale === 'en' ? '0%' : '100%' }}
        transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 500, damping: 32 }}
      />
      <motion.span
        aria-hidden="true"
        className="absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-cyan-400/30 blur-xl"
        animate={{
          x: activeLocale === 'en' ? '0%' : '100%',
          opacity: reduceMotion ? 0.6 : [0.35, 0.9, 0.35],
        }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
        }
      />
      <button
        type="button"
        onClick={() => handleChange('en')}
        aria-pressed={activeLocale === 'en'}
        className={`relative z-10 rounded-full px-3 py-1.5 transition-colors ${
          activeLocale === 'en'
            ? 'text-slate-950'
            : 'text-slate-400 hover:text-white'
        }`}
      >
        {t('language.english')}
      </button>
      <button
        type="button"
        onClick={() => handleChange('el')}
        aria-pressed={activeLocale === 'el'}
        className={`relative z-10 rounded-full px-3 py-1.5 transition-colors ${
          activeLocale === 'el'
            ? 'text-slate-950'
            : 'text-slate-400 hover:text-white'
        }`}
      >
        {t('language.greek')}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
