import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sparkles,
  Cpu,
  Figma,
  Orbit,
  ShieldCheck,
  Timer,
  Users,
  Compass,
  Brain,
  Workflow,
  Handshake,
  Star,
  X,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import TiltCard from './ui/TiltCard';
import { getLocaleFromPath, withLocalePrefix } from '../utils/locale';

const pillarIcons = [Cpu, Figma, Orbit];
const journeyIcons = [Compass, Sparkles, ShieldCheck, Timer];
const capabilityIcons = [Handshake, Workflow, Brain];

type TeamMemberMeta = {
  key: string;
  name: string;
  photo: string;
  accent: string;
};

type TeamMember = TeamMemberMeta & {
  role: string;
  focus: string;
  badge: string;
  bio: string[];
  education?: string[];
  primaryStack?: string[];
  tooling?: string[];
  delivers?: string[];
};

const teamMeta: TeamMemberMeta[] = [
  {
    key: 'konstantineKolpaxidis',
    name: 'Kolpaxidis Konstantine',
    photo: '/team/k_kolpaxidis.jpg',
    accent: 'from-cyan-500 to-blue-500',
  },
  {
    key: 'elenaSchiltz',
    name: 'Elena Schiltz',
    photo: '/team/e_Schilz.jpg',
    accent: 'from-purple-500 to-pink-500',
  },
  {
    key: 'emanuelZervas',
    name: 'Emanuel Zervas',
    photo: '/team/E_Zervas.jpg',
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    key: 'evheniyBugha',
    name: 'Evheniy Bugha',
    photo: '/team/Evheniy_Buha.jpg',
    accent: 'from-cyan-500 to-purple-500',
  },
  {
    key: 'melinaChen',
    name: 'Melina Chen',
    photo: '/team/Melina_Chen.jpg',
    accent: 'from-orange-500 to-amber-500',
  },
  {
    key: 'sofiaKonig',
    name: 'Sofia Konig',
    photo: '/team/s_koenig.jpg',
    accent: 'from-fuchsia-500 to-pink-500',
  },
  {
    key: 'ivanAlexandrov',
    name: 'Ivan Alexandrov',
    photo: '/team/i_alexandrov.jpg',
    accent: 'from-lime-500 to-green-500',
  },
  {
    key: 'keliPaschalidou',
    name: 'Keli Paschalidou',
    photo: '/team/K_Paschalidou.jpg',
    accent: 'from-sky-500 to-indigo-500',
  },
  {
    key: 'heinrichMeier',
    name: 'Heinrich Meier',
    photo: '/team/h_meier.jpg',
    accent: 'from-amber-500 to-yellow-500',
  },
];

