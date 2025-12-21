import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
import TiltCard from './ui/TiltCard';

const stats = [
  { label: 'Projects shipped', value: '75+', detail: 'Web, mobile & 3D experiences' },
  { label: 'Avg ROI uplift', value: '38%', detail: 'Post-launch conversion improvement' },
  { label: 'Core specialists', value: '12', detail: 'Engineers, designers, 3D artists' },
  { label: 'Client NPS', value: '71', detail: 'Long-term partnerships we keep' },
];

const pillars = [
  {
    title: 'Engineering-first craft',
    description: 'Type-safe stacks, rigorous reviews, and performance budgets baked into every build.',
    icon: Cpu,
  },
  {
    title: 'Design with intention',
    description: 'We translate Figma systems pixel-for-pixel, layering motion and depth where it matters.',
    icon: Figma,
  },
  {
    title: 'Immersive by default',
    description: '3D, WebGL, and micro-interactions that stay light, responsive, and accessible.',
    icon: Orbit,
  },
];

const journey = [
  {
    title: 'Discover & align',
    description: 'We frame the problem, map constraints, and align on outcomes before a single line of code.',
    icon: Compass,
  },
  {
    title: 'Design & prototype',
    description: 'High-fidelity flows with motion cues and 3D concepts validated early with stakeholders.',
    icon: Sparkles,
  },
  {
    title: 'Build & harden',
    description: 'TypeScript, automated checks, and iterative releases keep quality high and timelines honest.',
    icon: ShieldCheck,
  },
  {
    title: 'Launch & evolve',
    description: 'Observability, A/Bs, and performance tuning to keep experiences sharp after day one.',
    icon: Timer,
  },
];

const capabilities = [
  {
    title: 'Product partnerships',
    points: [
      'Roadmapping with founders and product leads',
      'Workshops that turn ambiguity into sprints',
      'Outcome-focused delivery with clear KPIs',
    ],
    icon: Handshake,
  },
  {
    title: 'Design systems & UX',
    points: [
      'Systemized components that scale across squads',
      'Motion principles for purposeful delight',
      'Accessibility baked into every interaction',
    ],
    icon: Workflow,
  },
  {
    title: '3D & emerging UI',
    points: [
      'Three.js and WebGL scenes optimized for web',
      'Hybrid 2D/3D storytelling without performance tax',
      'Prototyping tangible experiences before build',
    ],
    icon: Brain,
  },
];

const team = [
  {
    name: 'Kolpaxidis Konstantine',
    role: 'Founder & CEO',
    focus: 'BSc Software Engineer| 10+ years building scalable web platforms and 3D experiences for global brands',
    photo: '/team/K_Kolpaxidis.jpg',
    accent: 'from-cyan-500 to-blue-500',
    badge: 'Founder',
  },
  {
    name: 'Elena Schiltz',
    role: 'Head of Design & UX',
    focus: 'Award-winning designer specializing in design systems, Figma workflows, and user-centered interfaces. Ex-Adobe.',
    photo: '/team/e_Schilz.jpg',
    accent: 'from-purple-500 to-pink-500',
    badge: 'Design',
  },
  {
    name: 'Emanuel Zervas',
    role: 'Principal Frontend Architect',
    focus: 'TypeScript ninja with 8+ years in React, Next.js, and performance optimization. Former tech lead at Revolut.',
    photo: '/team/E_Zervas.jpg',
    accent: 'from-emerald-500 to-teal-500',
    badge: 'Engineering',
  },
  {
    name: 'Evheniy Buha',
    role: '3D Specialist',
    focus: '3D expert creating immersive web experiences. 50+ shipped projects with seamless 3D integration.',
    photo: '/team/Evheniy_Buha.jpg',
    accent: 'from-cyan-500 to-purple-500',
    badge: '3D',
  },
  {
    name: 'Melina Chen',
    role: 'Senior Fullstack Engineer',
    focus: 'Node.js, GraphQL, and cloud architecture expert. Building scalable APIs with PostgreSQL, MongoDB & Redis.',
    photo: '/team/Melina_Chen.jpg',
    accent: 'from-orange-500 to-amber-500',
    badge: 'Backend',
  },
  {
    name: 'Sofia König',
    role: 'Motion & Interaction Designer',
    focus: 'Framer Motion and GSAP wizard. Crafting buttery-smooth animations that elevate every user interaction.',
    photo: '/team/s_koenig.jpg',
    accent: 'from-fuchsia-500 to-pink-500',
    badge: 'Motion',
  },
  {
    name: 'Ivan Alexandrov',
    role: 'DevOps & Cloud Engineer',
    focus: 'AWS certified architect. Docker, Kubernetes, CI/CD pipelines, and infrastructure as code specialist.',
    photo: '/team/i_alexandrov.jpg',
    accent: 'from-lime-500 to-green-500',
    badge: 'DevOps',
  },
  {
    name: 'Keli Paschalidou',
    role: 'Product & Strategy Lead',
    focus: 'MBA + 7 years product management. Translating business goals into roadmaps that ship results.',
    photo: '/team/K_Paschalidou.jpg',
    accent: 'from-sky-500 to-indigo-500',
    badge: 'Product',
  },
  {
    name: 'Heinrich Meier',
    role: 'QA & Test Automation Engineer',
    focus: 'Jest, Vitest, and Playwright expert ensuring rock-solid quality with comprehensive test coverage.',
    photo: '/team/h_meier.jpg',
    accent: 'from-amber-500 to-yellow-500',
    badge: 'Quality',
  },
];

