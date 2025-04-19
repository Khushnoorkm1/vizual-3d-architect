
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
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
      toast({
        title: "Message Sent",
        description: "Thank you for your inquiry. We'll get back to you soon!",
        variant: "default",
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

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="section-title dark:text-white text-center">Contact Us</h2>
        <p className="section-subtitle dark:text-gray-300 text-center">
          Reach out to discuss your project or schedule a consultation with our design team.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <div>
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-architectural-blue dark:text-white">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/50 dark:bg-gray-800/50"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/50 dark:bg-gray-800/50"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/50 dark:bg-gray-800/50"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 bg-white/50 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-architectural-blue dark:focus:ring-architectural-gold"
                  >
                    <option value="">Select a service</option>
                    <option value="architectural-design">Architectural Design</option>
                    <option value="interior-design">Interior Design</option>
                    <option value="3d-visualization">3D Visualization</option>
                    <option value="commercial-spaces">Commercial Spaces</option>
                    <option value="residential-design">Residential Design</option>
                    <option value="urban-planning">Urban Planning</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 bg-white/50 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-architectural-blue dark:focus:ring-architectural-gold"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="glass-button w-full bg-architectural-blue text-white hover:bg-architectural-blue/90"
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
              </form>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col space-y-8">
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-architectural-blue dark:text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-architectural-blue/10 dark:bg-architectural-gold/20 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-architectural-blue dark:text-architectural-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-architectural-blue dark:text-white">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300">+971 4 123 4567</p>
                    <p className="text-gray-600 dark:text-gray-300">+971 50 987 6543</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-architectural-blue/10 dark:bg-architectural-gold/20 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-architectural-blue dark:text-architectural-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-architectural-blue dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">info@vizual3d.com</p>
                    <p className="text-gray-600 dark:text-gray-300">projects@vizual3d.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-architectural-blue/10 dark:bg-architectural-gold/20 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-architectural-blue dark:text-architectural-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-architectural-blue dark:text-white">Office Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Design District, Building 7<br />
                      Sheikh Zayed Road<br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Office Hours */}
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-architectural-blue dark:text-white">Office Hours</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Monday - Thursday</span>
                  <span className="font-medium text-architectural-blue dark:text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Friday</span>
                  <span className="font-medium text-architectural-blue dark:text-white">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Saturday</span>
                  <span className="font-medium text-architectural-blue dark:text-white">By Appointment</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Sunday</span>
                  <span className="font-medium text-architectural-blue dark:text-white">Closed</span>
                </div>
              </div>
            </div>
            
            {/* Map or image placeholder */}
            <div className="rounded-xl overflow-hidden h-60 relative">
              <img 
                src="https://images.unsplash.com/photo-1547203588-62c4e58b9bb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" 
                alt="Office location" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <Button variant="outline" className="glass-button bg-white/70 hover:bg-white text-architectural-blue">
                  View Map
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
