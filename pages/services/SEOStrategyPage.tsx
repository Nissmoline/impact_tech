import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServiceDetail from '../../components/ServiceDetail';
import { SERVICES } from '../../constants';

const SEOStrategyPage: React.FC = () => {
  const service = SERVICES.find(s => s.slug === 'seo-strategy');

  if (!service) return null;

  return (
    <>
      <Helmet>
        <title>{service.seo.metaTitle}</title>
        <meta name="description" content={service.seo.metaDescription} />
        <meta name="keywords" content={service.seo.keywords.join(', ')} />
        <link rel="canonical" href={`https://impact-tech.com/services/${service.slug}`} />

        <meta property="og:title" content={service.seo.metaTitle} />
        <meta property="og:description" content={service.seo.metaDescription} />
        <meta property="og:url" content={`https://impact-tech.com/services/${service.slug}`} />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content={service.seo.metaTitle} />
        <meta name="twitter:description" content={service.seo.metaDescription} />
      </Helmet>

      <ServiceDetail service={service} />
    </>
  );
};

export default SEOStrategyPage;
