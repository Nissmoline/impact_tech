import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Cookie } from 'lucide-react';
import { getLocaleFromPath, withLocalePrefix } from '../utils/locale';

const STORAGE_KEY = 'impacttech-cookie-consent';
const OPEN_EVENT = 'cookie:open';

type CookiePreferences = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
};

const defaultPreferences: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
  personalization: false,
};

const allPreferences: CookiePreferences = {
  essential: true,
  analytics: true,
  marketing: true,
  personalization: true,
};

const normalizeConsent = (rawValue: string | null): CookiePreferences | null => {
  if (!rawValue) return null;
  if (rawValue === 'all') return { ...allPreferences };
  if (rawValue === 'essential') return { ...defaultPreferences };

  try {
    const parsed = JSON.parse(rawValue) as {
      preferences?: Partial<CookiePreferences>;
      analytics?: boolean;
      marketing?: boolean;
      personalization?: boolean;
    };
    const source = parsed.preferences ?? parsed;
    return {
      essential: true,
      analytics: Boolean(source.analytics),
      marketing: Boolean(source.marketing),
      personalization: Boolean(source.personalization),
    };
  } catch {
    return null;
  }
};

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const location = useLocation();
  const locale = getLocaleFromPath(location.pathname);
  const withLocale = (href: string) => withLocalePrefix(href, locale);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const savedConsent = normalizeConsent(localStorage.getItem(STORAGE_KEY));
    if (savedConsent) {
      setPreferences(savedConsent);
      return;
    }
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleOpen = () => {
      const savedConsent = normalizeConsent(localStorage.getItem(STORAGE_KEY));
      if (savedConsent) {
        setPreferences(savedConsent);
      }
      setIsVisible(true);
      setIsExpanded(true);
    };

    window.addEventListener(OPEN_EVENT, handleOpen);
    return () => {
      window.removeEventListener(OPEN_EVENT, handleOpen);
    };
  }, []);

  const savePreferences = (nextPreferences: CookiePreferences) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ version: 1, preferences: nextPreferences })
    );
    setPreferences(nextPreferences);
    setIsVisible(false);
  };

  const handleToggle = (key: keyof CookiePreferences) => {
    if (key === 'essential') return;
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleEssentialOnly = () => savePreferences({ ...defaultPreferences });
  const handleAcceptAll = () => savePreferences({ ...allPreferences });
  const handleSave = () => savePreferences(preferences);
  const toggleExpanded = () => setIsExpanded((prev) => !prev);

  if (!isVisible) return null;

  const cookieOptions: Array<{
    key: keyof CookiePreferences;
    title: string;
    description: string;
    required?: boolean;
  }> = [
    {
      key: 'essential',
      title: 'Essential',
      description: 'Required for core functionality, security, and page navigation.',
      required: true,
    },
    {
      key: 'analytics',
      title: 'Analytics',
      description: 'Helps us understand traffic and improve performance.',
    },
    {
      key: 'personalization',
      title: 'Personalization',
      description: 'Remembers your preferences to keep the experience consistent.',
    },
    {
      key: 'marketing',
      title: 'Marketing',
      description: 'Used for campaign measurement and relevant messaging.',
    },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-6 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-950/90 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl dark:bg-slate-950/90 light:bg-white/90 light:border-slate-200">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),transparent_60%)]" />
          <div className="relative flex flex-col gap-6 p-6 md:p-7">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
                <Cookie size={20} />
              </div>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                  Cookie settings
                </p>
                <h3 className="text-lg font-display font-semibold text-white light:text-slate-900">
                  Choose which cookies you are comfortable with.
                </h3>
                <p className="text-sm text-slate-300 light:text-slate-600">
                  Essential cookies keep the site running. Optional cookies help us improve and personalize
                  your experience.
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 light:text-slate-500">
                  <span className="rounded-full border border-slate-700/70 px-3 py-1 light:border-slate-200">
                    Essential always on
                  </span>
                  <Link to={withLocale('/privacy')} className="text-cyan-300 hover:text-cyan-200 transition-colors">
                    Read our privacy policy
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <button
                type="button"
                onClick={toggleExpanded}
                aria-expanded={isExpanded}
                aria-controls="cookie-options"
                className="flex w-full items-center justify-between rounded-xl border border-slate-800/70 bg-slate-900/40 px-4 py-3 text-left text-sm font-semibold text-white transition-colors hover:border-cyan-500/40 light:border-slate-200 light:bg-white/70 light:text-slate-900"
              >
                <span>Customize cookies</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                id="cookie-options"
                aria-hidden={!isExpanded}
                className={`grid gap-3 overflow-hidden transition-[max-height,opacity] duration-300 ease-out md:grid-cols-2 ${
                  isExpanded
                    ? 'max-h-[720px] opacity-100 pointer-events-auto'
                    : 'max-h-0 opacity-0 pointer-events-none'
                }`}
              >
                {cookieOptions.map((option) => {
                  const enabled = preferences[option.key];
                  return (
                    <div
                      key={option.key}
                      className="flex items-center justify-between gap-4 rounded-xl border border-slate-800/70 bg-slate-900/50 px-4 py-3 light:border-slate-200 light:bg-white/70"
                    >
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-white light:text-slate-900">
                          {option.title}
                          {option.required ? (
                            <span className="ml-2 text-[10px] uppercase tracking-[0.2em] text-cyan-300">
                              Required
                            </span>
                          ) : null}
                        </p>
                        <p className="text-xs text-slate-400 light:text-slate-500">{option.description}</p>
                      </div>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={enabled}
                        onClick={() => handleToggle(option.key)}
                        disabled={option.required}
                        className={`relative h-6 w-11 rounded-full border transition-colors ${
                          enabled
                            ? 'border-cyan-500/70 bg-cyan-500/60'
                            : 'border-slate-700/70 bg-slate-800/70 light:border-slate-300 light:bg-slate-200'
                        } ${option.required ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
                      >
                        <span
                          className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                            enabled ? 'translate-x-5' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={handleEssentialOnly}
                className="rounded-full border border-slate-700/80 px-5 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-cyan-500/60 hover:text-white light:border-slate-200 light:text-slate-900 light:hover:border-cyan-500/60"
              >
                Essential only
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="rounded-full border border-cyan-500/40 px-5 py-3 text-sm font-semibold text-cyan-100 transition-colors hover:border-cyan-400/70 hover:text-white light:text-cyan-700"
              >
                Save preferences
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition-transform hover:-translate-y-0.5"
              >
                Accept all cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
