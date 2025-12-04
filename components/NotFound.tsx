import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 dark:bg-slate-950 light:bg-slate-50 px-6">
      <div className="text-center">
        {/* 404 Number */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="mb-8"
        >
          <h1 className="text-9xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
            404
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-white dark:text-white light:text-slate-900 mb-4"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-slate-400 dark:text-slate-400 light:text-slate-600 mb-8 max-w-md mx-auto"
        >
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </motion.p>

        {/* Animated 3D Cube */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12 flex justify-center"
        >
          <motion.div
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="w-32 h-32"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="w-full h-full border-4 border-cyan-500/30 rounded-lg backdrop-blur-sm bg-slate-800/20 dark:bg-slate-800/20 light:bg-slate-200/40" />
          </motion.div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={handleGoHome}
            className="group px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
            aria-label="Go to homepage"
          >
            <Home size={20} />
            <span>Go Home</span>
          </button>

          <button
            onClick={handleGoBack}
            className="group px-6 py-3 bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-200/80 border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300 rounded-lg font-semibold text-white dark:text-white light:text-slate-900 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 light:hover:bg-slate-300/80 transition-all duration-300 flex items-center justify-center gap-2"
            aria-label="Go back to previous page"
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
