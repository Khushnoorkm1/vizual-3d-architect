
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import SupplyMainPowerSection from "@/components/SupplyMainPowerSection";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAutoTranslate } from "@/hooks/useAutoTranslate";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { t, language } = useLanguage();
  
  // Initialize the auto-translation hook
  const { isTranslating } = useAutoTranslate(true);

  useEffect(() => {
    // Simulate loading time for resources like 3D models
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-architectural-blue flex items-center justify-center z-50" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <div className="text-center">
          <div className="w-24 h-24 border-t-4 border-architectural-blue dark:border-architectural-gold border-solid rounded-full animate-spin mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold text-architectural-blue dark:text-white">
            Omair<span className="text-architectural-gold"> Contracting Establishment</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">{t('loading')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SupplyMainPowerSection />
        <ProjectsSection />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
      {isTranslating && (
        <div className="fixed bottom-4 right-4 bg-white/80 dark:bg-gray-800/80 text-sm p-2 rounded-md shadow-md backdrop-blur-sm" data-no-translate>
          <span>Translating content...</span>
        </div>
      )}
    </div>
  );
};

export default Index;
