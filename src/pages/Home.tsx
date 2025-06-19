import React from 'react';
import Hero from '../components/Hero';
import WhyUrbanInteriors from '../components/WhyUrbanInteriors';
import VideoSection from '../components/VideoSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyUrbanInteriors />
      <VideoSection />
    </div>
  );
};

export default Home; 