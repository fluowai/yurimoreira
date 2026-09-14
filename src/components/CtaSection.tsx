import React from 'react';
import { MessageSquare, Mail } from 'lucide-react';
import { OFFICE_CONTACT } from '../data/mockData';

interface CtaSectionProps {
  onOpenConsultation: () => void;
  onOpenMessageModal: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenConsultation, onOpenMessageModal }) => {
  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(OFFICE_CONTACT.whatsappMessage);
    window.open(`https://wa.me/${OFFICE_CONTACT.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 md:py-24 bg-gradient-to-r from-[#080d18] via-[#0c1527] to-[#080d18] text-white relative overflow-hidden border-t border-[#c69a59]/15">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#c69a59]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Left Column */}
          <div className="max-w-2xl text-center lg:text-left space-y-4">
            <span className="text-[#dfb776] text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase inline-block">
              Precisa de orientação jurídica?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight">
              Estamos prontos para te ouvir.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-1">
              Entre em contato e agende uma consulta. Nossa equipe está à disposição para entender sua necessidade e oferecer a melhor solução.
            </p>
          </div>

          {/* Right Column Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto flex-shrink-0">
            <button
              onClick={handleWhatsAppDirect}
              id="cta-btn-whatsapp"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#d6a867] hover:bg-[#c69a59] active:scale-95 text-[#080e18] font-bold text-sm tracking-wider uppercase transition-all duration-200 shadow-xl shadow-[#d6a867]/20 flex items-center justify-center gap-2.5 border border-[#f5d9a8] group"
            >
              <MessageSquare className="w-4 h-4 fill-current transition-transform group-hover:scale-110" />
              <span>Falar no WhatsApp</span>
            </button>

            <button
              onClick={onOpenMessageModal}
              id="cta-btn-enviar-mensagem"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white font-medium text-sm tracking-wide transition-all duration-200 border border-slate-700 hover:border-[#c69a59]/60 flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#dfb776]" />
              <span>Enviar uma Mensagem</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
