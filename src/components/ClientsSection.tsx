
import { useState, useEffect, useRef } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";

// Updated testimonials based on the provided images
const testimonials = [
  {
    id: 1,
    name: "Sarah J.",
    role: "Client",
    company: "",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    quote: "Omair Contracting delivered exceptional results. Their team was professional and efficient.",
    rating: 5
  },
  {
    id: 2,
    name: "Ahmed K.",
    role: "Property Developer",
    company: "",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    quote: "The quality of their work exceeded our expectations. We highly recommend their services.",
    rating: 5
  },
  {
    id: 3,
    name: "Fatima A.",
    role: "Homeowner",
    company: "",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    quote: "Their attention to detail and commitment to customer satisfaction is commendable.",
    rating: 5
  }
];

// Updated client logos
const clientLogos = [
  { name: "Saudi Properties", logo: "https://via.placeholder.com/150?text=Saudi+Properties" },
  { name: "Royal Group", logo: "https://via.placeholder.com/150?text=Royal+Group" },
  { name: "Al-Futtaim", logo: "https://via.placeholder.com/150?text=Al-Futtaim" },
  { name: "Gulf Developers", logo: "https://via.placeholder.com/150?text=Gulf+Developers" },
  { name: "Saudi Construction", logo: "https://via.placeholder.com/150?text=Saudi+Construction" },
  { name: "Al-Rajhi", logo: "https://via.placeholder.com/150?text=Al-Rajhi" },
];

const ClientsSection = () => {
  const { t } = useTranslation();
  const { dir } = useLanguage();
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Function to advance to the next testimonial
  const nextTestimonial = () => {
    setActiveTestimonialIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous testimonial
  const prevTestimonial = () => {
    setActiveTestimonialIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Set up auto-scrolling
  useEffect(() => {
    // Clear any existing interval when component mounts or updates
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Only create an interval if not paused
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        nextTestimonial();
      }, 5000); // Change testimonial every 5 seconds
    }

    // Clean up interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, activeTestimonialIndex]);

  const activeTestimonial = testimonials[activeTestimonialIndex];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Logo animation variants
  const logoContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const logoItem = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="clients" className="section-padding bg-teal-50 dark:bg-teal-900/50" dir={dir}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="section-title text-teal-900 dark:text-white text-center"
        >
          {t("clients.testimonials.title")}
        </motion.h2>
        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={fadeIn}
          className="section-subtitle text-teal-800 dark:text-gray-300 text-center mb-8 md:mb-10"
        >
          {t("clients.testimonials.subtitle")}
        </motion.p>
        
        {/* Testimonials */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          variants={fadeIn}
          className="max-w-4xl mx-auto my-8 md:my-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="glass-card rounded-xl p-5 sm:p-8 md:p-12 relative bg-white/80 dark:bg-teal-800/30 backdrop-blur-md border border-teal-200 dark:border-white/10"
          >
            {/* Quote icon */}
            <div className={`absolute -top-6 ${dir === 'rtl' ? 'right-8' : 'left-8'} text-5xl text-teal-500 dark:text-teal-300 font-serif`}>"</div>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              <div className="md:w-1/3">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-teal-300/30 mx-auto">
                  <motion.img 
                    key={activeTestimonial.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    src={activeTestimonial.image} 
                    alt={activeTestimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <motion.blockquote 
                  key={`quote-${activeTestimonial.id}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-base sm:text-lg md:text-xl italic text-teal-800 dark:text-gray-300 mb-4 md:mb-6 text-center md:text-left"
                >
                  {t(`clients.testimonials.quotes.${activeTestimonialIndex}`)}
                </motion.blockquote>
                
                <div className="flex items-center justify-center md:justify-start mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={`${
                        i < activeTestimonial.rating 
                          ? "text-teal-500 fill-teal-500 dark:text-teal-300 dark:fill-teal-300" 
                          : "text-gray-300"
                      }`} 
                    />
                  ))}
                </div>
                
                <motion.div
                  key={`info-${activeTestimonial.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center md:text-left"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-teal-900 dark:text-white">
                    {t(`clients.testimonials.names.${activeTestimonialIndex}`)}
                  </h3>
                  <p className="text-teal-700 dark:text-gray-400">
                    {t(`clients.testimonials.roles.${activeTestimonialIndex}`)}
                  </p>
                </motion.div>
              </div>
            </div>
            
            {/* Navigation arrows */}
            <div className="flex justify-between items-center mt-6 md:mt-8">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  prevTestimonial();
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 10000); // Resume auto-scroll after 10 seconds
                }}
                className="p-2 rounded-full bg-white/50 dark:bg-teal-700/50 hover:bg-white dark:hover:bg-teal-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={18} className={`text-teal-700 dark:text-white ${dir === 'rtl' ? 'rotate-180' : ''}`} />
              </motion.button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveTestimonialIndex(index);
                      setIsPaused(true);
                      setTimeout(() => setIsPaused(false), 10000); // Resume auto-scroll after 10 seconds
                    }}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                      index === activeTestimonialIndex 
                        ? "bg-teal-500 dark:bg-teal-300" 
                        : "bg-teal-200 dark:bg-teal-800"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  nextTestimonial();
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 10000); // Resume auto-scroll after 10 seconds
                }}
                className="p-2 rounded-full bg-white/50 dark:bg-teal-700/50 hover:bg-white dark:hover:bg-teal-700 transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight size={18} className={`text-teal-700 dark:text-white ${dir === 'rtl' ? 'rotate-180' : ''}`} />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Client Logos */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={logoContainer}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 mt-8 md:mt-12 max-w-5xl mx-auto"
        >
          {clientLogos.map((client, index) => (
            <motion.div 
              key={client.name} 
              variants={logoItem}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-10 sm:h-12 md:h-16 object-contain opacity-70 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Business Showcase */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          variants={fadeIn} 
          className="mt-12 md:mt-16"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 md:mb-10 text-teal-900 dark:text-white">
            {t("clients.showcase.title")}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" 
                alt={t("clients.showcase.residential")} 
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
              />
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" 
                alt={t("clients.showcase.commercial")} 
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
              />
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="overflow-hidden rounded-lg shadow-lg sm:col-span-2 md:col-span-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" 
                alt={t("clients.showcase.luxury")} 
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
              />
            </motion.div>
          </div>
          
          <p className="text-center mt-4 sm:mt-6 text-teal-800 dark:text-gray-300 text-sm sm:text-base">
            {t("clients.showcase.highlights")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
