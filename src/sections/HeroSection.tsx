import React from 'react';
import { 
  FileDown, 
  ArrowRight, 
  Sparkles, 
  Code2, 
  GraduationCap, 
  Cloud, 
  Cpu, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-glow"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-teal-500/30 text-slate-200 text-xs font-mono backdrop-blur-md shadow-lg shadow-teal-500/5 hover:border-teal-500/50 transition-all">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span className="text-teal-300 font-semibold">Junior Lecturer @ Vignan University</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">M.Tech Scholar</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight text-white leading-tight">
              Hi, I am{' '}
              <span className="bg-gradient-to-r from-teal-400 via-emerald-300 to-indigo-400 bg-clip-text text-transparent glow-text-teal">
                {portfolioData.personal.fullName}
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl font-mono text-teal-300 font-medium tracking-wide">
              {portfolioData.personal.headline}
            </p>
          </div>

          <div className="relative p-6 sm:p-7 rounded-2xl glass-card border border-white/10 max-w-3xl text-slate-300 text-base sm:text-lg leading-relaxed shadow-xl shadow-black/40 group hover:border-teal-500/30 transition-all">
            <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-teal-950 border border-teal-500/30 text-teal-300 text-[11px] font-mono uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-teal-400" />
              <span>Core Philosophy</span>
            </div>
            <p className="italic font-sans text-slate-200">
              "{portfolioData.personal.coreStatement}"
            </p>
            <div className="mt-3 pt-3 border-t border-white/5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono">
              <span>? Full-Stack Developer</span>
              <span>?</span>
              <span>?? AI & ML Lecturer</span>
              <span>?</span>
              <span>?? M.Tech Researcher</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-900 bg-gradient-to-r from-teal-400 to-teal-300 hover:from-teal-300 hover:to-teal-200 transition-all duration-200 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 font-sans font-semibold"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 text-slate-900" />
            </a>

            <a
              href={portfolioData.personal.resumeDownloadPath}
              download={portfolioData.personal.resumeFileName}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 hover:border-teal-500/40 transition-all duration-200 shadow-md hover:-translate-y-0.5 font-mono group"
            >
              <FileDown className="w-4 h-4 text-teal-400 group-hover:translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/60 border border-white/10 hover:border-white/20 transition-all duration-200 font-sans"
            >
              <Mail className="w-4 h-4 text-teal-400" />
              <span>Contact Me</span>
            </a>
          </div>

          <div className="flex items-center gap-3 pt-2 text-slate-400 text-xs font-mono">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-white/5 hover:border-teal-500/40 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-teal-400" />
              <span>GitHub</span>
              <ExternalLink className="w-2.5 h-2.5 text-slate-500" />
            </a>

            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-white/5 hover:border-teal-500/40 hover:text-white transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-teal-400" />
              <span>LinkedIn</span>
              <ExternalLink className="w-2.5 h-2.5 text-slate-500" />
            </a>

            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-white/5 hover:border-teal-500/40 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-teal-400" />
              <span>Email</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full pt-8">
            <div className="p-4 rounded-xl glass-card border border-white/5 text-left group hover:border-teal-500/30 transition-all">
              <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 w-fit mb-2 group-hover:scale-110 transition-transform">
                <Code2 className="w-4 h-4" />
              </div>
              <div className="font-semibold text-white text-sm">Full-Stack Dev</div>
              <div className="text-[11px] text-slate-400 font-mono mt-0.5">Angular, Spring Boot, Python</div>
            </div>

            <div className="p-4 rounded-xl glass-card border border-white/5 text-left group hover:border-indigo-500/30 transition-all">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 w-fit mb-2 group-hover:scale-110 transition-transform">
                <Cpu className="w-4 h-4" />
              </div>
              <div className="font-semibold text-white text-sm">AI & Algorithms</div>
              <div className="text-[11px] text-slate-400 font-mono mt-0.5">ML, Search & Data Cleansing</div>
            </div>

            <div className="p-4 rounded-xl glass-card border border-white/5 text-left group hover:border-teal-500/30 transition-all">
              <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 w-fit mb-2 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="font-semibold text-white text-sm">AI Educator</div>
              <div className="text-[11px] text-slate-400 font-mono mt-0.5">Vignan Univ Junior Lecturer</div>
            </div>

            <div className="p-4 rounded-xl glass-card border border-white/5 text-left group hover:border-sky-500/30 transition-all">
              <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 w-fit mb-2 group-hover:scale-110 transition-transform">
                <Cloud className="w-4 h-4" />
              </div>
              <div className="font-semibold text-white text-sm">Cloud Exposure</div>
              <div className="text-[11px] text-slate-400 font-mono mt-0.5">AWS, Docker, Jenkins</div>
            </div>
          </div>

          <a
            href="#about"
            className="inline-flex flex-col items-center gap-1 text-slate-500 hover:text-teal-400 transition-colors pt-4 text-xs font-mono"
          >
            <span>Explore Details</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-teal-400" />
          </a>

        </div>
      </div>
    </section>
  );
};
