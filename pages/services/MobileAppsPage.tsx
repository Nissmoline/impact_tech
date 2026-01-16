import React from 'react';
import Seo from '../../components/Seo';
import ServiceDetail from '../../components/ServiceDetail';
import { SERVICES } from '../../constants';

const MobileAppsPage: React.FC = () => {
  const service = SERVICES.find(s => s.slug === 'mobile-apps');

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

export default MobileAppsPage;
