import React from 'react';
import { useLocation } from 'react-router-dom';
import About from '../components/About';
import Seo from '../components/Seo';
import { buildLocalizedPath, getLocaleFromPath } from '../utils/locale';
import {
  BREADCRUMB_LABELS,
  PAGE_SEO,
  SITE_URL,
  buildBreadcrumbSchema,
  buildWebPageSchema,
} from '../utils/seo';

const AboutPage: React.FC = () => {
  const { pathname } = useLocation();
  const locale = getLocaleFromPath(pathname);
  const seo = PAGE_SEO.about[locale];
  const canonicalUrl = `${SITE_URL}${buildLocalizedPath(pathname, locale)}`;
  const homeUrl = `${SITE_URL}${buildLocalizedPath('/', locale)}`;
  const labels = BREADCRUMB_LABELS[locale];
  const structuredData = [
    buildWebPageSchema({
      title: seo.title,
      description: seo.description,
      url: canonicalUrl,
      locale,
    }),
    buildBreadcrumbSchema([
      { name: labels.home, url: homeUrl },
      { name: labels.about, url: canonicalUrl },
    ]),
  ];

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        structuredData={structuredData}
      />
      <About />
    </>
  );
};

export default AboutPage;
