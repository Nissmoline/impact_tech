import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Hexagon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50/80 backdrop-blur-md py-4 border-b border-white/5 dark:border-white/5 light:border-slate-200'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative">
        <Link
          to="/"
          className="flex items-center gap-2 text-white dark:text-white light:text-slate-900 font-display font-bold text-xl tracking-tight z-50 hover:opacity-80 transition-opacity"
          aria-label="Impact Tech - Home"
        >
          <Hexagon className="text-cyan-400 fill-cyan-400/20" size={32} strokeWidth={1.5} aria-hidden="true" />
          IMPACT TECH
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {['Services', 'Projects', 'Process', 'About'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors text-sm font-medium"
              aria-label={`Navigate to ${item} section`}
            >
              {item}
            </a>
          ))}
          <ThemeToggle />
          <button
            className="px-5 py-2 bg-white/10 dark:bg-white/10 light:bg-slate-900/10 hover:bg-white/20 dark:hover:bg-white/20 light:hover:bg-slate-900/20 text-white dark:text-white light:text-slate-900 rounded-full text-sm font-medium transition-colors border border-white/5 dark:border-white/5 light:border-slate-300"
            aria-label="Contact us"
          >
            Contact
          </button>
        </div>

        {/* Mobile Toggle Button (3D Flip) */}
        <div className="md:hidden flex items-center gap-2 z-50">
          <ThemeToggle />
          <div className="perspective-1000">
            <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative w-12 h-12 transform-style-3d focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-xl"
                animate={{ rotateY: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
            >
                {/* Front Side (Menu) */}
                <div className="absolute inset-0 flex items-center justify-center bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200/80 border border-white/10 dark:border-white/10 light:border-slate-300 rounded-xl backdrop-blur-md backface-hidden shadow-lg group">
                    <Menu className="text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors" size={24} aria-hidden="true" />
                </div>

                {/* Back Side (Close) */}
                <div
                    className="absolute inset-0 flex items-center justify-center bg-cyan-900/80 dark:bg-cyan-900/80 light:bg-cyan-100/80 border border-cyan-500/30 rounded-xl backdrop-blur-md backface-hidden shadow-lg shadow-cyan-500/20"
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <X className="text-cyan-400 dark:text-cyan-400 light:text-cyan-600" size={24} aria-hidden="true" />
                </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
            {isMobileMenuOpen && (
                <motion.div
                    id="mobile-menu"
                    initial={{ opacity: 0, rotateX: -30, y: -20, scale: 0.9 }}
                    animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                    exit={{ opacity: 0, rotateX: 20, y: -20, scale: 0.9 }}
                    transition={{ duration: 0.4, type: "spring" }}
                    className="absolute top-20 left-0 right-0 px-4 perspective-1000 md:hidden z-40"
                    role="menu"
                    aria-label="Mobile navigation menu"
                >
                    <div className="bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-2 transform-style-3d origin-top relative overflow-hidden">
                        
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

                        {['Services', 'Projects', 'Process', 'About'].map((item, i) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1 + i * 0.1 }}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group"
                            >
                                <span className="text-lg font-medium text-slate-300 group-hover:text-white transition-colors">{item}</span>
                                <div className="w-2 h-2 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.a>
                        ))}
                        
                         <motion.button 
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="w-full py-4 mt-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-bold shadow-lg shadow-cyan-500/20 active:scale-95 transition-all"
                         >
                            Start Project
                         </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

      </div>
    </nav>
  );
};

export default Navigation;