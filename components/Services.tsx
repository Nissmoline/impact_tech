import React from 'react';
import TiltCard from './ui/TiltCard';
import { useServices } from '../hooks/useCMS';
import { getIcon } from '../utils/iconMapper';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const { data: cmsServices } = useServices();

  // Use CMS data if available, otherwise fallback to constants
  const services = cmsServices || SERVICES.map(s => ({
    id: String(s.id),
    icon: 'Code2',
    title: s.title,
    description: s.description,
    features: [],
    order: s.id,
    published: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }));

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Our Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = getIcon(service.icon);
            return (
              <TiltCard key={service.id} className="h-full">
                <div className="h-full p-8 bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl group hover:border-cyan-500/30 transition-colors">
                  <div className="mb-6 p-4 bg-slate-800/50 rounded-xl inline-block group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm mb-4">
                    {service.description}
                  </p>
                  {service.features && service.features.length > 0 && (
                    <ul className="text-slate-500 text-xs space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1 h-1 bg-cyan-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;