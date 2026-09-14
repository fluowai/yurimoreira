import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, UserCheck, TrendingUp } from 'lucide-react';
import { LogoEmblem } from './Logo';

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenHistory: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onOpenHistory }) => {
  return (
    <section
      id="inicio"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#080d18] via-[#0b1424] to-[#080d18]"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#c69a59]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-[#1e293b]/30 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle legal pattern grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#c69a59_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-8 text-center lg:text-left">
            {/* Tagline */}
            <div className="inline-flex items-center justify-center lg:justify-start">
              <span className="text-[#dfb776] text-xs md:text-sm font-semibold tracking-[0.25em] uppercase">
                Experiência · Estratégia · Resultados
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold font-serif leading-[1.12] tracking-tight text-white">
              Seu Direito.{' '}
              <span className="block mt-1 font-serif text-[#dfb776] font-bold">
                Nossa Prioridade.
              </span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Atuação jurídica estratégica, ética e personalizada para pessoas e empresas que buscam segurança e resultados.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                id="hero-cta-agende-consulta"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#d6a867] hover:bg-[#c69a59] active:scale-95 text-[#080e18] font-bold text-sm tracking-wider uppercase transition-all duration-200 shadow-lg shadow-[#d6a867]/25 flex items-center justify-center gap-2.5 border border-[#f5d9a8] group"
              >
                <MessageSquare className="w-4 h-4 fill-current transition-transform group-hover:scale-110" />
                <span>Agende uma Consulta</span>
              </button>

              <a
                href="#sobre"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
                }}
                id="hero-cta-conheca-escritorio"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-slate-900/60 hover:bg-slate-800/80 active:scale-95 text-slate-100 font-medium text-sm tracking-wide transition-all duration-200 border border-slate-700 hover:border-[#c69a59]/60 flex items-center justify-center gap-2 group"
              >
                <span>Conheça o Escritório</span>
                <ArrowRight className="w-4 h-4 text-[#dfb776] transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* 3 Pillar Feature Badges */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#c69a59]/10 border border-[#c69a59]/25 flex items-center justify-center flex-shrink-0 text-[#dfb776]">
                  <UserCheck className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-200 leading-snug">
                  Atendimento<br />Personalizado
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#c69a59]/10 border border-[#c69a59]/25 flex items-center justify-center flex-shrink-0 text-[#dfb776]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-200 leading-snug">
                  Ética e<br />Transparência
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#c69a59]/10 border border-[#c69a59]/25 flex items-center justify-center flex-shrink-0 text-[#dfb776]">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-200 leading-snug">
                  Foco em<br />Resultados
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Portrait & Branding Stage */}
          <div className="lg:col-span-6 xl:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative border & glow */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#c69a59]/20 via-transparent to-[#c69a59]/30 blur-lg" />

              {/* Main Card Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[#c69a59]/30 bg-gradient-to-b from-[#0e192a] via-[#09111c] to-[#060b13] shadow-2xl">
                {/* Law Library Books background overlay at top/right */}
                <div className="relative h-[340px] sm:h-[420px] md:h-[460px] overflow-hidden flex items-end justify-center">
                  <img
                    src="/src/assets/images/law_office_books_1789386994144.jpg"
                    alt="Biblioteca jurídica Dr. Yuri Moreira"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-35 filter brightness-75 contrast-125"
                  />

                  {/* Gradient to seamlessly blend doctor with background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060b13] via-[#09111c]/60 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#09111c]/80 via-transparent to-[#09111c]/80" />

                  {/* Doctor Portrait */}
                  <img
                    src="/src/assets/images/dr_yuri_portrait_1789386968719.jpg"
                    alt="Dr. Yuri Moreira - Advogado e Consultor Jurídico"
                    referrerPolicy="no-referrer"
                    className="relative z-10 w-auto h-full max-h-[440px] object-cover object-top drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] filter contrast-105"
                  />

                  {/* Overlaid Gold Legal Codes (Book Spines) on the right side - matching mockup */}
                  <div className="absolute right-3 bottom-4 z-20 hidden sm:flex flex-col gap-1.5 opacity-90">
                    <div className="px-2.5 py-1 rounded bg-[#0b1320]/90 border border-[#c69a59]/40 text-[9px] font-bold text-[#dfb776] tracking-wider uppercase backdrop-blur-sm shadow-md">
                      Constituição Federal
                    </div>
                    <div className="px-2.5 py-1 rounded bg-[#0b1320]/90 border border-[#c69a59]/40 text-[9px] font-bold text-[#dfb776] tracking-wider uppercase backdrop-blur-sm shadow-md">
                      Código Civil
                    </div>
                    <div className="px-2.5 py-1 rounded bg-[#0b1320]/90 border border-[#c69a59]/40 text-[9px] font-bold text-[#dfb776] tracking-wider uppercase backdrop-blur-sm shadow-md">
                      Código de Processo Civil
                    </div>
                    <div className="px-2.5 py-1 rounded bg-[#0b1320]/90 border border-[#c69a59]/40 text-[9px] font-bold text-[#dfb776] tracking-wider uppercase backdrop-blur-sm shadow-md">
                      Código Penal
                    </div>
                  </div>
                </div>

                {/* Bottom Quote & Branding Badge */}
                <div className="p-5 sm:p-6 bg-[#09121f]/95 border-t border-[#c69a59]/25 backdrop-blur-md relative">
                  {/* Floating Gold Emblem watermark in background */}
                  <div className="absolute top-2 right-4 opacity-15 pointer-events-none">
                    <LogoEmblem className="w-24 h-24" />
                  </div>

                  <div className="relative z-10 space-y-3">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-white font-bold tracking-wider text-base sm:text-lg uppercase"
                        style={{ fontFamily: "'Cinzel', serif" }}
                      >
                        Dr. Yuri Moreira
                      </span>
                      <span className="text-[#c69a59] text-[10px] uppercase tracking-widest font-semibold ml-1">
                        — Advocacia & Consultoria
                      </span>
                    </div>

                    <blockquote className="text-slate-300 italic text-sm sm:text-base border-l-2 border-[#dfb776] pl-3 py-0.5 font-serif">
                      “Justiça não é apenas uma meta, é um compromisso.”
                    </blockquote>

                    <p className="text-right text-[#dfb776] text-xs font-semibold tracking-wide">
                      — Dr. Yuri Moreira
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
