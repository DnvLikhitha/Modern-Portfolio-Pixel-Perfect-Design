
import React, { useEffect, useState } from 'react';

const ParallaxSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Layer - moves slower */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      
      {/* Floating Elements */}
      <div 
        className="absolute top-1/4 left-1/4 w-20 h-20 bg-blue-400/30 rounded-full blur-sm"
        style={{ transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)` }}
      />
      <div 
        className="absolute top-1/3 right-1/3 w-16 h-16 bg-purple-400/30 rounded-full blur-sm"
        style={{ transform: `translateY(${scrollY * 0.4}px) rotate(${-scrollY * 0.1}deg)` }}
      />
      <div 
        className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-pink-400/30 rounded-full blur-sm"
        style={{ transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.15}deg)` }}
      />

      {/* Content Layer */}
      <div 
        className="relative z-10 flex items-center justify-center h-full text-center"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-space font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Parallax Magic
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Experience smooth parallax scrolling with floating elements
          </p>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />
    </section>
  );
};

export default ParallaxSection;
