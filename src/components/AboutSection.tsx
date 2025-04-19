
import { ArrowRight, Award, Building2, Clock } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="section-title dark:text-white text-center">About Us</h2>
        <p className="section-subtitle dark:text-gray-300 text-center">
          We are a team of passionate architects and interior designers dedicated to creating exceptional spaces.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {/* Left side - Information */}
          <div className="space-y-6">
            <div className="glass-card rounded-xl p-6 hover-scale">
              <h3 className="text-2xl font-bold mb-4 text-architectural-blue dark:text-white">Our Story</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Founded in 2015, VIZUAL3D has been at the forefront of architectural innovation, merging technology with design 
                to create spaces that inspire. Our journey began with a simple vision: to transform how people experience architecture 
                through cutting-edge 3D visualization.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 hover-scale">
              <h3 className="text-2xl font-bold mb-4 text-architectural-blue dark:text-white">Our Approach</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We believe in a collaborative design process that puts the client's vision first. By combining technical expertise 
                with creative thinking, we deliver solutions that are both innovative and practical. Every project is an opportunity 
                to push boundaries and explore new possibilities.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 hover-scale">
              <h3 className="text-2xl font-bold mb-4 text-architectural-blue dark:text-white">Our Values</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <ArrowRight size={20} className="text-architectural-gold mr-2 mt-1 flex-shrink-0" />
                  <span>Excellence in every detail</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={20} className="text-architectural-gold mr-2 mt-1 flex-shrink-0" />
                  <span>Innovation through technology</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={20} className="text-architectural-gold mr-2 mt-1 flex-shrink-0" />
                  <span>Sustainability and responsibility</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={20} className="text-architectural-gold mr-2 mt-1 flex-shrink-0" />
                  <span>Client-centered approach</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Right side - Statistics and image */}
          <div className="flex flex-col space-y-8">
            <div className="relative h-80 overflow-hidden rounded-xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-architectural-blue/20 to-architectural-gold/20"></div>
              <img 
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" 
                alt="Architecture team" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-card p-6 rounded-xl text-center hover-scale">
                <div className="flex justify-center mb-4">
                  <Building2 size={32} className="text-architectural-gold" />
                </div>
                <h4 className="text-2xl font-bold text-architectural-blue dark:text-white">150+</h4>
                <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl text-center hover-scale">
                <div className="flex justify-center mb-4">
                  <Clock size={32} className="text-architectural-gold" />
                </div>
                <h4 className="text-2xl font-bold text-architectural-blue dark:text-white">8+</h4>
                <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl text-center hover-scale">
                <div className="flex justify-center mb-4">
                  <Award size={32} className="text-architectural-gold" />
                </div>
                <h4 className="text-2xl font-bold text-architectural-blue dark:text-white">25+</h4>
                <p className="text-gray-600 dark:text-gray-400">Design Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
