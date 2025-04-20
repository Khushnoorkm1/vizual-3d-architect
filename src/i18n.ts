
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { translations } from './utils/translations';

// Convert our existing translations format to i18next format
const resources = {
  en: {
    translation: Object.entries(translations).reduce((acc, [section, content]) => {
      Object.entries(content as Record<string, any>).forEach(([key, value]) => {
        if (typeof value === 'object' && value !== null && 'en' in value) {
          acc[`${section}.${key}`] = (value as any).en;
        } else if (typeof value === 'object' && value !== null) {
          Object.entries(value as Record<string, any>).forEach(([subKey, subValue]) => {
            if (typeof subValue === 'object' && subValue !== null && 'en' in subValue) {
              acc[`${section}.${key}.${subKey}`] = (subValue as any).en;
            }
          });
        }
      });
      return acc;
    }, {} as Record<string, string>)
  },
  ar: {
    translation: Object.entries(translations).reduce((acc, [section, content]) => {
      Object.entries(content as Record<string, any>).forEach(([key, value]) => {
        if (typeof value === 'object' && value !== null && 'ar' in value) {
          acc[`${section}.${key}`] = (value as any).ar;
        } else if (typeof value === 'object' && value !== null) {
          Object.entries(value as Record<string, any>).forEach(([subKey, subValue]) => {
            if (typeof subValue === 'object' && subValue !== null && 'ar' in subValue) {
              acc[`${section}.${key}.${subKey}`] = (subValue as any).ar;
            }
          });
        }
      });
      return acc;
    }, {} as Record<string, string>)
  }
};

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  .init({
    resources,
    fallbackLng: 'ar',
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
