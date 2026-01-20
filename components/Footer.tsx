import React from 'react';
import { Link } from 'react-router-dom';
import { Hexagon } from 'lucide-react';

const Footer: React.FC = () => {
  const handleOpenCookies = () => {
    if (typeof window === 'undefined') return;
    window.dispatchEvent(new Event('cookie:open'));
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row md:relative md:justify-between items-center gap-6">
        <div className="flex items-center gap-3 text-white font-display font-bold text-lg">
          <span className="footer-logo relative flex h-11 w-11 items-center justify-center">
            <span className="footer-logo-glow absolute inset-0 rounded-full" aria-hidden="true" />
            <svg
              className="footer-logo-ring absolute inset-0"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <polygon
                className="footer-logo-base"
                points="50,6 92,28 92,72 50,94 8,72 8,28"
              />
              <polygon
                className="footer-logo-trace"
                points="50,6 92,28 92,72 50,94 8,72 8,28"
              />
            </svg>
            <Hexagon className="relative z-10 text-cyan-300" size={22} />
          </span>
          <span className="text-slate-500">IMPACT TECH</span>
        </div>
        <div className="text-slate-600 text-sm text-center md:absolute md:left-1/2 md:-translate-x-1/2">
          © {new Date().getFullYear()} Impact Tech. All rights reserved.
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-slate-500 text-sm text-center md:text-left">
          {/* <Link to="/about" className="hover:text-cyan-400 transition-colors">About Us</Link> */}
          <Link to="/careers" className="hover:text-cyan-400 transition-colors">Careers</Link>
          <Link to="/impressum" className="hover:text-cyan-400 transition-colors">Impressum</Link>
          <Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
          <button
            type="button"
            onClick={handleOpenCookies}
            className="hover:text-cyan-400 transition-colors"
          >
            Cookies
          </button>
          {/* <a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a> */}
          {/* <a href="#" className="hover:text-cyan-400 transition-colors">GitHub</a> */}
        </div>
      </div>
      <style>{`
        .footer-logo-glow {
          background: radial-gradient(circle, rgba(34, 211, 238, 0.22) 0%, rgba(34, 211, 238, 0.08) 45%, transparent 70%);
          animation: footer-pulse 2.6s ease-in-out infinite;
        }

        .footer-logo-ring {
          width: 100%;
          height: 100%;
        }

        .footer-logo-base {
          fill: none;
          stroke: rgba(148, 163, 184, 0.25);
          stroke-width: 3;
        }

        .footer-logo-trace {
          fill: none;
          stroke: rgba(34, 211, 238, 0.9);
          stroke-width: 3;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 46 220;
          stroke-dashoffset: 0;
          filter: drop-shadow(0 0 6px rgba(34, 211, 238, 0.6));
          animation: footer-trace 3.4s linear infinite;
        }

        @keyframes footer-trace {
          to { stroke-dashoffset: -266; }
        }

        @keyframes footer-pulse {
          0%, 100% { opacity: 0.55; transform: scale(0.98); }
          50% { opacity: 1; transform: scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-logo-trace,
          .footer-logo-glow {
            animation: none;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
