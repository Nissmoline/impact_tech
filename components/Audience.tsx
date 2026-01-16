import React from 'react';
import { Brain, ShieldCheck, Database } from 'lucide-react';
import TiltCard from './ui/TiltCard';

const Audience: React.FC = () => {
  const cards = [
    {
      icon: Brain,
      title: 'AI for Games',
      accent: 'from-cyan-500 to-blue-500',
      description:
        'Intelligent agents, adaptive gameplay, and procedural worlds for major game productions.',
      points: [
        'NPC behavior and RL simulations for live-ops',
        'Dynamic balance and real-time difficulty tuning',
        'Content generation pipelines and player telemetry',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise AI Security',
      accent: 'from-emerald-500 to-teal-500',
      description:
        'Our product: video analytics and monitoring for industrial sites. Automating access control and preventing incidents.',
      points: [
        'Computer vision for perimeter and access control',
        'Anomaly detection and alert playbooks',
        'Integration with infrastructure and SOC reporting',
      ],
    },
    {
      icon: Database,
      title: 'Gov Big Data (Greece)',
      accent: 'from-indigo-500 to-purple-500',
      description:
        'National-scale datasets for Greek governmental inspectorates: ingestion, cleansing, and analytics.',
      points: [
        'ETL/ELT pipelines and data quality',
        'Risk scoring and analytical data marts',
        'Security, audit, and regulatory compliance',
      ],
    },
  ];

  return (
    <section className="py-32 bg-slate-950 relative">
      <div className="container mx-auto px-6 space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-cyan-400 font-semibold tracking-[0.16em] uppercase text-xs">
            Current Focus
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 inline-block">
            Competencies & Large-Scale Projects
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            We focus on AI, Big Data, and products that run in real production environments and government systems.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <TiltCard key={card.title} className="h-full">
              <div className="h-full p-8 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl relative overflow-hidden group">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${card.accent} opacity-20 absolute right-4 top-4 blur-2xl`}
                />

                <div className="relative z-10 space-y-5">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-cyan-300">
                    <card.icon size={24} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-bold text-white">{card.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{card.description}</p>
                  </div>
                  <ul className="space-y-3 text-slate-300">
                    {card.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;
