
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <Button 
      onClick={toggleLanguage}
      variant="ghost" 
      size="icon"
      className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
      title={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
      data-no-translate
    >
      <Globe size={18} />
      <span className="sr-only">{language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}</span>
    </Button>
  );
};

export default LanguageToggle;
