import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Filter, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { t } = useTranslation('portfolio');

  // Get unique categories
  const categoryIds = Array.from(new Set(PROJECTS.map(p => p.category)));
  const categories = [
    { id: 'all', label: t('filters.all') },
    ...categoryIds.map((category) => ({
      id: category,
      label: t(`categories.${category}`, { defaultValue: category }),
    })),
  ];

  // Filter projects by category
  const projects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const totalSlides = projects.length;

  const scrollToSlide = (index: number) => {
    const clampedIndex = Math.max(0, Math.min(index, totalSlides - 1));
    const targetSlide = slideRefs.current[clampedIndex];
    if (!targetSlide) return;
    setActiveIndex(clampedIndex);
    targetSlide.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    const slides = slideRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!carousel || slides.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = slides.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      {
        root: carousel,
        threshold: 0.6,
      }
    );

    slides.forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, [projects.length, selectedCategory]);

  useEffect(() => {
    setActiveIndex(0);
    if (!carouselRef.current) return;
    requestAnimationFrame(() => {
      carouselRef.current?.scrollTo({ left: 0, behavior: 'auto' });
    });
  }, [selectedCategory]);

  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < totalSlides - 1;
  const progress = totalSlides > 1 ? (activeIndex / (totalSlides - 1)) * 100 : 100;
  const currentLabel = String(activeIndex + 1).padStart(2, '0');
  const totalLabel = String(totalSlides).padStart(2, '0');

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
            {t('hero.title')}
          </h1>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-lg max-w-2xl mx-auto">
            {t('hero.subtitle')}
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
            <span className="text-sm font-semibold">{t('filters.label')}</span>
          </div>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setActiveIndex(0);
              }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/50'
                  : 'bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-200/80 text-slate-400 dark:text-slate-400 light:text-slate-600 border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 light:hover:border-cyan-500'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Main Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
            <div className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600">
              <span className="text-white dark:text-white light:text-slate-900 font-semibold">{currentLabel}</span>
              <span className="mx-2 text-slate-500 dark:text-slate-500 light:text-slate-400">/</span>
              <span>{totalLabel}</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollToSlide(activeIndex - 1)}
                disabled={!canGoPrev}
                className="p-3 rounded-full border border-white/10 dark:border-white/10 light:border-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-900 hover:bg-white/10 light:hover:bg-slate-200/70 transition disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label={t('carousel.previous')}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scrollToSlide(activeIndex + 1)}
                disabled={!canGoNext}
                className="p-3 rounded-full border border-white/10 dark:border-white/10 light:border-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-900 hover:bg-white/10 light:hover:bg-slate-200/70 transition disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label={t('carousel.next')}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex gap-6 sm:gap-8 lg:gap-10 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((project, index) => {
              const projectTitle = t(`projects.${project.id}.title`, { defaultValue: project.title });
              const projectCategory = t(`categories.${project.category}`, { defaultValue: project.category });
              return (
              <div
                key={project.id}
                ref={(element) => {
                  slideRefs.current[index] = element;
                }}
                className="snap-center shrink-0 w-[85vw] sm:w-[70vw] lg:w-[60vw]"
              >
                <div className="group relative w-full h-[62vh] min-h-[420px] sm:h-[68vh] lg:h-[520px] perspective-1000">
                  <div className="w-full h-full bg-slate-900 dark:bg-slate-900 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 rounded-[32px] overflow-hidden relative shadow-[0_30px_80px_-40px_rgba(8,15,30,0.8)] transform-style-3d">
                    <div className="absolute inset-0 pointer-events-none">
                      <img
                        src={project.image}
                        alt={projectTitle}
                        decoding="async"
                        className="w-full h-full object-cover opacity-70 dark:opacity-70 light:opacity-50 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/20 dark:from-slate-950 dark:via-slate-950/80 dark:to-slate-950/20 light:from-slate-100 light:via-slate-100/80 light:to-slate-100/20" />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 lg:p-12">
                      <div className="flex justify-between items-start">
                        <motion.span
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="px-4 py-2 bg-cyan-500/20 dark:bg-cyan-500/20 light:bg-cyan-500/30 backdrop-blur-md border border-cyan-500/30 dark:border-cyan-500/30 light:border-cyan-500/50 rounded-full text-cyan-400 dark:text-cyan-400 light:text-cyan-600 text-sm font-bold uppercase tracking-wider"
                        >
                          {projectCategory}
                        </motion.span>

                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="px-4 py-2 bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-200/80 backdrop-blur-md border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300 rounded-full text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm font-medium"
                        >
                          {index + 1} / {projects.length}
                        </motion.div>
                      </div>

                      <div>
                        <motion.h2
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white dark:text-white light:text-slate-900 mb-4"
                        >
                          {projectTitle}
                        </motion.h2>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="flex flex-wrap gap-2 mb-8"
                        >
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 bg-white/10 dark:bg-white/10 light:bg-slate-800/10 border border-white/10 dark:border-white/10 light:border-slate-300 rounded-full text-sm text-slate-200 dark:text-slate-200 light:text-slate-700 backdrop-blur-md font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="flex flex-wrap gap-3"
                        >
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/btn px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-105"
                            >
                              <Play size={18} className="group-hover/btn:scale-110 transition-transform" />
                              <span>{t('actions.viewDemo')}</span>
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/btn px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-105"
                            >
                              <span>{t('actions.viewLive')}</span>
                              <ExternalLink size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-8 py-3 bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200/90 border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300 rounded-full font-semibold text-white dark:text-white light:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-300 transition-all duration-300 flex items-center gap-2 backdrop-blur-md hover:scale-105"
                            >
                              <Github size={18} />
                              <span>{t('actions.sourceCode')}</span>
                            </a>
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? 'w-8 bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]'
                      : 'w-3 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={t('carousel.goTo', { index: index + 1 })}
                />
              ))}
            </div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-500">
              <span>{t('carousel.progress')}</span>
              <div className="h-1 w-32 rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-16 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => {
            const projectTitle = t(`projects.${project.id}.title`, { defaultValue: project.title });
            return (
              <motion.button
                key={project.id}
                onClick={() => scrollToSlide(index)}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  index === activeIndex
                    ? 'border-cyan-500 shadow-lg shadow-cyan-500/50'
                    : 'border-slate-700/50 dark:border-slate-700/50 light:border-slate-300 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 light:hover:border-cyan-500'
                }`}
              >
                <img
                  src={project.image}
                  alt={projectTitle}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent flex items-end p-2 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                } transition-opacity`}>
                  <span className="text-white text-xs font-semibold truncate">{projectTitle}</span>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
        >
          {[
            { label: t('stats.totalProjects'), value: 85/* PROJECTS.length */ },
            { label: t('stats.categories'), value: categoryIds.length },
            { label: t('stats.technologies'), value: new Set(PROJECTS.flatMap(p => p.stack)).size },
            { label: t('stats.happyClients'), value: 85/* PROJECTS.length */ },
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
