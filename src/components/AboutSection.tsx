
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import VisionCard from "./about/VisionCard";
import ValuesSection from "./about/ValuesSection";
import MissionSection from "./about/MissionSection";
import WorkTeamSection from "./about/WorkTeamSection";

const AboutSection = () => {
  const { t } = useTranslation();
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="section-padding bg-teal-900 dark:bg-teal-900 text-white">
      <div className="container mx-auto">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="section-title text-white text-center"
        >
          {t('about.title')}
        </motion.h2>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16"
        >
          {/* Left side - Vision and Values */}
          <div className="space-y-6">
            <VisionCard />
            <ValuesSection />
          </div>
          
          {/* Right side - Mission and Work Team */}
          <div className="flex flex-col space-y-8">
            <MissionSection />
            <WorkTeamSection />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
