
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();
  const { dir } = useLanguage();

  useEffect(() => {
    // Simulate loading time for resources like 3D models
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-architectural-blue flex items-center justify-center z-50" dir={dir}>
        <div className="text-center">
          <div className="w-24 h-24 border-t-4 border-architectural-blue dark:border-architectural-gold border-solid rounded-full animate-spin mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold text-architectural-blue dark:text-white">
            {t("footer.company")}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">{t("loading", "Loading amazing experiences...")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" dir={dir}>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
