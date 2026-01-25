import React from 'react';
import { useTranslation } from 'react-i18next';
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
  const serviceSlug = 'web-development';
  const namespace = `service-${serviceSlug}`;
  const { t } = useTranslation(namespace);
  const service = SERVICES.find(s => s.slug === serviceSlug);

  if (!service) return null;

  const serviceTitle = t('title', { defaultValue: service.title });
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
      name: serviceTitle,
      description: seo.description,
      url: canonicalUrl,
      locale,
    }),
    buildBreadcrumbSchema([
      { name: labels.home, url: homeUrl },
      { name: serviceTitle, url: canonicalUrl },
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
