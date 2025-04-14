
import { useState } from "react";
import { Phone, Mail, MapPin, Send, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast("Message Sent", {
        description: "Thank you for your inquiry. We'll get back to you soon!",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="section-padding bg-white dark:bg-teal-900/30">
      <div className="container mx-auto">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="section-title text-teal-900 dark:text-white text-center"
        >
          Contact Us
        </motion.h2>
        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={fadeIn}
          className="section-subtitle text-teal-800 dark:text-gray-300 text-center"
        >
          Reach out to discuss your project or schedule a consultation with our team
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            variants={fadeIn}
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="glass-card rounded-xl p-8 bg-white/80 dark:bg-teal-800/30 backdrop-blur-md border border-teal-200 dark:border-white/10"
            >
              <h3 className="text-2xl font-bold mb-6 text-teal-900 dark:text-white">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-teal-800 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/50 dark:bg-teal-900/50 border-teal-200 dark:border-teal-700"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-teal-800 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/50 dark:bg-teal-900/50 border-teal-200 dark:border-teal-700"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-teal-800 dark:text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/50 dark:bg-teal-900/50 border-teal-200 dark:border-teal-700"
                      placeholder="+966 50 000 0000"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-teal-800 dark:text-gray-300 mb-1">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-md border border-teal-200 dark:border-teal-700 px-4 py-2 bg-white/50 dark:bg-teal-900/50 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-300 text-teal-900 dark:text-white"
                  >
                    <option value="">Select a service</option>
                    <option value="contracting">Contracting</option>
                    <option value="interior-design">Interior Design</option>
                    <option value="restoration">Restoration</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="electrical">Electrical Works</option>
                    <option value="air-conditioning">Air Conditioning</option>
                    <option value="project-development">Project Development</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-teal-800 dark:text-gray-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-teal-200 dark:border-teal-700 px-4 py-2 bg-white/50 dark:bg-teal-900/50 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-300 text-teal-900 dark:text-white"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="glass-button w-full bg-teal-600 hover:bg-teal-500 text-white border border-teal-400/30"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message <Send size={16} className="ml-2" />
                      </span>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            variants={fadeIn}
            className="flex flex-col space-y-8"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="glass-card rounded-xl p-8 bg-white/80 dark:bg-teal-800/30 backdrop-blur-md border border-teal-200 dark:border-white/10"
            >
              <h3 className="text-2xl font-bold mb-6 text-teal-900 dark:text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-teal-100 dark:bg-teal-700/40 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-teal-700 dark:text-teal-300" />
                  </div>
                  <div className="flex-1 min-w-0"> {/* Added min-w-0 to prevent overflow */}
                    <h4 className="text-lg font-medium text-teal-900 dark:text-white">Phone</h4>
                    <p className="text-teal-800 dark:text-gray-300 break-words">+966 11 123 4567</p>
                    <p className="text-teal-800 dark:text-gray-300 break-words">+966 50 987 6543</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-teal-100 dark:bg-teal-700/40 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-teal-700 dark:text-teal-300" />
                  </div>
                  <div className="flex-1 min-w-0"> {/* Added min-w-0 to prevent overflow */}
                    <h4 className="text-lg font-medium text-teal-900 dark:text-white">Email</h4>
                    <p className="text-teal-800 dark:text-gray-300 break-words">info@omaircontracting.com</p>
                    <p className="text-teal-800 dark:text-gray-300 break-words">projects@omaircontracting.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-teal-100 dark:bg-teal-700/40 rounded-full p-3 mr-4">
                    <Building className="h-6 w-6 text-teal-700 dark:text-teal-300" />
                  </div>
                  <div className="flex-1 min-w-0"> {/* Added min-w-0 to prevent overflow */}
                    <h4 className="text-lg font-medium text-teal-900 dark:text-white">Locations</h4>
                    <p className="text-teal-800 dark:text-gray-300 font-medium break-words">Riyadh:</p>
                    <p className="text-teal-800 dark:text-gray-300 mb-2 break-words">King Abdullah Road</p>
                    <p className="text-teal-800 dark:text-gray-300 font-medium break-words">Shaqra City:</p>
                    <p className="text-teal-800 dark:text-gray-300 break-words">King Fahd Road</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Office Hours */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="glass-card rounded-xl p-8 bg-white/80 dark:bg-teal-800/30 backdrop-blur-md border border-teal-200 dark:border-white/10"
            >
              <h3 className="text-2xl font-bold mb-6 text-teal-900 dark:text-white">Office Hours</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between flex-wrap">
                  <span className="text-teal-800 dark:text-gray-300">Sunday - Thursday</span>
                  <span className="font-medium text-teal-900 dark:text-white">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between flex-wrap">
                  <span className="text-teal-800 dark:text-gray-300">Friday</span>
                  <span className="font-medium text-teal-900 dark:text-white">Closed</span>
                </div>
                <div className="flex justify-between flex-wrap">
                  <span className="text-teal-800 dark:text-gray-300">Saturday</span>
                  <span className="font-medium text-teal-900 dark:text-white">9:00 AM - 1:00 PM</span>
                </div>
              </div>
            </motion.div>
            
            {/* Map or image placeholder */}
            <div className="rounded-xl overflow-hidden h-60 relative">
              <img 
                src="https://images.unsplash.com/photo-1595648160928-74fd8d4573bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" 
                alt="Map location" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button variant="outline" className="glass-button bg-white/70 hover:bg-white text-teal-900 dark:border-transparent">
                    <MapPin className="mr-2 h-4 w-4" /> View Location
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
