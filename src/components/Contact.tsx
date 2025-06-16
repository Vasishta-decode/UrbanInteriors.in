import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight, User, Building, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyName: '',
    requirements: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 7019596197',
      description: 'Mon-Sat 9am to 6pm'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@urbaninteriors.in',
      description: 'Online Support 24/7'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'No.63/4, P&T Layout, Srigandadakavalu',
      description: 'Bengaluru - 560091'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon - Sat',
      description: '9:00 AM - 6:00 PM'
    }
  ];

  return (
    <div id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Book Design <span className="text-[#D97706]">Consultation</span>
          </h2>
          <div className="w-24 h-1 bg-[#D97706] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-[#1E293B] max-w-3xl mx-auto leading-relaxed">
            Transform your space into something extraordinary. Let's start with a conversation.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Premium Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#D97706] rounded-3xl transform rotate-2 opacity-5"></div>
            <div className="relative bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name Field */}
                <div className="group">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400 group-focus-within:text-[#D97706] transition-colors duration-300" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="block w-full pl-12 pr-4 py-3 border-b-2 border-gray-200 focus:border-[#D97706] transition-colors duration-300 bg-gray-50/30 rounded-t-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0"
                      placeholder="Your Name"
                    />
                  </div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-500 mt-2 ml-1">
                    Full Name
                  </label>
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-[#D97706] transition-colors duration-300" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="block w-full pl-12 pr-4 py-3 border-b-2 border-gray-200 focus:border-[#D97706] transition-colors duration-300 bg-gray-50/30 rounded-t-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0"
                        placeholder="email@example.com"
                      />
                    </div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-500 mt-2 ml-1">
                      Email Address
                    </label>
                  </div>

                  <div className="group">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400 group-focus-within:text-[#D97706] transition-colors duration-300" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="block w-full pl-12 pr-4 py-3 border-b-2 border-gray-200 focus:border-[#D97706] transition-colors duration-300 bg-gray-50/30 rounded-t-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <label htmlFor="phone" className="block text-xs font-medium text-gray-500 mt-2 ml-1">
                      Phone Number
                    </label>
                  </div>
                </div>

                {/* Property Name */}
                <div className="group">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Building className="h-5 w-5 text-gray-400 group-focus-within:text-[#D97706] transition-colors duration-300" />
                    </div>
                    <input
                      type="text"
                      id="propertyName"
                      name="propertyName"
                      value={formData.propertyName}
                      onChange={handleChange}
                      required
                      className="block w-full pl-12 pr-4 py-3 border-b-2 border-gray-200 focus:border-[#D97706] transition-colors duration-300 bg-gray-50/30 rounded-t-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0"
                      placeholder="Property / Project Name"
                    />
                  </div>
                  <label htmlFor="propertyName" className="block text-xs font-medium text-gray-500 mt-2 ml-1">
                    Property Name
                  </label>
                </div>

                {/* Requirements */}
                <div className="group">
                  <div className="relative">
                    <div className="absolute top-3 left-4 pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400 group-focus-within:text-[#D97706] transition-colors duration-300" />
                    </div>
                    <textarea
                      id="requirements"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      rows={4}
                      className="block w-full pl-12 pr-4 py-3 border-b-2 border-gray-200 focus:border-[#D97706] transition-colors duration-300 bg-gray-50/30 rounded-t-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>
                  <label htmlFor="requirements" className="block text-xs font-medium text-gray-500 mt-2 ml-1">
                    Project Requirements
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#D97706] to-[#B45309] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#D97706]/20 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="h-5 w-5" />
                </button>

                {isSubmitted && (
                  <div className="flex items-center justify-center space-x-2 text-green-600 bg-green-50 p-4 rounded-xl animate-fadeIn">
                    <CheckCircle className="h-5 w-5" />
                    <span>Thank you! We'll get back to you shortly.</span>
                  </div>
                )}
              </form>
            </div>
        </div>

          {/* Map Section */}
          <div className="space-y-8">
            {/* Premium Map Section */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
              {/* Map Header */}
              <div className="p-6 bg-gradient-to-r from-[#D97706] to-[#B45309] text-white">
                <h4 className="text-xl font-bold mb-2 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Visit Our Factory
                </h4>
                <p className="text-white/90">No.63/4, P&T Layout, Srigandadakavalu, Bengaluru - 560091</p>
              </div>

              {/* Interactive Map Container */}
              <div className="relative h-[400px] group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7893557864584!2d77.5339611!3d12.9872694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d6411bbb945%3A0x8a6dc269b1c1ed4c!2sUrban%20Interiors%20(Factory)!5e0!3m2!1sen!2sin!4v1710346660584!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Urban Interiors Location"
                  className="rounded-b-2xl"
                />
                
                {/* Overlay with Action Button */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <a
                    href="https://maps.app.goo.gl/g6xY7mS5J8fbvqG9A" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-lg flex items-center hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                  >
                    <MapPin className="h-5 w-5 mr-2 text-[#D97706]" />
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-gray-100 border-t border-gray-100">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="p-6 hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-[#D97706]/10 rounded-lg">
                        <info.icon className="h-5 w-5 text-[#D97706]" />
                      </div>
                      <div className="min-w-0 flex-grow">
                        <h5 className="font-semibold text-gray-900 mb-1">{info.title}</h5>
                        <p className="text-[#1E293B] text-sm font-medium break-words">{info.details}</p>
                        <p className="text-sm text-gray-500 break-words">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                Why Work With <span className="text-[#D97706]">Us?</span>
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#D97706] mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-900">Online Design Consultation</h5>
                    <p className="text-[#1E293B] text-sm">Get design consultation from the comfort of your home</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#D97706] mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-900">45 Days Delivery</h5>
                    <p className="text-[#1E293B] text-sm">Quick turnaround with quality assurance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#D97706] mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-900">Premium Materials</h5>
                    <p className="text-[#1E293B] text-sm">Best quality materials and hardware</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#D97706] mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-900">10-Year Warranty</h5>
                    <p className="text-[#1E293B] text-sm">Long-term warranty on materials and workmanship</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your <span className="text-[#D97706]">Space?</span>
          </h3>
          <p className="text-xl text-[#1E293B] mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary together. Schedule a consultation 
            and discover how Urban Interiors can bring your vision to life.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-[#D97706] text-white font-semibold rounded-lg hover:bg-[#B45309] transition-all duration-300 hover:scale-105 shadow-lg">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;