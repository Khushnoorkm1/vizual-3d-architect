
import { 
  LayoutPanelTop, 
  Paintbrush, 
  Home, 
  Building, 
  Building2, 
  Waypoints,
  X
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";

const ServicesSection = () => {
  const { t } = useTranslation();
  const { dir } = useLanguage();
  const [selectedService, setSelectedService] = useState(null);

  // Define services with their icons
  const services = [
    {
      icon: <Building size={36} className="text-architectural-gold" />,
      titleKey: "services.items.0.title",
      descriptionKey: "services.items.0.description",
      details: {
        features: Array.from({ length: 5 }, (_, i) => `services.items.0.features.${i}`),
        process: Array.from({ length: 4 }, (_, i) => `services.items.0.process.${i}`)
      }
    },
    {
      icon: <Paintbrush size={36} className="text-architectural-gold" />,
      titleKey: "services.items.1.title",
      descriptionKey: "services.items.1.description"
    },
    {
      icon: <LayoutPanelTop size={36} className="text-architectural-gold" />,
      titleKey: "services.items.2.title",
      descriptionKey: "services.items.2.description"
    },
    {
      icon: <Building2 size={36} className="text-architectural-gold" />,
      titleKey: "services.commercialSpaces.title",
      descriptionKey: "services.commercialSpaces.description"
    },
    {
      icon: <Home size={36} className="text-architectural-gold" />,
      titleKey: "services.residentialDesign.title",
      descriptionKey: "services.residentialDesign.description"
    },
    {
      icon: <Waypoints size={36} className="text-architectural-gold" />,
      titleKey: "services.urbanPlanning.title",
      descriptionKey: "services.urbanPlanning.description"
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50 dark:bg-gray-800" dir={dir}>
      <div className="container mx-auto">
        <h2 className="section-title dark:text-white text-center">
          {t("services.title")}
        </h2>
        <p className="section-subtitle dark:text-gray-300 text-center">
          {t("services.subtitle")}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-architectural-blue dark:text-white">{t(service.titleKey)}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t(service.descriptionKey)}</p>
            </div>
          ))}
        </div>
        
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3 text-2xl">
                {selectedService?.icon}
                {selectedService && t(selectedService.titleKey)}
              </DialogTitle>
              <DialogDescription className="text-lg">
                {selectedService && t(selectedService.descriptionKey)}
              </DialogDescription>
            </DialogHeader>
            
            {selectedService?.details && (
              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-architectural-blue dark:text-white">
                    {t("services.keyFeatures")}
                  </h4>
                  <ul className="list-disc pl-6 space-y-2">
                    {selectedService.details.features.map((featureKey, index) => (
                      <li key={index} className="text-gray-600 dark:text-gray-300">{t(featureKey)}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-architectural-blue dark:text-white">
                    {t("services.ourProcess")}
                  </h4>
                  <div className="space-y-3">
                    {selectedService.details.process.map((processKey, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-architectural-gold text-white flex items-center justify-center text-sm">
                          {index + 1}
                        </span>
                        <p className="text-gray-600 dark:text-gray-300">{t(processKey)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            <DialogClose asChild>
              <Button variant="ghost" size="icon" className="absolute right-4 top-4">
                <X className="h-4 w-4" />
              </Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
        
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-12 text-architectural-blue dark:text-white">
            {t("services.designProcess.title")}
          </h3>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-architectural-gold/30 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <div className="glass-card p-6 rounded-xl inline-block hover-scale">
                    <h4 className="text-xl font-bold mb-2 text-architectural-blue dark:text-white">
                      {t("services.designProcess.discovery.title")}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t("services.designProcess.discovery.content")}
                    </p>
                  </div>
                </div>
                <div className="relative md:w-1/2 flex justify-center mb-6 md:mb-0 order-1 md:order-2">
                  <div className="w-12 h-12 rounded-full bg-architectural-gold flex items-center justify-center z-10">
                    <span className="text-white font-bold">1</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="relative md:w-1/2 flex justify-center mb-6 md:mb-0">
                  <div className="w-12 h-12 rounded-full bg-architectural-gold flex items-center justify-center z-10">
                    <span className="text-white font-bold">2</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="glass-card p-6 rounded-xl inline-block hover-scale">
                    <h4 className="text-xl font-bold mb-2 text-architectural-blue dark:text-white">
                      {t("services.designProcess.conceptDevelopment.title")}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t("services.designProcess.conceptDevelopment.content")}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <div className="glass-card p-6 rounded-xl inline-block hover-scale">
                    <h4 className="text-xl font-bold mb-2 text-architectural-blue dark:text-white">
                      {t("services.designProcess.visualization.title")}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t("services.designProcess.visualization.content")}
                    </p>
                  </div>
                </div>
                <div className="relative md:w-1/2 flex justify-center mb-6 md:mb-0 order-1 md:order-2">
                  <div className="w-12 h-12 rounded-full bg-architectural-gold flex items-center justify-center z-10">
                    <span className="text-white font-bold">3</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="relative md:w-1/2 flex justify-center mb-6 md:mb-0">
                  <div className="w-12 h-12 rounded-full bg-architectural-gold flex items-center justify-center z-10">
                    <span className="text-white font-bold">4</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="glass-card p-6 rounded-xl inline-block hover-scale">
                    <h4 className="text-xl font-bold mb-2 text-architectural-blue dark:text-white">
                      {t("services.designProcess.refinement.title")}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t("services.designProcess.refinement.content")}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <div className="glass-card p-6 rounded-xl inline-block hover-scale">
                    <h4 className="text-xl font-bold mb-2 text-architectural-blue dark:text-white">
                      {t("services.designProcess.implementation.title")}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t("services.designProcess.implementation.content")}
                    </p>
                  </div>
                </div>
                <div className="relative md:w-1/2 flex justify-center mb-6 md:mb-0 order-1 md:order-2">
                  <div className="w-12 h-12 rounded-full bg-architectural-gold flex items-center justify-center z-10">
                    <span className="text-white font-bold">5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
