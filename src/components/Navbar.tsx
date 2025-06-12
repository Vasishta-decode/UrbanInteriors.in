import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../img/Logo 2.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Why Urban Interiors', id: 'why-urban-interiors' },
    { name: 'Projects', id: 'projects' },
    { name: 'Our Process', id: 'process' },
    { name: 'Testimonials', id: 'testimonials' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4">
      <div 
        className={`
          max-w-7xl mx-auto rounded-2xl transition-all duration-500
          ${isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border border-gray-100' 
            : 'bg-white/80 backdrop-blur-sm shadow-md border border-gray-100/50'}
        `}
      >
        <div className="flex justify-between items-center h-16 px-4">
          {/* Logo and Brand Name */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-3 group"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-300">
              <img 
                src={logo} 
                alt="Urban Interiors Symbol" 
                className="w-[85%] h-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center">
              <span className="text-lg sm:text-xl font-bold text-gray-900">
                Urban<span className="text-[#D97706]">Interiors</span>
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 hover:text-[#D97706] font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D97706] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-[#D97706] text-white font-medium rounded-lg hover:bg-[#B45309] transition-all duration-300 hover:scale-105 shadow-md shadow-[#D97706]/10"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100/80 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 px-4 border-t border-gray-100 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsOpen(false);
                  }}
                  className="text-gray-600 hover:text-[#D97706] font-medium transition-colors duration-300 text-left py-2 px-3 rounded-lg hover:bg-gray-50"
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => {
                  scrollToSection('contact');
                  setIsOpen(false);
                }}
                className="px-6 py-3 bg-[#D97706] text-white font-medium rounded-lg hover:bg-[#B45309] transition-all duration-300 w-full text-center shadow-md shadow-[#D97706]/10"
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;