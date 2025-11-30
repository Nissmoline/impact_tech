import React from 'react';
import { TECH_STACK } from '../constants';

const TechStack: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 overflow-hidden relative">
      <div className="absolute inset-0 bg-slate-950/60 z-10 pointer-events-none bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />
      
      <div className="container mx-auto px-6 mb-12 relative z-20 text-center">
         <span className="text-cyan-500 font-bold tracking-widest uppercase text-sm">Powering The Future</span>
         <h2 className="text-3xl font-display font-bold text-white mt-2">Our Tech Stack</h2>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="py-12 animate-marquee whitespace-nowrap flex gap-12 items-center">
            {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, index) => (
                <div 
                    key={`${tech.name}-${index}`} 
                    className="flex flex-col items-center gap-4 group cursor-default"
                    style={{ '--stack-color': tech.color } as React.CSSProperties}
                >
                    <div 
                        className="w-24 h-24 rounded-2xl bg-slate-900/70 border border-slate-800/80 flex items-center justify-center shadow-lg transition-all duration-300 ease-out transform group-hover:-translate-y-2 group-hover:bg-slate-900/90 group-hover:border-[var(--stack-color)] group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.35),0_0_30px_var(--stack-color)]"
                    >
                        <span 
                            className="text-2xl font-bold" 
                            style={{ color: tech.color }}
                        >
                           {tech.name.substring(0, 2)}
                        </span>
                    </div>
                    <span className="text-slate-0 font-medium transition-colors group-hover:text-[var(--stack-color)] group-hover:drop-shadow-[0_0_6px_var(--stack-color)]">{tech.name}</span>
                </div>
            ))}
        </div>
      </div>
      
      <style>{`
        .animate-marquee {
            animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
};

export default TechStack;
