
import { motion } from "framer-motion";
import { Users, Briefcase, Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const WorkTeamSection = () => {
  const { t } = useTranslation();
  
  const teamIcons = [
    { icon: Users, key: 'engineers' },
    { icon: Briefcase, key: 'administrators' },
    { icon: Building2, key: 'workers' }
  ];
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="relative"
    >
      <div className="glass-card rounded-xl p-6 bg-teal-800/30 backdrop-blur-sm border border-white/10">
        <h3 className="text-2xl font-bold mb-6 text-teal-300">{t('about.workTeam.title')}</h3>
        
        <p className="text-gray-300 mb-6">
          {t('about.workTeam.description')}
        </p>
        
        <div className="grid grid-cols-3 gap-6 text-center">
          {teamIcons.map(({ icon: Icon, key }) => (
            <div key={key} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-teal-700/30 rounded-full flex items-center justify-center mb-2">
                <Icon className="h-8 w-8 text-teal-300" />
              </div>
              <p className="text-white">{t(`about.workTeam.${key}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WorkTeamSection;
