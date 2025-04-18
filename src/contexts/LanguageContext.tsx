import React, { createContext, useState, useEffect, useContext } from 'react';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

interface LanguageContextProps {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string, options?: any) => string;
}

const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

const translations = {
  en: {
    translation: {
      welcome: "Welcome",
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      selectLanguage: "Select Language",
      loading: "Loading...",
      ourVision: "Our Vision",
      ourMission: "Our Mission",
      whyChooseUs: "Why Choose Us",
      learnMore: "Learn More",
      contactUs: "Contact Us",
      allRightsReserved: "All Rights Reserved",
      companyOverview: "Omair Contracting Establishment is a leading provider of construction and engineering solutions, committed to excellence and innovation.",
      visionStatement: "To be the premier construction and engineering partner, renowned for quality, innovation, and client satisfaction.",
      missionStatement: "To deliver exceptional construction and engineering services, utilizing cutting-edge technology and sustainable practices.",
      integrity: "Integrity",
      quality: "Quality",
      innovation: "Innovation",
      clientFocus: "Client Focus",
      experiencedTeam: "Experienced Team",
      customerSatisfaction: "Customer Satisfaction",
      innovativeSolutions: "Innovative Solutions",
      sustainablePractices: "Sustainable Practices",
      projectExcellence: "Project Excellence",
      mainPowerSupply: "Supply Main Power",
      mainPowerDescription: "We provide comprehensive solutions for supplying main power to various projects, ensuring reliability and efficiency.",
      ourTeam: "Our Team",
      teamDescription: "Meet our exceptional team of professionals dedicated to excellence in construction and engineering.",
      siteEngineer: "Site Engineer",
      projectManager: "Project Manager",
      safetyOfficer: "Safety Officer",
      constructionExpert: "Construction & Engineering Expert",
      projectManagement: "Project Management & Planning Specialist",
      safetyExpert: "Safety & Compliance Expert",
      // Company info
      companyName: "Omair Contracting",
      companyDescription: "Delivering excellence in construction and engineering solutions since 2005.",
      // Footer links
      quickLinks: "Quick Links",
      architecturalDesign: "Architectural Design",
      interiorDesign: "Interior Design",
      visualization: "3D Visualization",
      commercialSpaces: "Commercial Spaces",
      residentialDesign: "Residential Design",
      aboutUs: "About Us",
      testimonials: "Testimonials",
      // Contact info
      address1: "123 Construction Avenue",
      address2: "Riyadh, Saudi Arabia",
      address3: "P.O Box 12345",
      phone: "+966 12 345 6789",
      email: "info@omaircontracting.com",
      // Footer
      copyright: "All Rights Reserved",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      sitemap: "Sitemap",
      // About section
      whoAreWe: "Who We Are",
      vision: "Our Vision",
      visionText: "To be the premier construction and engineering partner in Saudi Arabia, renowned for quality, innovation, and client satisfaction.",
      goal: "Our Goal",
      goalText: "To provide exceptional construction and engineering services while maintaining the highest standards of professionalism, integrity, and excellence.",
      ourValues: "Our Values",
      creativityValue: "Creativity",
      creativityText: "We embrace innovative thinking and creative solutions to complex challenges.",
      responsibilityValue: "Responsibility",
      responsibilityText: "We take ownership of our work and deliver on our promises.",
      standards: "High Standards",
      standardsText: "We maintain rigorous quality standards in all our projects and services.",
      ambition: "Ambition",
      ambitionText: "We constantly strive to grow, improve, and expand our capabilities.",
      workTeam: "Our Work Team",
      workTeamText: "Our team consists of highly qualified professionals with extensive experience in the construction and engineering industry.",
      engineers: "Engineers",
      administrators: "Administrators",
      workers: "Workers",
      ourOffices: "Our Offices",
      visitLocations: "Visit Our Locations",
      integrityText: "We conduct our business with the highest ethical standards and transparency."
    }
  },
  ar: {
    translation: {
      welcome: "مرحبا",
      home: "الرئيسية",
      about: "نبذة عنا",
      services: "خدماتنا",
      projects: "مشاريعنا",
      contact: "اتصل بنا",
      selectLanguage: "اختر اللغة",
      loading: "جار التحميل...",
      ourVision: "رؤيتنا",
      ourMission: "مهمتنا",
      whyChooseUs: "لماذا تختارنا",
      learnMore: "اعرف المزيد",
      contactUs: "اتصل بنا",
      allRightsReserved: "جميع الحقوق محفوظة",
      companyOverview: "مؤسسة عمير للمقاولات هي شركة رائدة في تقديم حلول البناء والهندسة، ملتزمة بالتميز والابتكار.",
      visionStatement: "أن نكون الشريك الأول في مجال البناء والهندسة، مشهورين بالجودة والابتكار ورضا العملاء.",
      missionStatement: "تقديم خدمات بناء وهندسة استثنائية، باستخدام أحدث التقنيات والممارسات المستدامة.",
      integrity: "نزاهة",
      quality: "جودة",
      innovation: "ابتكار",
      clientFocus: "التركيز على العميل",
      experiencedTeam: "فريق ذو خبرة",
      customerSatisfaction: "رضا العملاء",
      innovativeSolutions: "حلول مبتكرة",
      sustainablePractices: "ممارسات مستدامة",
      projectExcellence: "تميز المشروع",
      mainPowerSupply: "توريد الطاقة الرئيسية",
      mainPowerDescription: "نحن نقدم حلولاً شاملة لتوريد الطاقة الرئيسية لمختلف المشاريع، مما يضمن الموثوقية والكفاءة.",
      ourTeam: "فريقنا",
      teamDescription: "تعرف على فريقنا المتميز من المحترفين المتخصصين في البناء والهندسة.",
      siteEngineer: "مهندس موقع",
      projectManager: "مدير مشروع",
      safetyOfficer: "مسؤول السلامة",
      constructionExpert: "خبير في البناء والهندسة",
      projectManagement: "متخصص في إدارة وتخطيط المشاريع",
      safetyExpert: "خبير في السلامة والامتثال",
      // Company info
      companyName: "مؤسسة عمير للمقاولات",
      companyDescription: "نقدم التميز في حلول البناء والهندسة منذ عام 2005.",
      // Footer links
      quickLinks: "روابط سريعة",
      architecturalDesign: "التصميم المعماري",
      interiorDesign: "التصميم الداخلي",
      visualization: "التصور ثلاثي الأبعاد",
      commercialSpaces: "المساحات التجارية",
      residentialDesign: "التصميم السكني",
      aboutUs: "من نحن",
      testimonials: "آراء العملاء",
      // Contact info
      address1: "١٢٣ شارع الإنشاءات",
      address2: "الرياض، المملكة العربية السعودية",
      address3: "صندوق بريد ١٢٣٤٥",
      phone: "٦٧٨٩ ٣٤٥ ١٢ ٩٦٦+",
      email: "info@omaircontracting.com",
      // Footer
      copyright: "جميع الحقوق محفوظة",
      privacyPolicy: "سياسة الخصوصية",
      termsOfService: "شروط الخدمة",
      sitemap: "خريطة الموقع",
      // About section
      whoAreWe: "من نحن",
      vision: "رؤيتنا",
      visionText: "أن نكون الشريك الأول في مجال البناء والهندسة في المملكة العربية السعودية، مشهورين بالجودة والابتكار ورضا العملاء.",
      goal: "هدفنا",
      goalText: "تقديم خدمات بناء وهندسة استثنائية مع الحفاظ على أعلى معايير الاحترافية والنزاهة والتميز.",
      ourValues: "قيمنا",
      creativityValue: "الإبداع",
      creativityText: "نتبنى التفكير المبتكر والحلول الإبداعية للتحديات المعقدة.",
      responsibilityValue: "المسؤولية",
      responsibilityText: "نتحمل مسؤولية عملنا ونفي بوعودنا.",
      standards: "معايير عالية",
      standardsText: "نحافظ على معايير جودة صارمة في جميع مشاريعنا وخدماتنا.",
      ambition: "الطموح",
      ambitionText: "نسعى باستمرار للنمو والتحسين وتوسيع قدراتنا.",
      workTeam: "فريق عملنا",
      workTeamText: "يتكون فريقنا من متخصصين مؤهلين تأهيلاً عالياً ذوي خبرة واسعة في صناعة البناء والهندسة.",
      engineers: "المهندسون",
      administrators: "الإداريون",
      workers: "العمال",
      ourOffices: "مكاتبنا",
      visitLocations: "زيارة مواقعنا",
      integrityText: "نمارس أعمالنا بأعلى المعايير الأخلاقية والشفافية."
    }
  }
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: 'en',
    debug: false,
    resources: translations,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
  });

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState(i18next.language);

  useEffect(() => {
    i18next.on('languageChanged', (lng) => {
      setLanguage(lng);
    });

    return () => {
      i18next.off('languageChanged');
    };
  }, []);

  const changeLanguage = (lang: string) => {
    i18next.changeLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t: i18next.t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
