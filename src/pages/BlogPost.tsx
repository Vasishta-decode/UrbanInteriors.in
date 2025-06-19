import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogPosts from '../data/blogPosts';
import SEO from '../components/SEO';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-12 bg-gray-50 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-[#D97706] hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <SEO title={post.title} description={post.summary} />
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>
        <div className="text-sm text-gray-400 mb-8">{post.date}</div>
        <div className="prose prose-lg max-w-none text-gray-800" dangerouslySetInnerHTML={{ __html: post.content }} />
        <Link to="/blog" className="inline-block mt-8 text-[#D97706] hover:underline">← Back to Blog</Link>
      </div>
    </div>
  );
};

export default BlogPost; 