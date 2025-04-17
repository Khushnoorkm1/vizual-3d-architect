
import { Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Toggle } from "@/components/ui/toggle";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <Toggle 
      aria-label="Toggle language"
      pressed={language === 'en'}
      onPressedChange={toggleLanguage}
      className="bg-teal-100/20 dark:bg-teal-900/30 hover:bg-teal-100 dark:hover:bg-teal-900/50 flex items-center space-x-1 px-2 rounded-md border border-teal-200 dark:border-teal-800"
    >
      <Flag size={14} className="mr-1" />
      <span className="text-xs font-medium">{language === 'ar' ? 'EN' : 'AR'}</span>
    </Toggle>
  );
};

export default LanguageToggle;
