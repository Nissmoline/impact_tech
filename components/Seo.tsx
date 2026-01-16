import React, { useEffect } from 'react';

type SeoProps = {
  title: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
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

const Seo: React.FC<SeoProps> = ({ title, description, keywords, canonical }) => {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    if (title) {
      document.title = title;
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

    if (canonical) {
      upsertLink('canonical', canonical);
      upsertMeta('property', 'og:url', canonical);
    }

    upsertMeta('property', 'og:type', 'website');
  }, [title, description, keywords, canonical]);

  return null;
};

export default Seo;
