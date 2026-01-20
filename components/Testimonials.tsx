import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Code2, Rocket } from 'lucide-react';

const Testimonials: React.FC = () => {
  const steps = [
    {
      title: 'Discover',
      description: 'Align on goals, constraints, and success metrics before design and development begin.',
      icon: Compass,
      accent: 'from-cyan-500 to-blue-500',
      kicker: 'Step 01',
    },
    {
      title: 'Design',
      description: 'Prototype fast, validate early, and lock a system that scales across every screen.',
      icon: Sparkles,
      accent: 'from-purple-500 to-pink-500',
      kicker: 'Step 02',
    },
    {
      title: 'Build',
      description: 'Ship production-grade code with weekly demos, QA checks, and performance budgets.',
      icon: Code2,
      accent: 'from-emerald-500 to-teal-500',
      kicker: 'Step 03',
    },
    {
      title: 'Launch',
      description: 'Harden, monitor, and optimize after release so results keep compounding.',
      icon: Rocket,
      accent: 'from-orange-500 to-amber-500',
      kicker: 'Step 04',
    },
  ];

  return (
    <section id="process" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-cyan-400 font-semibold tracking-[0.2em] uppercase text-xs">
            Delivery System
          </p>
          <h2 className="text-4xl font-display font-bold text-white">How We Work</h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            Clear alignment, rapid iteration, and measurable checkpoints keep every engagement moving fast
            without sacrificing quality.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10" />
              <div className="h-full bg-slate-900/60 p-8 rounded-2xl border border-slate-800 relative z-0 overflow-hidden">
                <div className={`absolute -top-6 -right-8 h-24 w-24 rounded-full bg-gradient-to-br ${step.accent} opacity-10 blur-2xl`} />
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-300">
                    <Icon size={22} />
                  </div>
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-400">{step.kicker}</p>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
