import React, { useEffect } from 'react';
import { ArrowRight, Award, Users, Palette, Clock } from 'lucide-react';
import heroBg from '../img/Interior design BG.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Award,
      title: 'Personalized Online Consultation',
      description: 'Receive expert design guidance from the comfort of your home, tailored to your unique style and needs.'
    },
    {
      icon: Users,
      title: 'Efficient Project Delivery',
      description: 'Benefit from our streamlined process ensuring timely project completion within 45 days, backed by rigorous quality checks and dedicated on-site supervision.'
    },
    {
      icon: Palette,
      title: 'Exquisite Material Selection',
      description: 'We meticulously source and utilize only the finest, industry-leading materials to ensure unparalleled durability, aesthetics, and lasting quality for your project.'
    },
    {
      icon: Clock,
      title: 'In-House German Manufacturing',
      description: 'Experience precision and superior craftsmanship with our state-of-the-art in-house factory, equipped with advanced German machinery for bespoke modular furniture.'
    }
  ];

  return (
    <div id="about" className="min-h-[80vh] pt-24 mt-4 bg-white">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Card */}
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
            {/* Background Image Container */}
            <div className="relative w-full h-[calc(100vh-10rem)] max-h-[600px]">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${heroBg})`,
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/0 to-transparent"></div>
              </div>

              {/* Content Container */}
              <div className="relative h-full flex items-center">
                <div className="w-full px-6 sm:px-8 lg:px-12">
                  <div className="max-w-xl">
                    {/* Title */}
                    <div className="space-y-2 mb-6">
                      <h1 className="text-4xl sm:text-5xl font-bold text-[#fe9923] animate-on-scroll opacity-0">
                        Crafting Exquisite
                      </h1>
                      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 animate-on-scroll opacity-0" 
                        style={{ animationDelay: '0.2s' }}>
                        Living Spaces
                      </h1>
                    </div>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-md animate-on-scroll opacity-0"
                      style={{ animationDelay: '0.4s' }}>
                      Transform your vision into reality with UrbanInteriors – where premium design meets unparalleled craftsmanship and transparent value.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 animate-on-scroll opacity-0"
                      style={{ animationDelay: '0.6s' }}>
                      <button 
                        onClick={() => scrollToSection('projects')}
                        className="w-full sm:w-auto px-6 py-3.5 bg-[#fe9923] text-white text-base font-semibold rounded-xl hover:bg-[#d07f1f] transition-all duration-300 flex items-center justify-center group"
                      >
                        View Our Projects
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button 
                        onClick={() => scrollToSection('contact')}
                        className="w-full sm:w-auto px-6 py-3.5 bg-white text-gray-900 text-base font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 border-2 border-gray-200 flex items-center justify-center group"
                      >
                        Book Design Consultation
                        <ArrowRight className="ml-2 h-5 w-5 text-[#fe9923] group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;