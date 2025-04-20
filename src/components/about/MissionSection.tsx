
import { motion } from "framer-motion";
import { Award, Building2, Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next";

const MissionSection = () => {
  const { t } = useTranslation();
  
  const missionItems = [
    { icon: Award, key: 'quality' },
    { icon: Building2, key: 'standards' },
    { icon: Briefcase, key: 'ambition' }
  ];
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="relative"
    >
      <div className="glass-card rounded-xl p-6 bg-teal-800/30 backdrop-blur-sm border border-white/10">
        <h3 className="text-2xl font-bold mb-6 text-teal-300">{t('about.mission.title')}</h3>
        
        <div className="space-y-6">
          {missionItems.map(({ icon: Icon, key }) => (
            <div key={key} className="flex items-start">
              <div className="flex-shrink-0 bg-teal-700/40 rounded-full p-2 mr-4">
                <Icon className="h-5 w-5 text-teal-300" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">{t(`about.mission.${key}.title`)}</h4>
                <p className="text-gray-300">{t(`about.mission.${key}.content`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MissionSection;
