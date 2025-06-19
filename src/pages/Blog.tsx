import React from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../data/blogPosts';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';

const accent = '#D97706';
const accentDark = '#b45309';

const heroGradient = 'bg-gradient-to-br from-white via-gray-50 to-[#fff7ed]';

const categories = [
  'Living Room',
  'Vastu',
  'Color Trends',
  'Small Spaces',
  'Custom Furniture',
  'Bedroom',
  'Dining',
  'Kitchen',
  'Wardrobe',
  'Office',
];

const Blog = () => {
  const [featured, ...rest] = blogPosts;
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <SEO title="Blog" description="Read the latest articles and tips from Urban Interiors." />
      {/* Hero Section */}
      <div className={`relative h-[320px] md:h-[400px] flex items-center justify-center mb-10 font-sans overflow-hidden ${heroGradient}`}> 
        <div className="absolute inset-0 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <linearGradient id="blogHeroAccent" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fff7ed" />
                <stop offset="100%" stopColor="#D97706" stopOpacity="0.08" />
              </linearGradient>
            </defs>
            <rect width="1440" height="320" fill="url(#blogHeroAccent)" />
            <ellipse cx="1200" cy="80" rx="220" ry="80" fill="#D97706" fillOpacity="0.08" />
            <ellipse cx="200" cy="240" rx="180" ry="60" fill="#D97706" fillOpacity="0.10" />
          </svg>
        </div>
        <div className="relative z-10 text-center font-sans">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 drop-shadow-sm">Urban Interiors Blog</h1>
          <p className="text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto font-medium drop-shadow-sm">Inspiration, tips, and stories for premium living spaces.</p>
        </div>
      </div>

      {/* Categories Bar */}
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {categories.map((cat) => (
            <span key={cat} className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 font-medium text-sm shadow-sm bg-white hover:border-[#D97706] hover:text-[#D97706] transition-colors cursor-pointer">{cat}</span>
          ))}
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-10 mb-20">
        {/* Blog Grid */}
        <div className="flex-1">
          {/* Featured Post */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-xl border-2 border-[#fff7ed] hover:border-[#D97706] transition-all overflow-hidden group">
              <Link to={`/blog/${featured.slug}`} className="md:w-2/5 w-full h-64 md:h-auto block relative">
                <OptimizedImage
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#fff7ed]/80 via-transparent to-transparent" />
              </Link>
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div>
                  <Link to={`/blog/${featured.slug}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-[#D97706] mb-3">{featured.title}</h2>
                  </Link>
                  <p className="text-gray-700 text-lg mb-4">{featured.summary}</p>
                  <span className="text-sm text-gray-400">{featured.date}</span>
                </div>
                <div className="mt-6">
                  <Link
                    to={`/blog/${featured.slug}`}
                    className="inline-block text-white bg-[#D97706] hover:bg-[#b45309] font-semibold px-6 py-2 rounded-lg shadow transition-colors duration-300"
                  >
                    Read Featured Post &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {rest.map(post => (
              <div
                key={post.slug}
                className="flex flex-col bg-white rounded-2xl shadow-md border-2 border-[#fff7ed] group overflow-hidden hover:shadow-xl hover:border-[#D97706] transition-all duration-300"
              >
                <Link to={`/blog/${post.slug}`} className="w-full h-56 block overflow-hidden relative">
                  <OptimizedImage
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#fff7ed]/80 via-transparent to-transparent" />
                </Link>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <Link to={`/blog/${post.slug}`}>
                      <h4 className="text-xl font-semibold text-gray-900 group-hover:text-[#D97706] mb-2">{post.title}</h4>
                    </Link>
                    <p className="text-gray-600 mb-2">{post.summary}</p>
                    <span className="text-sm text-gray-400">{post.date}</span>
                  </div>
                  <div className="mt-4">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-block text-[#D97706] font-medium hover:underline"
                    >
                      Read More &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-80 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-md border-2 border-[#fff7ed] p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Posts</h3>
            <ul className="space-y-3">
              {blogPosts.slice(0, 4).map((post) => (
                <li key={post.slug}>
                  <Link to={`/blog/${post.slug}`} className="text-[#D97706] hover:underline font-medium">
                    {post.title}
                  </Link>
                  <div className="text-xs text-gray-400">{post.date}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-md border-2 border-[#fff7ed] p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
            <ul className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">{cat}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-[#D97706]/90 to-[#b45309]/90 py-16 px-4 rounded-t-3xl">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Inspired</h3>
          <p className="text-white/90 mb-8">Subscribe to our newsletter for the latest design tips, project showcases, and exclusive offers.</p>
          <form className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 rounded-lg border-0 focus:ring-2 focus:ring-[#b45309] w-full sm:w-auto text-gray-900"
            />
            <button
              type="submit"
              className="bg-white text-[#D97706] font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blog; 