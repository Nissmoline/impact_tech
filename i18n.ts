import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enCommon from './locales/en/common.json';
import enCareers from './locales/en/careers.json';
import enImpressum from './locales/en/impressum.json';
import enPrivacy from './locales/en/privacy.json';
import enCookies from './locales/en/cookies.json';
import enPortfolio from './locales/en/portfolio.json';
import elCommon from './locales/el/common.json';
import elCareers from './locales/el/careers.json';
import elImpressum from './locales/el/impressum.json';
import elPrivacy from './locales/el/privacy.json';
import elCookies from './locales/el/cookies.json';
import elPortfolio from './locales/el/portfolio.json';

export const SUPPORTED_LOCALES = ['en', 'el'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: enCommon,
      careers: enCareers,
      impressum: enImpressum,
      privacy: enPrivacy,
      cookies: enCookies,
      portfolio: enPortfolio,
    },
    el: {
      common: elCommon,
      careers: elCareers,
      impressum: elImpressum,
      privacy: elPrivacy,
      cookies: elCookies,
      portfolio: elPortfolio,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  supportedLngs: SUPPORTED_LOCALES,
  defaultNS: 'common',
  ns: ['common', 'careers', 'impressum', 'privacy', 'cookies', 'portfolio'],
  interpolation: {
    escapeValue: false,
  },
});

const updateDocumentLang = (lang: string) => {
  if (typeof document === 'undefined') return;
  document.documentElement.lang = lang;
};

updateDocumentLang(i18n.language);
i18n.on('languageChanged', updateDocumentLang);

export default i18n;
