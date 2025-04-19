
import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Dubai Skyline Residences",
    category: "Residential",
    imageUrl: "https://images.unsplash.com/photo-1545486332-9e0999c535b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
    description: "Luxury apartment complex with panoramic city views and modern amenities."
  },
  {
    id: 2,
    title: "Azure Corporate Headquarters",
    category: "Commercial",
    imageUrl: "https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1560&q=80",
    description: "Contemporary office space designed for collaboration and productivity."
  },
  {
    id: 3,
    title: "Oasis Shopping Mall",
    category: "Commercial",
    imageUrl: "https://images.unsplash.com/photo-1614969263964-f381e18e45f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
    description: "Multi-level retail center featuring an interior garden and natural lighting."
  },
  {
    id: 4,
    title: "Harmony Villa",
    category: "Residential",
    imageUrl: "https://images.unsplash.com/photo-1600607687644-c7171b48f364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
    description: "Minimalist beachfront home with sustainable features and panoramic ocean views."
  },
  {
    id: 5,
    title: "Emerald Park Public Space",
    category: "Urban",
    imageUrl: "https://images.unsplash.com/photo-1518156677180-95a2893f3499?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
    description: "Urban renewal project transforming industrial area into a vibrant community space."
  },
  {
    id: 6,
    title: "Horizon Hotel & Resort",
    category: "Hospitality",
    imageUrl: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
    description: "Five-star accommodation with bespoke interiors and world-class amenities."
  }
];

const categories = ["All", "Residential", "Commercial", "Hospitality", "Urban"];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="section-title dark:text-white text-center">Our Projects</h2>
        <p className="section-subtitle dark:text-gray-300 text-center">
          Explore our portfolio of innovative architectural and interior design projects.
        </p>
        
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-architectural-blue text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="glass-card rounded-xl overflow-hidden hover-scale"
              onClick={() => openProjectDetails(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white font-medium">{project.category}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-architectural-blue dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <button 
                  className="text-architectural-blue dark:text-architectural-gold font-medium flex items-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    openProjectDetails(project);
                  }}
                >
                  View Details <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* "View All" button for future expansion */}
        <div className="flex justify-center mt-12">
          <Button className="glass-button bg-architectural-blue/10 text-architectural-blue dark:bg-architectural-gold/20 dark:text-architectural-gold">
            View All Projects <ExternalLink size={16} className="ml-2" />
          </Button>
        </div>
      </div>
      
      {/* Project detail modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={closeProjectDetails}>
          <div 
            className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto glass-card p-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80 sm:h-96">
              <img 
                src={selectedProject.imageUrl} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <button 
                className="absolute top-4 right-4 bg-white/80 dark:bg-black/80 rounded-full p-2 text-gray-800 dark:text-white"
                onClick={closeProjectDetails}
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-architectural-blue dark:text-white">{selectedProject.title}</h3>
                <span className="bg-architectural-gold/20 text-architectural-gold px-3 py-1 rounded-full text-sm">
                  {selectedProject.category}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{selectedProject.description}</p>
              
              {/* Additional project details - in a real app, these would be loaded from the database */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-architectural-blue dark:text-white">Project Details</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li><span className="font-medium">Location:</span> Dubai, UAE</li>
                    <li><span className="font-medium">Year:</span> 2023</li>
                    <li><span className="font-medium">Size:</span> 12,000 sq ft</li>
                    <li><span className="font-medium">Client:</span> {selectedProject.title.split(' ')[0]} Group</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-architectural-blue dark:text-white">Services Provided</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Architectural Design</li>
                    <li>Interior Design</li>
                    <li>3D Visualization</li>
                    <li>Project Management</li>
                  </ul>
                </div>
              </div>
              
              <Button className="w-full glass-button bg-architectural-blue text-white">Contact Us About This Project</Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
