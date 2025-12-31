import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Layout, ChevronDown, Zap, Play, Check, MousePointer2 } from 'lucide-react';
import Scene3D from './Scene3D';

const THEMES = {
  cyan: {
    id: 'cyan',
    accent: 'text-cyan-400',
    accentBg: 'bg-cyan-400',
    button: 'bg-cyan-500 hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)]',
    badge: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
    coreGradient: 'from-cyan-500 to-blue-600',
    glow: 'drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]',
    codeHighlight: 'text-cyan-400'
  },
  purple: {
    id: 'purple',
    accent: 'text-purple-400',
    accentBg: 'bg-purple-500',
    button: 'bg-purple-600 hover:bg-purple-500 shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_30px_rgba(147,51,234,0.7)]',
    badge: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
    coreGradient: 'from-purple-600 to-pink-600',
    glow: 'drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]',
    codeHighlight: 'text-purple-400'
  },
  emerald: {
    id: 'emerald',
    accent: 'text-emerald-400',
    accentBg: 'bg-emerald-500',
    button: 'bg-emerald-600 hover:bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.7)]',
    badge: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    coreGradient: 'from-emerald-600 to-teal-600',
    glow: 'drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]',
    codeHighlight: 'text-emerald-400'
  }
};

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const rotate = useTransform(scrollY, [0, 500], [0, 20]);
  
  // Interactive States
  const [activeTheme, setActiveTheme] = useState<keyof typeof THEMES>('cyan');
  const [codeStatus, setCodeStatus] = useState<'idle' | 'running' | 'success'>('idle');
  const [uiToggled, setUiToggled] = useState(false);

  const theme = THEMES[activeTheme];

  const handleRunCode = (e: React.MouseEvent) => {
    // stopPropagation to prevent dragging when clicking the button
    e.stopPropagation();
    if (codeStatus !== 'idle') return;
    
    setCodeStatus('running');
    setTimeout(() => {
      setCodeStatus('success');
      setTimeout(() => setCodeStatus('idle'), 3000);
    }, 1500);
  };

  const handleThemeChange = (e: React.MouseEvent, newTheme: keyof typeof THEMES) => {
    e.stopPropagation();
    setActiveTheme(newTheme);
  };

  const handleUiToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setUiToggled(!uiToggled);
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-2000">
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-slate-950 z-0 transition-colors duration-700">
        <div className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.15),transparent_50%)] transition-opacity duration-700 ${activeTheme === 'purple' ? 'opacity-0' : 'opacity-100'}`} />
        <div className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.15),transparent_50%)] transition-opacity duration-700 ${activeTheme === 'purple' ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.15),transparent_50%)] transition-opacity duration-700 ${activeTheme === 'emerald' ? 'opacity-100' : 'opacity-0'}`} />
        
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left order-2 lg:order-1 relative z-30"
        >
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-6 transition-colors duration-300 ${theme.badge}`}>
            <Zap size={14} className="animate-pulse" />
            <span>Next-Gen Web Engineering</span>
          </div>
          
          <h1 className={`text-5xl lg:text-7xl font-display font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-6 transition-all duration-500 ${theme.glow}`}>
            We Craft Bold Web Experiences in <span className={`transition-colors duration-500 ${theme.accent}`}>3D</span>.
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            We design and build end-to-end digital products—3D web experiences, high-performance websites, SaaS platforms, mobile apps, secure APIs, and cloud/QA pipelines—so your product stands out and scales.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className={`px-8 py-4 text-slate-950 font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${theme.button}`}>
              Start Your Project
              <ChevronDown className="rotate-[-90deg]" size={18} />
            </button>
            <Link
              to="/portfolio"
              className="px-8 py-4 bg-transparent border border-slate-700 hover:border-white text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2 group"
              aria-label="View our portfolio"
            >
              View Our Work
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </motion.div>

        {/* 3D Scene */}
        <div className="relative h-[500px] w-full flex items-center justify-center perspective-1000 order-1 lg:order-2">
          {/* WebGL 3D Scene Background */}
          <div className="absolute inset-0 z-0">
            <Scene3D />
          </div>

          <motion.div
            style={{ y: y1 }}
            className="relative w-64 h-64 lg:w-80 lg:h-80 transform-style-3d z-10"
          >
            {/* Center Core Glow */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`absolute inset-0 bg-gradient-to-br rounded-3xl opacity-20 blur-3xl animate-pulse cursor-pointer transition-colors duration-500 ${theme.coreGradient}`}
            />
            
            {/* Floating Window 1: Code */}
            <motion.div
              drag
              dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
              dragElastic={0.2}
              whileHover={{ scale: 1.1, cursor: "grab", zIndex: 50 }}
              whileDrag={{ scale: 1.15, cursor: "grabbing", zIndex: 50 }}
              className="absolute -top-10 -left-10 lg:-left-20 z-20"
            >
              <motion.div 
                animate={{ y: [0, -20, 0], rotateZ: [0, 2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl w-60 select-none group"
              >
                <div className="flex justify-between items-center mb-3">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    </div>
                    {/* Run Button */}
                    <button 
                        onPointerDown={handleRunCode}
                        className={`p-1.5 rounded-md transition-colors ${codeStatus === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white'}`}
                    >
                        {codeStatus === 'running' ? (
                             <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : codeStatus === 'success' ? (
                             <Check size={12} />
                        ) : (
                             <Play size={12} fill="currentColor" />
                        )}
                    </button>
                </div>
                
                <div className="space-y-2 font-mono text-xs">
                  {codeStatus === 'running' ? (
                      <div className="py-4 text-slate-400 animate-pulse">
                          Compiling shaders...
                      </div>
                  ) : codeStatus === 'success' ? (
                       <div className="py-4 text-green-400">
                          Build successful! <br/>
                          <span className="text-slate-500">Time: 12ms</span>
                       </div>
                  ) : (
                    <>
                        <div className="flex gap-2">
                            <span className="text-purple-400">const</span>
                            <span className="text-yellow-200">experience</span>
                            <span className="text-white">=</span>
                        </div>
                        <div className={`pl-4 transition-colors duration-300 ${theme.codeHighlight}`}>new Dimension(3);</div>
                        <div className="pl-4 text-slate-400">// Ready to launch</div>
                    </>
                  )}
                </div>
                <div className={`absolute -right-3 -bottom-3 p-2 rounded-lg text-slate-950 shadow-lg transition-colors duration-300 ${theme.accentBg}`}>
                   <Code size={16} />
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Window 2: Design */}
            <motion.div 
              drag
              dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
              dragElastic={0.2}
              whileHover={{ scale: 1.1, cursor: "grab", zIndex: 50 }}
              whileDrag={{ scale: 1.15, cursor: "grabbing", zIndex: 50 }}
              className="absolute -bottom-16 -right-5 lg:-right-24 z-20"
            >
              <motion.div 
                animate={{ y: [0, 30, 0], rotateZ: [0, -3, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl w-52 select-none"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs text-slate-400 font-sans font-bold uppercase tracking-wider">Components</span>
                  {/* Interactive Toggle */}
                  <div 
                    onPointerDown={handleUiToggle}
                    className={`w-8 h-4 rounded-full p-0.5 cursor-pointer transition-colors duration-300 ${uiToggled ? theme.accentBg : 'bg-slate-700'}`}
                  >
                      <motion.div 
                        initial={false}
                        animate={{ x: uiToggled ? 16 : 0 }}
                        className="w-3 h-3 bg-white rounded-full shadow-sm" 
                      />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <motion.div 
                    animate={{ opacity: uiToggled ? 1 : 0.5 }}
                    className="h-10 bg-slate-800 rounded flex items-center justify-center"
                  >
                      <Layout size={14} className="text-slate-600" />
                  </motion.div>
                  <motion.div 
                    animate={{ 
                        opacity: uiToggled ? 1 : 1,
                        backgroundColor: uiToggled ? (activeTheme === 'cyan' ? 'rgba(6,182,212,0.2)' : activeTheme === 'purple' ? 'rgba(168,85,247,0.2)' : 'rgba(16,185,129,0.2)') : 'rgba(15,23,42,0.5)'
                    }}
                    className={`h-10 border rounded transition-colors duration-300 ${uiToggled ? theme.badge.replace('bg-', 'border-') : 'border-cyan-500/30 bg-cyan-900/10'}`} 
                  />
                  <div className="col-span-2 h-8 bg-slate-800 rounded opacity-50 relative overflow-hidden">
                      {uiToggled && (
                          <motion.div 
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                          />
                      )}
                  </div>
                </div>
                
                {/* Cursor Hint */}
                <motion.div 
                   animate={{ 
                       x: uiToggled ? 140 : 160, 
                       y: uiToggled ? -40 : -30,
                       opacity: [0, 1, 0]
                   }}
                   transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                   className="absolute top-0 left-0 pointer-events-none text-white drop-shadow-md"
                >
                    <MousePointer2 size={16} fill="white" />
                </motion.div>

              </motion.div>
            </motion.div>

            {/* Floating Element 3: Palette (Theme Switcher) */}
            <motion.div 
              drag
              dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
              dragElastic={0.2}
              whileHover={{ scale: 1.1, cursor: "grab", zIndex: 50 }}
              whileDrag={{ scale: 1.15, cursor: "grabbing", zIndex: 50 }}
              className="absolute top-1/2 -right-20 lg:-right-32 z-20"
            >
              <motion.div 
                animate={{ x: [0, 15, 0], y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="bg-slate-800/80 backdrop-blur-md p-3 rounded-2xl border border-white/5 flex flex-col gap-3 select-none"
              >
                 <div 
                    onPointerDown={(e) => handleThemeChange(e, 'cyan')}
                    className={`w-8 h-8 rounded-full bg-cyan-400 cursor-pointer transition-transform hover:scale-125 shadow-[0_0_10px_rgba(34,211,238,0.5)] ring-2 ${activeTheme === 'cyan' ? 'ring-white' : 'ring-transparent'}`} 
                 />
                 <div 
                    onPointerDown={(e) => handleThemeChange(e, 'purple')}
                    className={`w-8 h-8 rounded-full bg-purple-500 cursor-pointer transition-transform hover:scale-125 shadow-[0_0_10px_rgba(168,85,247,0.5)] ring-2 ${activeTheme === 'purple' ? 'ring-white' : 'ring-transparent'}`} 
                 />
                 <div 
                    onPointerDown={(e) => handleThemeChange(e, 'emerald')}
                    className={`w-8 h-8 rounded-full bg-emerald-500 cursor-pointer transition-transform hover:scale-125 shadow-[0_0_10px_rgba(16,185,129,0.5)] ring-2 ${activeTheme === 'emerald' ? 'ring-white' : 'ring-transparent'}`} 
                 />
              </motion.div>
            </motion.div>

             {/* Central Logo Abstract */}
             <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none"
             >
                <div className={`w-48 h-48 rounded-full border border-dashed transition-colors duration-500 ${activeTheme === 'cyan' ? 'border-cyan-500/30' : activeTheme === 'purple' ? 'border-purple-500/30' : 'border-emerald-500/30'}`} />
             </motion.div>
             <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 flex items-center justify-center -z-10 pointer-events-none"
             >
                <div className={`w-40 h-40 rounded-full border border-dotted transition-colors duration-500 ${activeTheme === 'cyan' ? 'border-purple-500/30' : activeTheme === 'purple' ? 'border-pink-500/30' : 'border-teal-500/30'}`} />
             </motion.div>

          </motion.div>
        </div>
      </div>

      <motion.div 
        style={{ opacity: useTransform(scrollY, [0, 200], [1, 0]) }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 pointer-events-none"
      >
        <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
        <ChevronDown className="animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
