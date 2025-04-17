
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, MapPin, Globe } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 80; // Reduced from 100 to 80 for smaller navbar

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });

      // Check if page is scrolled for navbar styling
      setIsScrolled(window.scrollY > 30); // Reduced from 50 to 30 for earlier transformation
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  const navLinks = [
    { id: "home", label: t('home') },
    { id: "about", label: t('about') },
    { id: "services", label: t('services') },
    { id: "projects", label: t('projects') },
    { id: "clients", label: t('clients') },
    { id: "contact", label: t('contact') },
  ];

  // Company office locations
  const locations = [
    { 
      name: "Riyadh Office", 
      address: "King Abdullah Road, Riyadh", 
      coordinates: { lat: 24.7136, lng: 46.6753 } 
    },
    { 
      name: "Shaqra Office", 
      address: "King Fahd Road, Shaqra City", 
      coordinates: { lat: 25.2427, lng: 45.2695 } 
    }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-white/80 dark:bg-architectural-gray/80 backdrop-blur-md py-2 shadow-md" // Reduced padding from py-4 to py-2
          : "bg-transparent py-3" // Reduced padding from py-6 to py-3
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.a 
          href="#home" 
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-10 h-10 bg-teal-600 dark:bg-teal-500 rounded-full flex items-center justify-center overflow-hidden"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="text-white font-bold text-lg">O</span>
          </motion.div>
          <span className="text-xl font-bold text-architectural-blue dark:text-architectural-light">
            Omair
            <span className="text-architectural-gold"> Contracting</span>
          </span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-5"> {/* Reduced space-x from 8 to 5 */}
          {navLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link ${activeSection === link.id ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {link.label}
            </motion.a>
          ))}
          
          {/* Map Location Dropdown */}
          <HoverCard>
            <HoverCardTrigger asChild>
              <motion.button
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-primary flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
              >
                <MapPin size={18} />
                <span className="text-sm font-medium">{t('ourOffices')}</span>
              </motion.button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 p-0 bg-white/90 dark:bg-teal-800/90 backdrop-blur-md">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-teal-900 dark:text-white mb-3">{t('visitLocations')}</h3>
                <div className="space-y-3">
                  {locations.map((location, index) => (
                    <motion.a
                      key={index}
                      href={`https://www.google.com/maps/search/?api=1&query=${location.coordinates.lat},${location.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start p-2 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-700/30 transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <MapPin className="h-5 w-5 text-teal-600 dark:text-teal-300 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-teal-900 dark:text-white">{location.name}</p>
                        <p className="text-sm text-teal-700 dark:text-teal-300">{location.address}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
              <div className="h-32 w-full rounded-b-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1595648160928-74fd8d4573bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" 
                  alt="Map location" 
                  className="w-full h-full object-cover"
                />
              </div>
            </HoverCardContent>
          </HoverCard>
          
          {/* Language Toggle */}
          <LanguageToggle />
          
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
            whileHover={{ rotate: 15, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: (navLinks.length + 1) * 0.1 }}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
          <LanguageToggle />
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors mx-2"
            aria-label="Toggle dark mode"
            whileHover={{ rotate: 15, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && isMobile && (
        <motion.div 
          className="md:hidden absolute top-full left-0 w-full bg-white/90 dark:bg-architectural-gray/90 backdrop-blur-md shadow-lg py-3"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto flex flex-col space-y-3">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                className={`px-6 py-2 text-lg ${
                  activeSection === link.id ? "text-primary font-medium" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                {link.label}
              </motion.a>
            ))}
            
            {/* Mobile Locations */}
            <div className="px-6 py-2">
              <p className="text-lg font-medium mb-2">{t('ourOffices')}</p>
              <div className="space-y-2 ml-2">
                {locations.map((location, index) => (
                  <motion.a
                    key={index}
                    href={`https://www.google.com/maps/search/?api=1&query=${location.coordinates.lat},${location.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start py-1 text-teal-800 dark:text-teal-300"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (navLinks.length + index) * 0.1 }}
                    whileHover={{ x: 3 }}
                  >
                    <MapPin className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{location.name}</p>
                      <p className="text-sm">{location.address}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
