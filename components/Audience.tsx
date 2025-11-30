import React from 'react';
import { Terminal, PenTool, Cpu, Layers } from 'lucide-react';
import TiltCard from './ui/TiltCard';

const Audience: React.FC = () => {
  return (
    <section className="py-32 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* For Developers */}
          <TiltCard className="h-full">
            <div className="h-full p-8 md:p-12 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                <Terminal size={200} />
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8 text-blue-400">
                    <Cpu size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-4">For Engineers</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                    Clean code, scalable architecture, and performance-first methodology. We speak your language—TypeScript, clean abstractions, and robust CI/CD pipelines.
                </p>
                <ul className="space-y-4 text-slate-300">
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        Component-Driven Development
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        Type-Safe Systems
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        WebGL Performance Optimization
                    </li>
                </ul>
              </div>
            </div>
          </TiltCard>

          {/* For Designers */}
          <TiltCard className="h-full">
            <div className="h-full p-8 md:p-12 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                <PenTool size={200} />
              </div>
              
              <div className="relative z-10">
                 <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-8 text-purple-400">
                    <Layers size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-4">For Designers</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                    Pixel-perfect implementation of your vision. We respect the grid, the motion, and the whitespace. Your Figma files come to life exactly as intended.
                </p>
                <ul className="space-y-4 text-slate-300">
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                        Fluid Micro-interactions
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                        Advanced Layouts (Grid/Flex)
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                        Faithful Design System Translation
                    </li>
                </ul>
              </div>
            </div>
          </TiltCard>

        </div>
      </div>
    </section>
  );
};

export default Audience;