const About: React.FC = () => {
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);
  const location = useLocation();
  const locale = getLocaleFromPath(location.pathname);
  const withLocale = (href: string) => withLocalePrefix(href, locale);
  const { t } = useTranslation('about');

  const stats = t('stats', { returnObjects: true }) as Array<{
    label: string;
    value: string;
    detail: string;
  }>;

  const pillarItems = t('pillars.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;
  const pillars = pillarItems.map((pillar, index) => ({
    ...pillar,
    icon: pillarIcons[index] ?? Cpu,
  }));

  const journeyItems = t('journey.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;
  const journey = journeyItems.map((stage, index) => ({
    ...stage,
    icon: journeyIcons[index] ?? Compass,
  }));

  const capabilityItems = t('capabilities.items', { returnObjects: true }) as Array<{
    title: string;
    points: string[];
  }>;
  const capabilities = capabilityItems.map((capability, index) => ({
    ...capability,
    icon: capabilityIcons[index] ?? Handshake,
  }));

  const team = teamMeta.map((member) => {
    const details = t(`team.members.${member.key}`, { returnObjects: true }) as Omit<
      TeamMember,
      keyof TeamMemberMeta
    >;

    return {
      ...member,
      ...details,
    };
  });

  useEffect(() => {
    if (!activeMember) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeMember]);

  const handleCardKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    member: TeamMember
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setActiveMember(member);
    }
  };

  const renderSection = (
    title: string,
    items: string[] | undefined,
    accent: string
  ) => {
    if (!items?.length) return null;

    return (
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{title}</p>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-slate-300 leading-relaxed">
              <span className={`mt-1 h-2 w-2 rounded-full bg-gradient-to-r ${accent}`} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section id="about" className="bg-slate-950 dark:bg-slate-950 light:bg-slate-50 min-h-[100svh] py-24">
      <div className="container mx-auto px-6 max-w-6xl space-y-16">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-semibold">
              <Sparkles size={16} />
              {t('hero.badge')}
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white dark:text-white light:text-slate-900 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl leading-relaxed">
              {t('hero.description')}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to={withLocale('/portfolio')}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/40 transition-all"
              >
                {t('hero.primaryCta')}
              </Link>
              <a
                href={withLocale('/#contact')}
                className="px-6 py-3 rounded-full border border-white/10 dark:border-white/10 light:border-slate-300 text-white dark:text-white light:text-slate-900 hover:border-cyan-500/50 transition-all"
              >
                {t('hero.secondaryCta')}
              </a>
            </div>
          </div>
          <TiltCard className="w-full">
            <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.15),transparent_35%)]" />
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
                    <Orbit size={24} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-400">{t('dna.eyebrow')}</p>
                    <p className="text-white font-semibold">{t('dna.title')}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-xs text-slate-400 mb-1">{t('dna.cards.drive.label')}</p>
                    <p className="text-white font-semibold">{t('dna.cards.drive.value')}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-xs text-slate-400 mb-1">{t('dna.cards.ship.label')}</p>
                    <p className="text-white font-semibold">{t('dna.cards.ship.value')}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-xs text-slate-400 mb-1">{t('dna.cards.excel.label')}</p>
                    <p className="text-white font-semibold">{t('dna.cards.excel.value')}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-xs text-slate-400 mb-1">{t('dna.cards.stay.label')}</p>
                    <p className="text-white font-semibold">{t('dna.cards.stay.value')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <Users className="text-cyan-300" size={20} />
                  <p>{t('dna.footer')}</p>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 hover:border-cyan-500/30 transition-colors"
            >
              <p className="text-sm text-slate-400">{stat.label}</p>
              <p className="text-3xl font-display font-bold text-white mt-2">{stat.value}</p>
              <p className="text-sm text-slate-500 mt-2">{stat.detail}</p>
            </div>
          ))}
        </div>

        {/* Pillars */}
        <div className="space-y-6">
          <h2 className="text-3xl font-display font-bold text-white dark:text-white light:text-slate-900">
            {t('pillars.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <TiltCard key={pillar.title}>
                <div className="h-full p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-cyan-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/15 text-cyan-300 flex items-center justify-center mb-4">
                    <pillar.icon size={22} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{pillar.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{pillar.description}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Journey */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-cyan-400" size={24} />
            <h2 className="text-3xl font-display font-bold text-white dark:text-white light:text-slate-900">
              {t('journey.title')}
            </h2>
          </div>
          <div className="grid lg:grid-cols-4 gap-4">
            {journey.map((stage, index) => (
              <div
                key={stage.title}
                className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 relative overflow-hidden group"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-cyan-300">{String(index + 1).padStart(2, '0')}</span>
                    <stage.icon className="text-cyan-300" size={18} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{stage.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Cpu className="text-cyan-400" size={24} />
            <h2 className="text-3xl font-display font-bold text-white dark:text-white light:text-slate-900">
              {t('capabilities.title')}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {capabilities.map((capability) => (
              <TiltCard key={capability.title}>
                <div className="h-full p-6 rounded-2xl bg-slate-900/60 border border-white/10 flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/15 text-cyan-300 flex items-center justify-center">
                    <capability.icon size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{capability.title}</h3>
                  <ul className="space-y-2 text-slate-400 text-sm leading-relaxed">
                    {capability.points.map((point) => (
                      <li key={point} className="flex gap-2 items-start">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Star className="text-cyan-400" size={24} />
            <h2 className="text-3xl font-display font-bold text-white dark:text-white light:text-slate-900">
              {t('team.title')}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <TiltCard
                key={member.key}
                className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                role="button"
                tabIndex={0}
                onClick={() => setActiveMember(member)}
                onKeyDown={(event) => handleCardKeyDown(event, member)}
                aria-label={`${member.name} - ${member.role}`}
              >
                <div className="h-full p-6 rounded-2xl bg-slate-900/60 border border-white/10 flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-white/10">
                      <img
                        src={member.photo}
                        alt={member.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-cyan-300">{member.badge}</p>
                      <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                      <p className="text-sm text-slate-400">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{member.focus}</p>
                  <div className={`h-1 w-full rounded-full bg-gradient-to-r ${member.accent}`} />
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
      {activeMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 lg:px-10">
          <div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setActiveMember(null)}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-5xl bg-slate-900 border border-white/10 rounded-3xl shadow-2xl max-h-[90svh] overflow-hidden flex flex-col">
            <button
              type="button"
              onClick={() => setActiveMember(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label={t('team.modal.closeAria')}
            >
              <X size={18} />
            </button>
            <div className="grid md:grid-cols-[1fr,1.2fr] flex-1 overflow-y-auto">
              <div className="h-full w-full max-h-[320px] md:max-h-[70svh] md:min-h-[420px] md:max-w-[420px] mx-auto bg-slate-900 flex items-center justify-center p-4">
                <img
                  src={activeMember.photo}
                  alt={activeMember.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 md:p-8 space-y-5 bg-slate-900">
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${activeMember.accent} text-white`}
                >
                  <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${activeMember.accent}`} />
                  {activeMember.badge}
                </div>
                <div className="space-y-1">
                  <p className="text-sm uppercase tracking-[0.16em] text-cyan-300">{activeMember.role}</p>
                  <h3 className="text-2xl font-semibold text-white">{activeMember.name}</h3>
                </div>
                <div className="space-y-3">
                  {activeMember.bio.map((paragraph, index) => (
                    <p key={`${activeMember.name}-bio-${index}`} className="text-slate-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="grid sm:grid-cols-2 gap-6 pt-2">
                  {renderSection(t('team.modal.education'), activeMember.education, activeMember.accent)}
                  {renderSection(t('team.modal.primaryStack'), activeMember.primaryStack, activeMember.accent)}
                  {renderSection(t('team.modal.tooling'), activeMember.tooling, activeMember.accent)}
                  {renderSection(t('team.modal.delivers'), activeMember.delivers, activeMember.accent)}
                </div>
                <div className={`h-1 w-full rounded-full bg-gradient-to-r ${activeMember.accent}`} />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
