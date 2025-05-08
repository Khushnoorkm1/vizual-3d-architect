
import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";

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

const ProjectsSection = () => {
  const { t } = useTranslation();
  const { dir } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Residential", "Commercial", "Hospitality", "Urban"];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  const getCategoryTranslation = (category) => {
    return t(`projects.categories.${category.toLowerCase()}`);
  };

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900" dir={dir}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title dark:text-white text-center">{t("projects.title")}</h2>
        <p className="section-subtitle dark:text-gray-300 text-center mb-8 md:mb-10">
          {t("projects.subtitle")}
        </p>
        
        {/* Category filter - scrollable on mobile */}
        <div className="flex flex-nowrap overflow-x-auto pb-2 md:flex-wrap md:justify-center gap-2 mb-8 md:mb-12 scrollbar-none">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition-all whitespace-nowrap ${
                activeCategory === category
                  ? "bg-architectural-blue text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {getCategoryTranslation(category)}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="glass-card rounded-xl overflow-hidden hover-scale"
              onClick={() => openProjectDetails(project)}
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white font-medium">{t(`projects.categories.${project.category.toLowerCase()}`)}</span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-architectural-blue dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">{project.description}</p>
                <button 
                  className="text-architectural-blue dark:text-architectural-gold font-medium flex items-center text-sm sm:text-base"
                  onClick={(e) => {
                    e.stopPropagation();
                    openProjectDetails(project);
                  }}
                >
                  {t("projects.viewDetails")} 
                  <ArrowRight size={16} className={`${dir === 'rtl' ? 'mr-1 rotate-180' : 'ml-1'}`} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* "View All" button for future expansion */}
        <div className="flex justify-center mt-8 md:mt-12">
          <Button className="glass-button bg-architectural-blue/10 text-architectural-blue dark:bg-architectural-gold/20 dark:text-architectural-gold">
            {t("projects.viewAll")} <ExternalLink size={16} className={`${dir === 'rtl' ? 'mr-2' : 'ml-2'}`} />
          </Button>
        </div>
      </div>
      
      {/* Project detail modal */}
      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={closeProjectDetails}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            <div className="relative h-56 sm:h-72 md:h-80 lg:h-96 rounded-t-lg overflow-hidden">
              <img 
                src={selectedProject.imageUrl} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <DialogClose asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-white/80 dark:bg-black/80 rounded-full"
                >
                  <X className="h-4 w-4" />
                </Button>
              </DialogClose>
            </div>
            
            <div className="p-4 sm:p-6">
              <DialogHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                  <DialogTitle className="text-xl sm:text-2xl font-bold text-architectural-blue dark:text-white">
                    {selectedProject.title}
                  </DialogTitle>
                  <span className="bg-architectural-gold/20 text-architectural-gold px-3 py-1 rounded-full text-sm whitespace-nowrap">
                    {t(`projects.categories.${selectedProject.category.toLowerCase()}`)}
                  </span>
                </div>
                <DialogDescription className="text-gray-700 dark:text-gray-300">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-architectural-blue dark:text-white">
                    {t("projects.projectDetails.title")}
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    <li><span className="font-medium">{t("projects.projectDetails.location")}:</span> Dubai, UAE</li>
                    <li><span className="font-medium">{t("projects.projectDetails.year")}:</span> 2023</li>
                    <li><span className="font-medium">{t("projects.projectDetails.size")}:</span> 12,000 sq ft</li>
                    <li><span className="font-medium">{t("projects.projectDetails.client")}:</span> {selectedProject.title.split(' ')[0]} Group</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-architectural-blue dark:text-white">
                    {t("projects.projectDetails.servicesProvided")}
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    <li>Architectural Design</li>
                    <li>Interior Design</li>
                    <li>3D Visualization</li>
                    <li>Project Management</li>
                  </ul>
                </div>
              </div>
              
              <Button className="w-full glass-button bg-architectural-blue text-white mt-6">
                {t("projects.projectDetails.contactProject")}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default ProjectsSection;
