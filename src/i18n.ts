
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { translations } from './utils/translations';

// Convert our existing translations format to i18next format
const resources = {
  en: {
    translation: Object.entries(translations).reduce((acc, [section, content]) => {
      Object.entries(content).forEach(([key, value]) => {
        if (typeof value === 'object' && value.en) {
          acc[`${section}.${key}`] = value.en;
        } else if (typeof value === 'object') {
          Object.entries(value).forEach(([subKey, subValue]) => {
            if (typeof subValue === 'object' && subValue.en) {
              acc[`${section}.${key}.${subKey}`] = subValue.en;
            }
          });
        }
      });
      return acc;
    }, {})
  },
  ar: {
    translation: Object.entries(translations).reduce((acc, [section, content]) => {
      Object.entries(content).forEach(([key, value]) => {
        if (typeof value === 'object' && value.ar) {
          acc[`${section}.${key}`] = value.ar;
        } else if (typeof value === 'object') {
          Object.entries(value).forEach(([subKey, subValue]) => {
            if (typeof subValue === 'object' && subValue.ar) {
              acc[`${section}.${key}.${subKey}`] = subValue.ar;
            }
          });
        }
      });
      return acc;
    }, {})
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
