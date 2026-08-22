import React from 'react';
import { 
  Brain, 
  FlaskConical, 
  Users, 
  Award, 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  Calendar,
  Building2
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';

export const TeachingSection: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-6 h-6 text-teal-400" />;
      case 'FlaskConical':
        return <FlaskConical className="w-6 h-6 text-indigo-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-emerald-400" />;
      case 'Award':
        return <Award className="w-6 h-6 text-amber-400" />;
      default:
        return <BookOpen className="w-6 h-6 text-teal-400" />;
    }
  };

  return (
    <section id="teaching" className="py-20 relative bg-[#090e1c]/70 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader 
          badge="AI & Academic Pedagogy"
          title="Teaching & Mentorship in Artificial Intelligence"
          subtitle="Guiding undergraduate engineering students through core machine learning principles, algorithm implementations, and hands-on laboratory research."
        />

        <div className="max-w-4xl mx-auto mb-12 p-6 sm:p-8 rounded-2xl glass-card border border-teal-500/30 bg-slate-900/90 shadow-xl shadow-teal-500/5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-mono bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                  Active Academic Appointment
                </div>
                <h3 className="text-2xl font-bold font-display text-white">
                  Junior Lecturer in Artificial Intelligence
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300 mt-1.5">
                  <span className="flex items-center gap-1 text-teal-300 font-semibold">
                    <Building2 className="w-3.5 h-3.5" />
                    Vignan University
                  </span>
                  <span className="text-slate-500">?</span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    Jun 2025 ? Present
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#experience"
                className="px-4 py-2.5 rounded-xl text-xs font-mono text-center font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                View Experience Details
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {portfolioData.teachingAndResearch.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl glass-card glass-card-hover border border-white/10 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-800/90 border border-white/10 group-hover:border-teal-500/30 transition-all">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    Pillar 0{idx + 1}
                  </span>
                </div>

                <h4 className="text-lg font-bold font-display text-white group-hover:text-teal-300 transition-colors">
                  {pillar.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-teal-400/90">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                <span>Undergraduate Curriculum Component</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center p-6 rounded-2xl bg-slate-900/60 border border-white/5 space-y-2">
          <p className="text-xs sm:text-sm text-slate-300 italic font-sans leading-relaxed">
            "Teaching Artificial Intelligence requires breaking complex mathematical heuristics and algorithmic steps down to first principles, cultivating both theoretical clarity and disciplined software engineering habits in future technologists."
          </p>
          <div className="text-xs font-mono text-teal-400 pt-1">
            ? T G Sravan Teja
          </div>
        </div>

      </div>
    </section>
  );
};
