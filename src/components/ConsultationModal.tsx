import React, { useState } from 'react';
import { X, Send, MessageSquare, CheckCircle2, Calendar, Shield } from 'lucide-react';
import { OFFICE_CONTACT, PRACTICE_AREAS } from '../data/mockData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultArea?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultArea = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    area: defaultArea || 'Direito de Família',
    modality: 'online',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const text = `*Solicitação de Consulta - Dr. Yuri Moreira Advocacia*\n\n` +
      `*Nome:* ${formData.name || 'Não informado'}\n` +
      `*Área:* ${formData.area}\n` +
      `*Modalidade:* ${formData.modality === 'online' ? 'Atendimento Online' : 'Atendimento Presencial'}\n` +
      `*Telefone/WhatsApp:* ${formData.phone || 'Não informado'}\n` +
      `*E-mail:* ${formData.email || 'Não informado'}\n` +
      `*Mensagem:* ${formData.message || 'Gostaria de agendar uma consulta.'}`;

    const url = `https://wa.me/${OFFICE_CONTACT.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-xl bg-[#0a121e] border border-[#c69a59]/40 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-100 max-h-[92vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar modal"
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#c69a59]/20 border border-[#c69a59] text-[#dfb776] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="text-2xl font-bold font-serif text-white">
              Solicitação Enviada com Sucesso!
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed max-w-md mx-auto">
              Recebemos suas informações. Nossa equipe entrará em contato em breve para confirmar a data e o horário da sua consulta.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleSendToWhatsApp}
                className="px-6 py-3 rounded-full bg-[#d6a867] hover:bg-[#c69a59] text-[#080e18] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Agilizar pelo WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-3 rounded-full border border-slate-700 text-slate-300 hover:text-white text-xs font-medium"
              >
                Fechar
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 space-y-1.5">
              <span className="text-[#dfb776] text-xs font-bold uppercase tracking-[0.2em]">
                Agendamento & Contato
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                Agende sua Consulta Jurídica
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm">
                Preencha o formulário abaixo ou fale diretamente pelo WhatsApp com nossa equipe.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-slate-300 font-medium mb-1.5">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Seu nome ou nome da sua empresa"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-[#c69a59] focus:ring-1 focus:ring-[#c69a59] text-white placeholder-slate-500 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-[#c69a59] focus:ring-1 focus:ring-[#c69a59] text-white placeholder-slate-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">
                    E-mail
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seuemail@exemplo.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-[#c69a59] focus:ring-1 focus:ring-[#c69a59] text-white placeholder-slate-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">
                    Área de Interesse
                  </label>
                  <select
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-[#c69a59] focus:ring-1 focus:ring-[#c69a59] text-white outline-none transition-all"
                  >
                    {PRACTICE_AREAS.map((a) => (
                      <option key={a.id} value={a.title}>
                        {a.title}
                      </option>
                    ))}
                    <option value="Outro assunto">Outro assunto</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">
                    Modalidade Desejada
                  </label>
                  <select
                    value={formData.modality}
                    onChange={(e) => setFormData({ ...formData, modality: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-[#c69a59] focus:ring-1 focus:ring-[#c69a59] text-white outline-none transition-all"
                  >
                    <option value="online">Atendimento Online (Vídeo / WhatsApp)</option>
                    <option value="presencial">Atendimento Presencial no Escritório</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1.5">
                  Resumo da sua necessidade ou dúvida
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Descreva brevemente o caso para direcionarmos ao especialista adequado..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-[#c69a59] focus:ring-1 focus:ring-[#c69a59] text-white placeholder-slate-500 outline-none transition-all resize-none"
                />
              </div>

              <div className="flex items-center gap-2 text-slate-400 text-xs pt-1">
                <Shield className="w-4 h-4 text-[#dfb776] flex-shrink-0" />
                <span>Seus dados e relatos estão resguardados pelo sigilo profissional da OAB.</span>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3.5 px-6 rounded-full bg-[#d6a867] hover:bg-[#c69a59] text-[#080e18] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#d6a867]/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Solicitar Agendamento</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  className="py-3.5 px-6 rounded-full border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Enviar no WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
