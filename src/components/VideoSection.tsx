import React from 'react';

const subVideos = [
  {
    url: 'https://www.youtube.com/embed/vQ3aAjD-cos',
    title: 'Urban Interiors - Factory Process 1',
  },
  {
    url: 'https://www.youtube.com/embed/XccOanhzf5E',
    title: 'Urban Interiors - Factory Process 2',
  },
  {
    url: 'https://www.youtube.com/embed/sTzY8vn90vc',
    title: 'Urban Interiors - Factory Process 3',
  },
  {
    url: 'https://www.youtube.com/embed/MRgZ9wa21zo',
    title: 'Urban Interiors - Factory Process 4',
  },
];

const VideoSection = () => {
  return (
    <section className="py-16 mt-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold font-sans text-gray-900 mb-4 mt-4 font-sans">
          <span className="text-gray-900 font-sans">Inside Our </span>
          <span className="text-[#D97706] font-sans">Factory</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto font-sans">
          Go behind the scenes at our state-of-the-art factory, where precision and craftsmanship bring your dream interiors to life.
        </p>
        <div className="w-full h-64 md:h-[400px] rounded-2xl overflow-hidden shadow-lg border-2 border-[#fff7ed] mx-auto mb-12">
          <iframe
            src="https://www.youtube.com/embed/3QfRF-2UOLs"
            title="Urban Interiors Factory Tour"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            style={{ minHeight: '100%' }}
          />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-8 font-sans">
        Real Stories.<span className="text-[#D97706]"> Real Spaces</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {subVideos.map((video, idx) => (
            <div key={idx} className="w-full h-56 md:h-64 rounded-2xl overflow-hidden shadow-md border-2 border-[#fff7ed] mx-auto">
              <iframe
                src={video.url}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                style={{ minHeight: '100%' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
