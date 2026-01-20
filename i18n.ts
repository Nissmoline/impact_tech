import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/common.json';
import el from './locales/el/common.json';

export const SUPPORTED_LOCALES = ['en', 'el'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

i18n.use(initReactI18next).init({
  resources: {
    en: { common: en },
    el: { common: el },
  },
  lng: 'en',
  fallbackLng: 'en',
  supportedLngs: SUPPORTED_LOCALES,
  defaultNS: 'common',
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
