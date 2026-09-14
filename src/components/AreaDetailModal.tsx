import React from 'react';
import { X, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { PracticeArea } from '../types';
import { OFFICE_CONTACT } from '../data/mockData';

interface AreaDetailModalProps {
  area: PracticeArea | null;
  onClose: () => void;
  onSelectForConsultation: (areaTitle: string) => void;
}

export const AreaDetailModal: React.FC<AreaDetailModalProps> = ({
  area,
  onClose,
  onSelectForConsultation,
}) => {
  if (!area) return null;

  const handleWhatsAppArea = () => {
    const text = encodeURIComponent(
      `Olá, Dr. Yuri Moreira. Gostaria de agendar uma consulta e obter orientações sobre ${area.title}.`
    );
    window.open(`https://wa.me/${OFFICE_CONTACT.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-[#0a121e] border border-[#c69a59]/40 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-100 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          aria-label="Fechar detalhes da área"
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div>
            <span className="text-[#dfb776] text-xs font-bold uppercase tracking-[0.2em] inline-block mb-1">
              Área de Atuação
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
              {area.title}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3">
              {area.fullDescription}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <h4 className="text-sm font-semibold text-[#dfb776] uppercase tracking-wider">
              Serviços e Casos Atendidos:
            </h4>
            <ul className="space-y-2.5">
              {area.keyServices.map((service, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#dfb776] flex-shrink-0 mt-0.5" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onSelectForConsultation(area.title);
              }}
              className="flex-1 py-3.5 px-6 rounded-full bg-[#d6a867] hover:bg-[#c69a59] text-[#080e18] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#d6a867]/20"
            >
              <span>Agendar Consulta nesta Área</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsAppArea}
              className="py-3.5 px-6 rounded-full border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Tirar Dúvidas no WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
