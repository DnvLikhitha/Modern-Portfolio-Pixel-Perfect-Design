
import React, { useState } from 'react';
import { Zap, Star, Heart, Sparkles } from 'lucide-react';

const StrikingEffect = () => {
  const [activeIcon, setActiveIcon] = useState<number | null>(null);

  const icons = [
    { Icon: Zap, color: 'text-yellow-400', bg: 'bg-yellow-400/20' },
    { Icon: Star, color: 'text-blue-400', bg: 'bg-blue-400/20' },
    { Icon: Heart, color: 'text-red-400', bg: 'bg-red-400/20' },
    { Icon: Sparkles, color: 'text-purple-400', bg: 'bg-purple-400/20' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-space font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Striking Interactive Effects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Hover over the icons to see magical transformations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {icons.map(({ Icon, color, bg }, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setActiveIcon(index)}
              onMouseLeave={() => setActiveIcon(null)}
            >
              <div className={`
                w-24 h-24 mx-auto rounded-2xl flex items-center justify-center
                transition-all duration-500 transform
                ${activeIcon === index ? 'scale-125 rotate-12' : 'scale-100 rotate-0'}
                ${bg} group-hover:shadow-2xl
                ${activeIcon === index ? 'animate-pulse-glow' : ''}
              `}>
                <Icon className={`w-12 h-12 ${color} transition-all duration-300 ${
                  activeIcon === index ? 'scale-110' : 'scale-100'
                }`} />
              </div>
              
              {/* Striking Effect Overlay */}
              {activeIcon === index && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-transparent to-yellow-400 animate-pulse"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-t from-transparent to-yellow-400 animate-pulse"></div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 w-8 bg-gradient-to-r from-transparent to-yellow-400 animate-pulse"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-1 w-8 bg-gradient-to-l from-transparent to-yellow-400 animate-pulse"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Central Striking Effect */}
        <div className="mt-16 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center animate-pulse-glow">
              <Sparkles className="w-16 h-16 text-white animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrikingEffect;
