import React from 'react';
import { useLocation } from 'react-router-dom';
import { Service } from '../types';
import TiltCard from './ui/TiltCard';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { getLocaleFromPath, withLocalePrefix } from '../utils/locale';

interface ServiceDetailProps {
  service: Service;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  const IconComponent = service.icon;
  const location = useLocation();
  const locale = getLocaleFromPath(location.pathname);
  const withLocale = (href: string) => withLocalePrefix(href, locale);
  const namespace = `service-${service.slug}`;
  const { t } = useTranslation(namespace);
  const localizedTitle = t('title', { defaultValue: service.title });
  const localizedDescription = t('description', { defaultValue: service.description });
  const localizedHero = {
    headline: t('hero.headline', { defaultValue: service.hero.headline }),
    subheadline: t('hero.subheadline', { defaultValue: service.hero.subheadline }),
    cta: t('hero.cta', { defaultValue: service.hero.cta }),
  };
  const translatedBenefits = t('benefits', {
    returnObjects: true,
    defaultValue: service.benefits,
  }) as Array<{ title: string; description: string }>;
  const benefits = service.benefits.map((benefit, index) => {
    const translated = translatedBenefits?.[index];
    return {
      ...benefit,
      title: translated?.title ?? benefit.title,
      description: translated?.description ?? benefit.description,
    };
  });
  const translatedProcess = t('process', {
    returnObjects: true,
    defaultValue: service.process,
  }) as Array<{ title: string; description: string }>;
  const process = service.process.map((step, index) => {
    const translated = translatedProcess?.[index];
    return {
      ...step,
      title: translated?.title ?? step.title,
      description: translated?.description ?? step.description,
    };
  });
  const translatedTechnologies = t('technologies', {
    returnObjects: true,
    defaultValue: service.technologies,
  }) as Array<{
    category: string;
    items: Array<{ name: string; description?: string }>;
  }>;
  const technologies = service.technologies.map((techCategory, index) => {
    const translatedCategory = translatedTechnologies?.[index];
    return {
      ...techCategory,
      category: translatedCategory?.category ?? techCategory.category,
      items: techCategory.items.map((tech, techIndex) => {
        const translatedTech = translatedCategory?.items?.[techIndex];
        return {
          ...tech,
          name: translatedTech?.name ?? tech.name,
          description: translatedTech?.description ?? tech.description,
        };
      }),
    };
  });
  const viewTechStackLabel = t('ui.viewTechStack', {
    defaultValue: 'View Tech Stack',
  });
  const benefitsTitle = t('ui.benefitsTitle', {
    defaultValue: 'Why Choose This Service',
  });
  const processTitle = t('ui.processTitle', {
    defaultValue: 'Our Process',
  });
  const technologiesTitle = t('ui.technologiesTitle', {
    defaultValue: 'Technologies We Use',
  });
  const ctaTitle = t('ui.ctaTitle', {
    defaultValue: 'Ready to Start Your Project?',
  });
  const ctaDescription = t('ui.ctaDescription', {
    service: localizedTitle,
    defaultValue: "Let's discuss how we can help you achieve your goals with {{service}}.",
  });
  const ctaButton = t('ui.ctaButton', {
    defaultValue: 'Get Started',
  });

  return (
    <div className="bg-slate-950 min-h-[100svh] py-24">
      <div className="container mx-auto px-6 max-w-6xl space-y-20">

        {/* Hero Section */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-semibold">
              <IconComponent size={16} />
              {localizedTitle}
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight">
              {localizedHero.headline}
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed">
              {localizedHero.subheadline}
            </p>

            <div className="flex gap-4">
              <a
                href={withLocale('/#contact')}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/40 transition-all inline-flex items-center gap-2"
              >
                {localizedHero.cta}
                <ArrowRight size={18} />
              </a>
              <a
                href="#technologies"
                className="px-6 py-3 rounded-full border border-white/10 text-white hover:border-cyan-500/50 transition-all"
              >
                {viewTechStackLabel}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <TiltCard>
              <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 shadow-2xl">
                <div className="flex items-center justify-center text-cyan-400 mb-6">
                  <IconComponent size={80} strokeWidth={1} />
                </div>
                <div className="space-y-4 text-center">
                  <h3 className="text-2xl font-bold text-white">{localizedTitle}</h3>
                  <p className="text-slate-400">{localizedDescription}</p>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </section>

        {/* Benefits Section */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              {benefitsTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <TiltCard key={index}>
                  <div className="h-full p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-cyan-500/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/15 text-cyan-300 flex items-center justify-center mb-4">
                      <BenefitIcon size={22} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </section>

        {/* Process Section */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              {processTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {process.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 relative overflow-hidden group hover:border-cyan-500/30 transition-colors"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />
                  <div className="relative z-10 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-cyan-300">
                        {String(step.step).padStart(2, '0')}
                      </span>
                      <StepIcon className="text-cyan-300" size={18} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              {technologiesTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          </div>

          <div className="space-y-8">
            {technologies.map((techCategory, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-2xl font-bold text-white">{techCategory.category}</h3>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {techCategory.items.map((tech, techIndex) => {
                    const TechIcon = tech.icon;
                    return (
                      <div
                        key={techIndex}
                        className="p-4 rounded-xl bg-slate-900/50 border border-white/10 hover:border-cyan-500/30 transition-colors flex items-center gap-3"
                      >
                        {TechIcon && <TechIcon size={24} className="text-cyan-400 flex-shrink-0" />}
                        <div>
                          <p className="text-white font-medium">{tech.name}</p>
                          {tech.description && (
                            <p className="text-slate-400 text-xs">{tech.description}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center p-12 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            {ctaTitle}
          </h2>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            {ctaDescription}
          </p>
          <a
            href={withLocale('/#contact')}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/40 transition-all inline-flex items-center gap-2"
          >
            {ctaButton}
            <ArrowRight size={20} />
          </a>
        </section>

      </div>
    </div>
  );
};

export default ServiceDetail;
