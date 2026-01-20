import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Server, UserCheck, Mail, Globe, FileText, AlertCircle } from 'lucide-react';
import { getLocaleFromPath, withLocalePrefix } from '../utils/locale';

const PrivacyPolicy: React.FC = () => {
  const location = useLocation();
  const locale = getLocaleFromPath(location.pathname);
  const withLocale = (href: string) => withLocalePrefix(href, locale);
  const sections = [
    {
      icon: FileText,
      title: '1. Information We Collect',
      content: [
        {
          subtitle: '1.1 Personal Information',
          text: 'When you contact us or use our services, we may collect personal information such as your name, email address, phone number, company name, and project requirements. This information is provided voluntarily by you.'
        },
        {
          subtitle: '1.2 Technical Information',
          text: 'We automatically collect certain technical information when you visit our website, including your IP address, browser type, device information, operating system, referring URLs, and pages visited. This data helps us improve our website performance and user experience.'
        },
        {
          subtitle: '1.3 Cookies and Tracking',
          text: 'Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser preferences.'
        }
      ]
    },
    {
      icon: Eye,
      title: '2. How We Use Your Information',
      content: [
        {
          subtitle: '2.1 Service Delivery',
          text: 'We use your personal information to provide our web development, mobile app development, and software services. This includes communicating with you about projects, sending quotes, and delivering completed work.'
        },
        {
          subtitle: '2.2 Communication',
          text: 'Your contact information allows us to respond to inquiries, provide customer support, send service updates, and share relevant information about our services that may interest you.'
        },
        {
          subtitle: '2.3 Website Improvement',
          text: 'Technical data helps us analyze website usage patterns, identify issues, optimize performance, and improve our services and user interface based on user behavior and feedback.'
        },
        {
          subtitle: '2.4 Legal Compliance',
          text: 'We may use your information to comply with applicable laws, regulations, legal processes, or governmental requests, and to protect our rights and interests.'
        }
      ]
    },
    {
      icon: Lock,
      title: '3. Data Protection & Security',
      content: [
        {
          subtitle: '3.1 Security Measures',
          text: 'We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. This includes encryption, secure servers, and regular security audits.'
        },
        {
          subtitle: '3.2 Data Storage',
          text: 'Your data is stored on secure servers located in the European Union, complying with GDPR regulations. We retain your information only as long as necessary for the purposes outlined in this policy or as required by law.'
        },
        {
          subtitle: '3.3 Access Control',
          text: 'Access to your personal information is restricted to authorized personnel who need it to perform their job functions. All staff members are trained on data protection principles and confidentiality requirements.'
        }
      ]
    },
    {
      icon: Server,
      title: '4. Data Sharing & Disclosure',
      content: [
        {
          subtitle: '4.1 Third-Party Services',
          text: 'We may share your information with trusted third-party service providers who assist us in operating our website, conducting business, or servicing you. These parties are contractually obligated to keep your information confidential and use it only for specified purposes.'
        },
        {
          subtitle: '4.2 Business Transfers',
          text: 'In the event of a merger, acquisition, or sale of assets, your personal information may be transferred to the acquiring entity. We will notify you of any such change and provide options regarding your data.'
        },
        {
          subtitle: '4.3 Legal Requirements',
          text: 'We may disclose your information when required by law, court order, or governmental regulation, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.'
        },
        {
          subtitle: '4.4 No Selling of Data',
          text: 'We do not sell, rent, or trade your personal information to third parties for marketing purposes. Your data is used solely for the purposes described in this Privacy Policy.'
        }
      ]
    },
    {
      icon: UserCheck,
      title: '5. Your Rights (GDPR Compliance)',
      content: [
        {
          subtitle: '5.1 Right to Access',
          text: 'You have the right to request access to the personal information we hold about you. We will provide a copy of your data in a structured, commonly used format within 30 days of your request.'
        },
        {
          subtitle: '5.2 Right to Rectification',
          text: 'If you believe any information we hold about you is inaccurate or incomplete, you have the right to request correction or completion of that information.'
        },
        {
          subtitle: '5.3 Right to Erasure',
          text: 'You can request deletion of your personal information ("right to be forgotten") under certain circumstances, such as when the data is no longer necessary for the purposes for which it was collected.'
        },
        {
          subtitle: '5.4 Right to Object',
          text: 'You have the right to object to processing of your personal information for direct marketing purposes or when processing is based on legitimate interests.'
        },
        {
          subtitle: '5.5 Right to Data Portability',
          text: 'You can request to receive your personal data in a portable format and have it transmitted to another data controller where technically feasible.'
        },
        {
          subtitle: '5.6 Right to Withdraw Consent',
          text: 'Where processing is based on your consent, you have the right to withdraw that consent at any time without affecting the lawfulness of processing based on consent before its withdrawal.'
        }
      ]
    },
    {
      icon: Globe,
      title: '6. International Data Transfers',
      content: [
        {
          subtitle: '6.1 EU Data Protection',
          text: 'As a company based in Greece (EU), we comply with the General Data Protection Regulation (GDPR). When transferring data outside the EU, we ensure appropriate safeguards are in place.'
        },
        {
          subtitle: '6.2 Transfer Mechanisms',
          text: 'Any international data transfers are conducted using approved mechanisms such as Standard Contractual Clauses, adequacy decisions, or other legally compliant methods to protect your data.'
        }
      ]
    },
    {
      icon: Mail,
      title: '7. Contact & Communication',
      content: [
        {
          subtitle: '7.1 Marketing Communications',
          text: 'If you have opted in to receive marketing communications, you can unsubscribe at any time by clicking the unsubscribe link in our emails or contacting us directly.'
        },
        {
          subtitle: '7.2 Service Communications',
          text: 'We may send you essential service-related communications (such as project updates, security alerts, or policy changes) which you cannot opt out of as they are necessary for service delivery.'
        }
      ]
    },
    {
      icon: AlertCircle,
      title: '8. Changes to Privacy Policy',
      content: [
        {
          subtitle: '8.1 Policy Updates',
          text: 'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date.'
        },
        {
          subtitle: '8.2 Continued Use',
          text: 'Your continued use of our website and services after any changes to this Privacy Policy constitutes your acceptance of the revised policy.'
        }
      ]
    }
  ];

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
            Privacy Policy
          </h1>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-lg">
            Your Privacy is Our Priority
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
              Last updated: December 4, 2025
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
            At <strong className="text-white dark:text-white light:text-slate-900">Impact Tech</strong>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website or use our services.
          </p>
          <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
            We comply with the General Data Protection Regulation (GDPR) and other applicable data protection laws. By using our services, you agree to the collection and use of information in accordance with this policy.
          </p>
        </motion.div>

        {/* Policy Sections */}
        {sections.map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + sectionIndex * 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-display font-bold text-white dark:text-white light:text-slate-900 mb-6 flex items-center gap-3">
              <section.icon className="text-cyan-400" size={28} />
              {section.title}
            </h2>
            <div className="space-y-6">
              {section.content.map((item, itemIndex) => (
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
        ))}

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 dark:border-cyan-500/20 light:border-cyan-500/30 rounded-xl"
        >
          <h2 className="text-2xl font-display font-bold text-white dark:text-white light:text-slate-900 mb-4 flex items-center gap-3">
            <Mail className="text-cyan-400" size={28} />
            Contact Us About Privacy
          </h2>
          <div className="space-y-3 text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 ml-4">
              <p><strong className="text-white dark:text-white light:text-slate-900">Company:</strong> Impact Tech</p>
              <p><strong className="text-white dark:text-white light:text-slate-900">Address:</strong> Pl. Ippodameias 8, Office D8, 18531 Piraeus, Attica, Greece</p>
              <p><strong className="text-white dark:text-white light:text-slate-900">Phone:</strong> <a href="tel:+306949214461" className="text-cyan-400 hover:underline">+30 694 921 4461</a></p>
              <p><strong className="text-white dark:text-white light:text-slate-900">Website:</strong> <a href="https://impact-tech.com" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">www.impact-tech.com</a></p>
            </div>
            <p className="mt-4 pt-4 border-t border-slate-700/50 dark:border-slate-700/50 light:border-slate-300 text-sm">
              We aim to respond to all privacy-related inquiries within 30 days in accordance with GDPR requirements.
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
            This Privacy Policy is governed by Greek and EU law. For the complete legal information about our company, please visit our <a href={withLocale('/impressum')} className="text-cyan-400 hover:underline">Impressum</a> page.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
