import React, { useEffect, useRef } from 'react';
import { TECH_STACK } from '../constants';

const TechStack: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const lampRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSpotlight = () => {
      if (!marqueeRef.current || !lampRef.current) return;

      const items = marqueeRef.current.querySelectorAll('.tech-item');
      const lampRect = lampRef.current.getBoundingClientRect();
      const lampCenter = lampRect.left + lampRect.width / 2;
      const spotlightRange = 300; // Range of spotlight effect matching the light cone width

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const distanceFromCenter = Math.abs(itemCenter - lampCenter);

        // Find or create shadow element
        let shadow = item.querySelector('.item-shadow') as HTMLElement;
        if (!shadow) {
          shadow = document.createElement('div');
          shadow.className = 'item-shadow absolute bottom-[-25px] left-1/2 -translate-x-1/2 w-32 h-10 rounded-full pointer-events-none transition-all duration-400';
          shadow.style.zIndex = '100';
          item.appendChild(shadow);
        }

        if (distanceFromCenter < spotlightRange) {
          // Calculate brightness based on distance from center
          const brightness = 1 - (distanceFromCenter / spotlightRange);
          const scale = 1 + (brightness * 0.08);
          const glowIntensity = brightness * 20;

          (item as HTMLElement).style.filter = `brightness(${1 + brightness * 0.6}) drop-shadow(0 4px ${glowIntensity}px rgba(251, 191, 36, ${brightness * 0.6}))`;
          (item as HTMLElement).style.transform = `scale(${scale})`;

          // Shadow: visible immediately when entering light, intensifies toward center
          const shadowOpacity = 0.7 + (brightness * 0.3); // Start at 0.7, go up to 1.0
          const shadowScale = 1.5 + (brightness * 0.8); // Larger shadow range

          shadow.style.background = `radial-gradient(ellipse, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.7) 20%, rgba(0, 0, 0, 0.4) 40%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.05) 80%, transparent 100%)`;
          shadow.style.opacity = String(shadowOpacity);
          shadow.style.transform = `translateX(-50%) scaleX(${shadowScale})`;
          shadow.style.filter = 'blur(22px)';
        } else {
          (item as HTMLElement).style.filter = 'brightness(0.7)';
          (item as HTMLElement).style.transform = 'scale(1)';

          // Hide shadow completely when not in spotlight
          shadow.style.opacity = '0';
        }
      });

      requestAnimationFrame(updateSpotlight);
    };

    updateSpotlight();
  }, []);

  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="absolute inset-0 bg-slate-950/60 z-10 pointer-events-none bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />

      <div className="container mx-auto px-6 mb-6 relative z-20 text-center">
         <span className="text-cyan-500 font-bold tracking-widest uppercase text-sm">Powering The Future</span>
         <h2 className="text-3xl font-display font-bold text-white mt-2">Our Tech Stack</h2>

         {/* Chandelier with spotlight effect */}
         <div className="relative mt-8 flex justify-center">
           {/* Lamp Image */}
           <div ref={lampRef} className="relative z-30">
             <img
               src="/light.png"
               alt="Pendant Lamp"
               className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
             />
           </div>

           {/* Single unified light cone */}
           <div className="absolute top-[60px] left-1/2 -translate-x-1/2 w-[320px] h-[320px] sm:top-[75px] sm:w-[600px] sm:h-[500px] z-20 pointer-events-none">
             <div className="w-full h-full"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(255, 235, 150, 0.7) 0%, rgba(252, 211, 77, 0.6) 10%, rgba(251, 191, 36, 0.5) 20%, rgba(245, 158, 11, 0.35) 35%, rgba(217, 119, 6, 0.2) 50%, rgba(180, 83, 9, 0.1) 70%, rgba(120, 53, 15, 0.03) 85%, transparent 100%)',
                    filter: 'blur(60px)'
                  }}>
             </div>
           </div>
         </div>
      </div>

      {/* Spotlight zone indicator (invisible) */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[300px] h-full pointer-events-none z-30" id="spotlight-zone"></div>

      <div className="relative flex z-20">
        <div ref={marqueeRef} className="py-12 animate-marquee whitespace-nowrap flex gap-12 items-center">
            {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, index) => (
                <div
                    key={`${tech.name}-${index}`}
                    className="flex flex-col items-center gap-4 group cursor-default tech-item relative"
                    style={{ '--stack-color': tech.color } as React.CSSProperties}
                >
                    <div
                        className="w-24 h-24 rounded-2xl bg-slate-900/70 border border-slate-800/80 flex items-center justify-center shadow-lg transition-all duration-500 ease-out transform group-hover:-translate-y-2 group-hover:bg-slate-900/90 group-hover:border-[var(--stack-color)] group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.35),0_0_30px_var(--stack-color)]"
                    >
                        <span
                            className="text-2xl font-bold transition-all duration-500"
                            style={{ color: tech.color }}
                        >
                           {tech.name.substring(0, 2)}
                        </span>
                    </div>
                    <span className="text-slate-400 font-medium transition-all duration-500 group-hover:text-[var(--stack-color)] group-hover:drop-shadow-[0_0_6px_var(--stack-color)]">{tech.name}</span>
                </div>
            ))}
        </div>
      </div>

      <style>{`
        .animate-marquee {
            animation: marquee 65s linear infinite;
        }
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
        }

        /* Smooth transitions for spotlight effect */
        .tech-item {
            transition: filter 0.3s ease-out, transform 0.3s ease-out;
            filter: brightness(0.7);
        }

        /* Smooth text transitions */
        .tech-item span {
            transition: all 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default TechStack;
