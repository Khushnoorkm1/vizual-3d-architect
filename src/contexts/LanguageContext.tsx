
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'ar';

type TranslationsType = {
  [key: string]: {
    [key: string]: string;
  };
};

// Translations object
const translations: TranslationsType = {
  en: {
    supplyMainPower: "Supply Main Power",
    powerDescription: "The primary electrical power source engineered to deliver consistent, reliable energy to all critical system components.",
    voltageRegulation: "Automatic voltage regulation",
    surgeProtection: "Surge protection capacity",
    powerMonitoring: "Continuous power monitoring",
    learnMore: "Learn More",
    technicalDocs: "Technical Documentation",
    technicalSpecs: "Technical Specifications",
    inputSpec: "Input: 90-240V AC",
    outputSpec: "Output: 24V DC / 10A",
    protectionSpec: "Protection: Short circuit, overload",
    efficiencySpec: "Efficiency: ≥92%"
  },
  ar: {
    supplyMainPower: "تزويد الطاقة الرئيسية",
    powerDescription: "مصدر الطاقة الكهربائية الأساسي المصمم لتوفير طاقة ثابتة وموثوقة لجميع مكونات النظام الحيوية.",
    voltageRegulation: "تنظيم تلقائي للجهد",
    surgeProtection: "قدرة حماية من التيار المفاجئ",
    powerMonitoring: "مراقبة مستمرة للطاقة",
    learnMore: "اعرف المزيد",
    technicalDocs: "الوثائق التقنية",
    technicalSpecs: "المواصفات التقنية",
    inputSpec: "المدخلات: 90-240 فولت تيار متردد",
    outputSpec: "المخرجات: 24 فولت تيار مستمر / 10 أمبير",
    protectionSpec: "الحماية: دائرة قصيرة، الحمل الزائد",
    efficiencySpec: "الكفاءة: ≥92%"
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
