export type Locale = 'en' | 'el';

export const getLocaleFromPath = (pathname: string): Locale => {
  if (pathname === '/el' || pathname.startsWith('/el/')) {
    return 'el';
  }
  return 'en';
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
