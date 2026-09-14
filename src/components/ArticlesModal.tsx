import React, { useState } from 'react';
import { X, BookOpen, Clock, Calendar, ArrowRight } from 'lucide-react';
import { LEGAL_ARTICLES } from '../data/mockData';
import { LegalArticle } from '../types';

interface ArticlesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ArticlesModal: React.FC<ArticlesModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  const [selectedArticle, setSelectedArticle] = useState<LegalArticle | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-3xl bg-[#0a121e] border border-[#c69a59]/40 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-100 max-h-[92vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={() => {
            if (selectedArticle) {
              setSelectedArticle(null);
            } else {
              onClose();
            }
          }}
          aria-label="Fechar ou voltar"
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {selectedArticle ? (
          <div className="space-y-6 animate-fadeIn">
            <button
              onClick={() => setSelectedArticle(null)}
              className="text-xs text-[#dfb776] hover:underline flex items-center gap-1 font-semibold"
            >
              ← Voltar para todos os artigos
            </button>

            <div>
              <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#c69a59]/15 text-[#dfb776] border border-[#c69a59]/30 font-medium">
                  {selectedArticle.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {selectedArticle.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedArticle.readTime}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                {selectedArticle.title}
              </h3>
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800 pt-5">
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-[#c69a59]/30 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div>
                <h5 className="font-bold text-white text-sm">
                  Tem dúvidas sobre este tema?
                </h5>
                <p className="text-slate-400 text-xs">
                  Agende uma consulta para avaliar sua situação jurídica detalhadamente.
                </p>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenConsultation();
                }}
                className="px-5 py-2.5 rounded-full bg-[#d6a867] hover:bg-[#c69a59] text-[#080e18] font-bold text-xs uppercase tracking-wider flex-shrink-0"
              >
                Falar com Especialista
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="text-[#dfb776] text-xs font-bold uppercase tracking-[0.2em] inline-block mb-1">
                Conhecimento Jurídico
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                Artigos e Notícias Jurídicas
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Informações claras e atualizadas preparadas pelo escritório Dr. Yuri Moreira.
              </p>
            </div>

            <div className="space-y-4">
              {LEGAL_ARTICLES.map((art) => (
                <div
                  key={art.id}
                  onClick={() => setSelectedArticle(art)}
                  className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-[#c69a59]/60 hover:bg-slate-900 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#c69a59]/15 text-[#dfb776] border border-[#c69a59]/30 font-medium">
                      {art.category}
                    </span>
                    <span>{art.date}</span>
                    <span>·</span>
                    <span>{art.readTime} de leitura</span>
                  </div>

                  <h4 className="text-lg font-bold font-serif text-white group-hover:text-[#dfb776] transition-colors mb-2">
                    {art.title}
                  </h4>

                  <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 mb-3">
                    {art.summary}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#dfb776] uppercase tracking-wider">
                    <span>Ler artigo completo</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
