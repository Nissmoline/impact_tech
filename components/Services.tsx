import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TiltCard from './ui/TiltCard';
import { SERVICES } from '../constants';
import { getLocaleFromPath, withLocalePrefix } from '../utils/locale';

const Services: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const locale = getLocaleFromPath(location.pathname);
  const withLocale = (href: string) => withLocalePrefix(href, locale);

  return (
    <section className="pt-24 pb-12 md:pt-28 md:pb-14 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="space-y-3 text-center mb-12">
          <p className="text-cyan-400 font-semibold tracking-[0.16em] uppercase text-xs">
            {t('home.services.badge')}
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 inline-block">
            {t('home.services.title')}
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            {t('home.services.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const IconComponent = service.icon;
            const serviceTitle = t(`home.services.items.${service.slug}.title`, {
              defaultValue: service.title,
            });
            const serviceDescription = t(`home.services.items.${service.slug}.description`, {
              defaultValue: service.description,
            });
            return (
              <Link key={service.id} to={withLocale(`/services/${service.slug}`)} className="h-full block">
                <TiltCard className="h-full">
                  <div className="h-full p-8 bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl group hover:border-cyan-500/30 transition-colors cursor-pointer">
                    <div className="mb-6 p-4 bg-slate-800/50 rounded-xl inline-block group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                      <IconComponent size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {serviceTitle}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm mb-4">
                      {serviceDescription}
                    </p>
                  </div>
                </TiltCard>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
