import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Award, Heart } from 'lucide-react';
import client1 from '../img/Client 1.jpg';
import client2 from '../img/client 2.jpg';
import client3 from '../img/client 3.jpg';
import client4 from '../img/client 4.jpg';

const testimonials = [
  {
    id: 1,
    name: "Mrs. Deepali Bhowmick",
    role: "Verified Client",
    image: client1,
    project: "Complete Home Interior",
    rating: 5,
    review: "Extremely professional, in depth knowledge about products, best quality material used. You get what you see! Continuous support and innovative ideas exchange sessions until you are satisfied with the final designs. Fastest execution and handover with no mess left in the house. I would highly recommend Jagadish and Urban interiors entire team. Thank you for making my dream home design come to reality in a beautiful way.",
  },
  {
    id: 2,
    name: "Mr. Kaushik",
    role: "Verified Client",
    image: client2,
    project: "Modular Kitchen & Wardrobes",
    rating: 5,
    review: "Outstanding service and exceptional quality! The team at Urban Interiors transformed our kitchen into a masterpiece. Their attention to detail and commitment to excellence is truly remarkable. The modular kitchen design perfectly balances functionality with aesthetics.",
  },
  {
    id: 3,
    name: "Mr. Apurba Paul",
    role: "Verified Client",
    image: client3,
    project: "Full House Interior",
    rating: 5,
    review: "Working with Urban Interiors was a delightful experience. Their team showed great expertise in understanding our requirements and delivering beyond expectations. The quality of materials and workmanship is top-notch. Highly recommended for anyone looking for premium interior solutions.",
  },
  {
    id: 4,
    name: "Mrs. Akriti Bharadwaj",
    role: "Verified Client",
    image: client4,
    project: "Residential Interior Design",
    rating: 5,
    review: "I am thoroughly impressed with Urban Interiors' professionalism and creativity. They transformed our space into something truly special. The team's dedication to customer satisfaction and their innovative design solutions made the entire process smooth and enjoyable.",
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrevious = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const currentTestimonial = testimonials[currentIndex];

  const stats = [
    {
      icon: Heart,
      value: '98%',
      label: 'Client Satisfaction Rate'
    },
    {
      icon: Star,
      value: '4.9',
      label: 'Average Rating'
    },
    {
      icon: Award,
      value: '95%',
      label: 'Referral Rate'
    },
    {
      icon: Quote,
      value: '500+',
      label: 'Happy Reviews'
    }
  ];

  return (
    <div id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Customers <span className="text-[#D97706]">Speak</span>
          </h2>
          <p className="text-xl text-[#1E293B] max-w-3xl mx-auto leading-relaxed">
            Discover what our valued clients say about their transformative experiences with Urban Interiors.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-24 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-[#D97706]" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-24 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-[#D97706]" />
          </button>

          {/* Testimonial Card */}
          <div className="relative overflow-hidden">
            <div
              className={`
                bg-white rounded-2xl shadow-xl p-8 lg:p-12
                transform transition-all duration-500 
                ${isAnimating ? (direction === 'right' ? 'animate-slideLeft' : 'animate-slideRight') : ''}
              `}
            >
              <div className="absolute top-8 right-8 text-[#D97706]/10">
                <Quote className="h-24 w-24" />
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="relative w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-[#D97706]/20 rounded-full transform rotate-45"></div>
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover rounded-full relative z-10"
                  />
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#D97706] fill-[#D97706]" />
                  ))}
                </div>

                <blockquote className="text-xl text-gray-900 leading-relaxed mb-6">
                  "{currentTestimonial.review}"
                </blockquote>

                <div className="text-center">
                  <div className="font-semibold text-lg text-gray-900">{currentTestimonial.name}</div>
                  <div className="text-[#D97706]">{currentTestimonial.role}</div>
                  <div className="text-sm text-gray-600 mt-1">{currentTestimonial.project}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 'right' : 'left');
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#D97706] w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* More Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials
            .filter((t, idx) => idx !== currentIndex)
            .map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-[#1E293B] text-sm">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-[#D97706] fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-[#1E293B] leading-relaxed italic">
                "{testimonial.review}"
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 mt-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Client <span className="text-[#D97706]">Satisfaction</span>
            </h3>
            <p className="text-xl text-[#1E293B]">Numbers that speak for our commitment to excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-4">
                <stat.icon className="h-12 w-12 text-[#D97706] mx-auto" />
                <div className="text-4xl font-bold text-[#D97706]">{stat.value}</div>
                <div className="text-[#1E293B]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;