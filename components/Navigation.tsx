import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Hexagon, Menu, X, ChevronDown, LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '../constants';
// import ThemeToggle from './ThemeToggle';

type NavItem = {
  label: string;
  type: 'anchor' | 'route' | 'dropdown';
  href?: string;
  submenu?: {
    label: string;
    href: string;
    description?: string;
    icon?: LucideIcon;
  }[];
};

const navItems: NavItem[] = [
  {
    label: 'Services',
    type: 'dropdown',
    submenu: SERVICES.map(service => ({
      label: service.title,
      href: `/services/${service.slug}`,
      description: service.description.slice(0, 60) + '...',
      icon: service.icon
    }))
  },
  { label: 'Projects', href: '/#projects', type: 'anchor' },
  { label: 'Process', href: '/#process', type: 'anchor' },
  { label: 'About', href: '/about', type: 'route' },
];

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to home page and scroll to top
      navigate('/');
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  // Desktop Dropdown Component
  const DropdownMenu: React.FC<{ item: NavItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button className="text-slate-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-1">
          {item.label}
          <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isOpen && item.submenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="fixed left-1/2 top-[72px] w-[1200px] max-w-[calc(100vw-32px)] bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl px-5 py-4 grid grid-cols-2 lg:grid-cols-4 gap-3 z-50"
              style={{ x: '-50%' }}
            >
              {item.submenu.map((subitem) => {
                const SubIcon = subitem.icon;
                return (
                  <Link
                    key={subitem.href}
                    to={subitem.href}
                    className="flex h-full items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    {SubIcon && (
                      <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:bg-cyan-500/20">
                        <SubIcon size={20} />
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="text-white font-medium text-sm group-hover:text-cyan-300">{subitem.label}</p>
                      {subitem.description && (
                        <p className="text-slate-400 text-xs mt-1">{subitem.description}</p>
                      )}
                    </div>
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

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
          onClick={handleLogoClick}
          className="flex items-center gap-3 text-white dark:text-white light:text-slate-900 font-display font-bold text-xl tracking-tight z-50 hover:opacity-80 transition-opacity cursor-pointer"
          aria-label="Impact Tech - Home"
        >
          <span className="footer-logo relative flex h-11 w-11 items-center justify-center">
            <span className="footer-logo-glow absolute inset-0 rounded-full" aria-hidden="true" />
            <svg
              className="footer-logo-ring absolute inset-0"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <polygon
                className="footer-logo-base"
                points="50,6 92,28 92,72 50,94 8,72 8,28"
              />
              <polygon
                className="footer-logo-trace"
                points="50,6 92,28 92,72 50,94 8,72 8,28"
              />
            </svg>
            <Hexagon className="relative z-10 text-cyan-300" size={22} />
          </span>
          IMPACT TECH
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            if (item.type === 'dropdown') {
              return <DropdownMenu key={item.label} item={item} />;
            }
            if (item.type === 'anchor') {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors text-sm font-medium"
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                </a>
              );
            }
            return (
              <Link
                key={item.label}
                to={item.href!}
                className="text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors text-sm font-medium"
                aria-label={`Navigate to ${item.label} page`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/portfolio"
            className="text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors text-sm font-medium"
            aria-label="View our portfolio"
          >
            Portfolio
          </Link>
          {/* <ThemeToggle /> */}
          <a
            href="/#contact"
            className="px-5 py-2 bg-white/10 dark:bg-white/10 light:bg-slate-900/10 hover:bg-white/20 dark:hover:bg-white/20 light:hover:bg-slate-900/20 text-white dark:text-white light:text-slate-900 rounded-full text-sm font-medium transition-colors border border-white/5 dark:border-white/5 light:border-slate-300"
            aria-label="Contact us"
          >
            Contact
          </a>
        </div>

        {/* Mobile Toggle Button (3D Flip) */}
        <div className="md:hidden flex items-center gap-2 z-50">
          {/* <ThemeToggle /> */}
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

                        {navItems.map((item, i) => {
                          const delay = 0.1 + i * 0.1;

                          if (item.type === 'dropdown') {
                            return (
                              <motion.div
                                key={item.label}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay }}
                              >
                                <button
                                  onClick={() => setOpenSubmenu(openSubmenu === item.label ? null : item.label)}
                                  className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                                >
                                  <span className="text-lg font-medium text-slate-300">{item.label}</span>
                                  <ChevronDown
                                    size={20}
                                    className={`transition-transform ${openSubmenu === item.label ? 'rotate-180' : ''}`}
                                  />
                                </button>

                                <AnimatePresence>
                                  {openSubmenu === item.label && item.submenu && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      className="overflow-hidden pl-4"
                                    >
                                      {item.submenu.map((subitem) => {
                                        const SubIcon = subitem.icon;
                                        return (
                                          <Link
                                            key={subitem.href}
                                            to={subitem.href}
                                            onClick={() => {
                                              setIsMobileMenuOpen(false);
                                              setOpenSubmenu(null);
                                            }}
                                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
                                          >
                                            {SubIcon && <SubIcon size={18} />}
                                            <span className="text-sm">{subitem.label}</span>
                                          </Link>
                                        );
                                      })}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </motion.div>
                            );
                          }

                          if (item.type === 'anchor') {
                            return (
                              <motion.a
                                  key={item.label}
                                  href={item.href}
                                  initial={{ x: -20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay }}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="relative flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group"
                              >
                                  <span className="text-lg font-medium text-slate-300 group-hover:text-white transition-colors">{item.label}</span>
                                  <div className="w-2 h-2 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </motion.a>
                            );
                          }

                          return (
                            <motion.div
                              key={item.label}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay }}
                            >
                              <Link
                                to={item.href!}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group"
                              >
                                <span className="text-lg font-medium text-slate-300 group-hover:text-white transition-colors">{item.label}</span>
                                <div className="w-2 h-2 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </Link>
                            </motion.div>
                          );
                        })}

                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Link
                                to="/portfolio"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group"
                            >
                                <span className="text-lg font-medium text-slate-300 group-hover:text-white transition-colors">Portfolio</span>
                                <div className="w-2 h-2 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                        </motion.div>
                        
                         <motion.a 
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            href="/#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full text-center py-4 mt-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-bold shadow-lg shadow-cyan-500/20 active:scale-95 transition-all"
                         >
                            Start Project
                         </motion.a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

      </div>
    </nav>
  );
};

export default Navigation;
