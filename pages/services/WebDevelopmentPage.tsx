import React from 'react';
import { useLocation } from 'react-router-dom';
import Seo from '../../components/Seo';
import ServiceDetail from '../../components/ServiceDetail';
import { SERVICES } from '../../constants';
import { buildLocalizedPath, getLocaleFromPath } from '../../utils/locale';
import {
  BREADCRUMB_LABELS,
  SERVICE_SEO_EL,
  SITE_URL,
  buildBreadcrumbSchema,
  buildServiceSchema,
  buildWebPageSchema,
} from '../../utils/seo';

const WebDevelopmentPage: React.FC = () => {
  const { pathname } = useLocation();
  const service = SERVICES.find(s => s.slug === 'web-development');

  if (!service) return null;

  const locale = getLocaleFromPath(pathname);
  const localizedSeo = SERVICE_SEO_EL[service.slug];
  const seo = locale === 'el' && localizedSeo
    ? localizedSeo
    : {
        title: service.seo.metaTitle,
        description: service.seo.metaDescription,
        keywords: service.seo.keywords,
      };
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
    buildServiceSchema({
      name: service.title,
      description: seo.description,
      url: canonicalUrl,
      locale,
    }),
    buildBreadcrumbSchema([
      { name: labels.home, url: homeUrl },
      { name: service.title, url: canonicalUrl },
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

      <ServiceDetail service={service} />
    </>
  );
};

export default WebDevelopmentPage;
