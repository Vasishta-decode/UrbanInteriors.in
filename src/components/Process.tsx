import React from 'react';
import { MessageSquare, Lightbulb, Palette, Hammer, CheckCircle, ArrowRight, Calendar, Calculator, FileText, Factory, Truck, Wrench } from 'lucide-react';
import { Check } from 'lucide-react';

const Process = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      icon: Calendar,
      title: 'Book an appointment',
      description: 'Schedule a consultation with our design experts.',
      duration: 'Day 1',
      details: [
        'Online or in-person consultation',
        'Initial requirements gathering',
        'Space assessment',
        'Design preferences discussion'
      ]
    },
    {
      icon: Calculator,
      title: 'Get the quote',
      description: 'Receive a detailed quote based on your requirements.',
      duration: 'Day 2-3',
      details: [
        'Transparent pricing',
        'Material specifications',
        'Detailed cost breakdown',
        'Payment schedule'
      ]
    },
    {
      icon: Palette,
      title: 'Meet our designer',
      description: 'Personalize your design with our expert designers.',
      duration: 'Day 4-5',
      details: [
        'Design customization',
        'Material selection',
        'Color consultation',
        'Layout optimization'
      ]
    },
    {
      icon: FileText,
      title: 'Detailed drawing',
      description: 'Review and approve detailed design drawings.',
      duration: 'Day 6-8',
      details: [
        'Technical drawings',
        '3D visualizations',
        'Material specifications',
        'Final approval'
      ]
    },
    {
      icon: Factory,
      title: 'Production',
      description: 'Manufacturing at our own factory with German machinery.',
      duration: 'Day 9-30',
      details: [
        'Quality raw materials',
        'Precision manufacturing',
        'Quality control checks',
        'Hardware installation'
      ]
    },
    {
      icon: Truck,
      title: 'Material delivery',
      description: 'Safe delivery of your custom furniture and materials.',
      duration: 'Day 31-32',
      details: [
        'Careful packaging',
        'Professional transport',
        'On-time delivery',
        'Material inspection'
      ]
    },
    {
      icon: Wrench,
      title: 'Installation',
      description: 'Professional installation by our expert team.',
      duration: 'Day 33-44',
      details: [
        'Expert installation team',
        'Precise assembly',
        'Quality checks',
        'Site cleanup'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Project handover',
      description: 'On-time project completion and handover.',
      duration: 'Day 45',
      details: [
        'Final inspection',
        'Client walkthrough',
        'Documentation handover',
        'Warranty activation'
      ]
    }
  ];

  return (
    <div id="process" className="py-12 sm:py-20 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            How it <span className="text-[#D97706]">Works</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#1E293B] max-w-3xl mx-auto leading-relaxed">
            Our proven 45-day process ensures a smooth and efficient journey from concept to completion.
          </p>
        </div>

        {/* Process Steps - Mobile First Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden w-full min-h-[280px]"
            >
              {/* Base content - Always visible */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#FFF7ED] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <step.icon className="h-6 w-6 text-[#D97706]" />
                  </div>
                  <span className="text-[#D97706] font-bold text-sm px-3 py-1 bg-[#FFF7ED] rounded-full">
                    {step.duration}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#D97706] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-[#1E293B] text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out p-6 sm:p-8">
                <div className="relative h-full flex flex-col">
                  <div className="mb-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#FFF7ED] flex items-center justify-center">
                        <step.icon className="h-5 w-5 text-[#D97706]" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-[#D97706]">
                        {step.title}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-start space-x-3 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" 
                          style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                          <Check className="h-5 w-5 text-[#D97706] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-800 text-sm leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-[#D97706]">Timeline:</span>
                      <span className="text-gray-800">{step.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Section - Mobile Optimized */}
        <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-2xl shadow-lg w-full">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Project <span className="text-[#D97706]">Timeline</span>
            </h3>
            <p className="text-base sm:text-lg text-[#1E293B]">
              Most projects are completed within 45 days, with quality checks at every stage.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Mobile Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D97706]/20 via-[#D97706] to-[#D97706]/20 md:hidden"></div>

            {/* Desktop Timeline Line */}
            <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-[#D97706]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#D97706]/20 via-[#D97706] to-[#D97706]/20"></div>
            </div>

            {/* Timeline Steps */}
            <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-4 w-full">
              {steps.map((step, index) => (
                <div key={index} className="relative group flex md:flex-1 w-full">
                  {/* Mobile Layout */}
                  <div className="flex items-start md:block w-full">
                    {/* Step Number - Mobile */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D97706] text-white text-sm font-bold flex items-center justify-center z-10 md:hidden">
                      {index + 1}
                    </div>

                    {/* Content */}
                    <div className="ml-6 md:ml-0 flex-1">
                      {/* Desktop Layout */}
                      <div className="hidden md:block">
                        {/* Icon Circle */}
                        <div className="relative flex justify-center mb-6">
                          {/* Step Number */}
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#D97706] text-white text-sm font-bold rounded-full w-7 h-7 flex items-center justify-center z-20 border-2 border-white">
                            {index + 1}
                          </div>
                          
                          {/* Icon Container */}
                          <div className="w-24 h-24 rounded-full border-2 border-[#D97706] bg-white flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                            <div className="w-20 h-20 rounded-full bg-[#FFF7ED] flex items-center justify-center group-hover:bg-[#FFEDD5] transition-all duration-300">
                              <step.icon className="h-10 w-10 text-[#D97706]" />
                            </div>
                          </div>
                        </div>

                        {/* Title and Duration */}
                        <div className="text-center">
                          <h4 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-[#D97706] transition-colors duration-300">
                            {step.title}
                          </h4>
                          <div className="inline-block px-4 py-1 rounded-full bg-[#FFF7ED] text-[#D97706] text-sm font-medium">
                            {step.duration}
                          </div>
                        </div>

                        {/* Hover Details Card */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-20">
                          <div className="relative bg-white rounded-xl shadow-xl p-4 w-72">
                            <div className="text-sm text-[#1E293B]">
                              <ul className="space-y-3">
                                {step.details.map((detail, idx) => (
                                  <li key={idx} className="flex items-start space-x-3 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                                      style={{ transitionDelay: `${idx * 50}ms` }}>
                                    <Check className="h-4 w-4 text-[#D97706] mt-0.5 flex-shrink-0" />
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            {/* Arrow pointing up */}
                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-white border-t border-l border-gray-100"></div>
                          </div>
                        </div>
                      </div>

                      {/* Mobile Content */}
                      <div className="md:hidden">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {step.title}
                        </h4>
                        <div className="inline-block px-3 py-1 rounded-full bg-[#FFF7ED] text-[#D97706] text-sm font-medium">
                          {step.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Ready to Begin Your <span className="text-[#D97706]">Journey?</span>
          </h3>
          <p className="text-lg text-[#1E293B] mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's start with a consultation to understand your vision and begin the transformation process.
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-[#D97706] text-white font-semibold rounded-lg hover:bg-[#B45309] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Book Design Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Process;