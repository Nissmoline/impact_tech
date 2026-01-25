import React from 'react';

type TranslationValue = string | string[] | Record<string, unknown>;

const translations: Record<string, TranslationValue> = {
  'nav.careers': 'Careers',
  'nav.impressum': 'Impressum',
  'nav.privacy': 'Privacy Policy',
  'nav.cookies': 'Cookies',
  'home.contact.title': 'Start a Project',
  'home.contact.subtitle': "Tell us about your vision. We'll build the reality.",
  'home.contact.successTitle': 'Message Received',
  'home.contact.successDescription': "We'll analyze your request and orbit back to you shortly.",
  'home.contact.labels.name': 'Your Name',
  'home.contact.labels.email': 'Email Address',
  'home.contact.labels.projectType': 'Project Type',
  'home.contact.labels.brief': 'Project Brief',
  'home.contact.placeholders.name': 'John Doe',
  'home.contact.placeholders.email': 'john@example.com',
  'home.contact.placeholders.projectType': 'Select a project type',
  'home.contact.placeholders.customType': 'Custom project type (tell us what you need)',
  'home.contact.placeholders.brief': 'Tell us about the goals, timeline, and tech requirements...',
  'home.contact.projectTypes': [
    '3D & Interactive Experiences',
    'Web Development',
    'UX/UI & Design Systems',
    'Mobile Apps',
    'Backend & APIs',
    'DevOps & Reliability',
    'Custom Business Applications',
  ],
  'home.contact.projectTypeOther': 'Other (write below)',
  'home.contact.projectTypeHint': 'Choose one of our services or describe yours.',
  'home.contact.submit': 'Launch Project',
  'home.contact.customTypeAria': 'Custom project type',
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
