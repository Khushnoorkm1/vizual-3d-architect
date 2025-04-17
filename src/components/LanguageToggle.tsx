
import { useLanguage } from "@/contexts/LanguageContext";

// This component doesn't render any UI elements but helps with state management
// for the auto-translation feature
const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  // This is only for managing state - no UI changes
  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return null; // No UI is rendered
};

export default LanguageToggle;
