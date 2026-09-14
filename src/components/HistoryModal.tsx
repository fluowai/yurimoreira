import React from 'react';
import { X, Award, Shield, BookOpen, Clock, CheckCircle } from 'lucide-react';
import { Logo } from './Logo';

interface HistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const HistoryModal: React.FC<HistoryModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-[#0a121e] border border-[#c69a59]/40 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-100 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          aria-label="Fechar história"
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div className="flex items-center gap-4 border-b border-slate-800 pb-5">
            <Logo size="md" />
          </div>

          <div>
            <span className="text-[#dfb776] text-xs font-bold uppercase tracking-[0.2em] inline-block mb-1">
              Trajetória e Valores
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
              A História do Escritório Dr. Yuri Moreira
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              O escritório <strong>Dr. Yuri Moreira Advocacia & Consultoria</strong> nasceu da convicção de que o direito deve ser exercido com técnica apurada, respeito à dignidade de cada indivíduo e busca contínua por resultados justos e eficazes.
            </p>
            <p>
              Com mais de uma década de dedicação jurídica ininterrupta, construímos uma reputação sólida baseada na transparência absoluta, na análise estratégica de riscos e no atendimento humanizado. Cada causa é tratada de maneira exclusiva, compreendendo as nuances humanas e empresariais de cada cliente.
            </p>
          </div>

          {/* Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-[#dfb776]">
                <Shield className="w-4 h-4" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                  Ética Inegociável
                </h4>
              </div>
              <p className="text-xs text-slate-400">
                Atuação em estrita conformidade com o Código de Ética e Disciplina da OAB e total lealdade ao cliente.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-[#dfb776]">
                <Award className="w-4 h-4" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                  Excelência Técnica
                </h4>
              </div>
              <p className="text-xs text-slate-400">
                Aperfeiçoamento continuado e teses jurídicas contemporâneas perante Tribunais de Justiça e Cortes Superiores.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-[#dfb776]">
                <Clock className="w-4 h-4" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                  Agilidade e Clareza
                </h4>
              </div>
              <p className="text-xs text-slate-400">
                Comunicação desprovida de termos incompreensíveis, com relatórios periódicos do andamento do seu processo.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-[#dfb776]">
                <BookOpen className="w-4 h-4" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                  Abrangência Nacional
                </h4>
              </div>
              <p className="text-xs text-slate-400">
                Atendimento presencial no escritório e estrutura digital de ponta para atender clientes em todo o Brasil.
              </p>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#d6a867] hover:bg-[#c69a59] text-[#080e18] font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#d6a867]/20 transition-all"
            >
              Falar com o Dr. Yuri Moreira
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
