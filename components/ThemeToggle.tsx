import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-200/80 border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 light:hover:bg-slate-300/80 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : 180,
          scale: theme === 'dark' ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon size={20} className="text-cyan-400" />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'light' ? 0 : -180,
          scale: theme === 'light' ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun size={20} className="text-amber-500" />
      </motion.div>

      {/* Spacer to maintain button size */}
      <div className="w-5 h-5 opacity-0">
        <Moon size={20} />
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
