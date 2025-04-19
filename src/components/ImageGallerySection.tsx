
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ImageGallerySection = () => {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: "/lovable-uploads/e68e189d-d80d-4f2c-b858-93d38d452a08.png",
      title: language === 'ar' ? "مشروعات سكنية" : "Residential Projects",
      description: language === 'ar' 
        ? "تصميم وتنفيذ مشاريع سكنية فاخرة تلبي احتياجات العملاء"
        : "Design and construction of luxury residential projects tailored to client needs"
    },
    {
      src: "/lovable-uploads/bdc045f1-78d4-4d93-882a-a7ef09dc1e12.png",
      title: language === 'ar' ? "أعمال البناء" : "Construction Works",
      description: language === 'ar'
        ? "تنفيذ أعمال البناء بجودة عالية وبأحدث التقنيات"
        : "High-quality construction works utilizing the latest technologies"
    },
    {
      src: "/lovable-uploads/25263289-e0f5-403a-9d27-8b367c5b3c23.png",
      title: language === 'ar' ? "الديكورات الداخلية" : "Interior Decorations",
      description: language === 'ar'
        ? "تصميمات داخلية عصرية تجمع بين الجمال والوظيفة"
        : "Modern interior designs that combine beauty and functionality"
    },
    {
      src: "https://images.unsplash.com/photo-1595648160928-74fd8d4573bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
      title: language === 'ar' ? "المشاريع التجارية" : "Commercial Projects",
      description: language === 'ar'
        ? "تصميم وتنفيذ مشاريع تجارية تلبي متطلبات السوق الحديثة"
        : "Design and implementation of commercial projects that meet modern market requirements"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="gallery" className="bg-white dark:bg-teal-900/20" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 text-teal-900 dark:text-white"
          >
            {language === 'ar' ? "معرض المشاريع" : "Project Gallery"}
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-teal-700 dark:text-teal-300 max-w-3xl mx-auto"
          >
            {language === 'ar' 
              ? "استعرض مجموعة من مشاريعنا المتميزة التي تعكس جودة خدماتنا وخبرتنا في مجال المقاولات"
              : "Browse through a collection of our outstanding projects that reflect the quality of our services and expertise in contracting"
            }
          </motion.p>
        </motion.div>

        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          {/* Main Slider */}
          <div className="relative h-[70vh] overflow-hidden">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                  index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: index === activeIndex ? 1 : 0,
                  scale: index === activeIndex ? 1 : 1.1
                }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8 md:p-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{image.title}</h3>
                  <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">{image.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass-button bg-white/20 backdrop-blur-sm border border-white/30 text-white max-w-max"
                  >
                    {language === 'ar' ? "عرض المشروع" : "View Project"}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 rounded-full bg-white/30 backdrop-blur-md hover:bg-white/50 border border-white/30 p-3 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </Button>
          
          <Button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 rounded-full bg-white/30 backdrop-blur-md hover:bg-white/50 border border-white/30 p-3 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </Button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex 
                    ? "bg-white scale-125" 
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-4 gap-4 mt-8">
          {images.map((image, index) => (
            <motion.button
              key={index}
              className={`relative overflow-hidden rounded-lg h-24 ${
                index === activeIndex ? "ring-4 ring-teal-500" : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={image.src}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallerySection;
