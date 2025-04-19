
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

interface ContentSection {
  id: number;
  arabicText: string;
  englishText: string;
}

const contentSections: ContentSection[] = [
  {
    id: 1,
    arabicText: "نحن نقدم حلولاً مبتكرة في مجال البناء والتطوير العقاري، مع التركيز على الجودة والاستدامة في كل مشروع نقوم به.",
    englishText: "We provide innovative solutions in construction and real estate development, focusing on quality and sustainability in every project we undertake."
  },
  {
    id: 2,
    arabicText: "فريقنا من المهندسين والمتخصصين ذوي الخبرة يضمن تنفيذ المشاريع بأعلى المعايير وفي الوقت المحدد.",
    englishText: "Our team of experienced engineers and specialists ensures projects are executed to the highest standards and on schedule."
  },
  {
    id: 3,
    arabicText: "نلتزم بتقديم خدمات استثنائية لعملائنا، مع الحفاظ على التميز في كل مرحلة من مراحل المشروع.",
    englishText: "We are committed to providing exceptional services to our clients, maintaining excellence at every stage of the project."
  }
];

const MultilingualContentSection = () => {
  const [showEnglish, setShowEnglish] = useState(false);
  const { language } = useLanguage();

  const toggleTranslation = () => {
    setShowEnglish(!showEnglish);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-12 bg-white dark:bg-architectural-gray" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="flex justify-end mb-6">
          <Button
            onClick={toggleTranslation}
            variant="outline"
            className="flex items-center gap-2"
            aria-label={showEnglish ? "عرض النص العربي فقط" : "Show English Translation"}
          >
            <Globe className="h-4 w-4" />
            {showEnglish ? "عرض النص العربي فقط" : "Show English Translation"}
          </Button>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {contentSections.map((section) => (
            <motion.div
              key={section.id}
              variants={itemVariants}
              className="p-6 rounded-lg bg-gray-50 dark:bg-architectural-blue/10 shadow-sm"
            >
              <div className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                {section.arabicText}
              </div>
              {showEnglish && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-base text-gray-600 dark:text-gray-300 mt-2 pt-2 border-t border-gray-200 dark:border-gray-700"
                >
                  {section.englishText}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MultilingualContentSection;
