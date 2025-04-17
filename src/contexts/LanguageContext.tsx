
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'ar';

type TranslationsType = {
  [key: string]: {
    [key: string]: string;
  };
};

// Expanded translations object to cover all website sections
const translations: TranslationsType = {
  en: {
    // Supply Main Power Section
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
    efficiencySpec: "Efficiency: ≥92%",
    
    // Navbar
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    clients: "Clients",
    contact: "Contact",
    ourOffices: "Our Offices",
    visitLocations: "Visit Our Locations",
    
    // About Section
    whoAreWe: "Who are we?",
    vision: "Vision",
    goal: "Goal",
    visionText: "To revolutionize the world of contracting, renovation, maintenance, interior design, and finishing",
    goalText: "To be a leading institution in the business and project world in the Kingdom of Saudi Arabia",
    ourValues: "Our Values",
    integrity: "Integrity",
    creativity: "Creativity",
    responsibility: "Responsibility",
    integrityText: "In our work and respecting time and investing it",
    creativityText: "In ideas, excellence and excelling in our field of work",
    responsibilityText: "Towards the community, serving it, and leaving a positive impact",
    ourMission: "Our Mission",
    quality: "Quality",
    standards: "Standards",
    ambition: "Ambition",
    qualityText: "Providing all services and projects with the highest quality and creativity",
    standardsText: "According to international standards and specifications",
    ambitionText: "Achieving the ambition of investors, business owners, and clients",
    workTeam: "Work Team",
    workTeamText: "A professional and reliable work team composed of experts, specialists, consultants, contractors, and workers",
    engineers: "Engineers",
    administrators: "Administrators",
    workers: "Workers",
    
    // Clients Section
    clientTestimonials: "Client Testimonials",
    testimonialSubtitle: "What our clients say about our services",
    businessShowcase: "Business Showcase",
    showcaseDescription: "Highlights of the projects we have completed",
    
    // Loading screen
    loading: "Loading amazing experiences...",
    
    // Language toggle
    changeLanguage: "Change language"
  },
  ar: {
    // Supply Main Power Section
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
    efficiencySpec: "الكفاءة: ≥92%",
    
    // Navbar
    home: "الرئيسية",
    about: "من نحن",
    services: "خدماتنا",
    projects: "المشاريع",
    clients: "العملاء",
    contact: "اتصل بنا",
    ourOffices: "مكاتبنا",
    visitLocations: "زيارة مواقعنا",
    
    // About Section
    whoAreWe: "من نحن؟",
    vision: "الرؤية",
    goal: "الهدف",
    visionText: "إحداث ثورة في عالم المقاولات والتجديد والصيانة والتصميم الداخلي والتشطيب",
    goalText: "أن نكون مؤسسة رائدة في عالم الأعمال والمشاريع في المملكة العربية السعودية",
    ourValues: "قيمنا",
    integrity: "النزاهة",
    creativity: "الإبداع",
    responsibility: "المسؤولية",
    integrityText: "في عملنا واحترام الوقت واستثماره",
    creativityText: "في الأفكار والتميز والتفوق في مجال عملنا",
    responsibilityText: "تجاه المجتمع وخدمته وترك أثر إيجابي",
    ourMission: "مهمتنا",
    quality: "الجودة",
    standards: "المعايير",
    ambition: "الطموح",
    qualityText: "تقديم جميع الخدمات والمشاريع بأعلى جودة وإبداع",
    standardsText: "وفقًا للمعايير والمواصفات الدولية",
    ambitionText: "تحقيق طموح المستثمرين وأصحاب الأعمال والعملاء",
    workTeam: "فريق العمل",
    workTeamText: "فريق عمل محترف وموثوق يتكون من خبراء ومتخصصين واستشاريين ومقاولين وعمال",
    engineers: "مهندسون",
    administrators: "إداريون",
    workers: "عمال",
    
    // Clients Section
    clientTestimonials: "آراء العملاء",
    testimonialSubtitle: "ماذا يقول عملاؤنا عن خدماتنا",
    businessShowcase: "معرض الأعمال",
    showcaseDescription: "أبرز المشاريع التي أنجزناها",
    
    // Loading screen
    loading: "جاري تحميل تجارب مذهلة...",
    
    // Language toggle
    changeLanguage: "تغيير اللغة"
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
