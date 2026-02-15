import React from 'react';
import { Mail, MapPin, Phone, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAccentTheme } from '../contexts/AccentThemeContext';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { accentTheme } = useAccentTheme();
  const accentStyles = {
    cyan: {
      bar: 'from-cyan-500 via-blue-500 to-cyan-500',
      icon: 'bg-cyan-500/10 text-cyan-300',
      hoverBorder: 'hover:border-cyan-500/40',
      hoverText: 'hover:text-cyan-300',
    },
    purple: {
      bar: 'from-purple-500 via-fuchsia-500 to-purple-500',
      icon: 'bg-purple-500/10 text-purple-300',
      hoverBorder: 'hover:border-purple-500/40',
      hoverText: 'hover:text-purple-300',
    },
    emerald: {
      bar: 'from-emerald-500 via-teal-500 to-emerald-500',
      icon: 'bg-emerald-500/10 text-emerald-300',
      hoverBorder: 'hover:border-emerald-500/40',
      hoverText: 'hover:text-emerald-300',
    },
  }[accentTheme];

  const contactItems = [
    {
      key: 'address',
      icon: MapPin,
      label: t('home.contact.details.addressLabel'),
      value: t('home.contact.details.addressValue'),
    },
    {
      key: 'landline',
      icon: Phone,
      label: t('home.contact.details.landlineLabel'),
      value: t('home.contact.details.landlineValue'),
      href: 'tel:+302110068114',
    },
    {
      key: 'mobile',
      icon: Smartphone,
      label: t('home.contact.details.mobileLabel'),
      value: t('home.contact.details.mobileValue'),
      href: 'tel:+306973858321',
    },
    {
      key: 'email',
      icon: Mail,
      label: t('home.contact.details.emailLabel'),
      value: t('home.contact.details.emailValue'),
      href: 'mailto:info@impact-tech.gr',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-slate-950">
        <div
          className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.15),transparent_50%)] transition-opacity duration-700 ${
            accentTheme === 'purple' ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <div
          className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.18),transparent_50%)] transition-opacity duration-700 ${
            accentTheme === 'purple' ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.18),transparent_50%)] transition-opacity duration-700 ${
            accentTheme === 'emerald' ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              {t('home.contact.title')}
            </h2>
            <p className="text-slate-400 text-lg">{t('home.contact.subtitle')}</p>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative">
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${accentStyles.bar}`} />
            <div className="space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.key}
                    className={`flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-5 transition hover:bg-slate-900/60 ${accentStyles.hoverBorder}`}
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${accentStyles.icon}`}>
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-slate-400">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className={`text-lg text-white transition-colors ${accentStyles.hoverText}`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg text-white whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
