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

type TeamMember = {
  name: string;
  role: string;
  focus: string;
  photo: string;
  accent: string;
  badge: string;
  bio: string[];
  education?: string[];
  primaryStack?: string[];
  tooling?: string[];
  delivers?: string[];
};

const team: TeamMember[] = [
  {
    name: 'Kolpaxidis Konstantine',
    role: 'Founder & CEO',
    focus: 'Leads architecture and delivery of complex products with end-to-end accountability.',
    photo: '/team/k_kolpaxidis.jpg',
    accent: 'from-cyan-500 to-blue-500',
    badge: 'Founder',
    bio: [
      'Konstantine leads end-to-end delivery of complex digital products, combining hands-on engineering depth with executive ownership of outcomes.',
      'He specializes in building scalable web platforms, interactive 3D web experiences, and production-grade software systems where performance, security, and reliability are non-negotiable. As Founder & CEO, he sets technical direction, validates architectures, manages delivery governance, and ensures every engagement ships measurable business results on time, on budget, and with long-term maintainability.',
    ],
    education: ['BSc in Software Engineering', '10+ years building scalable platforms and interactive experiences'],
    primaryStack: [
      'Frontend: TypeScript, React, Next.js, HTML5, CSS3',
      'Backend: Node.js (architecture oversight), REST/GraphQL (solution design)',
      'Cloud/Delivery: AWS-oriented architectures, CI/CD strategy, security-by-design',
    ],
    tooling: [
      'React ecosystem (routing, state, data fetching), component-driven architecture, Storybook',
      'Performance engineering: Core Web Vitals optimization, SSR/ISR patterns, caching strategies',
      'Observability and quality gates: logging, monitoring, release governance',
    ],
    delivers: [
      'Technical strategy, system architecture, delivery leadership, audits, scalability plans',
      'High-performance web platforms, enterprise-grade applications, interactive 3D product experiences',
    ],
  },
  {
    name: 'Elena Schiltz',
    role: 'Head of Design & UX',
    focus: 'Systems-minded design lead building scalable design systems and UX.',
    photo: '/team/e_Schilz.jpg',
    accent: 'from-purple-500 to-pink-500',
    badge: 'Design',
    bio: [
      'Elena leads product design and UX with a systems mindset: she translates business goals into user-centered interfaces that increase conversion, retention, and brand trust.',
      'Her strength is building and operating design systems at scale, ensuring consistency across products, accelerating development, and reducing design debt. She owns UX workflows from research and prototyping to final UI specs in Figma, supporting engineering teams through implementation with clear standards and governance.',
    ],
    education: ['University degree in RCA (Royal College of Art)'],
    primaryStack: ['Design & UX: Figma, design systems, UI specifications, user flows, prototyping'],
    tooling: [
      'Component libraries alignment (tokens, variants, responsive rules)',
      'Accessibility-first design guidelines (WCAG-aware patterns)',
      'Design-to-dev workflows (structured specs, documentation, versioning)',
    ],
    delivers: [
      'UX strategy, design systems, product UI, audit and redesign programs',
      'Conversion-focused interfaces for SaaS, enterprise dashboards, and high-impact marketing sites',
    ],
  },
  {
    name: 'Emanuel Zervas',
    role: 'Principal Frontend Architect',
    focus: 'Frontend architect for scalable, performant React and Next.js products.',
    photo: '/team/E_Zervas.jpg',
    accent: 'from-emerald-500 to-teal-500',
    badge: 'Engineering',
    bio: [
      'Emanuel is the principal frontend architect focused on building fast, scalable, and maintainable user interfaces for modern products.',
      'He designs frontend systems as platforms: component libraries, patterns, performance budgets, and engineering standards that keep teams shipping reliably as products grow. He is specialized in TypeScript, React, and Next.js, with emphasis on performance optimization, SSR/ISR strategies, and robust integration with APIs.',
    ],
    education: [
      'Formal degree not specified',
      '19+ years experience, 8+ years in React/Next.js and performance optimization',
      'Former tech lead at Revolut',
    ],
    primaryStack: [
      'Frontend: TypeScript, React, Next.js',
      'Architecture: scalable UI systems, SSR/ISR, caching, edge delivery patterns',
    ],
    tooling: [
      'UI: Tailwind CSS, Radix UI/shadcn/ui (if used), Storybook',
      'Data: TanStack Query (React Query), SWR, typed API clients',
      'State: Zustand, Redux Toolkit (project-dependent)',
      'Quality: ESLint, Prettier, type-safe patterns, performance profiling',
    ],
    delivers: [
      'Enterprise-grade frontend architecture, component libraries, performance hardening',
      'High-conversion product UIs, dashboards, portals, and multi-tenant SaaS frontends',
    ],
  },
  {
    name: 'Evheniy Bugha',
    role: '3D Specialist',
    focus: 'Builds immersive 3D web experiences optimized for performance.',
    photo: '/team/Evheniy_Buha.jpg',
    accent: 'from-cyan-500 to-purple-500',
    badge: '3D',
    bio: [
      'Evheniy creates immersive, production-ready 3D web experiences that are both visually compelling and performant on real devices.',
      'He builds interactive 3D scenes for product marketing, digital showrooms, configurators, and technical visualization, balancing fidelity with loading speed, frame-rate stability, and accessibility. He integrates 3D into React and Next.js applications without compromising Core Web Vitals.',
    ],
    education: ['50+ shipped projects with seamless 3D integration'],
    primaryStack: [
      '3D/Web: WebGL, Three.js, real-time rendering pipelines',
      'Integration: React/Next.js-friendly 3D architecture',
    ],
    tooling: [
      'Three.js ecosystem: React Three Fiber, Drei, loaders, postprocessing',
      'Asset pipeline: glTF/GLB workflows, optimization/compression, LOD strategies',
      'Shaders/FX: GLSL-based effects (project-dependent)',
    ],
    delivers: [
      '3D websites, interactive product configurators, technical visualization',
      'Optimized real-time scenes integrated into modern web applications',
    ],
  },
  {
    name: 'Melina Chen',
    role: 'Senior Fullstack Engineer',
    focus: 'Builds scalable backends and APIs with clean architecture and performance focus.',
    photo: '/team/Melina_Chen.jpg',
    accent: 'from-orange-500 to-amber-500',
    badge: 'Backend',
    bio: [
      'Melina builds scalable backend systems and fullstack products with a focus on clean architecture, predictable performance, and secure integrations.',
      'She designs APIs, data models, caching layers, and cloud-ready services that support growth from MVP to enterprise scale, emphasizing stability under load, strong security practices, and maintainable codebases with clear boundaries and testability.',
    ],
    education: ['University degree in a Computer Engineering'],
    primaryStack: [
      'Backend: Node.js, REST, GraphQL',
      'Data: PostgreSQL, MongoDB, Redis',
      'Architecture: scalable APIs, event-driven patterns (when needed), cloud readiness',
    ],
    tooling: [
      'Node.js frameworks: NestJS / Express (project-dependent)',
      'GraphQL: Apollo Server/Client (project-dependent)',
      'ORM/DB tooling: Prisma / TypeORM (project-dependent)',
      'Security: auth flows, RBAC, rate limiting, auditing patterns',
    ],
    delivers: [
      'Production-grade APIs, admin panels, and fullstack applications',
      'Data architecture, integrations, and performance optimization for high-traffic systems',
    ],
  },
  {
    name: 'Sofia Konig',
    role: 'Motion & Interaction Designer',
    focus: 'Motion and interaction designer creating purposeful animations and storytelling.',
    photo: '/team/s_koenig.jpg',
    accent: 'from-fuchsia-500 to-pink-500',
    badge: 'Motion',
    bio: [
      'Sofia crafts motion and interaction design that elevates usability and perception of quality, turning static UIs into fluid, intuitive experiences.',
      'She builds motion systems that scale with products, ensuring animations remain consistent, purposeful, and performant across devices, with a focus on premium landing pages, product storytelling, and interactive flows.',
    ],
    education: ['University degree in a Digital Architect'],
    primaryStack: ['Motion/UI: interaction design, animation systems, UI micro-interactions'],
    tooling: [
      'Framer Motion, GSAP',
      'Scroll-based storytelling, UI transitions, state-driven animations (implementation-aligned)',
    ],
    delivers: [
      'Motion design systems, high-end UI interactions, conversion-driven landing animations',
      'Performance-aware animation specifications for engineering teams',
    ],
  },
  {
    name: 'Ivan Alexandrov',
    role: 'DevOps & Cloud Engineer',
    focus: 'Owns cloud infrastructure, CI/CD, security, and reliability.',
    photo: '/team/i_alexandrov.jpg',
    accent: 'from-lime-500 to-green-500',
    badge: 'DevOps',
    bio: [
      'Ivan owns cloud infrastructure, deployment automation, and operational reliability, ensuring products are secure, observable, and scalable in production.',
      'He designs CI/CD pipelines, containerized delivery, infrastructure-as-code, and monitoring that supports fast iteration without compromising uptime, with least-privilege security and robust rollback strategies.',
    ],
    education: ['Master of Science degree in a Computer Science'],
    primaryStack: ['Cloud: AWS', 'Containers: Docker, Kubernetes', 'Delivery: CI/CD, Infrastructure as Code'],
    tooling: [
      'IaC: Terraform / CloudFormation (project-dependent)',
      'Kubernetes tooling: Helm, GitOps patterns (when applicable)',
      'Observability: metrics, logs, tracing (Prometheus/Grafana/ELK/Sentry depending on stack)',
    ],
    delivers: [
      'Secure cloud foundations, deployment pipelines, scalability and reliability engineering',
      'Production monitoring, incident readiness, and cost optimization',
    ],
  },
  {
    name: 'Keli Paschalidou',
    role: 'Product & Strategy Lead',
    focus: 'Drives product strategy, roadmaps, and stakeholder alignment.',
    photo: '/team/K_Paschalidou.jpg',
    accent: 'from-sky-500 to-indigo-500',
    badge: 'Product',
    bio: [
      'Keli drives product strategy and execution, connecting business objectives to roadmaps that ship real outcomes.',
      'She leads discovery, requirements definition, prioritization, and cross-functional alignment, coordinating stakeholders, integrations, and compliance constraints without losing speed.',
    ],
    education: ['MBA', '7+ years in product management'],
    primaryStack: ['Discovery, roadmap planning, KPI design, stakeholder management, delivery governance'],
    tooling: [
      'Agile delivery and documentation toolchains (Jira/Confluence/Notion/Miro as needed)',
      'Analytics alignment and experimentation processes (tool choice depends on client ecosystem)',
    ],
    delivers: [
      'Discovery workshops, MVP definition, roadmaps, release planning, and stakeholder alignment',
      'Product strategy for SaaS, enterprise platforms, and mission-critical engineering workflows',
    ],
  },
  {
    name: 'Heinrich Meier',
    role: 'QA & Test Automation Engineer',
    focus: 'QA and automation engineer integrating quality gates and regression coverage.',
    photo: '/team/h_meier.jpg',
    accent: 'from-amber-500 to-yellow-500',
    badge: 'Quality',
    bio: [
      'Heinrich ensures release confidence through robust QA strategy and test automation.',
      'He designs test pyramids, builds regression suites, and integrates quality gates into CI/CD so teams ship faster with fewer production issues, focusing on coverage where it matters and deterministic test environments.',
    ],
    education: ['Formal degree not specified'],
    primaryStack: ['Testing: unit, integration, E2E automation, CI quality gates'],
    tooling: ['Jest, Vitest, Playwright', 'CI integration, reporting, and regression governance'],
    delivers: [
      'Automated test suites, release readiness frameworks, stability improvements',
      'Reduced regressions, stronger user experience, and production-grade reliability',
    ],
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
          <div className="relative w-full max-w-5xl bg-slate-900 border border-white/10 rounded-3xl shadow-2xl max-h-[90vh] overflow-hidden flex flex-col">
            <button
              type="button"
              onClick={() => setActiveMember(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Close team member details"
            >
              <X size={18} />
            </button>
            <div className="grid md:grid-cols-[1fr,1.2fr] flex-1 overflow-y-auto">
              <div className="h-full w-full max-h-[320px] md:max-h-[70vh] md:min-h-[420px] md:max-w-[420px] mx-auto bg-slate-900 flex items-center justify-center p-4">
                <img
                  src={activeMember.photo}
                  alt={activeMember.name}
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
                  {renderSection('Education & credentials', activeMember.education, activeMember.accent)}
                  {renderSection('Primary stack', activeMember.primaryStack, activeMember.accent)}
                  {renderSection('Libraries & tooling', activeMember.tooling, activeMember.accent)}
                  {renderSection('What they deliver', activeMember.delivers, activeMember.accent)}
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
