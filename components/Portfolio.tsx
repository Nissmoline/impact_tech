import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Filter, Play } from 'lucide-react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];

  // Filter projects by category
  const projects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="min-h-[100svh] bg-slate-950 dark:bg-slate-950 light:bg-slate-50 py-24">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-500 light:from-slate-900 light:via-slate-700 light:to-slate-600 mb-6">
            Our Portfolio
          </h1>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-lg max-w-2xl mx-auto">
            Explore our collection of innovative projects and successful client collaborations
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <div className="flex items-center gap-2 text-cyan-400 dark:text-cyan-400 light:text-cyan-600 mr-2">
            <Filter size={20} />
            <span className="text-sm font-semibold">Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentIndex(0);
              }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/50'
                  : 'bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-200/80 text-slate-400 dark:text-slate-400 light:text-slate-600 border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 light:hover:border-cyan-500'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Main Carousel */}
        <div className="relative max-w-6xl mx-auto">

          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-30 p-4 bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200/90 backdrop-blur-md border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300 rounded-full text-white dark:text-white light:text-slate-900 hover:bg-cyan-500 dark:hover:bg-cyan-500 light:hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-xl"
            aria-label="Previous project"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-30 p-4 bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200/90 backdrop-blur-md border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300 rounded-full text-white dark:text-white light:text-slate-900 hover:bg-cyan-500 dark:hover:bg-cyan-500 light:hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-xl"
            aria-label="Next project"
          >
            <ChevronRight size={28} />
          </button>

          {/* Project Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, x: 100, rotateY: -20 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: 20 }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="group relative w-full h-[70svh] md:h-[75svh] perspective-1000"
            >
              <div className="w-full h-full bg-slate-900 dark:bg-slate-900 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 rounded-3xl overflow-hidden relative shadow-2xl transform-style-3d">

                {/* Image Background */}
                <div className="absolute inset-0">
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover opacity-70 dark:opacity-70 light:opacity-50 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/20 dark:from-slate-950 dark:via-slate-950/80 dark:to-slate-950/20 light:from-slate-100 light:via-slate-100/80 light:to-slate-100/20" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">

                  {/* Top: Category Badge */}
                  <div className="flex justify-between items-start">
                    <motion.span
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="px-4 py-2 bg-cyan-500/20 dark:bg-cyan-500/20 light:bg-cyan-500/30 backdrop-blur-md border border-cyan-500/30 dark:border-cyan-500/30 light:border-cyan-500/50 rounded-full text-cyan-400 dark:text-cyan-400 light:text-cyan-600 text-sm font-bold uppercase tracking-wider"
                    >
                      {currentProject.category}
                    </motion.span>

                    {/* Project Counter */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="px-4 py-2 bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-200/80 backdrop-blur-md border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300 rounded-full text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm font-medium"
                    >
                      {currentIndex + 1} / {projects.length}
                    </motion.div>
                  </div>

                  {/* Bottom: Project Info */}
                  <div>
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-4xl md:text-5xl font-bold text-white dark:text-white light:text-slate-900 mb-4"
                    >
                      {currentProject.title}
                    </motion.h2>

                    {/* Tech Stack */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex flex-wrap gap-2 mb-8"
                    >
                      {currentProject.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-white/10 dark:bg-white/10 light:bg-slate-800/10 border border-white/10 dark:border-white/10 light:border-slate-300 rounded-full text-sm text-slate-200 dark:text-slate-200 light:text-slate-700 backdrop-blur-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex flex-wrap gap-3"
                    >
                      {currentProject.demo && (
                        <a
                          href={currentProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-105"
                        >
                          <Play size={18} className="group-hover/btn:scale-110 transition-transform" />
                          <span>View Demo</span>
                        </a>
                      )}
                      {currentProject.live && (
                        <a
                          href={currentProject.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-105"
                        >
                          <span>View Live</span>
                          <ExternalLink size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      )}
                      {currentProject.github && (
                        <a
                          href={currentProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-8 py-3 bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200/90 border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300 rounded-full font-semibold text-white dark:text-white light:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-300 transition-all duration-300 flex items-center gap-2 backdrop-blur-md hover:scale-105"
                        >
                          <Github size={18} />
                          <span>Source Code</span>
                        </a>
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-gradient-to-r from-cyan-500 to-purple-500'
                    : 'w-3 h-3 bg-slate-700 dark:bg-slate-700 light:bg-slate-300 hover:bg-slate-600 dark:hover:bg-slate-600 light:hover:bg-slate-400'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-16 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.button
              key={project.id}
              onClick={() => goToProject(index)}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex
                  ? 'border-cyan-500 shadow-lg shadow-cyan-500/50'
                  : 'border-slate-700/50 dark:border-slate-700/50 light:border-slate-300 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 light:hover:border-cyan-500'
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent flex items-end p-2 ${
                index === currentIndex ? 'opacity-100' : 'opacity-60 hover:opacity-100'
              } transition-opacity`}>
                <span className="text-white text-xs font-semibold truncate">{project.title}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
        >
          {[
            { label: 'Total Projects', value: 85/* PROJECTS.length */ },
            { label: 'Categories', value: categories.length - 1 },
            { label: 'Technologies', value: new Set(PROJECTS.flatMap(p => p.stack)).size },
            { label: 'Happy Clients', value: 85/* PROJECTS.length */ },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="text-center p-6 bg-slate-900/50 dark:bg-slate-900/50 light:bg-white border border-slate-800/50 dark:border-slate-800/50 light:border-slate-200 rounded-2xl"
            >
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 mb-2">
                {stat.value}+
              </div>
              <div className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
