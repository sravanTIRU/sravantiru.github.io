import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, FileDown, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080f] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-teal-500/5 blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-teal-500 to-indigo-600 p-[1px]">
                <div className="w-full h-full bg-[#090d16] rounded-lg flex items-center justify-center font-mono font-bold text-teal-400 text-xs">
                  ST
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-base tracking-tight">
                  {portfolioData.personal.fullName}
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  {portfolioData.personal.headline}
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Junior Lecturer at Vignan University & M.Tech Scholar. Passionate about teaching Artificial Intelligence, engineering full-stack software, and database optimization.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-teal-400 font-mono bg-teal-950/40 border border-teal-800/40 px-2.5 py-1.5 rounded-md w-fit">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Resume-Verified Portfolio</span>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4 tracking-wide uppercase font-mono text-slate-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {portfolioData.navLinks.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-teal-300 transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4 tracking-wide uppercase font-mono text-slate-300">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {portfolioData.navLinks.slice(5).map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-teal-300 transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-semibold text-white text-sm tracking-wide uppercase font-mono text-slate-300">
              Connect
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300 font-mono">
              <a 
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center gap-2 hover:text-teal-300 transition-colors p-1.5 rounded bg-slate-900/50 border border-slate-800"
              >
                <Mail className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                <span className="truncate">{portfolioData.personal.email}</span>
              </a>
              <a 
                href={`tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 hover:text-teal-300 transition-colors p-1.5 rounded bg-slate-900/50 border border-slate-800"
              >
                <Phone className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                <span>{portfolioData.personal.phone}</span>
              </a>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.resumeDownloadPath}
                download={portfolioData.personal.resumeFileName}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-teal-500/10 text-teal-300 hover:bg-teal-500/20 border border-teal-500/30 text-xs font-mono transition-colors"
                title="Download Resume"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div>
            &copy; {new Date().getFullYear()} {portfolioData.personal.fullName}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-slate-400">
              Open to Software Development & AI Roles
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
              aria-label="Scroll to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3 text-teal-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
