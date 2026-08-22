import React from 'react';
import { 
  Code2, 
  GraduationCap, 
  Cpu, 
  Target, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  Layers, 
  Terminal 
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const getInterestIcon = (icon: string) => {
    switch (icon) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-teal-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-indigo-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      default:
        return <Terminal className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader 
          badge="About Me"
          title="Synthesizing Code, Intelligence & Pedagogy"
          subtitle="A dedicated technologist combining software engineering, practical AI education, and postgraduate research."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 space-y-5 text-slate-300 leading-relaxed text-sm sm:text-base">
              <div className="flex items-center gap-2 text-teal-400 font-mono text-xs font-semibold tracking-wider uppercase">
                <BookOpen className="w-4 h-4" />
                <span>My Journey & Philosophy</span>
              </div>

              {portfolioData.personal.aboutNarrative.map((paragraph, idx) => (
                <p key={idx} className="text-slate-300">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>MCA (ANU) & M.Tech Scholar (Vignan)</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>Junior Lecturer in AI (Jun 2025?Pres)</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>Full-Stack: Angular v20 & Spring Boot</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>Algorithms: String Similarity & Data Cleansing</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-teal-950/40 via-slate-900/50 to-indigo-950/40 border border-teal-500/20 text-slate-200">
              <div className="flex items-center gap-2 text-teal-400 font-mono text-xs font-semibold uppercase mb-2">
                <Target className="w-4 h-4" />
                <span>Career Objective & Vision</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {portfolioData.personal.careerObjective}
              </p>
            </div>

          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>Core Interest Areas</span>
            </div>

            {portfolioData.careerInterests.map((interest, idx) => (
              <div 
                key={idx}
                className="glass-card glass-card-hover p-5 rounded-xl border border-white/10 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-white/10 group-hover:border-teal-500/40 transition-colors">
                    {getInterestIcon(interest.icon)}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-semibold text-white text-base group-hover:text-teal-300 transition-colors">
                      {interest.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="glass-card p-5 rounded-xl border border-white/10 space-y-3 mt-4">
              <h4 className="text-xs font-mono font-semibold uppercase text-teal-400 tracking-wider flex items-center gap-2">
                <Layers className="w-3.5 h-3.5" />
                <span>Quick Profile Summary</span>
              </h4>
              <div className="space-y-2 text-xs font-mono text-slate-300">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-500">Current Role:</span>
                  <span className="text-slate-200 font-medium text-right">Junior Lecturer</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-500">Institution:</span>
                  <span className="text-teal-300 font-medium text-right">Vignan University</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-500">Postgraduate:</span>
                  <span className="text-slate-200 font-medium text-right">M.Tech (26-28) & MCA</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Specialization:</span>
                  <span className="text-indigo-300 font-medium text-right">AI, Web Dev & Cloud</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
