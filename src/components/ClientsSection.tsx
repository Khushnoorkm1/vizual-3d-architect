
import { useState } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

// Sample testimonials
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Property Developer",
    company: "Urban Horizons",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    quote: "Working with VIZUAL3D was an exceptional experience. Their attention to detail and innovative approach to design transformed our concept into a stunning reality that exceeded our expectations.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "Apex Development",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    quote: "The 3D visualizations provided by VIZUAL3D were crucial in our investor presentations. They captured the essence of our vision perfectly and helped us secure the funding we needed.",
    rating: 5
  },
  {
    id: 3,
    name: "Amina Patel",
    role: "Interior Designer",
    company: "Harmony Interiors",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    quote: "As a designer myself, I have high standards for architectural visualization. VIZUAL3D not only met but exceeded those standards with their technical excellence and artistic vision.",
    rating: 4
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Hotel Manager",
    company: "Azure Resorts",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    quote: "The renovations designed by VIZUAL3D have completely transformed our guest experience. Their understanding of hospitality design is unparalleled, and the results speak for themselves.",
    rating: 5
  },
  {
    id: 5,
    name: "Emma Thompson",
    role: "Homeowner",
    company: "",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    quote: "From the first consultation to the final reveal, VIZUAL3D made the process of designing our dream home enjoyable and stress-free. We're incredibly happy with our new space.",
    rating: 5
  }
];

// Sample client logos
const clientLogos = [
  { name: "Dubai Properties", logo: "https://via.placeholder.com/150?text=Dubai+Properties" },
  { name: "Emirates Group", logo: "https://via.placeholder.com/150?text=Emirates+Group" },
  { name: "Luxe Hotels", logo: "https://via.placeholder.com/150?text=Luxe+Hotels" },
  { name: "Gulf Developers", logo: "https://via.placeholder.com/150?text=Gulf+Developers" },
  { name: "Al-Futtaim", logo: "https://via.placeholder.com/150?text=Al-Futtaim" },
  { name: "Emaar", logo: "https://via.placeholder.com/150?text=Emaar" },
];

const ClientsSection = () => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonialIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveTestimonialIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const activeTestimonial = testimonials[activeTestimonialIndex];

  return (
    <section id="clients" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="section-title dark:text-white text-center">Our Clients</h2>
        <p className="section-subtitle dark:text-gray-300 text-center">
          We're proud to work with leading companies and individuals who trust our expertise.
        </p>
        
        {/* Testimonials */}
        <div className="max-w-4xl mx-auto my-16">
          <div className="glass-card rounded-xl p-8 md:p-12 relative">
            {/* Quote icon */}
            <div className="absolute -top-6 left-8 text-5xl text-architectural-gold font-serif">"</div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-architectural-gold/20 mx-auto">
                  <img 
                    src={activeTestimonial.image} 
                    alt={activeTestimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <blockquote className="text-lg md:text-xl italic text-gray-700 dark:text-gray-300 mb-6">
                  {activeTestimonial.quote}
                </blockquote>
                
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className={`${
                        i < activeTestimonial.rating 
                          ? "text-architectural-gold fill-architectural-gold" 
                          : "text-gray-300"
                      }`} 
                    />
                  ))}
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-architectural-blue dark:text-white">
                    {activeTestimonial.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {activeTestimonial.role}{activeTestimonial.company && `, ${activeTestimonial.company}`}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Navigation arrows */}
            <div className="flex justify-between mt-8">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white/50 dark:bg-gray-700/50 hover:bg-white dark:hover:bg-gray-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={20} className="text-architectural-blue dark:text-white" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonialIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === activeTestimonialIndex 
                        ? "bg-architectural-gold" 
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white/50 dark:bg-gray-700/50 hover:bg-white dark:hover:bg-gray-700 transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight size={20} className="text-architectural-blue dark:text-white" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Client logos */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-10 text-architectural-blue dark:text-white">Trusted By</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center justify-center hover-scale">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-16 max-w-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
