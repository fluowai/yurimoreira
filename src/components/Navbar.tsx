import React, { useState, useEffect } from 'react';
import { MessageSquare, Menu, X, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { OFFICE_CONTACT } from '../data/mockData';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenArticles?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onOpenArticles }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['inicio', 'areas', 'sobre', 'artigos', 'contato'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio', id: 'inicio' },
    { label: 'Sobre', href: '#sobre', id: 'sobre' },
    { label: 'Áreas de Atuação', href: '#areas', id: 'areas' },
    { label: 'Artigos', href: '#artigos', id: 'artigos', onClick: onOpenArticles },
    { label: 'Contato', href: '#contato', id: 'contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    if (link.onClick) {
      e.preventDefault();
      link.onClick();
      setMobileMenuOpen(false);
      return;
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080e18]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-[#c69a59]/20 py-3'
          : 'bg-[#080e18]/80 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          className="focus:outline-none focus:ring-2 focus:ring-[#c69a59] rounded-md transition-opacity hover:opacity-95"
          id="nav-logo-link"
        >
          <Logo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm" aria-label="Navegação Principal">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                id={`nav-link-${link.id}`}
                onClick={(e) => handleNavClick(e, link)}
                className={`relative py-1 tracking-wide font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-300 hover:text-[#dfb776]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#c69a59] to-[#dfb776] rounded-full shadow-sm shadow-[#c69a59]/50" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenConsultation}
            id="nav-cta-fale-conosco"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#d6a867] hover:bg-[#c69a59] active:scale-95 text-[#080e18] font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-md shadow-[#d6a867]/20 border border-[#f0cf98]"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span>Fale Conosco</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenConsultation}
            id="nav-mobile-quick-cta"
            aria-label="Fale conosco no WhatsApp"
            className="p-2 rounded-full bg-[#d6a867] text-[#080e18] text-xs font-semibold"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="nav-mobile-menu-toggle"
            aria-label="Abrir menu de navegação"
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-[#c69a59]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="nav-mobile-drawer"
          className="md:hidden bg-[#0a121e]/98 backdrop-blur-xl border-b border-[#c69a59]/20 px-6 py-6 shadow-2xl transition-all animate-fadeIn"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                id={`mobile-nav-${link.id}`}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-base font-medium py-2 border-b border-slate-800/80 transition-colors ${
                  activeSection === link.id ? 'text-[#dfb776] pl-2 font-semibold' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                id="mobile-nav-btn-consulta"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#d6a867] text-[#080e18] font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#d6a867]/25"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Fale Conosco</span>
              </button>

              <a
                href={`tel:${OFFICE_CONTACT.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full border border-slate-700 text-slate-300 hover:text-white hover:border-[#c69a59]/50 text-xs tracking-wide"
              >
                <Phone className="w-3.5 h-3.5 text-[#c69a59]" />
                <span>{OFFICE_CONTACT.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
