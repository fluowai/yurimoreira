import React from 'react';
import { ArrowRight, GraduationCap, Users, ShieldCheck, MapPin } from 'lucide-react';

interface SobreEscritorioProps {
  onOpenHistory: () => void;
}

export const SobreEscritorio: React.FC<SobreEscritorioProps> = ({ onOpenHistory }) => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#080d18] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#c69a59]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Lady Justice (Themis Statue) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#c69a59]/30 shadow-2xl group">
              <div className="aspect-[4/3] sm:aspect-[4/4] lg:aspect-[4/5] relative">
                <img
                  src="/src/assets/images/themis_statue_1789386981366.jpg"
                  alt="Estátua de Têmis - Deusa da Justiça e do Direito"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080d18] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
              </div>

              {/* Subtle gold plaque overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0a121e]/90 backdrop-blur-md border border-[#c69a59]/30">
                <p className="text-xs uppercase tracking-[0.2em] text-[#dfb776] font-semibold text-center font-display">
                  Ética · Rigor Técnico · Justiça
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: About Content & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-[#dfb776] text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase inline-block">
                Sobre o Escritório
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
                Compromisso com a sua defesa
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-2">
                O escritório Dr. Yuri Moreira Advocacia & Consultoria foi fundado com o propósito de oferecer um atendimento jurídico humanizado, ético e eficiente, sempre pautado na busca pelas melhores soluções para nossos clientes.
              </p>
            </div>

            {/* History CTA Button */}
            <div>
              <button
                onClick={onOpenHistory}
                id="sobre-cta-historia"
                className="px-7 py-3.5 rounded-full bg-transparent hover:bg-[#c69a59]/10 active:scale-95 text-white font-medium text-sm tracking-wide transition-all duration-200 border border-[#c69a59]/60 hover:border-[#dfb776] flex items-center gap-2 group shadow-sm"
              >
                <span>Conheça Nossa História</span>
                <ArrowRight className="w-4 h-4 text-[#dfb776] transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* 4 Feature Badges with Icons */}
            <div className="pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#c69a59]/10 border border-[#c69a59]/30 flex items-center justify-center flex-shrink-0 text-[#dfb776]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-slate-200">
                  Atuação técnica<br />e especializada
                </span>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#c69a59]/10 border border-[#c69a59]/30 flex items-center justify-center flex-shrink-0 text-[#dfb776]">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-slate-200">
                  Atendimento<br />humanizado
                </span>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#c69a59]/10 border border-[#c69a59]/30 flex items-center justify-center flex-shrink-0 text-[#dfb776]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-slate-200">
                  Sigilo e<br />segurança
                </span>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#c69a59]/10 border border-[#c69a59]/30 flex items-center justify-center flex-shrink-0 text-[#dfb776]">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-slate-200">
                  Atendimento presencial<br />e online em todo o Brasil
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
