import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AreasDeAtuacao } from './components/AreasDeAtuacao';
import { SobreEscritorio } from './components/SobreEscritorio';
import { MetricasBar } from './components/MetricasBar';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { AreaDetailModal } from './components/AreaDetailModal';
import { HistoryModal } from './components/HistoryModal';
import { ArticlesModal } from './components/ArticlesModal';
import { LegalModal } from './components/LegalModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PracticeArea } from './types';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedPracticeArea, setSelectedPracticeArea] = useState<PracticeArea | null>(null);
  const [defaultAreaForConsultation, setDefaultAreaForConsultation] = useState('');
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isArticlesOpen, setIsArticlesOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenConsultation = (areaTitle?: string) => {
    setDefaultAreaForConsultation(areaTitle || '');
    setIsConsultationOpen(true);
  };

  const handleSelectArea = (area: PracticeArea) => {
    setSelectedPracticeArea(area);
  };

  return (
    <div className="min-h-screen bg-[#080e18] text-slate-100 flex flex-col selection:bg-[#c69a59] selection:text-[#080e18]">
      {/* Top Fixed Navbar */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenArticles={() => setIsArticlesOpen(true)}
      />

      {/* Main Content Sections matching the Mockup */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onOpenHistory={() => setIsHistoryOpen(true)}
        />

        {/* 2. Áreas de Atuação (White/Cream Section with 5 practice cards) */}
        <AreasDeAtuacao onSelectArea={handleSelectArea} />

        {/* 3. Sobre o Escritório (Dark Section with Themis statue and bullet points) */}
        <SobreEscritorio onOpenHistory={() => setIsHistoryOpen(true)} />

        {/* 4. Métricas Bar (Light Section with +500, +1.000, 98%, 10+) */}
        <MetricasBar />

        {/* 5. CTA Section (Precisa de Orientação Jurídica? Estamos prontos para te ouvir) */}
        <CtaSection
          onOpenConsultation={() => handleOpenConsultation()}
          onOpenMessageModal={() => handleOpenConsultation()}
        />
      </main>

      {/* 6. Footer (4 Columns + Bottom Copyright bar) */}
      <Footer
        onOpenPrivacyPolicy={() => setLegalModalType('privacy')}
        onOpenTermsOfUse={() => setLegalModalType('terms')}
        onOpenArticles={() => setIsArticlesOpen(true)}
      />

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultArea={defaultAreaForConsultation}
      />

      <AreaDetailModal
        area={selectedPracticeArea}
        onClose={() => setSelectedPracticeArea(null)}
        onSelectForConsultation={(areaTitle) => handleOpenConsultation(areaTitle)}
      />

      <HistoryModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      <ArticlesModal
        isOpen={isArticlesOpen}
        onClose={() => setIsArticlesOpen(false)}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* WhatsApp Floating Action Widget */}
      <FloatingWhatsApp />
    </div>
  );
}
