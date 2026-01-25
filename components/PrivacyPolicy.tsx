import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Server, UserCheck, Mail, Globe, FileText, AlertCircle } from 'lucide-react';
import { Trans, useTranslation } from 'react-i18next';
import { getLocaleFromPath, withLocalePrefix } from '../utils/locale';

const sectionIcons = [FileText, Eye, Lock, Server, UserCheck, Globe, Mail, AlertCircle];

const PrivacyPolicy: React.FC = () => {
  const location = useLocation();
  const locale = getLocaleFromPath(location.pathname);
  const withLocale = (href: string) => withLocalePrefix(href, locale);
  const { t } = useTranslation('privacy');
  const sections = t('sections', { returnObjects: true }) as Array<{
    title: string;
    items: Array<{ subtitle: string; text: string }>;
  }>;
  const contactInfo = t('contact', { returnObjects: true }) as {
    title: string;
    intro: string;
    labels: {
      company: string;
      address: string;
      phone: string;
      website: string;
    };
    companyValue: string;
    addressValue: string;
    phoneValue: string;
    websiteValue: string;
    responseNote: string;
  };

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

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12 p-8 bg-slate-900/30 dark:bg-slate-900/30 light:bg-slate-100/50 border border-slate-800/50 dark:border-slate-800/50 light:border-slate-200 rounded-xl"
        >
          <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-4">
            <Trans
              t={t}
              i18nKey="intro.first"
              components={{
                strong: <strong className="text-white dark:text-white light:text-slate-900" />,
              }}
            />
          </p>
          <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
            {t('intro.second')}
          </p>
        </motion.div>

        {/* Policy Sections */}
        {sections.map((section, sectionIndex) => {
          const SectionIcon = sectionIcons[sectionIndex] ?? FileText;
          return (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + sectionIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-display font-bold text-white dark:text-white light:text-slate-900 mb-6 flex items-center gap-3">
                <SectionIcon className="text-cyan-400" size={28} />
                {section.title}
              </h2>
              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + sectionIndex * 0.1 + itemIndex * 0.05 }}
                    className="p-6 bg-slate-900/50 dark:bg-slate-900/50 light:bg-white border border-slate-800/50 dark:border-slate-800/50 light:border-slate-200 rounded-xl hover:border-cyan-500/30 dark:hover:border-cyan-500/30 light:hover:border-cyan-500/50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-cyan-400 dark:text-cyan-400 light:text-cyan-600 mb-3">
                      {item.subtitle}
                    </h3>
                    <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 dark:border-cyan-500/20 light:border-cyan-500/30 rounded-xl"
        >
          <h2 className="text-2xl font-display font-bold text-white dark:text-white light:text-slate-900 mb-4 flex items-center gap-3">
            <Mail className="text-cyan-400" size={28} />
            {contactInfo.title}
          </h2>
          <div className="space-y-3 text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
            <p>
              {contactInfo.intro}
            </p>
            <div className="space-y-2 ml-4">
              <p>
                <strong className="text-white dark:text-white light:text-slate-900">{contactInfo.labels.company}:</strong> {contactInfo.companyValue}
              </p>
              <p>
                <strong className="text-white dark:text-white light:text-slate-900">{contactInfo.labels.address}:</strong> {contactInfo.addressValue}
              </p>
              <p>
                <strong className="text-white dark:text-white light:text-slate-900">{contactInfo.labels.phone}:</strong>{' '}
                <a href="tel:+306949214461" className="text-cyan-400 hover:underline">{contactInfo.phoneValue}</a>
              </p>
              <p>
                <strong className="text-white dark:text-white light:text-slate-900">{contactInfo.labels.website}:</strong>{' '}
                <a href="https://impact-tech.com" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">{contactInfo.websiteValue}</a>
              </p>
            </div>
            <p className="mt-4 pt-4 border-t border-slate-700/50 dark:border-slate-700/50 light:border-slate-300 text-sm">
              {contactInfo.responseNote}
            </p>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-slate-500 dark:text-slate-500 light:text-slate-600">
            <Trans
              t={t}
              i18nKey="footerNote"
              components={{
                link: <a href={withLocale('/impressum')} className="text-cyan-400 hover:underline" />,
              }}
            />
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
