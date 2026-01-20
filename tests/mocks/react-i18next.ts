import React from 'react';

const translations: Record<string, string> = {
  'nav.careers': 'Careers',
  'nav.impressum': 'Impressum',
  'nav.privacy': 'Privacy Policy',
  'nav.cookies': 'Cookies',
};

export const useTranslation = () => ({
  t: (key: string) => translations[key] ?? key,
  i18n: {
    language: 'en',
    changeLanguage: async () => {},
  },
});

export const Trans = ({ children }: { children: React.ReactNode }) =>
  React.createElement(React.Fragment, null, children);

export const I18nextProvider = ({ children }: { children: React.ReactNode }) =>
  React.createElement(React.Fragment, null, children);

export const initReactI18next = {
  type: '3rdParty',
  init: () => {},
};

export default { useTranslation, Trans, I18nextProvider, initReactI18next };
