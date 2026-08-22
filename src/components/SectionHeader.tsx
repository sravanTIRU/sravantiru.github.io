import React from 'react';

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = 'center'
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-teal-500/10 text-teal-300 border border-teal-500/20 mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
        {badge}
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-slate-400 max-w-2xl text-base md:text-lg leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 flex items-center gap-1.5 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        <div className="h-1 w-12 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full"></div>
        <div className="h-1 w-2 bg-indigo-500 rounded-full"></div>
        <div className="h-1 w-1 bg-slate-600 rounded-full"></div>
      </div>
    </div>
  );
};
