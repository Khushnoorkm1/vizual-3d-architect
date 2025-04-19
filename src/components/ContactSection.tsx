
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";
import SuccessDialog from "./contact/SuccessDialog";

const ContactSection = () => {
  const { t, language } = useLanguage();
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="section-padding bg-white dark:bg-teal-900/30" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto">
        <SuccessDialog 
          isOpen={isSuccessDialogOpen}
          onOpenChange={setIsSuccessDialogOpen}
          language={language}
        />

        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="section-title text-teal-900 dark:text-white text-center"
        >
          {t('contactUs')}
        </motion.h2>
        
        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={fadeIn}
          className="section-subtitle text-teal-800 dark:text-gray-300 text-center"
        >
          {language === 'ar' 
            ? 'تواصل معنا لمناقشة مشروعك أو لجدولة استشارة مع فريقنا' 
            : 'Reach out to discuss your project or schedule a consultation with our team'}
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            variants={fadeIn}
          >
            <ContactForm onSubmitSuccess={() => setIsSuccessDialogOpen(true)} />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            variants={fadeIn}
          >
            <ContactInfo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
