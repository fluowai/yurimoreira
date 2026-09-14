import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-[#0a121e] border border-[#c69a59]/40 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-100 max-h-[85vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          aria-label="Fechar termos"
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            {isPrivacy ? (
              <ShieldCheck className="w-6 h-6 text-[#dfb776]" />
            ) : (
              <FileText className="w-6 h-6 text-[#dfb776]" />
            )}
            <h3 className="text-2xl font-bold font-serif text-white">
              {isPrivacy ? 'Política de Privacidade (LGPD)' : 'Termos de Uso do Website'}
            </h3>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-4">
            {isPrivacy ? (
              <>
                <p>
                  O escritório <strong>Dr. Yuri Moreira Advocacia & Consultoria</strong> preza pela segurança, confidencialidade e privacidade dos dados de seus clientes e usuários, em estrita conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD) e as prerrogativas de sigilo da Ordem dos Advogados do Brasil (OAB).
                </p>
                <h4 className="font-bold text-white text-sm pt-2">1. Coleta e Finalidade dos Dados</h4>
                <p>
                  Os dados fornecidos nos formulários de contato (nome, e-mail, telefone/WhatsApp e descrição) são utilizados exclusivamente para fins de atendimento pré-processual, agendamento de consultas jurídicas e resposta às dúvidas enviadas.
                </p>
                <h4 className="font-bold text-white text-sm pt-2">2. Sigilo Profissional</h4>
                <p>
                  Todas as informações compartilhadas encontram-se resguardadas pelo sigilo profissional inerente ao exercício da advocacia, sendo vedado o compartilhamento com terceiros desautorizados.
                </p>
                <h4 className="font-bold text-white text-sm pt-2">3. Direitos do Titular</h4>
                <p>
                  Você tem o direito de solicitar a confirmação da existência de tratamento, acesso, retificação ou exclusão de seus dados a qualquer momento pelo e-mail <code>contato@escritorioyurimoreira.com.br</code>.
                </p>
              </>
            ) : (
              <>
                <p>
                  Bem-vindo ao portal institucional do escritório <strong>Dr. Yuri Moreira Advocacia & Consultoria</strong>. Ao navegar neste website, você concorda com os termos e condições aqui estabelecidos.
                </p>
                <h4 className="font-bold text-white text-sm pt-2">1. Caráter Informativo</h4>
                <p>
                  O conteúdo disponibilizado neste site (textos, resumos e artigos) possui finalidade exclusivamente informativa e educacional, não constituindo consulta jurídica formal nem vinculação contratual de mandato.
                </p>
                <h4 className="font-bold text-white text-sm pt-2">2. Propriedade Intelectual</h4>
                <p>
                  A marca, logotipos, emblemas e textos deste portal são de titularidade do Dr. Yuri Moreira Advocacia & Consultoria, sendo vedada a reprodução total ou parcial sem expressa autorização.
                </p>
                <h4 className="font-bold text-white text-sm pt-2">3. Contratação de Serviços</h4>
                <p>
                  A efetiva prestação de serviços advocatícios formaliza-se mediante celebração de contrato de honorários específico e outorga de procuração.
                </p>
              </>
            )}
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs tracking-wide"
            >
              Compreendido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
