
import { Facebook, Twitter, Instagram, Linkedin, ArrowUpCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useTranslation();
  const { dir } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-architectural-blue text-white pt-16 pb-8" dir={dir}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Information */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              {dir === 'rtl' ? (
                <>
                  <span className="text-architectural-gold">{t("footer.company").split(' ')[0]} </span>
                  {t("footer.company").split(' ')[1]}
                </>
              ) : (
                <>
                  {t("footer.company").split(' ')[0]}<span className="text-architectural-gold"> {t("footer.company").split(' ')[1]}</span>
                </>
              )}
            </h3>
            <p className="text-gray-300 mb-4">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
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
            <h3 className="text-xl font-bold mb-4">{t("footer.services.title")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-architectural-gold transition-colors">
                  {t("footer.services.architecturalDesign")}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-architectural-gold transition-colors">
                  {t("footer.services.interiorDesign")}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-architectural-gold transition-colors">
                  {t("footer.services.visualization")}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-architectural-gold transition-colors">
                  {t("footer.services.commercialSpaces")}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-architectural-gold transition-colors">
                  {t("footer.services.residentialDesign")}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.quickLinks.title")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-architectural-gold transition-colors">
                  {t("footer.quickLinks.home")}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-architectural-gold transition-colors">
                  {t("footer.quickLinks.about")}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-architectural-gold transition-colors">
                  {t("footer.quickLinks.projects")}
                </a>
              </li>
              <li>
                <a href="#clients" className="text-gray-300 hover:text-architectural-gold transition-colors">
                  {t("footer.quickLinks.testimonials")}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-architectural-gold transition-colors">
                  {t("footer.quickLinks.contact")}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.contactUs.title")}</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>{t("footer.contactUs.address1")}</p>
              <p>{t("footer.contactUs.address2")}</p>
              <p>{t("footer.contactUs.address3")}</p>
              <p className="mt-4">{t("footer.contactUs.phone")}</p>
              <p>{t("footer.contactUs.email")}</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {t("footer.company")}. {t("footer.copyright")}
          </p>
          <div className="flex items-center">
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-architectural-gold transition-colors">
                {t("footer.legalLinks.privacy")}
              </a>
              <a href="#" className="hover:text-architectural-gold transition-colors">
                {t("footer.legalLinks.terms")}
              </a>
              <a href="#" className="hover:text-architectural-gold transition-colors">
                {t("footer.legalLinks.sitemap")}
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="ml-6 text-architectural-gold hover:text-white transition-colors"
              aria-label="Scroll to top"
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
