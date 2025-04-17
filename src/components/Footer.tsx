
import { Facebook, Twitter, Instagram, Linkedin, ArrowUpCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t, language } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-architectural-blue text-white pt-16 pb-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Information */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              {t('companyName')}
            </h3>
            <p className="text-gray-300 mb-4">
              {t('companyDescription')}
            </p>
            <div className={`flex ${language === 'ar' ? 'space-x-reverse' : 'space-x-4'}`} data-no-translate>
              <a href="#" className="text-gray-300 hover:text-architectural-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-architectural-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-architectural-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-architectural-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('services')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-architectural-gold transition-colors">
                  {t('architecturalDesign')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-architectural-gold transition-colors">
                  {t('interiorDesign')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-architectural-gold transition-colors">
                  {t('visualization')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-architectural-gold transition-colors">
                  {t('commercialSpaces')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-architectural-gold transition-colors">
                  {t('residentialDesign')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-architectural-gold transition-colors">
                  {t('home')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-architectural-gold transition-colors">
                  {t('aboutUs')}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-architectural-gold transition-colors">
                  {t('projects')}
                </a>
              </li>
              <li>
                <a href="#clients" className="text-gray-300 hover:text-architectural-gold transition-colors">
                  {t('testimonials')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-architectural-gold transition-colors">
                  {t('contactUs')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('contactUs')}</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>{t('address1')}</p>
              <p>{t('address2')}</p>
              <p>{t('address3')}</p>
              <p className="mt-4">{t('phone')}</p>
              <p>{t('email')}</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {t('companyName')}. {t('copyright')}
          </p>
          <div className="flex items-center">
            <div className={`flex ${language === 'ar' ? 'space-x-reverse' : 'space-x-4'} text-gray-400`}>
              <a href="#" className="hover:text-architectural-gold transition-colors">
                {t('privacyPolicy')}
              </a>
              <a href="#" className="hover:text-architectural-gold transition-colors">
                {t('termsOfService')}
              </a>
              <a href="#" className="hover:text-architectural-gold transition-colors">
                {t('sitemap')}
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className={`${language === 'ar' ? 'mr-6' : 'ml-6'} text-architectural-gold hover:text-white transition-colors`}
              aria-label="Scroll to top"
              data-no-translate
            >
              <ArrowUpCircle size={24} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
