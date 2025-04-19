
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import SupplyMainPowerSection from "@/components/SupplyMainPowerSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAutoTranslate } from "@/hooks/useAutoTranslate";
import { motion } from "framer-motion";
import MultilingualContentSection from "@/components/MultilingualContentSection";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { t, language } = useLanguage();
  const { isTranslating } = useAutoTranslate(true);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 80
      }
    }
  };

  useEffect(() => {
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
      <main className="flex-1">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
        >
          {[
            <HeroSection key="hero" />,
            <AboutSection key="about" />,
            <ServicesSection key="services" />,
            <MultilingualContentSection key="multilingual" />,
            <SupplyMainPowerSection key="supply" />,
            <TeamSection key="team" />,
            <ProjectsSection key="projects" />,
            <ClientsSection key="clients" />,
            <ContactSection key="contact" />
          ].map((section, index) => (
            <motion.section
              key={index}
              variants={sectionVariants}
              viewport={{ once: true, margin: "-50px" }}
              className="min-h-[90vh] py-24 md:py-32 px-6 md:px-12 lg:px-24"
            >
              {section}
            </motion.section>
          ))}
        </motion.div>
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
