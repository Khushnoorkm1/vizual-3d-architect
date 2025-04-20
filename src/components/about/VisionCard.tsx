
import { motion } from "framer-motion";
import { Target } from "lucide-react";
import { useTranslation } from "react-i18next";

const VisionCard = () => {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-6">
      <motion.div 
        whileHover={{ scale: 1.03 }}
        className="glass-card rounded-xl p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-300/30 transition-all"
      >
        <h3 className="text-2xl font-bold mb-4 text-teal-300 flex items-center">
          <Target className="mr-2 text-teal-300" /> {t('about.vision.title')}
        </h3>
        <p className="text-gray-300">
          {t('about.vision.content')}
        </p>
      </motion.div>
      
      <motion.div 
        whileHover={{ scale: 1.03 }}
        className="glass-card rounded-xl p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-300/30 transition-all"
      >
        <h3 className="text-2xl font-bold mb-4 text-teal-300 flex items-center">
          <Target className="mr-2 text-teal-300" /> {t('about.goal.title')}
        </h3>
        <p className="text-gray-300">
          {t('about.goal.content')}
        </p>
      </motion.div>
    </div>
  );
};

export default VisionCard;
