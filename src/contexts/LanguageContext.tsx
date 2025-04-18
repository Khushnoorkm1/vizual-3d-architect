import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'ar';

type TranslationsType = {
  [key: string]: {
    [key: string]: string;
  };
};

const translations: TranslationsType = {
  en: {
    // Team Section
    ourTeam: "Our Team",
    teamDescription: "Meet our experienced professionals dedicated to delivering excellence in construction and contracting",
    siteEngineer: "Site Engineer",
    projectManager: "Project Manager",
    safetyOfficer: "Safety Officer",
    constructionExpert: "Expert in construction site management and technical supervision",
    projectManagement: "Specialized in project planning and execution",
    safetyExpert: "Ensures workplace safety and compliance with regulations",

    // Navbar and general translations
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    clients: "Clients",
    contact: "Contact",
    loading: "Loading amazing experiences...",
    changeLanguage: "Change language",

    // About Section
    whoAreWe: "Who We Are",
    vision: "Vision",
    goal: "Goal",
    visionText: "To revolutionize contracting, renovation, and maintenance",
    goalText: "To be a leading institution in Saudi Arabia's business world",

    // Contact Section
    getInTouch: "Get in Touch",
    nameLabel: "Your Name",
    emailLabel: "Your Email",
    messageLabel: "Message",
    sendButton: "Send Message",
    
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
    ourOffices: "Our Offices",
    visitLocations: "Visit Our Locations",
    
    // Our Values
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
    
    // Footer translations
    companyName: "Omair Contracting Establishment",
    companyDescription: "Transforming spaces with innovative architectural and interior design solutions.",
    services: "Services",
    architecturalDesign: "Architectural Design",
    interiorDesign: "Interior Design",
    visualization: "3D Visualization",
    commercialSpaces: "Commercial Spaces",
    residentialDesign: "Residential Design",
    quickLinks: "Quick Links",
    aboutUs: "About Us",
    testimonials: "Testimonials",
    contactUs: "Contact Us",
    address1: "Design District, Building 7",
    address2: "Sheikh Zayed Road",
    address3: "Dubai, United Arab Emirates",
    phone: "Phone: +971 4 123 4567",
    email: "Email: info@omaircontracting.com",
    copyright: "All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    sitemap: "Sitemap",
    
    // Hero section
    heroTitle: "Omair Contracting Establishment",
    heroSubtitle: "A leading establishment in contracting, maintenance, and interior design in the Kingdom of Saudi Arabia",
    exploreWork: "Explore Our Work",
  },
  ar: {
    // Team Section
    ourTeam: "فريق العمل",
    teamDescription: "تعرف على فريقنا المحترف المتخصص في تقديم التميز في مجال البناء والمقاولات",
    siteEngineer: "مهندس موقع",
    projectManager: "مدير مشروع",
    safetyOfficer: "مسؤول السلامة",
    constructionExpert: "خبير في إدارة مواقع البناء والإشراف الفني",
    projectManagement: "متخصص في تخطيط وتنفيذ المشاريع",
    safetyExpert: "يضمن سلامة مكان العمل والامتثال للوائح",

    // Navbar and general translations
    home: "الرئيسية",
    about: "من نحن",
    services: "خدماتنا",
    projects: "المشاريع",
    clients: "العملاء",
    contact: "اتصل بنا",
    loading: "جاري تحميل تجارب مذهلة...",
    changeLanguage: "تغيير اللغة",

    // About Section
    whoAreWe: "من نحن؟",
    vision: "رؤيتنا",
    goal: "هدفنا",
    visionText: "أن نحدث ثورة في مجال المقاولات والتجديد والصيانة",
    goalText: "أن نكون مؤسسة رائدة في عالم الأعمال في المملكة العربية السعودية",

    // Contact Section
    getInTouch: "تواصل معنا",
    nameLabel: "الاسم",
    emailLabel: "البريد الإلكتروني",
    messageLabel: "الرسالة",
    sendButton: "إرسال الرسالة",
    
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
    ourOffices: "مكاتبنا",
    visitLocations: "زيارة مواقعنا",
    
    // About Section
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
    
    // Footer translations
    companyName: "مؤسسة عمير للمقاولات",
    companyDescription: "تحويل المساحات بحلول معمارية وتصميم داخلي مبتكرة.",
    services: "الخدمات",
    architecturalDesign: "التصميم المعماري",
    interiorDesign: "التصميم الداخلي",
    visualization: "التصور ثلاثي الأبعاد",
    commercialSpaces: "المساحات التجارية",
    residentialDesign: "التصميم السكني",
    quickLinks: "روابط سريعة",
    aboutUs: "من نحن",
    testimonials: "الشهادات",
    contactUs: "اتصل بنا",
    address1: "حي التصميم، مبنى 7",
    address2: "طريق الشيخ زايد",
    address3: "دبي، الإمارات العربية المتحدة",
    phone: "هاتف: +971 4 123 4567",
    email: "البريد الإلكتروني: info@omaircontracting.com",
    copyright: "جميع الحقوق محفوظة.",
    privacyPolicy: "سياسة الخصوصية",
    termsOfService: "شروط الخدمة",
    sitemap: "خريطة الموقع",
    
    // Hero section
    heroTitle: "مؤسسة عمير للمقاولات",
    heroSubtitle: "مؤسسة رائدة في المقاولات والصيانة والتصميم الداخلي في المملكة العربية السعودية",
    exploreWork: "استكشف أعمالنا",
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
