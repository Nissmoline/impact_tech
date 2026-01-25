import React from 'react';
import { Brain, ShieldCheck, Database } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import TiltCard from './ui/TiltCard';

const Audience: React.FC = () => {
  const { t } = useTranslation();
  const cards = [
    {
      key: 'aiGames',
      icon: Brain,
      accent: 'from-cyan-500 to-blue-500',
    },
    {
      key: 'enterpriseSecurity',
      icon: ShieldCheck,
      accent: 'from-emerald-500 to-teal-500',
    },
    {
      key: 'govBigData',
      icon: Database,
      accent: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section id="projects" className="py-32 bg-slate-950 relative">
      <div className="container mx-auto px-6 space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-cyan-400 font-semibold tracking-[0.16em] uppercase text-xs">
            {t('home.audience.badge')}
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 inline-block">
            {t('home.audience.title')}
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            {t('home.audience.description')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => {
            const title = t(`home.audience.cards.${card.key}.title`);
            const description = t(`home.audience.cards.${card.key}.description`);
            const points = t(`home.audience.cards.${card.key}.points`, { returnObjects: true }) as string[];
            return (
            <TiltCard key={card.key} className="h-full">
              <div className="h-full p-8 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl relative overflow-hidden group">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${card.accent} opacity-20 absolute right-4 top-4 blur-2xl`}
                />

                <div className="relative z-10 space-y-5">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-cyan-300">
                    <card.icon size={24} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-bold text-white">{title}</h3>
                    <p className="text-slate-400 leading-relaxed">{description}</p>
                  </div>
                  <ul className="space-y-3 text-slate-300">
                    {points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TiltCard>
          );
          })}
        </div>
      </div>
    </section>
  );
};

export default Audience;
