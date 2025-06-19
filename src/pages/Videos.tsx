import React from 'react';
import SEO from '../components/SEO';

const videos = [
  {
    title: 'Modern Living Room Makeover',
    url: 'https://www.youtube.com/embed/VIDEO_ID_1',
  },
  {
    title: 'Kitchen Transformation Tips',
    url: 'https://www.youtube.com/embed/VIDEO_ID_2',
  },
  {
    title: 'Wardrobe Design Ideas',
    url: 'https://www.youtube.com/embed/VIDEO_ID_3',
  },
];

const Videos = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <SEO title="Videos" description="Watch our latest interior design videos and transformations." />
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Videos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-100 p-4">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-56 rounded-lg"
                />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">{video.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos; 