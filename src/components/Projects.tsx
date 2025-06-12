import React, { useState, useEffect } from 'react';
import { ExternalLink, Calendar, MapPin, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 300); // Simulate loading for smooth transition
  }, [activeFilter]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'modular-kitchen', name: 'Modular Kitchen' },
    { id: 'wardrobe', name: 'Wardrobe' },
    { id: 'entertainment', name: 'Entertainment Units' },
    { id: 'other', name: 'Other Services' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Modular Kitchen',
      description: 'Premium modular kitchen with Hettich/Hafele/Ebco hardware & accessories. Using top quality materials like BWP Plywood, BWR Plywood, HDHMR Board, and WPC.',
      image: '/src/img/Modular Kitchen.jpg',
      category: 'modular-kitchen',
      features: ['Premium Hardware', 'Quality Materials', 'Custom Design']
    },
    {
      id: 2,
      title: 'Hinged & Sliding Wardrobe',
      description: 'Custom wardrobes using MR Plywood, HDHMR Board, and PLPB with premium finishes including laminates, acrylic, aluminum & lacquered glass.',
      image: '/src/img/Wardrobe.jpg',
      category: 'wardrobe',
      features: ['Custom Design', 'Premium Finishes', 'Quality Hardware']
    },
    {
      id: 3,
      title: 'Floor to Ceiling Wardrobe',
      description: 'Luxury floor to ceiling wardrobes with Aristo/Armadio shutters, featuring sliding options up to 9.5 feet with both sides soft close and lock.',
      image: '/src/img/Floor to Ceiling Wardrobe.jpg',
      category: 'wardrobe',
      features: ['Luxury Design', 'Soft Close', 'Maximum Storage']
    },
    {
      id: 4,
      title: 'Entertainment Units',
      description: 'Custom entertainment units with premium materials and finishes, including veneer, laminates, acrylic, and aluminum & lacquered glass options.',
      image: '/src/img/Entertainment Units.jpg',
      category: 'entertainment',
      features: ['Custom Design', 'Premium Finishes', 'Modern Look']
    },
    {
      id: 5,
      title: 'Pooja Room',
      description: 'Specially designed pooja rooms using MR Plywood, HDHMR Board, and WPC with premium finishes and hardware.',
      image: '/src/img/Pooja Room.jpg',
      category: 'other',
      features: ['Sacred Space', 'Premium Materials', 'Custom Design']
    },
    {
      id: 6,
      title: 'False Ceiling',
      description: 'Professional false ceiling services using Gypframe Expert Channel and Gyproc Boards from Saint Gobain.',
      image: '/src/img/False Ceiling.jpg',
      category: 'other',
      features: ['Professional Design', 'Quality Materials', 'Expert Installation']
    },
    {
      id: 7,
      title: 'Wall Painting & Wallpaper',
      description: 'Premium wall finishes with Asian Paints (Royale/Texture/Premium Emulsion) and designer wallpapers from Marshalls & Nilaya.',
      image: '/src/img/Wall Painting.jpg',
      category: 'other',
      features: ['Premium Finishes', 'Designer Options', 'Quality Materials']
    },
    {
      id: 8,
      title: 'Wooden Flooring',
      description: 'High-quality wooden flooring solutions from Action Tesa and Green Floor Max, including engineered, laminate, and design wood floors.',
      image: '/src/img/Wooden Flooring.jpg',
      category: 'other',
      features: ['Premium Quality', 'Multiple Options', 'Expert Installation']
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#D97706]">Services</span>
          </h2>
          <p className="text-xl text-[#1E293B] max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of interior design services that showcase 
            our commitment to excellence and innovation.
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-[#D97706] text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isLoading ? 'opacity-0' : 'animate-fadeInUp'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-[300px] overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <div className="text-white">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#D97706] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#1E293B] text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center text-[#D97706] font-medium hover:text-[#B45309] transition-colors duration-300 group/btn"
                >
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;