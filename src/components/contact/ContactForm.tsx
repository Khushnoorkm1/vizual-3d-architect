
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface ContactFormProps {
  onSubmitSuccess: () => void;
}

const ContactForm = ({ onSubmitSuccess }: ContactFormProps) => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      onSubmitSuccess();
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="glass-card rounded-xl p-8 bg-white/80 dark:bg-teal-800/30 backdrop-blur-md border border-teal-200 dark:border-teal-700"
    >
      <h3 className="text-2xl font-bold mb-6 text-teal-900 dark:text-white">{t('getInTouch')}</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-teal-800 dark:text-gray-300 mb-1">
            {t('nameLabel')}
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-white/50 dark:bg-teal-900/50 border-teal-200 dark:border-teal-700"
            placeholder={language === 'ar' ? 'محمد عبدالله' : 'John Doe'}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-teal-800 dark:text-gray-300 mb-1">
              {t('emailLabel')}
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-white/50 dark:bg-teal-900/50 border-teal-200 dark:border-teal-700"
              placeholder={language === 'ar' ? 'example@domain.com' : 'john@example.com'}
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-teal-800 dark:text-gray-300 mb-1">
              {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white/50 dark:bg-teal-900/50 border-teal-200 dark:border-teal-700"
              placeholder="+966 50 000 0000"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-teal-800 dark:text-gray-300 mb-1">
            {language === 'ar' ? 'الخدمة المطلوبة' : 'Service of Interest'}
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full rounded-md border border-teal-200 dark:border-teal-700 px-4 py-2 bg-white/50 dark:bg-teal-900/50 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-300 text-teal-900 dark:text-white"
          >
            <option value="">{language === 'ar' ? 'اختر خدمة' : 'Select a service'}</option>
            <option value="contracting">{language === 'ar' ? 'المقاولات' : 'Contracting'}</option>
            <option value="interior-design">{language === 'ar' ? 'التصميم الداخلي' : 'Interior Design'}</option>
            <option value="restoration">{language === 'ar' ? 'الترميم' : 'Restoration'}</option>
            <option value="plumbing">{language === 'ar' ? 'السباكة' : 'Plumbing'}</option>
            <option value="electrical">{language === 'ar' ? 'الأعمال الكهربائية' : 'Electrical Works'}</option>
            <option value="air-conditioning">{language === 'ar' ? 'التكييف' : 'Air Conditioning'}</option>
            <option value="project-development">{language === 'ar' ? 'تطوير المشاريع' : 'Project Development'}</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-teal-800 dark:text-gray-300 mb-1">
            {t('messageLabel')}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-teal-200 dark:border-teal-700 px-4 py-2 bg-white/50 dark:bg-teal-900/50 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-300 text-teal-900 dark:text-white"
            placeholder={language === 'ar' ? 'اخبرنا عن مشروعك...' : 'Tell us about your project...'}
          />
        </div>
        
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="glass-button w-full bg-teal-600 hover:bg-teal-500 text-white border border-teal-400/30"
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {language === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
              </span>
            ) : (
              <span className="flex items-center">
                {t('sendButton')} <Send size={16} className={language === 'ar' ? 'mr-2' : 'ml-2'} />
              </span>
            )}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
