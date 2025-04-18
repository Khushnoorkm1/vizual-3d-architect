
import { motion } from "framer-motion";
import { Users, Award, Brain, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TeamSection = () => {
  const { t, language } = useLanguage();

  const teamMembers = [
    {
      id: 1,
      name: "Mohammad Al-Sayed",
      role: t('siteEngineer'),
      image: "public/lovable-uploads/e68e189d-d80d-4f2c-b858-93d38d452a08.png",
      expertise: t('constructionExpert')
    },
    {
      id: 2,
      name: "Ahmed Ibrahim",
      role: t('projectManager'),
      image: "public/lovable-uploads/bdc045f1-78d4-4d93-882a-a7ef09dc1e12.png",
      expertise: t('projectManagement')
    },
    {
      id: 3,
      name: "Youssef Hassan",
      role: t('safetyOfficer'),
      image: "public/lovable-uploads/25263289-e0f5-403a-9d27-8b367c5b3c23.png",
      expertise: t('safetyExpert')
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="py-16 bg-teal-50 dark:bg-teal-900/30" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-teal-900 dark:text-white mb-4">{t('ourTeam')}</h2>
          <p className="text-teal-700 dark:text-teal-300 max-w-2xl mx-auto">{t('teamDescription')}</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-teal-800/30 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-900 dark:text-white mb-2">{member.name}</h3>
                <p className="text-teal-600 dark:text-teal-300 mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300">{member.expertise}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
