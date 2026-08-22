import React, { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Layers, 
  Check, 
  Terminal, 
  Code2, 
  Database
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Full-Stack', 'Python & Algorithms', 'Frontend & APIs', 'Utilities'];

  const filteredProjects = portfolioData.projects.filter(project => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Full-Stack') return project.technologies.includes('Angular v20') || project.technologies.includes('Spring Boot');
    if (selectedCategory === 'Python & Algorithms') return project.technologies.includes('Python') || project.technologies.includes('Django');
    if (selectedCategory === 'Frontend & APIs') return project.technologies.includes('JavaScript') || project.technologies.includes('OpenWeatherMap API');
    if (selectedCategory === 'Utilities') return project.category.includes('Utility') || project.category.includes('CLI');
    return true;
  });

  return (
    <section id="projects" className="py-20 relative bg-[#080c16]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader 
          badge="Featured Engineering Work"
          title="Selected Software & AI Projects"
          subtitle="Practical implementations spanning Angular v20 & Spring Boot full-stack architecture, Python database cleansing algorithms, APIs, and CLI tooling."
        />

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-teal-500 text-slate-950 font-bold shadow-lg shadow-teal-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/5 hover:border-white/15'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className={`rounded-2xl glass-card border flex flex-col justify-between overflow-hidden transition-all duration-300 group hover:-translate-y-1.5 ${
                project.featured 
                  ? 'border-teal-500/30 bg-slate-900/90 shadow-xl hover:border-teal-400/60 hover:shadow-teal-500/10' 
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div className="p-6 sm:p-7 space-y-4">
                
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2.5 rounded-xl bg-slate-800/90 border border-white/10 text-teal-400 group-hover:scale-110 transition-transform">
                      {project.id === 'task-management' ? (
                        <Layers className="w-5 h-5" />
                      ) : project.id === 'string-similarity' ? (
                        <Database className="w-5 h-5" />
                      ) : project.id === 'high-card-duel' ? (
                        <Terminal className="w-5 h-5" />
                      ) : (
                        <Code2 className="w-5 h-5" />
                      )}
                    </div>
                    <span className="text-xs font-mono text-teal-400/90 uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>

                  {project.featured && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                      Featured
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-teal-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.longDesc}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/5">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Key Capabilities:
                  </div>
                  <ul className="space-y-1.5">
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-normal">
                        <Check className="w-3.5 h-3.5 text-teal-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              <div className="px-6 sm:px-7 py-4 bg-slate-950/60 border-t border-white/10 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-badge text-[10px]">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 text-xs font-mono text-slate-400">
                  <span className="text-[11px] text-slate-500">
                    Resume Project
                  </span>
                  
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] text-slate-500">
                      <Github className="w-3.5 h-3.5" />
                      <span>Repository on Request</span>
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs font-mono text-slate-400 bg-slate-900/50 border border-white/5 rounded-xl p-4 max-w-2xl mx-auto">
          <span className="text-teal-400 font-semibold">Note:</span> All 5 projects reflect verified software and algorithms developed across coursework, research, and independent engineering.
        </div>

      </div>
    </section>
  );
};
