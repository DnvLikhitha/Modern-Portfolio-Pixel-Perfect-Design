
import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop',
      title: 'Analytics Dashboard',
      category: 'Web Design'
    },
    {
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop',
      title: 'Data Visualization',
      category: 'UI/UX'
    },
    {
      src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&h=400&fit=crop',
      title: 'Mobile App Design',
      category: 'Mobile'
    },
    {
      src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=400&fit=crop',
      title: 'E-commerce Platform',
      category: 'Web Development'
    },
    {
      src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=400&fit=crop',
      title: 'Social Media App',
      category: 'Mobile'
    },
    {
      src: 'https://images.unsplash.com/photo-1572177812156-58036aae439c?w=500&h=400&fit=crop',
      title: 'Portfolio Website',
      category: 'Web Design'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Work Gallery
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of stunning projects and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-500"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-w-16 aspect-h-12 relative">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-300">{image.category}</p>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-4xl max-h-[90vh] p-4">
            <img 
              src={selectedImage} 
              alt="Gallery item"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageGallery;
