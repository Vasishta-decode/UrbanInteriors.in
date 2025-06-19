import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../img/Logo 2.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Our Process', path: '/process' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-2 sm:py-4">
      <div 
        className={`
          max-w-7xl mx-auto rounded-2xl transition-all duration-500
          ${isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border border-gray-100' 
            : 'bg-white/80 backdrop-blur-sm shadow-md border border-gray-100/50'}
        `}
      >
        <div className="flex justify-between items-center h-14 sm:h-16 px-4">
          {/* Logo and Brand Name */}
          <Link 
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 sm:space-x-3 group"
          >
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-300">
              <img 
                src={logo} 
                alt="Urban Interiors Symbol" 
                className="w-[85%] h-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center">
              <span className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                Urban<span className="text-[#D97706]">Interiors</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`text-gray-600 hover:text-[#D97706] font-medium transition-colors duration-300 relative group
                  ${location.pathname === item.path ? 'text-[#D97706]' : ''}`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#D97706] transition-all duration-300
                  ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100/80 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 px-4 border-t border-gray-100 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => { 
                    setIsOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-gray-600 hover:text-[#D97706] font-medium transition-colors duration-300 text-left py-2 px-3 rounded-lg hover:bg-gray-50
                    ${location.pathname === item.path ? 'text-[#D97706] bg-gray-50' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;