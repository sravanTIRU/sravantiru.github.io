import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Terminal, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = portfolioData.navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#070b14]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-lg p-1"
            aria-label="T G Sravan Teja Portfolio Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-indigo-600 p-[1px] shadow-md shadow-teal-500/20 group-hover:shadow-teal-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#090d16] rounded-xl flex items-center justify-center">
                <span className="font-mono font-bold text-teal-400 text-sm group-hover:scale-110 transition-transform">
                  ST
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-slate-100 text-base tracking-tight group-hover:text-teal-300 transition-colors flex items-center gap-1.5">
                T G Sravan Teja
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
              </span>
              <span className="text-[11px] font-mono text-slate-400 -mt-0.5">
                AI & Software Dev
              </span>
            </div>
          </a>

          <nav className="hidden xl:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/5 backdrop-blur-md shadow-inner" aria-label="Main Navigation">
            {portfolioData.navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-teal-500/15 text-teal-300 font-semibold border border-teal-500/30 shadow-sm shadow-teal-500/10' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={portfolioData.personal.resumeDownloadPath}
              download={portfolioData.personal.resumeFileName}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium font-mono text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-teal-500/40 transition-all duration-200 shadow-sm group"
              title="Download Resume (DOCX)"
            >
              <FileDown className="w-3.5 h-3.5 text-teal-400 group-hover:translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-white bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-400 hover:to-indigo-500 transition-all duration-200 shadow-md shadow-teal-500/20 active:scale-95"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </a>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={portfolioData.personal.resumeDownloadPath}
              download={portfolioData.personal.resumeFileName}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-300 bg-slate-800/80 border border-slate-700 hover:text-teal-300"
              aria-label="Download Resume"
              title="Download Resume"
            >
              <FileDown className="w-4 h-4 text-teal-400" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-800/60 border border-slate-700/60 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0a0f1d]/98 border-b border-white/10 shadow-2xl backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-1">
            {portfolioData.navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-teal-500/15 text-teal-300 font-semibold border-l-2 border-teal-400' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-teal-400' : 'text-slate-600'}`} />
                </a>
              );
            })}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5 mt-2">
              <a
                href={portfolioData.personal.resumeDownloadPath}
                download={portfolioData.personal.resumeFileName}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-mono font-medium text-slate-200 bg-slate-800 border border-slate-700"
              >
                <FileDown className="w-4 h-4 text-teal-400" />
                <span>Download Resume (DOCX)</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-medium text-white bg-gradient-to-r from-teal-500 to-indigo-600"
              >
                <Terminal className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
