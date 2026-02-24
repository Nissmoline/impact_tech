import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Audience from '../components/Audience';
import TechStack from '../components/TechStack';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Seo from '../components/Seo';
import { SERVICES } from '../constants';
import { buildLocalizedPath, getLocaleFromPath } from '../utils/locale';
import {
  BREADCRUMB_LABELS,
  PAGE_SEO,
  SITE_URL,
  buildBreadcrumbSchema,
  buildServiceCatalogSchema,
  buildWebPageSchema,
} from '../utils/seo';

const HomePage: React.FC = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const locale = getLocaleFromPath(pathname);
  const seo = PAGE_SEO.home[locale];
  const canonicalUrl = `${SITE_URL}${buildLocalizedPath(pathname, locale)}`;
  const labels = BREADCRUMB_LABELS[locale];
  const serviceCatalogItems = SERVICES.map((service) => ({
    name: t(`home.services.items.${service.slug}.title`, { defaultValue: service.title }),
    description: t(`home.services.items.${service.slug}.description`, { defaultValue: service.description }),
    url: `${SITE_URL}${buildLocalizedPath(`/services/${service.slug}`, locale)}`,
  }));
  const structuredData = [
    buildWebPageSchema({
      title: seo.title,
      description: seo.description,
      url: canonicalUrl,
      locale,
    }),
    buildBreadcrumbSchema([{ name: labels.home, url: canonicalUrl }]),
    buildServiceCatalogSchema({
      locale,
      services: serviceCatalogItems,
    }),
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
