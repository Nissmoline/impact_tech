import React from 'react';
import { motion } from 'framer-motion';
import { Building2, User, Hash, FileText, Phone, Globe, Clock, MapPin, Shield } from 'lucide-react';

const Impressum: React.FC = () => {
  const infoItems = [
    {
      icon: Building2,
      label: 'Trading Name',
      value: 'IMPACT TECH',
      category: 'business'
    },
    {
      icon: FileText,
      label: 'Legal Form',
      value: 'Sole Proprietorship',
      category: 'business'
    },
    {
      icon: MapPin,
      label: 'Registered Office',
      value: 'Pl. Ippodameias 8, Office D8\n18531 Piraeus, Attica, Greece',
      multiline: true,
      category: 'contact'
    },
    {
      icon: Phone,
      label: 'Telephone',
      value: '+30 694 921 4461',
      link: 'tel:+306949214461',
      category: 'contact'
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'www.impact-tech.com',
      link: 'https://impact-tech.com',
      category: 'contact'
    },
    {
      icon: Clock,
      label: 'Service Hours',
      value: '24/7 Available',
      category: 'contact'
    },
    {
      icon: User,
      label: 'Owner / Legal Representative',
      value: 'Konstantinos Kolpaxidis',
      category: 'ownership'
    },
    {
      icon: Hash,
      label: 'VAT Number (Α.Φ.Μ.)',
      value: '146264597',
      category: 'ownership'
    },
    {
      icon: Hash,
      label: 'D-U-N-S Number',
      value: '674794807',
      category: 'ownership'
    },
    {
      icon: Hash,
      label: 'GEMI Number',
      value: '188182109000',
      category: 'ownership'
    },
    {
      icon: Building2,
      label: 'Chamber Registration',
      value: 'Piraeus Chamber of Trades\nReg. No. 135274 – Services Department',
      multiline: true,
      category: 'ownership'
    }
  ];

  const businessInfo = infoItems.filter(item => item.category === 'business');
  const contactInfo = infoItems.filter(item => item.category === 'contact');
  const ownershipInfo = infoItems.filter(item => item.category === 'ownership');

  return (
    <section className="py-24 bg-slate-950 dark:bg-slate-950 light:bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white dark:text-white light:text-slate-900 mb-4">
            Impressum
          </h1>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-lg">
            Legal Information & Company Details
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
              Last updated: 11 August 2025
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
            Business Information
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
            Contact Information
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
            Ownership & Registers
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
            Legal Disclaimer
          </h3>
          <div className="space-y-3 text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
            <p>
              <strong className="text-slate-300 dark:text-slate-300 light:text-slate-800">Liability for Content:</strong> The contents of our pages have been created with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content.
            </p>
            <p>
              <strong className="text-slate-300 dark:text-slate-300 light:text-slate-800">Liability for Links:</strong> Our website contains links to external third-party websites over whose content we have no control. Therefore, we cannot accept any liability for this third-party content.
            </p>
            <p>
              <strong className="text-slate-300 dark:text-slate-300 light:text-slate-800">Copyright:</strong> The content and works created by the site operators on these pages are subject to Greek copyright law. Duplication, processing, distribution, or any form of commercialization requires the prior written consent of Impact Tech.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500 light:text-slate-500 pt-4 border-t border-slate-800/50 dark:border-slate-800/50 light:border-slate-200">
              Registry information is updated whenever licenses or listings change. This impressum complies with Greek and EU legal requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impressum;
