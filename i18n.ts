import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocaleFromPath, getPreferredLocale } from './utils/locale';
import enCommon from './locales/en/common.json';
import enAbout from './locales/en/about.json';
import enCareers from './locales/en/careers.json';
import enImpressum from './locales/en/impressum.json';
import enPrivacy from './locales/en/privacy.json';
import enCookies from './locales/en/cookies.json';
import enPortfolio from './locales/en/portfolio.json';
import enService3dInteractive from './locales/en/service-3d-interactive.json';
import enServiceWebDevelopment from './locales/en/service-web-development.json';
import enServiceUxUiDesign from './locales/en/service-ux-ui-design.json';
import enServiceMobileApps from './locales/en/service-mobile-apps.json';
import enServiceBackendApis from './locales/en/service-backend-apis.json';
import enServiceDevops from './locales/en/service-devops.json';
import enServiceCustomSoftware from './locales/en/service-custom-software.json';
import enServiceSeoStrategy from './locales/en/service-seo-strategy.json';
import elCommon from './locales/el/common.json';
import elAbout from './locales/el/about.json';
import elCareers from './locales/el/careers.json';
import elImpressum from './locales/el/impressum.json';
import elPrivacy from './locales/el/privacy.json';
import elCookies from './locales/el/cookies.json';
import elPortfolio from './locales/el/portfolio.json';
import elService3dInteractive from './locales/el/service-3d-interactive.json';
import elServiceWebDevelopment from './locales/el/service-web-development.json';
import elServiceUxUiDesign from './locales/el/service-ux-ui-design.json';
import elServiceMobileApps from './locales/el/service-mobile-apps.json';
import elServiceBackendApis from './locales/el/service-backend-apis.json';
import elServiceDevops from './locales/el/service-devops.json';
import elServiceCustomSoftware from './locales/el/service-custom-software.json';
import elServiceSeoStrategy from './locales/el/service-seo-strategy.json';

export const SUPPORTED_LOCALES = ['en', 'el'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

const initialLocale =
  typeof window === 'undefined'
    ? getPreferredLocale()
    : getLocaleFromPath(window.location.pathname);

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: enCommon,
      about: enAbout,
      careers: enCareers,
      impressum: enImpressum,
      privacy: enPrivacy,
      cookies: enCookies,
      portfolio: enPortfolio,
      'service-3d-interactive': enService3dInteractive,
      'service-web-development': enServiceWebDevelopment,
      'service-ux-ui-design': enServiceUxUiDesign,
      'service-mobile-apps': enServiceMobileApps,
      'service-backend-apis': enServiceBackendApis,
      'service-devops': enServiceDevops,
      'service-custom-software': enServiceCustomSoftware,
      'service-seo-strategy': enServiceSeoStrategy,
    },
    el: {
      common: elCommon,
      about: elAbout,
      careers: elCareers,
      impressum: elImpressum,
      privacy: elPrivacy,
      cookies: elCookies,
      portfolio: elPortfolio,
      'service-3d-interactive': elService3dInteractive,
      'service-web-development': elServiceWebDevelopment,
      'service-ux-ui-design': elServiceUxUiDesign,
      'service-mobile-apps': elServiceMobileApps,
      'service-backend-apis': elServiceBackendApis,
      'service-devops': elServiceDevops,
      'service-custom-software': elServiceCustomSoftware,
      'service-seo-strategy': elServiceSeoStrategy,
    },
  },
  lng: initialLocale,
  fallbackLng: 'en',
  supportedLngs: SUPPORTED_LOCALES,
  defaultNS: 'common',
  ns: [
    'common',
    'about',
    'careers',
    'impressum',
    'privacy',
    'cookies',
    'portfolio',
    'service-3d-interactive',
    'service-web-development',
    'service-ux-ui-design',
    'service-mobile-apps',
    'service-backend-apis',
    'service-devops',
    'service-custom-software',
    'service-seo-strategy',
  ],
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
