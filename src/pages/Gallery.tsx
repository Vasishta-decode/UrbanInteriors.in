import React, { useState } from 'react';
import img1 from '../img/Kitchen gallery/Experience a kitchen design that embodies elegance….jpg';
import img2 from '../img/Kitchen gallery/af154639-2ce3-4005-af5b-5ea22574aa6e.jpg';
import img3 from '../img/Kitchen gallery/13_ L Shaped Kitchen Design.jpg';
import img4 from '../img/Kitchen gallery/21+ Stunning Dark Beige Kitchen Cabinet Ideas.jpg';
import img5 from '../img/Kitchen gallery/bd9e0a43-449f-492d-b158-34460dfef9f5.jpg';
import img6 from '../img/Kitchen gallery/67c86aa0-bf6f-42fc-aa07-4fbef67e7f0b.jpg';
import img7 from '../img/Kitchen gallery/_Contemporary kitchen design with a chic green and….jpg';
import img8 from '../img/Kitchen gallery/e14474ee-b794-4c3c-b6b8-79a62d9cb960.jpg';
import img9 from '../img/Kitchen gallery/96b7a192-bda4-44d7-a309-b0648154bf55.jpg';
import img10 from '../img/Kitchen gallery/Three walls of cabinetry create a U-shape….jpg';
import img11 from '../img/Kitchen gallery/How to Design a Modern L Shape Modular Kitchen •….jpg';
import img12 from '../img/Kitchen gallery/Modular kitchen ideas  Modular designs Modular….jpg';
import img13 from '../img/Kitchen gallery/Discover the latest modular kitchen design trends….jpg';
import img14 from '../img/Kitchen gallery/home decor ideas bedroom home decor styles home….jpg';
import img15 from '../img/Kitchen gallery/DIY Marble Floor Design Ideas to Upgrade Your Home….jpg';
import w1 from '../img/Wardrobe/Ищете идеи для стильного хранения_ Этот встроенный….jpg';
import w2 from '../img/Wardrobe/943d2d73-0e75-4ed5-8752-b06d47e67a59.jpg';
import w3 from '../img/Wardrobe/094a4a30-c5f3-4c16-8c16-e0fbfea0fe30.jpg';
import w4 from '../img/Wardrobe/16 Wardrobe Design Ideas for Your Bedroom.jpg';
import w5 from '../img/Wardrobe/45a9cf08-4ad7-472f-819c-7eaede3af72e.jpg';
import w6 from '../img/Wardrobe/0844f8a7-2529-4e9b-aeca-6a569ab874d1.jpg';
import w7 from '../img/Wardrobe/Classy And Sassy - Smart Idea _ Facebook.jpg';
import w8 from '../img/Wardrobe/Wardrobe interior design.jpg';
import w9 from '../img/Wardrobe/2d5819a4-4a4a-4de8-b914-26a4afacbe64.jpg';
import w10 from '../img/Wardrobe/Minimal furniture and smart storage solutions keep….jpg';
import w11 from '../img/Wardrobe/1994fe7f-2ef1-4e76-b4cd-d82d6eb65acf.jpg';
import w12 from '../img/Wardrobe/d962d191-a836-4ec1-898f-e378690f872f.jpg';
import w13 from '../img/Wardrobe/Land I n t e r i o r & F u r n i t u r e D e s i g….jpg';
import w14 from '../img/Wardrobe/0ab5ae29-5b9a-49a6-a598-deaa3baf5ee8.jpg';
import w15 from '../img/Wardrobe/Discover the latest bedroom wardrobe design trends….jpg';
import l1 from '../img/Living room/01f75ba3-64dc-4531-9b1b-1831ad7208a6.jpg';
import l2 from '../img/Living room/3cdea0d3-409b-4daa-8c7a-527b5b820c50.jpg';
import l3 from '../img/Living room/Be inspired with these stunning TV wall ideas and….jpg';
import l4 from '../img/Living room/40 Interior Design Ideas for a Stunning Black….jpg';
import l5 from '../img/Living room/This magnificent piece will improve the aesthetic….jpg';
import l6 from '../img/Living room/Many homeowners believe that significant home….jpg';
import l7 from '../img/Living room/Refresh your living room effortlessly by styling a….jpg';
import l8 from '../img/Living room/Stay ahead of the trends with modern TV wall units….jpg';
import l9 from '../img/Living room/20+ Stylish TV Cabinet Designs for Your Living….jpg';
import l10 from '../img/Living room/Inspiring Modern TV Unit Design Ideas to Elevate….jpg';
import l11 from '../img/Living room/Explore the 20 latest living room designs that….jpg';
import l12 from '../img/Living room/ModernFalseCeiling with wood accents and soft….jpg';
import l13 from '../img/Living room/This modern luxury TV wall commands attention with….jpg';
import l14 from '../img/Living room/859a2a68-ba86-441e-afda-a3822e114903.jpg';
import l15 from '../img/Living room/Embracing minimalism is key in modern living room….jpg';

