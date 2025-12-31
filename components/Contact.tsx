import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const PROJECT_TYPE_OPTIONS = [
  '3D & Interactive Experiences',
  'Web Development',
  'UX/UI & Design Systems',
  'Mobile Apps',
  'Backend & APIs',
  'DevOps & Reliability',
  'QA & Test Automation',
];

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    type: '',
    customType: '',
    budget: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Start a Project</h2>
                <p className="text-slate-400">Tell us about your vision. We'll build the reality.</p>
            </div>

            {isSubmitted ? (
                <div className="min-h-[400px] flex flex-col items-center justify-center text-center animate-fadeIn">
                    <CheckCircle className="text-green-500 w-20 h-20 mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
                    <p className="text-slate-400">We'll analyze your request and orbit back to you shortly.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Your Name</label>
                            <input 
                                required
                                type="text" 
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                                placeholder="John Doe"
                                value={formState.name}
                                onChange={e => setFormState({...formState, name: e.target.value})}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Email Address</label>
                            <input 
                                required
                                type="email" 
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                                placeholder="john@example.com"
                                value={formState.email}
                                onChange={e => setFormState({...formState, email: e.target.value})}
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Project Type</label>
                            <div className="space-y-3">
                              <select 
                                required
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all appearance-none"
                                value={formState.type}
                                onChange={e => handleTypeChange(e.target.value)}
                              >
                                <option value="">Select a project type</option>
                                {PROJECT_TYPE_OPTIONS.map((option) => (
                                  <option key={option} value={option}>{option}</option>
                                ))}
                                <option value="other">Other (write below)</option>
                              </select>
                              <input
                                type="text"
                                placeholder="Custom project type (tell us what you need)"
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                value={formState.customType}
                                onChange={e => setFormState(prev => ({ ...prev, customType: e.target.value }))}
                                required={formState.type === 'other'}
                                disabled={formState.type !== 'other'}
                                aria-label="Custom project type"
                              />
                              <p className="text-xs text-slate-500">Choose one of our services or describe yours.</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Business Range</label>
                             <select 
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all appearance-none"
                                value={formState.budget}
                                onChange={e => setFormState({...formState, budget: e.target.value})}
                            >
                                <option>Select a range of your business</option>
                                <option>€5k - €10k</option>
                                <option>€10k - €25k</option>
                                <option>€25k - €50k</option>
                                <option>€50k+</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Project Brief</label>
                        <textarea 
                            required
                            rows={4}
                            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                            placeholder="Tell us about the goals, timeline, and tech requirements..."
                            value={formState.message}
                            onChange={e => setFormState({...formState, message: e.target.value})}
                        ></textarea>
                    </div>

                    <button type="submit" className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2">
                        <Send size={20} />
                        Launch Project
                    </button>
                </form>
            )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
