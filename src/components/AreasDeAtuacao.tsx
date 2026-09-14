import React from 'react';
import { Users, Briefcase, Building2, Scale, FileText, ArrowRight } from 'lucide-react';
import { PRACTICE_AREAS } from '../data/mockData';
import { PracticeArea } from '../types';

interface AreasDeAtuacaoProps {
  onSelectArea: (area: PracticeArea) => void;
}

export const AreasDeAtuacao: React.FC<AreasDeAtuacaoProps> = ({ onSelectArea }) => {
  const getIcon = (name: string) => {
    const iconProps = { className: "w-7 h-7 text-[#b38237]" };
    switch (name) {
      case 'Users':
        return <Users {...iconProps} />;
      case 'Briefcase':
        return <Briefcase {...iconProps} />;
      case 'Building2':
        return <Building2 {...iconProps} />;
      case 'Scale':
        return <Scale {...iconProps} />;
      case 'FileText':
        return <FileText {...iconProps} />;
      default:
        return <Scale {...iconProps} />;
    }
  };

  return (
    <section id="areas" className="py-20 md:py-28 bg-[#f8fafc] text-slate-900 relative">
      {/* Top subtle divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#b38237] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase inline-block">
            Áreas de Atuação
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-slate-900 tracking-tight">
            Especialização para cada necessidade
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Atuamos de forma estratégica e especializada, oferecendo suporte jurídico completo em diversas áreas do direito.
          </p>
        </div>

        {/* 5 Cards Row/Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {PRACTICE_AREAS.map((area) => (
            <div
              key={area.id}
              id={`card-area-${area.id}`}
              onClick={() => onSelectArea(area)}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-slate-200/80 hover:border-[#dfb776]/70 flex flex-col justify-between cursor-pointer relative overflow-hidden"
            >
              {/* Card top decorative accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#c69a59] group-hover:to-[#dfb776] transition-all duration-300" />

              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-[#faf5eb] group-hover:bg-[#f3e7cb] border border-[#ebd7b2]/50 flex items-center justify-center mb-6 transition-colors duration-300">
                  {getIcon(area.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-serif text-slate-900 mb-3 group-hover:text-[#b38237] transition-colors">
                  {area.title}
                </h3>

                {/* Short Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {area.shortDescription}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-[#b38237] group-hover:text-[#8f622a] tracking-wider uppercase gap-1.5 transition-colors">
                <span>Saiba mais</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
