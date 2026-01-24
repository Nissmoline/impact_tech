import React from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Audience from '../components/Audience';
import TechStack from '../components/TechStack';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Seo from '../components/Seo';
import { buildLocalizedPath, getLocaleFromPath } from '../utils/locale';
import {
  BREADCRUMB_LABELS,
  PAGE_SEO,
  SITE_URL,
  buildBreadcrumbSchema,
  buildWebPageSchema,
} from '../utils/seo';

const HomePage: React.FC = () => {
  const { pathname } = useLocation();
  const locale = getLocaleFromPath(pathname);
  const seo = PAGE_SEO.home[locale];
  const canonicalUrl = `${SITE_URL}${buildLocalizedPath(pathname, locale)}`;
  const labels = BREADCRUMB_LABELS[locale];
  const structuredData = [
    buildWebPageSchema({
      title: seo.title,
      description: seo.description,
      url: canonicalUrl,
      locale,
    }),
    buildBreadcrumbSchema([{ name: labels.home, url: canonicalUrl }]),
  ];

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        structuredData={structuredData}
      />
      <Hero />
      <Services />
      <Projects />
      <Audience />
      <TechStack />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage;
