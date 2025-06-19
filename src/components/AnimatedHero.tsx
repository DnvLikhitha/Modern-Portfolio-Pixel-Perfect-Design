
import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AnimatedHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div 
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500/20 rounded-full filter blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white animate-slide-in-left">
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-gray-300">Trusted by 10,000+ users</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Innovation
              </span>
              <br />
              Meets Design
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
              Transform your digital presence with cutting-edge solutions that blend creativity with technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 group">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Content - 3D Card */}
          <div className="relative animate-slide-in-right">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative bg-gray-900 rounded-2xl p-8 transform transition-all duration-300 group-hover:scale-105">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-24 rounded-lg animate-pulse"></div>
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 h-24 rounded-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="bg-gradient-to-br from-pink-500 to-red-600 h-24 rounded-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="bg-gradient-to-br from-green-500 to-blue-600 h-24 rounded-lg animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Creative Dashboard</h3>
                  <p className="text-gray-400">Real-time analytics & insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHero;
