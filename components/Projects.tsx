import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = PROJECTS.length;
  const { t } = useTranslation();

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
  }, []);

  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < totalSlides - 1;
  const progress = totalSlides > 1 ? (activeIndex / (totalSlides - 1)) * 100 : 100;
  const currentLabel = String(activeIndex + 1).padStart(2, '0');
  const totalLabel = String(totalSlides).padStart(2, '0');

  return (
    <section className="relative overflow-hidden bg-transparent py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.35em] text-cyan-300">{t('home.projects.badge')}</span>
            <h2 className="mt-4 text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400">
              {t('home.projects.title')}
            </h2>
            <p className="text-slate-400 mt-4">
              {t('home.projects.description')}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-sm text-slate-400">
              <span className="text-white font-semibold">{currentLabel}</span>
              <span className="mx-2 text-slate-500">/</span>
              <span>{totalLabel}</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollToSlide(activeIndex - 1)}
                disabled={!canGoPrev}
                className="p-3 rounded-full border border-white/10 text-slate-200 hover:bg-white/10 transition disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label={t('home.projects.aria.previous')}
              >
                <ArrowLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => scrollToSlide(activeIndex + 1)}
                disabled={!canGoNext}
                className="p-3 rounded-full border border-white/10 text-slate-200 hover:bg-white/10 transition disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label={t('home.projects.aria.next')}
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="relative mt-12">
          <div
            ref={carouselRef}
            className="flex gap-6 sm:gap-8 lg:gap-10 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {PROJECTS.map((project, index) => (
              <div
                key={project.id}
                ref={(element) => {
                  slideRefs.current[index] = element;
                }}
                className="snap-center shrink-0 w-[85vw] sm:w-[70vw] lg:w-[60vw]"
              >
                <div className="group relative h-[52vh] min-h-[360px] sm:h-[56vh] lg:h-[520px] w-full overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/60 shadow-[0_30px_80px_-40px_rgba(8,15,30,0.8)]">
                  <div className="absolute inset-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/10" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <span className="text-cyan-300 text-xs font-semibold uppercase tracking-[0.3em]">
                            {project.category}
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3">
                            {project.title}
                          </h3>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {project.stack.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-xs text-slate-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-white text-slate-950 rounded-full hover:bg-cyan-400 transition-colors"
                            >
                              <ExternalLink size={20} />
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-slate-800 text-white border border-white/10 rounded-full hover:bg-slate-700 transition-colors"
                            >
                              <Github size={20} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {PROJECTS.map((_, index) => (
              <button
                key={`project-dot-${index}`}
                type="button"
                onClick={() => scrollToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? 'w-8 bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]'
                    : 'w-3 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={t('home.projects.aria.goTo', { index: index + 1 })}
              />
            ))}
          </div>

          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-500">
            <span>{t('home.projects.progress')}</span>
            <div className="h-1 w-32 rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
