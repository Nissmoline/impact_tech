export type Locale = 'en' | 'el';

export const getPreferredLocale = (): Locale => {
  if (typeof window !== 'undefined') {
    try {
      const storedLocale = window.localStorage.getItem('preferredLocale');
      if (storedLocale === 'en' || storedLocale === 'el') {
        return storedLocale;
      }
    } catch {
      // Ignore storage access errors
    }
  }

  if (typeof navigator === 'undefined') return 'en';
  const languageList = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language];
  const prefersGreek = languageList.some((language) => language.toLowerCase().startsWith('el'));
  return prefersGreek ? 'el' : 'en';
};

export const getLocaleFromPath = (pathname: string): Locale => {
  if (pathname === '/el' || pathname.startsWith('/el/')) {
    return 'el';
  }
  return getPreferredLocale();
};

export const stripLocalePrefix = (pathname: string): string => {
  if (pathname === '/el') return '/';
  if (pathname.startsWith('/el/')) return pathname.slice(3);
  return pathname;
};

export const withLocalePrefix = (path: string, locale: Locale): string => {
  if (locale === 'en') return path;
  if (path.startsWith('/el')) return path;
  if (path.startsWith('/')) return `/el${path}`;
  if (path.startsWith('#')) return `/el/${path}`;
  return `/el/${path}`;
};

export const buildLocalizedPath = (pathname: string, locale: Locale): string => {
  const stripped = stripLocalePrefix(pathname);
  if (locale === 'en') return stripped || '/';
  if (stripped === '/' || stripped === '') return '/el';
  return `/el${stripped}`;
};
