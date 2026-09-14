import React from 'react';
import { Phone, Mail, MapPin, Globe, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';
import { OFFICE_CONTACT } from '../data/mockData';

interface FooterProps {
  onOpenPrivacyPolicy: () => void;
  onOpenTermsOfUse: () => void;
  onOpenArticles?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacyPolicy,
  onOpenTermsOfUse,
  onOpenArticles,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#050912] text-slate-400 text-sm border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/70">
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="md" />
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm pt-2">
              Assessoria jurídica de excelência pautada no rigor técnico, ética profissional e dedicação incansável aos direitos e interesses de nossos clientes.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded bg-[#c69a59]/10 border border-[#c69a59]/30 text-[11px] text-[#dfb776] tracking-wider uppercase font-semibold">
                OAB Registrado e Regularizado
              </span>
            </div>
          </div>

          {/* Col 2: Links Rápidos */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-serif font-bold text-base tracking-wide">
              Links Rápidos
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="hover:text-[#dfb776] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#dfb776] transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-[#dfb776] transition-colors">
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenArticles}
                  className="hover:text-[#dfb776] transition-colors text-left"
                >
                  Artigos
                </button>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#dfb776] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contato */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-serif font-bold text-base tracking-wide">
              Contato
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#dfb776] flex-shrink-0" />
                <a
                  href={`tel:${OFFICE_CONTACT.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {OFFICE_CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#dfb776] flex-shrink-0" />
                <a
                  href={`mailto:${OFFICE_CONTACT.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {OFFICE_CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#dfb776] flex-shrink-0 mt-1" />
                <span className="leading-snug">
                  {OFFICE_CONTACT.addressOneLine}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-[#dfb776] flex-shrink-0" />
                <span className="text-slate-300">
                  {OFFICE_CONTACT.website}
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Redes Sociais */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-white font-serif font-bold text-base tracking-wide">
              Redes Sociais
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={OFFICE_CONTACT.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram do Dr. Yuri Moreira"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#c69a59] text-slate-300 hover:text-[#dfb776] flex items-center justify-center transition-all duration-200 hover:-translate-y-1 shadow-sm"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={OFFICE_CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn do Dr. Yuri Moreira"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#c69a59] text-slate-300 hover:text-[#dfb776] flex items-center justify-center transition-all duration-200 hover:-translate-y-1 shadow-sm"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={OFFICE_CONTACT.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube do Dr. Yuri Moreira"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#c69a59] text-slate-300 hover:text-[#dfb776] flex items-center justify-center transition-all duration-200 hover:-translate-y-1 shadow-sm"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            {/* Inspiring quote */}
            <div className="pt-2">
              <blockquote className="text-slate-400 italic text-xs leading-relaxed border-l-2 border-[#dfb776]/50 pl-3 font-serif">
                “Direito é mais que lei, é a garantia de um futuro melhor.”
              </blockquote>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2024 Dr. Yuri Moreira Advocacia & Consultoria. Todos os direitos reservados.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPrivacyPolicy}
              className="hover:text-slate-300 transition-colors"
            >
              Política de Privacidade
            </button>
            <span>|</span>
            <button
              onClick={onOpenTermsOfUse}
              className="hover:text-slate-300 transition-colors"
            >
              Termos de Uso
            </button>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className="w-9 h-9 rounded-full bg-slate-900 hover:bg-[#c69a59] text-slate-400 hover:text-[#080e18] border border-slate-800 hover:border-transparent flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
