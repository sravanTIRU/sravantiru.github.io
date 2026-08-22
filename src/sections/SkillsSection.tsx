import React from 'react';
import { 
  Code, 
  Layers, 
  Database, 
  Cloud, 
  Terminal, 
  Sparkles, 
  Cpu
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getSkillCategoryIcon = (key: string) => {
    switch (key) {
      case 'programming':
        return <Code className="w-5 h-5 text-teal-400" />;
      case 'webBackend':
        return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'databases':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'cloudDevOps':
        return <Cloud className="w-5 h-5 text-sky-400" />;
      case 'toolsPlatforms':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      case 'softSkills':
        return <Sparkles className="w-5 h-5 text-rose-400" />;
      default:
        return <Cpu className="w-5 h-5 text-teal-400" />;
    }
  };

  const skillEntries = Object.entries(portfolioData.technicalSkills);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader 
          badge="Technical Competencies"
          title="Skills & Technology Stack"
          subtitle="Core programming languages, enterprise frameworks, cloud computing services, and relational databases."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillEntries.map(([key, category]) => (
            <div
              key={key}
              className="p-6 sm:p-7 rounded-2xl glass-card glass-card-hover border border-white/10 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-800/90 border border-white/10 group-hover:border-teal-500/30 group-hover:scale-105 transition-all">
                    {getSkillCategoryIcon(key)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-white group-hover:text-teal-300 transition-colors">
                      {category.category}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/10 text-slate-200 text-xs font-mono group-hover:border-teal-500/30 transition-all hover:bg-teal-500/10 hover:text-teal-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Resume Verified</span>
                <span>{category.skills.length} Items</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/20 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex-shrink-0">
              <Cloud className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-display">
                Cloud Infrastructure & DevOps Competence
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Trained in AWS architectures (EC2, S3, IAM, Route53, Auto Scaling), Docker containerization, and Jenkins CI pipelines.
              </p>
            </div>
          </div>
          <a
            href="#experience"
            className="px-4 py-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 text-xs font-mono whitespace-nowrap transition-colors"
          >
            View Cloud Experience
          </a>
        </div>

      </div>
    </section>
  );
};