const kitchenImages: string[] = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15
];
const wardrobeImages: string[] = [
  w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w15
];
const livingRoomImages: string[] = [
  l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15
];

// Helper to get visible images for infinite carousel
function getVisibleImages(images: string[], currentIndex: number, visibleCount: number) {
  const result = [];
  for (let i = 0; i < visibleCount; i++) {
    result.push(images[(currentIndex + i) % images.length]);
  }
  return result;
}

const useResponsiveCount = () => {
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
    }
    return 3;
  };
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  React.useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return visibleCount;
};

interface PremiumHeadingProps {
  main: string;
  highlight: string;
}
const PremiumHeading = ({ main, highlight }: PremiumHeadingProps) => (
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 tracking-tight animate-fadeInUp">
    <span className="text-[#1E293B]">{main} </span>
    <span className="text-[#D97706]">{highlight}</span>
  </h2>
);

const GallerySection = ({ title, description, images, overlayTitle, overlayDesc }: {
  title: string;
  description: string;
  images: string[];
  overlayTitle: string;
  overlayDesc: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = useResponsiveCount();
  const visibleImages = getVisibleImages(images, currentIndex, Math.min(visibleCount, images.length));
  const handlePrev = () => setCurrentIndex((prev) => (images.length + prev - 1) % images.length);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  // Split title into main and highlight (assume last word is 'Gallery')
  const words = title.trim().split(' ');
  const highlight = words.pop() || '';
  const main = words.join(' ');
  return (
    <div className="mb-20">
      <PremiumHeading main={main} highlight={highlight} />
      <p className="text-lg text-center text-[#1E293B] mb-10 max-w-2xl mx-auto animate-fadeInUp" style={{animationDelay: '0.2s'}}>
        {description}
      </p>
      <div className="relative flex items-center justify-center mb-8 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-xl hover:bg-[#fff7ed] transition-all duration-300 hover:scale-110 border border-[#f3f4f6]"
          aria-label="Previous"
          style={{ left: -18 }}
        >
          <span className="text-3xl text-[#D97706]">&#8592;</span>
        </button>
        <div className="flex gap-8 justify-center w-full px-12">
          {visibleImages.map((img, imgIdx) => (
            <div
              key={imgIdx}
              className="w-[340px] h-[260px] rounded-3xl overflow-hidden shadow-2xl bg-white flex-shrink-0 border-4 border-[#1E293B]/20 hover:scale-105 transition-transform duration-500 relative group"
              style={{ boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.13)' }}
            >
              <img
                src={img}
                alt={`${title} ${imgIdx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ objectPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#D97706]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <div className="text-white text-lg font-semibold drop-shadow-lg mb-2">{overlayTitle}</div>
                <div className="text-white text-sm font-light drop-shadow">{overlayDesc}</div>
              </div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#D97706]/20 rounded-full blur-2xl opacity-70 pointer-events-none"></div>
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-xl hover:bg-[#fff7ed] transition-all duration-300 hover:scale-110 border border-[#f3f4f6]"
          aria-label="Next"
          style={{ right: -18 }}
        >
          <span className="text-3xl text-[#D97706]">&#8594;</span>
        </button>
      </div>
      {/* Unique elegant divider: blurred glowing circle */}
      <div className="w-full flex justify-center my-8">
        <div className="w-16 h-4 rounded-full bg-[#D97706]/30 blur-md shadow-lg"></div>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff7ed] to-[#f3f4f6] py-12 px-2 sm:px-4 mt-24">
      <GallerySection
        title="Kitchen Gallery"
        description="Explore our most inspiring kitchen designs, blending elegance, innovation, and functionality. Swipe through to discover your dream kitchen."
        images={kitchenImages}
        overlayTitle="Premium Kitchen"
        overlayDesc="Modern | Elegant | Functional"
      />
      <GallerySection
        title="Wardrobe Gallery"
        description="Discover wardrobe designs that wow – from sleek modern to timeless classics, each crafted for style and smart storage."
        images={wardrobeImages}
        overlayTitle="Luxury Wardrobe"
        overlayDesc="Spacious | Stylish | Customizable"
      />
      <GallerySection
        title="Living Room Gallery"
        description="Step into our living room gallery, where comfort meets style. Discover artistic spaces designed for relaxation, entertainment, and modern living."
        images={livingRoomImages}
        overlayTitle="Designer Living Room"
        overlayDesc="Modern | Inviting | Artistic"
      />
    </div>
  );
};

export default Gallery; 