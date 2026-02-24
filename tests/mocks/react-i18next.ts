import React from 'react';

type TranslationValue = string | string[] | Record<string, unknown>;

const translations: Record<string, TranslationValue> = {
  'nav.careers': 'Careers',
  'nav.impressum': 'Impressum',
  'nav.privacy': 'Privacy Policy',
  'nav.cookies': 'Cookies',
  'home.contact.title': "Let's Talk",
  'home.contact.subtitle': 'Reach us directly for new projects, partnerships, or questions.',
  'home.contact.details.addressLabel': 'Address',
  'home.contact.details.addressValue': 'Pl. Ippodameias 8, Office D8\n18531 Piraeus, Attica, Greece',
  'home.contact.details.landlineLabel': 'Landline',
  'home.contact.details.landlineValue': '+30 211 006 8114',
  'home.contact.details.mobileLabel': 'Mobile',
  'home.contact.details.mobileValue': '+30 697 385 8321',
  'home.contact.details.emailLabel': 'Email',
  'home.contact.details.emailValue': 'info@impacttech.gr',
  'home.techStack.badge': 'Powering The Future',
  'home.techStack.title': 'Our Tech Stack',
  'home.techStack.lampAlt': 'Pendant Lamp',
};

type TranslationOptions = {
  returnObjects?: boolean;
  defaultValue?: TranslationValue;
} & Record<string, unknown>;

const interpolate = (value: string, options?: TranslationOptions) =>
  value.replace(/\{\{(\w+)\}\}/g, (_, key) =>
    options && key in options ? String(options[key]) : ''
  );

export const useTranslation = () => ({
  t: (key: string, options?: TranslationOptions) => {
    const translation = translations[key];
    if (options?.returnObjects) {
      return translation ?? options.defaultValue ?? key;
    }
    if (typeof translation === 'string') {
      return interpolate(translation, options);
    }
    if (options?.defaultValue !== undefined) {
      return options.defaultValue;
    }
    return key;
  },
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
