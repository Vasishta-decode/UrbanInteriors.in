import React from 'react';
import Hero from '../components/Hero';
import WhyUrbanInteriors from '../components/WhyUrbanInteriors';
import WhatsAppButton from '../components/WhatsAppButton';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyUrbanInteriors />
      <WhatsAppButton />
    </div>
  );
};

export default Home; 