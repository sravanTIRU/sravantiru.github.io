import React from 'react';
import { 
  Award, 
  Calendar, 
  CheckCircle2, 
  Layers, 
  Cloud, 
  Code2, 
  BookOpen 
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData, CertificationItem } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  const getCertIcon = (cat: CertificationItem['category']) => {
    switch (cat) {
      case 'Full Stack':
        return <Layers className="w-5 h-5 text-teal-400" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-indigo-400" />;
      case 'Programming':
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'Academic':
        return <BookOpen className="w-5 h-5 text-amber-400" />;
      case 'Web Fundamentals':
        return <Award className="w-5 h-5 text-sky-400" />;
      default:
        return <Award className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader 
          badge="Credentials & Certifications"
          title="Verified Certifications & Specialized Training"
          subtitle="Continuous learning in full-stack engineering, cloud platforms, Python programming, and foundational computing."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {portfolioData.certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl glass-card glass-card-hover border border-white/10 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-800 text-teal-300 border border-teal-500/20">
                    <Calendar className="w-3 h-3 text-teal-400" />
                    {cert.year}
                  </span>

                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {cert.category}
                  </span>
                </div>

                <div className="flex items-start gap-3 mt-3">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-white/10 text-teal-400 flex-shrink-0 group-hover:border-teal-500/30 transition-colors">
                    {getCertIcon(cert.category)}
                  </div>
                  <div>
                    <h3 className="font-bold font-display text-white text-base leading-snug group-hover:text-teal-300 transition-colors">
                      {cert.title}
                    </h3>
                    <div className="text-xs text-slate-400 font-mono mt-1">
                      Issued by <span className="text-slate-200 font-medium">{cert.issuer}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1 text-teal-400/90 text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Resume Certified</span>
                </div>
                <span className="text-slate-500 text-[11px]">{cert.issuer}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