const About: React.FC = () => {
  const [activeMember, setActiveMember] = useState<(typeof team)[number] | null>(null);

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
    member: (typeof team)[number]
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setActiveMember(member);
    }
  };

  return (
    <section id="about" className="bg-slate-950 dark:bg-slate-950 light:bg-slate-50 min-h-screen py-24">
      <div className="container mx-auto px-6 max-w-6xl space-y-16">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-semibold">
              <Sparkles size={16} />
              About Impact Tech
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white dark:text-white light:text-slate-900 leading-tight">
              We build immersive products that feel inevitable.
            </h1>
            <p className="text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl leading-relaxed">
              From complex web apps to cinematic 3D experiences, our team blends engineering rigor with design
              precision. We’re the partner teams call when they need reliability, speed, and a little bit of awe.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/portfolio"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/40 transition-all"
              >
                View our work
              </Link>
              <a
                href="/#contact"
                className="px-6 py-3 rounded-full border border-white/10 dark:border-white/10 light:border-slate-300 text-white dark:text-white light:text-slate-900 hover:border-cyan-500/50 transition-all"
              >
                Talk to us
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
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Our DNA</p>
                    <p className="text-white font-semibold">Engineering × Design × 3D</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-xs text-slate-400 mb-1">What drives us</p>
                    <p className="text-white font-semibold">Useful. Beautiful. Performant.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-xs text-slate-400 mb-1">How we ship</p>
                    <p className="text-white font-semibold">Small teams, clear rituals.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-xs text-slate-400 mb-1">Where we excel</p>
                    <p className="text-white font-semibold">Web, mobile, and 3D surfaces.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-xs text-slate-400 mb-1">Why clients stay</p>
                    <p className="text-white font-semibold">Results you can measure.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <Users className="text-cyan-300" size={20} />
                  <p>Remote-first studio with boots on the ground in Greece, serving teams worldwide.</p>
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
            What we stand for
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
              How we work
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
              Partnerships we thrive in
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
              The team behind the work
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <TiltCard
                key={member.name}
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
                      <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
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
          <div className="relative w-full max-w-4xl bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveMember(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Close team member details"
            >
              <X size={18} />
            </button>
            <div className="grid md:grid-cols-2">
              <div className="h-full max-h-[500px]">
                <img
                  src={activeMember.photo}
                  alt={activeMember.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 space-y-4">
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
                <p className="text-slate-400 leading-relaxed">{activeMember.focus}</p>
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
