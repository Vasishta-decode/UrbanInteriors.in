import React, { useState, useEffect, useRef } from 'react';
import { Award, Heart, Lightbulb, Shield, Star, TrendingUp, Users, Palette, Clock, Wrench, CheckCircle } from 'lucide-react';
import core from '../img/Our core.jpg';

const WhyUrbanInteriors = () => {
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const statsRef = useRef<HTMLDivElement>(null);
  const reasonsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === statsRef.current) {
              setIsStatsVisible(true);
            }
            const section = entry.target.getAttribute('data-section') || '';
            setActiveSection(section);
          }
        });
      },
      { threshold: 0.2 }
    );

    [statsRef, reasonsRef, valuesRef].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      [statsRef, reasonsRef, valuesRef].forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const reasons = [
    {
      icon: Award,
      title: 'Best Price Guarantee',
      description: 'Transparent pricing with no hidden costs. We match any competitor\'s price for the same quality.',
      stats: '20-30% Less'
    },
    {
      icon: Wrench,
      title: 'German Technology',
      description: 'State-of-the-art German machinery ensuring precision and durability in every piece',
      stats: '99.9% Precision'
    },
    {
      icon: Shield,
      title: '10-Year Warranty',
      description: 'Comprehensive warranty coverage on materials and workmanship for complete peace of mind',
      stats: '10 Years'
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Swift project completion without compromising on quality or attention to detail',
      stats: '45 Days'
    }
  ];

  const values = [
    {
      title: 'Quality Assurance',
      description: 'Rigorous quality checks at every stage of production and installation'
    },
    {
      title: 'Sustainable Practices',
      description: 'Eco-friendly materials and sustainable manufacturing processes'
    },
    {
      title: 'Innovation Focus',
      description: 'Constantly updating our techniques and designs with latest industry trends'
    },
    {
      title: 'Transparent Process',
      description: 'Regular updates and complete visibility of your project progress'
    }
  ];

  const stats = [
    {
      value: '1000+',
      label: 'Projects Completed',
      startValue: 0,
      endValue: 1000,
      suffix: '+'
    },
    {
      value: '98%',
      label: 'Client Satisfaction',
      startValue: 0,
      endValue: 98,
      suffix: '%'
    },
    {
      value: '45+',
      label: 'Days Delivery',
      startValue: 0,
      endValue: 45,
      suffix: '+'
    },
    {
      value: '10+',
      label: 'Years Warranty',
      startValue: 0,
      endValue: 10,
      suffix: '+'
    }
  ];

  interface AnimatedNumberProps {
    startValue: number;
    endValue: number;
    suffix: string;
    isVisible: boolean;
  }

  const AnimatedNumber = ({ startValue, endValue, suffix, isVisible }: AnimatedNumberProps) => {
    const [currentValue, setCurrentValue] = useState<number>(startValue);
    
    useEffect(() => {
      if (!isVisible) return;
      
      const duration = 2000; // Animation duration in milliseconds
      const steps = 60; // Number of steps in the animation
      const stepDuration = duration / steps;
      const increment = (endValue - startValue) / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        if (currentStep === steps) {
          setCurrentValue(endValue);
          clearInterval(timer);
        } else {
          setCurrentValue((prev: number) => {
            const nextValue = startValue + (increment * currentStep);
            return Math.round(nextValue);
          });
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }, [isVisible, startValue, endValue]);

    return (
      <span className="inline-block">
        {currentValue}
        {suffix}
      </span>
    );
  };

  return (
    <div id="why-urban-interiors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose
            <span className="text-[#D97706]">UrbanInteriors?</span>
          </h2>
          <p className="text-xl text-[#1E293B] max-w-3xl mx-auto leading-relaxed font-medium">
            Experience the perfect blend of German precision, artistic design, and customer-centric approach. 
            We don't just create interiors; we craft lifestyles.
          </p>
        </div>

        {/* Main Reasons Grid */}
        <div 
          ref={reasonsRef}
          data-section="reasons"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20"
        >
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className={`
                group bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100
                ${activeSection === 'reasons' ? 'animate-fadeInUp' : 'opacity-0'}
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#D97706]/10 rounded-xl transform -rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-300"></div>
                  <reason.icon className="h-10 w-10 lg:h-12 lg:w-12 text-[#D97706] relative z-10 group-hover:scale-105 transition-transform duration-300" />
                </div>
                <span className="text-[#D97706] font-bold text-lg group-hover:scale-105 transition-transform duration-300">
                  {reason.stats}
                </span>
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 group-hover:text-[#D97706] transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-[#1E293B] leading-relaxed text-sm lg:text-base">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Values and Stats Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Values */}
          <div 
            ref={valuesRef}
            data-section="values"
            className={`
              lg:col-span-5 transform transition-all duration-500
              ${activeSection === 'values' ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}
            `}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Our Core <span className="text-[#D97706]">Values</span>
            </h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-[#D97706] rounded-full flex items-center justify-center mt-1 transform group-hover:scale-105 transition-transform duration-300">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#D97706] transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-[#1E293B] text-sm lg:text-base">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:col-span-7 relative">
            <div className="h-[300px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={core} 
                alt="Our Core Values"
                className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 right-6 bg-[#D97706] text-white p-6 rounded-xl shadow-lg transform hover:scale-102 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm font-medium">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          data-section="stats"
          className={`
            bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 transform transition-all duration-500
            ${activeSection === 'stats' ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-[#D97706]">Impact</span>
            </h3>
            <p className="text-xl text-[#1E293B]">Numbers that speak for themselves</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`
                  space-y-4 transform transition-all duration-500
                  ${isStatsVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl font-bold text-[#D97706]">
                  <AnimatedNumber
                    startValue={stat.startValue}
                    endValue={stat.endValue}
                    suffix={stat.suffix}
                    isVisible={isStatsVisible}
                  />
                </div>
                <div className="text-[#1E293B] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUrbanInteriors;