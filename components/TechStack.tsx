import React from 'react';
import { TECH_STACK } from '../constants';

const TechStack: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 overflow-hidden relative">
      <div className="absolute inset-0 bg-slate-950/80 z-10 pointer-events-none bg-gradient-to-r from-slate-950 via-transparent to-slate-950" />
      
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
                >
                    <div 
                        className="w-24 h-24 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 transform group-hover:-translate-y-2"
                    >
                        <span 
                            className="text-2xl font-bold" 
                            style={{ color: tech.color }}
                        >
                           {tech.name.substring(0, 2)}
                        </span>
                    </div>
                    <span className="text-slate-400 font-medium group-hover:text-white transition-colors">{tech.name}</span>
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