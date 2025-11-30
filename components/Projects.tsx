import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="h-[300vh] bg-slate-950 relative">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        <div className="absolute top-10 left-6 z-20">
             <h2 className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500">
               Featured Works
             </h2>
             <p className="text-slate-400 mt-2">Scroll to explore the gallery</p>
        </div>

        <motion.div style={{ x }} className="flex gap-10 px-6 sm:px-24">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative w-[85vw] md:w-[600px] h-[50vh] md:h-[60vh] flex-shrink-0 perspective-1000">
              <div 
                className="w-full h-full bg-slate-900 border border-white/10 rounded-3xl overflow-hidden relative shadow-2xl transition-transform duration-500 group-hover:rotate-y-6 group-hover:scale-[1.02] transform-style-3d"
              >
                {/* Image Background */}
                <div className="absolute inset-0">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-z-20">
                  <div className="flex justify-between items-end">
                    <div>
                        <span className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-2 block">{project.category}</span>
                        <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.stack.map(tech => (
                                <span key={tech} className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-xs text-slate-200 backdrop-blur-md">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                        <button className="p-3 bg-white text-slate-950 rounded-full hover:bg-cyan-400 transition-colors">
                            <ExternalLink size={20} />
                        </button>
                        <button className="p-3 bg-slate-800 text-white border border-white/10 rounded-full hover:bg-slate-700 transition-colors">
                            <Github size={20} />
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Spacer */}
          <div className="w-[10vw]"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;