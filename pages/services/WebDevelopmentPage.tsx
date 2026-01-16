import React from 'react';
import Seo from '../../components/Seo';
import ServiceDetail from '../../components/ServiceDetail';
import { SERVICES } from '../../constants';

const WebDevelopmentPage: React.FC = () => {
  const service = SERVICES.find(s => s.slug === 'web-development');

  if (!service) return null;

  return (
    <>
      <Seo
        title={service.seo.metaTitle}
        description={service.seo.metaDescription}
        keywords={service.seo.keywords}
        canonical={`https://impact-tech.com/services/${service.slug}`}
      />

      <ServiceDetail service={service} />
    </>
  );
};

export default WebDevelopmentPage;
