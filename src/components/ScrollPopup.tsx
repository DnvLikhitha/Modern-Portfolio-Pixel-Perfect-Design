
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScrollPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = window.innerHeight * 0.7;
      
      if (scrolled > threshold && !hasShown) {
        setShowPopup(true);
        setHasShown(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShown]);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md mx-4 shadow-2xl transform animate-scale-in">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-space font-bold text-gray-900 dark:text-white">
            🎉 Welcome!
          </h3>
          <button
            onClick={() => setShowPopup(false)}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Thanks for scrolling! Discover amazing features as you explore our website.
        </p>
        <Button
          onClick={() => setShowPopup(false)}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          Continue Exploring
        </Button>
      </div>
    </div>
  );
};

export default ScrollPopup;
