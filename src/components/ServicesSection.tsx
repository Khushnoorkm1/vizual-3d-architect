import { 
  LayoutPanelTop, 
  Paintbrush, 
  Home, 
  Building, 
  Building2, 
  Waypoints,
  X
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { translations } from "@/utils/translations";

const services = [
  {
    icon: <Building size={36} className="text-architectural-gold" />,
    title: "Architectural Design",
    description: "From concept to construction, we create architectural designs that balance aesthetics, functionality, and sustainability.",
    details: {
      features: [
        "Custom residential and commercial designs",
        "Sustainable architecture solutions",
        "3D modeling and visualization",
        "Construction documentation",
        "Site analysis and planning"
      ],
      process: [
        "Initial consultation and requirement gathering",
        "Concept development and sketches",
        "Detailed design and documentation",
        "Construction supervision"
      ]
    }
  },
  {
    icon: <Paintbrush size={36} className="text-architectural-gold" />,
    title: "Interior Design",
    description: "Transform your spaces with thoughtful interior design that reflects your style and enhances your daily experience.",
  },
  {
    icon: <LayoutPanelTop size={36} className="text-architectural-gold" />,
    title: "3D Visualization",
    description: "Experience your project before it's built with photorealistic 3D renderings and immersive virtual tours.",
  },
  {
    icon: <Building2 size={36} className="text-architectural-gold" />,
    title: "Commercial Spaces",
    description: "Design commercial environments that enhance brand identity, maximize functionality, and create memorable experiences.",
  },
  {
    icon: <Home size={36} className="text-architectural-gold" />,
    title: "Residential Design",
    description: "Create homes that reflect your personality, meet your needs, and provide comfort and inspiration every day.",
  },
  {
    icon: <Waypoints size={36} className="text-architectural-gold" />,
    title: "Urban Planning",
    description: "Develop sustainable urban solutions that create vibrant communities and improve quality of life.",
  },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="section-title dark:text-white text-center">
          <span className="block mb-2">{translations.services.title.ar}</span>
          <span className="block">{translations.services.title.en}</span>
        </h2>
        <p className="section-subtitle dark:text-gray-300 text-center">
          <span className="block mb-2">{translations.services.subtitle.ar}</span>
          <span className="block">{translations.services.subtitle.en}</span>
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-architectural-blue dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
        
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3 text-2xl">
                {selectedService?.icon}
                {selectedService?.title}
              </DialogTitle>
              <DialogDescription className="text-lg">
                {selectedService?.description}
              </DialogDescription>
            </DialogHeader>
            
            <div className="mt-6 space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-3 text-architectural-blue dark:text-white">
                  Key Features
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  {selectedService?.details.features.map((feature, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300">{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-3 text-architectural-blue dark:text-white">
                  Our Process
                </h4>
                <div className="space-y-3">
                  {selectedService?.details.process.map((step, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-architectural-gold text-white flex items-center justify-center text-sm">
                        {index + 1}
                      </span>
                      <p className="text-gray-600 dark:text-gray-300">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <DialogClose asChild>
              <Button variant="ghost" size="icon" className="absolute right-4 top-4">
                <X className="h-4 w-4" />
              </Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
        
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-12 text-architectural-blue dark:text-white">
            Our Design Process
          </h3>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-architectural-gold/30 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <div className="glass-card p-6 rounded-xl inline-block hover-scale">
                    <h4 className="text-xl font-bold mb-2 text-architectural-blue dark:text-white">Discovery</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      We start by understanding your vision, requirements, and constraints through detailed consultations.
                    </p>
                  </div>
                </div>
                <div className="relative md:w-1/2 flex justify-center mb-6 md:mb-0 order-1 md:order-2">
                  <div className="w-12 h-12 rounded-full bg-architectural-gold flex items-center justify-center z-10">
                    <span className="text-white font-bold">1</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="relative md:w-1/2 flex justify-center mb-6 md:mb-0">
                  <div className="w-12 h-12 rounded-full bg-architectural-gold flex items-center justify-center z-10">
                    <span className="text-white font-bold">2</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="glass-card p-6 rounded-xl inline-block hover-scale">
                    <h4 className="text-xl font-bold mb-2 text-architectural-blue dark:text-white">Concept Development</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      We create initial designs and concepts that align with your goals and project parameters.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <div className="glass-card p-6 rounded-xl inline-block hover-scale">
                    <h4 className="text-xl font-bold mb-2 text-architectural-blue dark:text-white">3D Visualization</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Experience your design through photorealistic renderings and immersive 3D visualizations.
                    </p>
                  </div>
                </div>
                <div className="relative md:w-1/2 flex justify-center mb-6 md:mb-0 order-1 md:order-2">
                  <div className="w-12 h-12 rounded-full bg-architectural-gold flex items-center justify-center z-10">
                    <span className="text-white font-bold">3</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="relative md:w-1/2 flex justify-center mb-6 md:mb-0">
                  <div className="w-12 h-12 rounded-full bg-architectural-gold flex items-center justify-center z-10">
                    <span className="text-white font-bold">4</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="glass-card p-6 rounded-xl inline-block hover-scale">
                    <h4 className="text-xl font-bold mb-2 text-architectural-blue dark:text-white">Refinement</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      We refine the design based on your feedback, making adjustments until it perfectly matches your vision.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <div className="glass-card p-6 rounded-xl inline-block hover-scale">
                    <h4 className="text-xl font-bold mb-2 text-architectural-blue dark:text-white">Implementation</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      We provide detailed documentation and support throughout the construction or implementation phase.
                    </p>
                  </div>
                </div>
                <div className="relative md:w-1/2 flex justify-center mb-6 md:mb-0 order-1 md:order-2">
                  <div className="w-12 h-12 rounded-full bg-architectural-gold flex items-center justify-center z-10">
                    <span className="text-white font-bold">5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
