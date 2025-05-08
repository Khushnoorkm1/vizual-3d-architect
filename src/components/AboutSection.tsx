
import { motion } from "framer-motion";
import { ArrowRight, Award, Building2, Clock, Users, Briefcase, Target } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";

const AboutSection = () => {
  const { t } = useTranslation();
  const { dir } = useLanguage();
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="section-padding bg-teal-900 dark:bg-teal-900 text-white" dir={dir}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="section-title text-white text-center mb-8 md:mb-12"
        >
          {t("about.title")}
        </motion.h2>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-8 md:mt-16"
        >
          {/* Left side - Vision */}
          <div className="space-y-6">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="glass-card rounded-xl p-5 md:p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-300/30 transition-all"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-teal-300 flex items-center">
                <Target className={`${dir === 'rtl' ? 'ml-2' : 'mr-2'} text-teal-300 flex-shrink-0`} /> {t("about.vision.title")}
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                {t("about.vision.content")}
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="glass-card rounded-xl p-5 md:p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-300/30 transition-all"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-teal-300 flex items-center">
                <Target className={`${dir === 'rtl' ? 'ml-2' : 'mr-2'} text-teal-300 flex-shrink-0`} /> {t("about.goal.title")}
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                {t("about.goal.content")}
              </p>
            </motion.div>
            
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white mt-8 md:mt-12"
            >
              {t("about.values.title")}
            </motion.h3>
            
            <div className="grid grid-cols-1 gap-4 md:gap-6">
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="flex items-start glass-card p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-300/30 transition-all"
              >
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-teal-700 flex items-center justify-center mr-3 md:mr-4">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white">{t("about.values.integrity.title")}</h4>
                  <p className="text-gray-300 text-sm md:text-base">{t("about.values.integrity.content")}</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="flex items-start glass-card p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-300/30 transition-all"
              >
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-teal-700 flex items-center justify-center mr-3 md:mr-4">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white">{t("about.values.creativity.title")}</h4>
                  <p className="text-gray-300 text-sm md:text-base">{t("about.values.creativity.content")}</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="flex items-start glass-card p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-300/30 transition-all"
              >
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-teal-700 flex items-center justify-center mr-3 md:mr-4">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white">{t("about.values.responsibility.title")}</h4>
                  <p className="text-gray-300 text-sm md:text-base">{t("about.values.responsibility.content")}</p>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Right side - Our Mission and Work Team */}
          <div className="flex flex-col space-y-6 md:space-y-8 mt-6 md:mt-0">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="glass-card rounded-xl p-5 md:p-6 bg-teal-800/30 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-teal-300">{t("about.mission.title")}</h3>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 bg-teal-700/40 rounded-full p-2 ${dir === 'rtl' ? 'ml-3 md:ml-4' : 'mr-3 md:mr-4'}`}>
                      <Award className="h-4 w-4 md:h-5 md:w-5 text-teal-300" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-medium text-white">{t("about.mission.quality.title")}</h4>
                      <p className="text-gray-300 text-sm md:text-base">{t("about.mission.quality.content")}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 bg-teal-700/40 rounded-full p-2 ${dir === 'rtl' ? 'ml-3 md:ml-4' : 'mr-3 md:mr-4'}`}>
                      <Building2 className="h-4 w-4 md:h-5 md:w-5 text-teal-300" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-medium text-white">{t("about.mission.standards.title")}</h4>
                      <p className="text-gray-300 text-sm md:text-base">{t("about.mission.standards.content")}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 bg-teal-700/40 rounded-full p-2 ${dir === 'rtl' ? 'ml-3 md:ml-4' : 'mr-3 md:mr-4'}`}>
                      <Briefcase className="h-4 w-4 md:h-5 md:w-5 text-teal-300" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-medium text-white">{t("about.mission.ambition.title")}</h4>
                      <p className="text-gray-300 text-sm md:text-base">{t("about.mission.ambition.content")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <div className="glass-card rounded-xl p-5 md:p-6 bg-teal-800/30 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-teal-300">{t("about.workTeam.title")}</h3>
                
                <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
                  {t("about.workTeam.description")}
                </p>
                
                <div className="grid grid-cols-3 gap-3 md:gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-700/30 rounded-full flex items-center justify-center mb-2">
                      <Users className="h-6 w-6 md:h-8 md:w-8 text-teal-300" />
                    </div>
                    <p className="text-white text-sm md:text-base">{t("about.workTeam.engineers")}</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-700/30 rounded-full flex items-center justify-center mb-2">
                      <Briefcase className="h-6 w-6 md:h-8 md:w-8 text-teal-300" />
                    </div>
                    <p className="text-white text-sm md:text-base">{t("about.workTeam.administrators")}</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-700/30 rounded-full flex items-center justify-center mb-2">
                      <Building2 className="h-6 w-6 md:h-8 md:w-8 text-teal-300" />
                    </div>
                    <p className="text-white text-sm md:text-base">{t("about.workTeam.workers")}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
