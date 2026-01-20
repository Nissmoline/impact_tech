import React from 'react';
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
  Cpu,
  MapPin,
  Briefcase,
  Clock,
  ArrowRight,
} from 'lucide-react';
import TiltCard from './ui/TiltCard';
import { getLocaleFromPath, withLocalePrefix } from '../utils/locale';

const benefits = [
  {
    title: 'Remote-first culture',
    description: 'Work from anywhere. We value output over attendance.',
    icon: Globe,
  },
  {
    title: 'Competitive compensation',
    description: 'Market-rate salaries plus performance bonuses.',
    icon: Zap,
  },
  {
    title: 'Growth & learning',
    description: 'Annual budget for courses, conferences, and books.',
    icon: Rocket,
  },
  {
    title: 'Work-life balance',
    description: 'Flexible hours and generous vacation policy.',
    icon: Heart,
  },
  {
    title: 'Modern tech stack',
    description: 'Work with cutting-edge tools and technologies.',
    icon: Code2,
  },
  {
    title: 'Collaborative team',
    description: 'Small, focused teams shipping impactful work.',
    icon: Users,
  },
];

const openings = [
  {
    title: 'Senior React Developer',
    department: 'Engineering',
    location: 'Remote (EU)',
    type: 'Full-time',
    description: 'Build high-performance web applications with React, TypeScript, and Next.js. Lead frontend architecture decisions.',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL'],
    icon: Code2,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: '3D Web Developer',
    department: '3D & Immersive',
    location: 'Remote (Worldwide)',
    type: 'Full-time',
    description: 'Create stunning WebGL experiences using Three.js. Optimize performance for immersive web applications.',
    skills: ['Three.js', 'WebGL', 'GSAP', 'React', 'TypeScript'],
    icon: Cpu,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote (EU)',
    type: 'Full-time',
    description: 'Design beautiful, user-centered interfaces. Work closely with engineers to build design systems that scale.',
    skills: ['Figma', 'Design Systems', 'Prototyping', 'Accessibility', 'Motion Design'],
    icon: Palette,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Fullstack Engineer',
    department: 'Engineering',
    location: 'Remote (EU)',
    type: 'Full-time',
    description: 'Build scalable APIs and cloud infrastructure. Work across the entire stack from database to UI.',
    skills: ['Node.js', 'GraphQL', 'PostgreSQL', 'AWS', 'Docker'],
    icon: Code2,
    color: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Motion Designer',
    department: 'Design',
    location: 'Remote (Worldwide)',
    type: 'Contract',
    description: 'Craft delightful animations and micro-interactions. Bring interfaces to life with purposeful motion.',
    skills: ['Framer Motion', 'GSAP', 'After Effects', 'Figma', 'CSS Animations'],
    icon: Zap,
    color: 'from-fuchsia-500 to-pink-500',
  },
  {
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote (EU)',
    type: 'Full-time',
    description: 'Build reliable CI/CD pipelines and cloud infrastructure. Ensure our deployments are fast and secure.',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
    icon: Cpu,
    color: 'from-lime-500 to-green-500',
  },
];

const Careers: React.FC = () => {
  const location = useLocation();
  const locale = getLocaleFromPath(location.pathname);
  const withLocale = (href: string) => withLocalePrefix(href, locale);

  return (
    <section className="bg-slate-950 min-h-[100svh] py-24">
      <div className="container mx-auto px-6 max-w-6xl space-y-16">
        {/* Hero */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-semibold">
            <Rocket size={16} />
            Join our team
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
            Build the future of web experiences
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We're looking for talented engineers, designers, and creators who want to push the boundaries
            of what's possible on the web. Join our remote-first team and ship work that matters.
          </p>
        </div>

        {/* Why join us */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 justify-center">
            <Heart className="text-cyan-400" size={24} />
            <h2 className="text-3xl font-display font-bold text-white">
              Why Impact Tech?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <TiltCard key={benefit.title}>
                <div className="h-full p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/15 text-cyan-300 flex items-center justify-center mb-4">
                    <benefit.icon size={22} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
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
              Open positions
            </h2>
          </div>
          <p className="text-center text-slate-400 max-w-2xl mx-auto">
            We're actively hiring for these roles. If you don't see a perfect fit, send us your portfolio anyway—we're always looking for exceptional talent.
          </p>

          <div className="grid gap-6 mt-8">
            {openings.map((job) => (
              <TiltCard key={job.title}>
                <div className="h-full p-8 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/30 transition-all group">
                  <div className="flex flex-col lg:flex-row justify-between gap-6">
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${job.color} opacity-20 flex items-center justify-center`}>
                          <job.icon className="text-white" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold text-white mb-2">{job.title}</h3>
                          <div className="flex flex-wrap gap-3 text-sm text-slate-400">
                            <span className="flex items-center gap-1">
                              <Briefcase size={14} />
                              {job.department}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin size={14} />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={14} />
                              {job.type}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-300 leading-relaxed">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
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
                        href={`mailto:careers@impacttech.com?subject=Application for ${job.title}`}
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/40 transition-all flex items-center gap-2 justify-center whitespace-nowrap"
                      >
                        Apply now
                        <ArrowRight size={16} />
                      </a>
                      <button className="px-6 py-3 rounded-full border border-white/10 text-white hover:border-cyan-500/50 transition-all">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 p-12 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_50%)]" />
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <Coffee className="text-cyan-300 mx-auto" size={48} />
            <h2 className="text-3xl font-display font-bold text-white">
              Don't see the right role?
            </h2>
            <p className="text-slate-300 leading-relaxed">
              We're always open to connecting with talented individuals. Send us your portfolio and let's chat about future opportunities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:careers@impacttech.com"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/40 transition-all"
              >
                Get in touch
              </a>
              <Link
                to={withLocale('/about')}
                className="px-6 py-3 rounded-full border border-white/10 text-white hover:border-cyan-500/50 transition-all"
              >
                Meet the team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
