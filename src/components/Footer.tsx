
import { Facebook, Twitter, Instagram, Linkedin, ArrowUpCircle } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-architectural-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Information */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              VIZUAL<span className="text-architectural-gold">3D</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Transforming spaces with innovative architectural and interior design solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-architectural-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-architectural-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-architectural-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-architectural-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-architectural-gold transition-colors">
                  Architectural Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-architectural-gold transition-colors">
                  Interior Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-architectural-gold transition-colors">
                  3D Visualization
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-architectural-gold transition-colors">
                  Commercial Spaces
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-architectural-gold transition-colors">
                  Residential Design
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-architectural-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-architectural-gold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-architectural-gold transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#clients" className="text-gray-300 hover:text-architectural-gold transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-architectural-gold transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Design District, Building 7</p>
              <p>Sheikh Zayed Road</p>
              <p>Dubai, United Arab Emirates</p>
              <p className="mt-4">Phone: +971 4 123 4567</p>
              <p>Email: info@vizual3d.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} VIZUAL3D. All rights reserved.
          </p>
          <div className="flex items-center">
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-architectural-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-architectural-gold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-architectural-gold transition-colors">
                Sitemap
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="ml-6 text-architectural-gold hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUpCircle size={24} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
