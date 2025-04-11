
import { motion } from "framer-motion";
import { ArrowRight, Award, Building2, Clock, Users, Briefcase, Target } from "lucide-react";

const AboutSection = () => {
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
          Who are we?
        </motion.h2>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16"
        >
          {/* Left side - Vision */}
          <div className="space-y-6">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="glass-card rounded-xl p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-300/30 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 text-teal-300 flex items-center">
                <Target className="mr-2 text-teal-300" /> Vision
              </h3>
              <p className="text-gray-300">
                To revolutionize the world of contracting, renovation, maintenance, interior design, and finishing
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="glass-card rounded-xl p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-300/30 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 text-teal-300 flex items-center">
                <Target className="mr-2 text-teal-300" /> Goal
              </h3>
              <p className="text-gray-300">
                To be a leading institution in the business and project world in the Kingdom of Saudi Arabia
              </p>
            </motion.div>
            
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold mb-4 text-white mt-12"
            >
              Our Values
            </motion.h3>
            
            <div className="grid grid-cols-1 gap-6">
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="flex items-start glass-card p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-300/30 transition-all"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-700 flex items-center justify-center mr-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Integrity</h4>
                  <p className="text-gray-300">In our work and respecting time and investing it</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="flex items-start glass-card p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-300/30 transition-all"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-700 flex items-center justify-center mr-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Creativity</h4>
                  <p className="text-gray-300">In ideas, excellence and excelling in our field of work</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="flex items-start glass-card p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-300/30 transition-all"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-700 flex items-center justify-center mr-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Responsibility</h4>
                  <p className="text-gray-300">Towards the community, serving it, and leaving a positive impact</p>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Right side - Our Mission and Work Team */}
          <div className="flex flex-col space-y-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="glass-card rounded-xl p-6 bg-teal-800/30 backdrop-blur-sm border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-teal-300">Our Mission</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-teal-700/40 rounded-full p-2 mr-4">
                      <Award className="h-5 w-5 text-teal-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Quality</h4>
                      <p className="text-gray-300">Providing all services and projects with the highest quality and creativity</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-teal-700/40 rounded-full p-2 mr-4">
                      <Building2 className="h-5 w-5 text-teal-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Standards</h4>
                      <p className="text-gray-300">According to international standards and specifications</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-teal-700/40 rounded-full p-2 mr-4">
                      <Briefcase className="h-5 w-5 text-teal-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Ambition</h4>
                      <p className="text-gray-300">Achieving the ambition of investors, business owners, and clients</p>
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
              <div className="glass-card rounded-xl p-6 bg-teal-800/30 backdrop-blur-sm border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-teal-300">Work Team</h3>
                
                <p className="text-gray-300 mb-6">
                  A professional and reliable work team composed of experts, specialists, consultants, contractors, and workers
                </p>
                
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-teal-700/30 rounded-full flex items-center justify-center mb-2">
                      <Users className="h-8 w-8 text-teal-300" />
                    </div>
                    <p className="text-white">Engineers</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-teal-700/30 rounded-full flex items-center justify-center mb-2">
                      <Briefcase className="h-8 w-8 text-teal-300" />
                    </div>
                    <p className="text-white">Administrators</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-teal-700/30 rounded-full flex items-center justify-center mb-2">
                      <Building2 className="h-8 w-8 text-teal-300" />
                    </div>
                    <p className="text-white">Workers</p>
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
