import React from 'react';
import Testimonials from '../components/Testimonials';
import ContactComponent from '../components/Contact';
import WhatsAppButton from '../components/WhatsAppButton';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      <Testimonials />
      <ContactComponent />
      <WhatsAppButton />
    </div>
  );
};

export default Contact; 