import React from 'react';
import Seo from '../../components/Seo';
import ServiceDetail from '../../components/ServiceDetail';
import { SERVICES } from '../../constants';

const BackendAPIsPage: React.FC = () => {
  const service = SERVICES.find(s => s.slug === 'backend-apis');

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

export default BackendAPIsPage;
