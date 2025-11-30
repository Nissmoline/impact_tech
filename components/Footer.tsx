import React from 'react';
import { Hexagon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-white font-display font-bold text-lg">
          <Hexagon className="text-slate-700" size={24} />
          <span className="text-slate-500">VERTEX STUDIO</span>
        </div>
        <div className="text-slate-600 text-sm">
          © {new Date().getFullYear()} Vertex Studio. All rights reserved.
        </div>
        <div className="flex gap-6 text-slate-500">
           <a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a>
           <a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
           <a href="#" className="hover:text-cyan-400 transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;