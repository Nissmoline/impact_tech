import React from 'react';
import { motion } from 'framer-motion';
import { useTestimonials } from '../hooks/useCMS';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const { data: cmsTestimonials } = useTestimonials();

  // Use CMS data if available, otherwise fallback to constants
  const testimonials = cmsTestimonials || TESTIMONIALS.map(t => ({
    id: String(t.id),
    name: t.name,
    role: t.role,
    company: t.company,
    content: t.quote,
    avatar: '',
    rating: 5,
    order: t.id,
    published: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }));

  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-display font-bold text-white mb-16 text-center">What People Say</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10" />
              <div className="h-full bg-slate-900 p-8 rounded-2xl border border-slate-800 relative z-0">
                <Quote className="text-slate-700 mb-6" size={40} />
                <p className="text-slate-300 mb-8 italic leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  {t.avatar ? (
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center font-bold text-white">
                      {t.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="text-white font-bold">{t.name}</h4>
                    <span className="text-sm text-cyan-400">{t.role}, {t.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;