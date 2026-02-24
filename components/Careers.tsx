import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import {
  Rocket,
  Users,
  Heart,
  Coffee,
  Zap,
  Globe,
  Code2,
  Palette,
  MapPin,
  Briefcase,
  Clock,
  ArrowRight,
} from 'lucide-react';
import TiltCard from './ui/TiltCard';
import { getLocaleFromPath, withLocalePrefix } from '../utils/locale';

const benefits = [
  { key: 'remoteFirst', icon: Globe },
  { key: 'compensation', icon: Zap },
  { key: 'growth', icon: Rocket },
  { key: 'balance', icon: Heart },
  { key: 'techStack', icon: Code2 },
  { key: 'team', icon: Users },
];

const openings = [
  { key: 'uiUxDesigner', icon: Palette, color: 'from-emerald-500 to-teal-500' },
];

const Careers: React.FC = () => {
  const location = useLocation();
  const locale = getLocaleFromPath(location.pathname);
  const withLocale = (href: string) => withLocalePrefix(href, locale);
  const { t } = useTranslation('careers');

  return (
    <section className="bg-slate-950 min-h-[100svh] py-24">
      <div className="container mx-auto px-6 max-w-6xl space-y-16">
        {/* Hero */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-semibold">
            <Rocket size={16} />
            {t('hero.badge')}
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
        </div>

        {/* Why join us */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 justify-center">
            <Heart className="text-cyan-400" size={24} />
            <h2 className="text-3xl font-display font-bold text-white">
              {t('benefits.title')}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <TiltCard key={benefit.key}>
                <div className="h-full p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/15 text-cyan-300 flex items-center justify-center mb-4">
                    <benefit.icon size={22} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {t(`benefits.items.${benefit.key}.title`)}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {t(`benefits.items.${benefit.key}.description`)}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Open positions */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 justify-center">
            <Briefcase className="text-cyan-400" size={24} />
            <h2 className="text-3xl font-display font-bold text-white">
              {t('openings.title')}
            </h2>
          </div>
          <p className="text-center text-slate-400 max-w-2xl mx-auto">
            {t('openings.intro')}
          </p>

          <div className="grid gap-6 mt-8">
            {openings.map((job) => {
              const title = t(`openings.items.${job.key}.title`);
              const department = t(`openings.items.${job.key}.department`);
              const jobLocation = t(`openings.items.${job.key}.location`);
              const type = t(`openings.items.${job.key}.type`);
              const description = t(`openings.items.${job.key}.description`);
              const skills = t(`openings.items.${job.key}.skills`, { returnObjects: true }) as string[];
              const subject = encodeURIComponent(t('openings.mailSubject', { role: title }));

              return (
                <TiltCard key={job.key}>
                <div className="h-full p-8 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/30 transition-all group">
                  <div className="flex flex-col lg:flex-row justify-between gap-6">
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${job.color} opacity-20 flex items-center justify-center`}>
                          <job.icon className="text-white" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
                          <div className="flex flex-wrap gap-3 text-sm text-slate-400">
                            <span className="flex items-center gap-1">
                              <Briefcase size={14} />
                              {department}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin size={14} />
                              {jobLocation}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={14} />
                              {type}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-300 leading-relaxed">
                        {description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex lg:flex-col gap-3">
                      <a
                        href={`mailto:careers@impacttech.gr?subject=${subject}`}
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/40 transition-all flex items-center gap-2 justify-center whitespace-nowrap"
                      >
                        {t('openings.buttons.apply')}
                        <ArrowRight size={16} />
                      </a>
                      <button className="px-6 py-3 rounded-full border border-white/10 text-white hover:border-cyan-500/50 transition-all">
                        {t('openings.buttons.learnMore')}
                      </button>
                    </div>
                  </div>
                </div>
              </TiltCard>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 p-12 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_50%)]" />
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <Coffee className="text-cyan-300 mx-auto" size={48} />
            <h2 className="text-3xl font-display font-bold text-white">
              {t('cta.title')}
            </h2>
            <p className="text-slate-300 leading-relaxed">
              {t('cta.description')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:careers@impacttech.gr"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/40 transition-all"
              >
                {t('cta.primary')}
              </a>
              <Link
                to={withLocale('/about')}
                className="px-6 py-3 rounded-full border border-white/10 text-white hover:border-cyan-500/50 transition-all"
              >
                {t('cta.secondary')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
