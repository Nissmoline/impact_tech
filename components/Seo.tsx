import React, { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { buildLocalizedPath, getLocaleFromPath } from '../utils/locale';
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_TWITTER_IMAGE,
  SITE_NAME,
  SITE_URL,
  buildOrganizationSchema,
  buildWebsiteSchema,
} from '../utils/seo';

type StructuredData = Record<string, unknown> | Array<Record<string, unknown>>;

type SeoProps = {
  title: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  image?: string;
  noIndex?: boolean;
  structuredData?: StructuredData;
};

const upsertMeta = (attr: 'name' | 'property', key: string, value: string) => {
  const selector = `meta[${attr}="${key}"]`;
  let element = document.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', value);
};

const upsertLink = (rel: string, href: string) => {
  let element = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
};

const upsertAlternateLink = (hreflang: string, href: string) => {
  const selector = `link[rel="alternate"][hreflang="${hreflang}"]`;
  let element = document.querySelector<HTMLLinkElement>(selector);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'alternate');
    element.setAttribute('hreflang', hreflang);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
};

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  keywords,
  canonical,
  image,
  noIndex,
  structuredData,
}) => {
  const location = useLocation();
  const locale = getLocaleFromPath(location.pathname);
  const localizedPath = buildLocalizedPath(location.pathname, locale);
  const canonicalUrl = canonical ?? `${SITE_URL}${localizedPath}`;
  const ogImage = image ?? DEFAULT_OG_IMAGE;
  const twitterImage = image ?? DEFAULT_TWITTER_IMAGE;
  const ogLocale = locale === 'el' ? 'el_GR' : 'en_US';
  const ogAlternateLocale = locale === 'el' ? 'en_US' : 'el_GR';
  const robots = noIndex ? 'noindex, follow' : 'index, follow';
  const structuredDataArray = useMemo(() => {
    const pageData = !structuredData
      ? []
      : (Array.isArray(structuredData) ? structuredData : [structuredData]);
    const defaultData = noIndex ? [] : [buildOrganizationSchema(locale), buildWebsiteSchema(locale)];
    return [...defaultData, ...pageData];
  }, [structuredData, locale, noIndex]);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.documentElement.lang = locale;

    if (title) {
      document.title = title;
      upsertMeta('name', 'title', title);
      upsertMeta('property', 'og:title', title);
      upsertMeta('name', 'twitter:title', title);
    }

    if (description) {
      upsertMeta('name', 'description', description);
      upsertMeta('property', 'og:description', description);
      upsertMeta('name', 'twitter:description', description);
    }

    if (keywords && keywords.length > 0) {
      upsertMeta('name', 'keywords', keywords.join(', '));
    }

    upsertLink('canonical', canonicalUrl);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:image', ogImage);
    upsertMeta('property', 'og:image:secure_url', ogImage);
    upsertMeta('property', 'og:image:width', '1200');
    upsertMeta('property', 'og:image:height', '630');
    upsertMeta('property', 'og:image:alt', title);
    upsertMeta('property', 'og:locale', ogLocale);

    document
      .querySelectorAll('meta[property="og:locale:alternate"]')
      .forEach((node) => node.remove());
    upsertMeta('property', 'og:locale:alternate', ogAlternateLocale);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:url', canonicalUrl);
    upsertMeta('name', 'twitter:image', twitterImage);
    upsertMeta('name', 'robots', robots);
    upsertMeta('name', 'googlebot', robots);
    upsertMeta('name', 'author', SITE_NAME);
    upsertMeta('name', 'publisher', SITE_NAME);

    document
      .querySelectorAll('link[rel="alternate"][hreflang]')
      .forEach((node) => node.remove());
    upsertAlternateLink('en', `${SITE_URL}${buildLocalizedPath(location.pathname, 'en')}`);
    upsertAlternateLink('el', `${SITE_URL}${buildLocalizedPath(location.pathname, 'el')}`);
    upsertAlternateLink('x-default', `${SITE_URL}/`);

    document.querySelectorAll('script[data-seo="structured-data"]').forEach((node) => node.remove());
    structuredDataArray.forEach((data) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo', 'structured-data');
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    });
  }, [
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage,
    ogLocale,
    ogAlternateLocale,
    twitterImage,
    robots,
    locale,
    location.pathname,
    structuredDataArray,
  ]);

  return null;
};

export default Seo;
