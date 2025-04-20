
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ValuesSection = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <motion.h3 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-2xl font-bold mb-4 text-white mt-12"
      >
        {t('about.values.title')}
      </motion.h3>
      
      <div className="grid grid-cols-1 gap-6">
        {[1, 2, 3].map((num) => {
          const keys = ['integrity', 'creativity', 'responsibility'];
          const key = keys[num - 1];
          
          return (
            <motion.div 
              key={num}
              whileHover={{ scale: 1.03 }}
              className="flex items-start glass-card p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-300/30 transition-all"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-700 flex items-center justify-center mr-4">
                <span className="text-white font-bold">{num}</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">{t(`about.values.${key}.title`)}</h4>
                <p className="text-gray-300">{t(`about.values.${key}.content`)}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ValuesSection;
