import React from 'react';
import { Home, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Services', href: '#services' },
      { name: 'Our Projects', href: '#projects' },
      { name: 'Contact Us', href: '#contact' }
    ],
    services: [
      { name: 'Kitchen', href: '#services' },
      { name: 'Wardrobe', href: '#services' },
      { name: 'TV Unit', href: '#services' },
      { name: 'Crockery Unit', href: '#services' },
      { name: 'Study Table', href: '#services' },
      { name: 'Shoe Rack', href: '#services' },
      { name: 'False Ceiling', href: '#services' },
      { name: 'Painting', href: '#services' }
    ],
    support: [
      { name: 'Design Consultation', href: '#contact' },
      { name: 'Factory Visit', href: '#contact' },
      { name: 'Get Estimate', href: '#contact' },
      { name: 'Customer Support', href: '#contact' }
    ],
    social: [
      { name: 'Facebook', href: 'https://www.facebook.com/urbaninteriors.in', icon: Facebook },
      { name: 'Instagram', href: 'https://www.instagram.com/urbaninteriors.in', icon: Instagram },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/company/urbaninteriors-in', icon: Linkedin },
      { name: 'Twitter', href: 'https://twitter.com/UrbanInter64096', icon: Twitter },
      { name: 'YouTube', href: 'https://www.youtube.com/@urbaninteriors9955', icon: Youtube },
      { 
        name: 'Threads', 
        href: 'https://www.threads.net/@urbaninteriors.in', 
        icon: () => (
          <svg 
            viewBox="0 0 192 192" 
            className="h-5 w-5 fill-current"
          >
            <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"/>
          </svg>
        )
      }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Urban Interiors</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Crafting premium living spaces with German machinery and quality materials. 
              Experience excellence in interior design with our 10-year warranty and transparent pricing.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-[#D97706] transition-colors duration-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#D97706] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#D97706] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#D97706] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-gray-800">
          <a href="tel:+919876543210" className="flex items-center space-x-3 hover:text-[#D97706] transition-colors duration-300">
            <Phone className="h-5 w-5 text-[#D97706]" />
            <span className="text-gray-400 hover:text-[#D97706]">+91 7019596197</span>
          </a>
          <a href="mailto:hello@urbaninteriors.in" className="flex items-center space-x-3 hover:text-[#D97706] transition-colors duration-300">
            <Mail className="h-5 w-5 text-[#D97706]" />
            <span className="text-gray-400 hover:text-[#D97706]">	
            hello@urbaninteriors.in</span>
          </a>
          <a href="https://maps.app.goo.gl/g6xY7mS5J8fbvqG9A" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-[#D97706] transition-colors duration-300">
            <MapPin className="h-5 w-5 text-[#D97706]" />
            <span className="text-gray-400 hover:text-[#D97706]">No.63/4, P&T Layout, Bengaluru</span>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Urban Interiors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;