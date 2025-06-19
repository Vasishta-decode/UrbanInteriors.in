import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Process from './pages/Process';
import Contact from './pages/Contact';
import FloatingButtons from './components/FloatingButtons';
import SEO from './components/SEO';
import StructuredData from './components/StructuredData';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Videos from './pages/Videos';
import Gallery from './pages/Gallery';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white overflow-x-hidden">
          <SEO 
            title="Home"
            description="Transform your space with Urban Interiors - Award-winning premium interior design services for residential, commercial, and hospitality projects."
            keywords="interior design, home decor, commercial interiors, residential design, luxury interiors"
          />
          <StructuredData 
            type="InteriorDesigner"
            data={{
              areaServed: "Your Service Area",
              address: {
                streetAddress: "Your Street Address",
                city: "Your City",
                state: "Your State",
                postalCode: "Your Postal Code",
                country: "Your Country"
              },
              phone: "Your Phone Number"
            }}
          />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/videos" element={<Videos />} />
          </Routes>
          <Footer />
          <FloatingButtons />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;