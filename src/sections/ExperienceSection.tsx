import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  Sparkles, 
  GraduationCap, 
  Cloud, 
  Building2 
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData, ExperienceItem } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const getExperienceIcon = (exp: ExperienceItem) => {
    if (exp.type === 'academic') {
      return <GraduationCap className="w-5 h-5 text-teal-400" />;
    }
    if (exp.type === 'internship' && exp.id.includes('cloud')) {
      return <Cloud className="w-5 h-5 text-indigo-400" />;
    }
    return <Building2 className="w-5 h-5 text-sky-400" />;
  };

  return (
    <section id="experience" className="py-20 relative bg-[#090d18]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader 
          badge="Experience & Internships"
          title="Professional Trajectory"
          subtitle="Teaching artificial intelligence at Vignan University, alongside cloud platform engineering and enterprise software internships."
        />

        <div className="max-w-4xl mx-auto space-y-8 relative">
          
          <div className="hidden md:block absolute left-[31px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-teal-500/50 via-indigo-500/30 to-slate-800"></div>

          {portfolioData.experiences.map((exp) => (
            <div 
              key={exp.id} 
              className="relative md:pl-16 group"
            >
              <div className="hidden md:flex absolute left-4 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0a0f1d] border-2 border-teal-400 items-center justify-center shadow-lg shadow-teal-500/20 group-hover:scale-110 group-hover:border-teal-300 transition-all z-10">
                <span className={`w-2.5 h-2.5 rounded-full ${exp.isCurrent ? 'bg-teal-400 animate-pulse' : 'bg-slate-400'}`}></span>
              </div>

              <div className={`p-6 sm:p-8 rounded-2xl glass-card border transition-all duration-300 ${
                exp.isCurrent 
                  ? 'border-teal-500/40 bg-slate-900/90 shadow-xl shadow-teal-500/5 hover:border-teal-400/70' 
                  : 'border-white/10 hover:border-white/20'
              }`}>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-slate-800/90 border border-white/10 group-hover:border-teal-500/30 transition-colors">
                      {getExperienceIcon(exp)}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-bold font-display text-white group-hover:text-teal-300 transition-colors">
                          {exp.role}
                        </h3>
                        {exp.isCurrent && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping"></span>
                            Current Role
                          </span>
                        )}
                        {!exp.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-slate-800 text-slate-400 border border-slate-700">
                            {exp.type === 'internship' ? 'Internship' : 'Role'}
                          </span>
                        )}
                      </div>
                      <div className="text-sm font-semibold text-slate-300 mt-0.5 flex items-center gap-2">
                        <Briefcase className="w-3.5 h-3.5 text-teal-400" />
                        <span>{exp.organization}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-slate-400">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800/80 border border-white/5 text-teal-300 w-fit">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-1 text-[11px] text-slate-500">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-5 space-y-2.5">
                  <div className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                    Key Responsibilities:
                  </div>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {exp.keyHighlights && exp.keyHighlights.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-white/5">
                    <div className="text-xs font-mono text-slate-400 mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                      <span>Impact Highlights:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.keyHighlights.map((item, hIdx) => (
                        <span 
                          key={hIdx} 
                          className="text-xs px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-200 border border-slate-700/60 font-sans"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-4 pt-3 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-mono text-slate-500 mr-1">Tech:</span>
                  {exp.technologies.map((t, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="tech-badge text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
