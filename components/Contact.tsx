import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    type: '',
    customType: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const projectTypeOptions = t('home.contact.projectTypes', { returnObjects: true }) as string[];
  const inputClass =
    'w-full rounded-xl bg-slate-800/60 border border-slate-700/70 p-4 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/40 outline-none transition';
  const selectClass = `${inputClass} appearance-none`;

  const handleTypeChange = (value: string) => {
    setFormState((prev) => ({
      ...prev,
      type: value,
      customType: value === 'other' ? prev.customType : '',
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulate submission
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-24 relative overflow-hidden flex items-center justify-center bg-slate-950">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500" />
            
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                  {t('home.contact.title')}
                </h2>
                <p className="text-slate-400">{t('home.contact.subtitle')}</p>
            </div>

            {isSubmitted ? (
                <div className="min-h-[400px] flex flex-col items-center justify-center text-center animate-fadeIn">
                    <CheckCircle className="text-green-500 w-20 h-20 mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-2">{t('home.contact.successTitle')}</h3>
                    <p className="text-slate-400">{t('home.contact.successDescription')}</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">{t('home.contact.labels.name')}</label>
                            <input 
                                required
                                type="text" 
                                autoComplete="name"
                                className={inputClass}
                                placeholder={t('home.contact.placeholders.name')}
                                value={formState.name}
                                onChange={e => setFormState({...formState, name: e.target.value})}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">{t('home.contact.labels.email')}</label>
                            <input 
                                required
                                type="email" 
                                autoComplete="email"
                                className={inputClass}
                                placeholder={t('home.contact.placeholders.email')}
                                value={formState.email}
                                onChange={e => setFormState({...formState, email: e.target.value})}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">{t('home.contact.labels.projectType')}</label>
                        <div className="space-y-3">
                          <select 
                            required
                            className={selectClass}
                            value={formState.type}
                            onChange={e => handleTypeChange(e.target.value)}
                          >
                            <option value="">{t('home.contact.placeholders.projectType')}</option>
                            {projectTypeOptions.map((option) => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                            <option value="other">{t('home.contact.projectTypeOther')}</option>
                          </select>
                          <input
                            type="text"
                            placeholder={t('home.contact.placeholders.customType')}
                            className={`${inputClass} disabled:opacity-60 disabled:cursor-not-allowed`}
                            value={formState.customType}
                            onChange={e => setFormState(prev => ({ ...prev, customType: e.target.value }))}
                            required={formState.type === 'other'}
                            disabled={formState.type !== 'other'}
                            aria-label={t('home.contact.customTypeAria')}
                          />
                          <p className="text-xs text-slate-500">{t('home.contact.projectTypeHint')}</p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">{t('home.contact.labels.brief')}</label>
                        <textarea 
                            required
                            rows={4}
                            className={`${inputClass} resize-y`}
                            placeholder={t('home.contact.placeholders.brief')}
                            value={formState.message}
                            onChange={e => setFormState({...formState, message: e.target.value})}
                        ></textarea>
                    </div>

                    <button type="submit" className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-bold text-lg hover:shadow-[0_0_24px_rgba(6,182,212,0.45)] transition-all flex items-center justify-center gap-2">
                        <Send size={20} />
                        {t('home.contact.submit')}
                    </button>
                </form>
            )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
