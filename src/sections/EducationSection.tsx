import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  Building2, 
  FolderGit2
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader 
          badge="Academic Credentials"
          title="Education & Academic Journey"
          subtitle="A structured progression through undergraduate science, postgraduate computer applications, and master of technology research."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {portfolioData.education.map((edu) => (
            <div 
              key={edu.id}
              className={`p-6 sm:p-7 rounded-2xl glass-card border flex flex-col justify-between transition-all duration-300 ${
                edu.id === 'mtech'
                  ? 'border-indigo-500/40 bg-indigo-950/20 hover:border-indigo-400/60 shadow-lg shadow-indigo-500/5'
                  : edu.id === 'mca'
                  ? 'border-teal-500/40 bg-teal-950/20 hover:border-teal-400/60 shadow-lg shadow-teal-500/5'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-3 rounded-xl bg-slate-800/90 border border-white/10 text-teal-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium ${
                    edu.status === 'Pursuing' 
                      ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 animate-pulse' 
                      : 'bg-teal-500/10 text-teal-300 border border-teal-500/20'
                  }`}>
                    {edu.status}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold font-display text-white leading-snug">
                    {edu.degree}
                  </h3>
                  
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 font-semibold">
                    <Building2 className="w-3.5 h-3.5 text-teal-400" />
                    <span>{edu.institution}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 pt-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {edu.highlights && (
                  <p className="mt-4 text-xs text-slate-400 leading-relaxed border-t border-white/5 pt-3">
                    {edu.highlights}
                  </p>
                )}
              </div>

              {edu.project && (
                <div className="mt-6 p-4 rounded-xl bg-slate-900/90 border border-teal-500/30 text-left space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-teal-300 font-semibold uppercase tracking-wider">
                    <FolderGit2 className="w-3.5 h-3.5 text-teal-400" />
                    <span>MCA Capstone Project</span>
                  </div>
                  <div className="text-sm font-bold text-white">
                    {edu.project.title}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {edu.project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {edu.project.technologies.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-950/60 text-teal-300 border border-teal-800/60">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
