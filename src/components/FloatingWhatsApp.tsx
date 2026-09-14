import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { OFFICE_CONTACT } from '../data/mockData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const handleSend = () => {
    const text = encodeURIComponent(customMsg.trim() || OFFICE_CONTACT.whatsappMessage);
    window.open(`https://wa.me/${OFFICE_CONTACT.phoneRaw}?text=${text}`, '_blank');
    setIsOpen(false);
    setCustomMsg('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-[#0a121e] border border-[#c69a59]/40 rounded-2xl p-4 shadow-2xl text-white animate-fadeIn">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-[#c69a59]/60">
                  <img
                    src="/src/assets/images/dr_yuri_portrait_1789386968719.jpg"
                    alt="Dr. Yuri Moreira"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#0a121e]" />
              </div>

              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  Dr. Yuri Moreira
                </h4>
                <p className="text-[10px] text-emerald-400 font-medium">
                  Atendimento online agora
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1"
              aria-label="Fechar janela WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body bubble */}
          <div className="py-3 text-xs text-slate-300">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 leading-relaxed">
              Olá! Como o escritório <strong>Dr. Yuri Moreira Advocacia</strong> pode te ajudar hoje?
            </div>
          </div>

          {/* Input & Send */}
          <div className="space-y-2">
            <textarea
              rows={2}
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              placeholder="Digite sua mensagem para iniciar..."
              className="w-full px-3 py-2 text-xs rounded-xl bg-slate-900 border border-slate-700 focus:border-[#c69a59] outline-none text-white placeholder-slate-500 resize-none"
            />

            <button
              onClick={handleSend}
              className="w-full py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Iniciar Conversa no WhatsApp</span>
            </button>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        id="floating-whatsapp-btn"
        aria-label="Conversar no WhatsApp"
        className="relative group p-3.5 sm:p-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white shadow-xl shadow-[#25D366]/30 transition-all duration-300 hover:scale-105 flex items-center justify-center"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
        
        {/* Pulsing rings */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:animate-ping pointer-events-none" />

        {/* Hover Tooltip */}
        {!isOpen && (
          <span className="hidden sm:inline-block absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#0a121e] border border-[#c69a59]/40 text-slate-200 text-xs font-medium whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Fale conosco no WhatsApp
          </span>
        )}
      </button>
    </div>
  );
};
