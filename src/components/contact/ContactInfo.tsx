
import { Phone, Mail, Building, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactInfo = () => {
  const { language } = useLanguage();

  return (
    <motion.div 
      className="flex flex-col space-y-8"
    >
      <motion.div 
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="glass-card rounded-xl p-8 bg-white/80 dark:bg-teal-800/30 backdrop-blur-md border border-teal-200 dark:border-white/10"
      >
        <h3 className="text-2xl font-bold mb-6 text-teal-900 dark:text-white">
          {language === 'ar' ? 'معلومات الاتصال' : 'Contact Information'}
        </h3>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className={`flex-shrink-0 bg-teal-100 dark:bg-teal-700/40 rounded-full p-3 ${language === 'ar' ? 'ml-4' : 'mr-4'}`}>
              <Phone className="h-6 w-6 text-teal-700 dark:text-teal-300" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-lg font-medium text-teal-900 dark:text-white">{language === 'ar' ? 'الهاتف' : 'Phone'}</h4>
              <p className="text-teal-800 dark:text-gray-300 break-words">+966 11 123 4567</p>
              <p className="text-teal-800 dark:text-gray-300 break-words">+966 50 987 6543</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className={`flex-shrink-0 bg-teal-100 dark:bg-teal-700/40 rounded-full p-3 ${language === 'ar' ? 'ml-4' : 'mr-4'}`}>
              <Mail className="h-6 w-6 text-teal-700 dark:text-teal-300" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-lg font-medium text-teal-900 dark:text-white">{language === 'ar' ? 'البريد الإلكتروني' : 'Email'}</h4>
              <p className="text-teal-800 dark:text-gray-300 break-words">info@omaircontracting.com</p>
              <p className="text-teal-800 dark:text-gray-300 break-words">projects@omaircontracting.com</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className={`flex-shrink-0 bg-teal-100 dark:bg-teal-700/40 rounded-full p-3 ${language === 'ar' ? 'ml-4' : 'mr-4'}`}>
              <Building className="h-6 w-6 text-teal-700 dark:text-teal-300" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-lg font-medium text-teal-900 dark:text-white">
                {language === 'ar' ? 'المواقع' : 'Locations'}
              </h4>
              <p className="text-teal-800 dark:text-gray-300">
                {language === 'ar' ? 'الرياض - طريق الملك عبدالله' : 'Riyadh - King Abdullah Road'}
              </p>
              <p className="text-teal-800 dark:text-gray-300">
                {language === 'ar' ? 'مدينة شقراء - طريق الملك فهد' : 'Shaqra City - King Fahd Road'}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="glass-card rounded-xl p-8 bg-white/80 dark:bg-teal-800/30 backdrop-blur-md border border-teal-200 dark:border-white/10"
      >
        <h3 className="text-2xl font-bold mb-6 text-teal-900 dark:text-white">
          {language === 'ar' ? 'ساعات العمل' : 'Office Hours'}
        </h3>
        
        <div className="space-y-3">
          <div className="flex justify-between flex-wrap">
            <span className="text-teal-800 dark:text-gray-300">
              {language === 'ar' ? 'الأحد - الخميس' : 'Sunday - Thursday'}
            </span>
            <span className="font-medium text-teal-900 dark:text-white">
              {language === 'ar' ? '8:00 ص - 5:00 م' : '8:00 AM - 5:00 PM'}
            </span>
          </div>
          <div className="flex justify-between flex-wrap">
            <span className="text-teal-800 dark:text-gray-300">
              {language === 'ar' ? 'الجمعة' : 'Friday'}
            </span>
            <span className="font-medium text-teal-900 dark:text-white">
              {language === 'ar' ? 'مغلق' : 'Closed'}
            </span>
          </div>
          <div className="flex justify-between flex-wrap">
            <span className="text-teal-800 dark:text-gray-300">
              {language === 'ar' ? 'السبت' : 'Saturday'}
            </span>
            <span className="font-medium text-teal-900 dark:text-white">
              {language === 'ar' ? '9:00 ص - 1:00 م' : '9:00 AM - 1:00 PM'}
            </span>
          </div>
        </div>
      </motion.div>
      
      <div className="rounded-xl overflow-hidden h-60 relative">
        <img 
          src="https://images.unsplash.com/photo-1595648160928-74fd8d4573bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" 
          alt="Map location" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button variant="outline" className="glass-button bg-white/70 hover:bg-white text-teal-900 dark:border-transparent">
              <MapPin className={language === 'ar' ? 'ml-2' : 'mr-2'} size={16} /> 
              {language === 'ar' ? 'عرض الموقع' : 'View Location'}
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
