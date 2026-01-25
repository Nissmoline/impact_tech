import React from 'react';
import { motion } from 'framer-motion';
import { Building2, User, Hash, FileText, Phone, Globe, Clock, MapPin, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const infoItemMeta = [
  { key: 'tradingName', icon: Building2, category: 'business' },
  { key: 'legalForm', icon: FileText, category: 'business' },
  { key: 'registeredOffice', icon: MapPin, category: 'contact', multiline: true },
  { key: 'telephone', icon: Phone, category: 'contact', link: 'tel:+306949214461' },
  { key: 'website', icon: Globe, category: 'contact', link: 'https://impact-tech.com' },
  { key: 'serviceHours', icon: Clock, category: 'contact' },
  { key: 'owner', icon: User, category: 'ownership' },
  { key: 'vatNumber', icon: Hash, category: 'ownership' },
  { key: 'dunsNumber', icon: Hash, category: 'ownership' },
  { key: 'gemiNumber', icon: Hash, category: 'ownership' },
  { key: 'chamberRegistration', icon: Building2, category: 'ownership', multiline: true },
];

const Impressum: React.FC = () => {
  const { t } = useTranslation('impressum');
  const infoItems = infoItemMeta.map((item) => ({
    ...item,
    label: t(`infoItems.${item.key}.label`),
    value: t(`infoItems.${item.key}.value`),
  }));
  const disclaimerItems = t('disclaimer.items', { returnObjects: true }) as Array<{
    label: string;
    text: string;
  }>;

  const businessInfo = infoItems.filter(item => item.category === 'business');
  const contactInfo = infoItems.filter(item => item.category === 'contact');
  const ownershipInfo = infoItems.filter(item => item.category === 'ownership');

  return (
    <section className="py-24 bg-slate-950 dark:bg-slate-950 light:bg-slate-50 min-h-[100svh]">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white dark:text-white light:text-slate-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-lg">
            {t('subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Last Updated Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 dark:bg-cyan-500/10 light:bg-cyan-500/20 border border-cyan-500/20 dark:border-cyan-500/20 light:border-cyan-500/30 rounded-full">
            <Shield className="text-cyan-400 dark:text-cyan-400 light:text-cyan-600" size={16} />
            <span className="text-sm text-cyan-400 dark:text-cyan-400 light:text-cyan-700 font-medium">
              {t('lastUpdated')}
            </span>
          </div>
        </motion.div>

        {/* Business Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-display font-bold text-white dark:text-white light:text-slate-900 mb-6 flex items-center gap-3">
            <Building2 className="text-cyan-400" size={28} />
            {t('sections.business')}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {businessInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="p-6 bg-slate-900/50 dark:bg-slate-900/50 light:bg-white border border-slate-800/50 dark:border-slate-800/50 light:border-slate-200 rounded-xl hover:border-cyan-500/30 dark:hover:border-cyan-500/30 light:hover:border-cyan-500/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-cyan-500/10 dark:bg-cyan-500/10 light:bg-cyan-500/20 rounded-lg">
                    <item.icon className="text-cyan-400 dark:text-cyan-400 light:text-cyan-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-slate-500 dark:text-slate-500 light:text-slate-600 mb-1">{item.label}</div>
                    <div className="text-white dark:text-white light:text-slate-900 font-medium">
                      {item.value}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-display font-bold text-white dark:text-white light:text-slate-900 mb-6 flex items-center gap-3">
            <Phone className="text-cyan-400" size={28} />
            {t('sections.contact')}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="p-6 bg-slate-900/50 dark:bg-slate-900/50 light:bg-white border border-slate-800/50 dark:border-slate-800/50 light:border-slate-200 rounded-xl hover:border-cyan-500/30 dark:hover:border-cyan-500/30 light:hover:border-cyan-500/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-cyan-500/10 dark:bg-cyan-500/10 light:bg-cyan-500/20 rounded-lg">
                    <item.icon className="text-cyan-400 dark:text-cyan-400 light:text-cyan-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-slate-500 dark:text-slate-500 light:text-slate-600 mb-1">{item.label}</div>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-cyan-400 dark:text-cyan-400 light:text-cyan-600 font-medium hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className={`text-white dark:text-white light:text-slate-900 font-medium ${item.multiline ? 'whitespace-pre-line' : ''}`}>
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ownership & Registers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-display font-bold text-white dark:text-white light:text-slate-900 mb-6 flex items-center gap-3">
            <FileText className="text-cyan-400" size={28} />
            {t('sections.ownership')}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {ownershipInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="p-6 bg-slate-900/50 dark:bg-slate-900/50 light:bg-white border border-slate-800/50 dark:border-slate-800/50 light:border-slate-200 rounded-xl hover:border-cyan-500/30 dark:hover:border-cyan-500/30 light:hover:border-cyan-500/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-cyan-500/10 dark:bg-cyan-500/10 light:bg-cyan-500/20 rounded-lg">
                    <item.icon className="text-cyan-400 dark:text-cyan-400 light:text-cyan-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-slate-500 dark:text-slate-500 light:text-slate-600 mb-1">{item.label}</div>
                    <div className={`text-white dark:text-white light:text-slate-900 font-medium ${item.multiline ? 'whitespace-pre-line' : ''}`}>
                      {item.value}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="p-8 bg-slate-900/30 dark:bg-slate-900/30 light:bg-slate-100/50 border border-slate-800/50 dark:border-slate-800/50 light:border-slate-200 rounded-xl"
        >
          <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mb-4">
            {t('disclaimer.title')}
          </h3>
          <div className="space-y-3 text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
            {disclaimerItems.map((item) => (
              <p key={item.label}>
                <strong className="text-slate-300 dark:text-slate-300 light:text-slate-800">{item.label}</strong> {item.text}
              </p>
            ))}
            <p className="text-xs text-slate-500 dark:text-slate-500 light:text-slate-500 pt-4 border-t border-slate-800/50 dark:border-slate-800/50 light:border-slate-200">
              {t('disclaimer.note')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impressum;
