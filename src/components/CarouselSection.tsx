
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const CarouselSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612c9c0?w=400&h=400&fit=crop&crop=face',
      content: 'The attention to detail and innovative features exceeded our expectations. Truly exceptional work!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager, InnovateCorp',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      content: 'Outstanding user experience and pixel-perfect design. The team delivered beyond what we imagined.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Designer, CreativeStudio',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      content: 'Beautiful animations and smooth interactions. The perfect blend of creativity and functionality.',
      rating: 5,
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Founder, StartupLab',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      content: 'Responsive design that works flawlessly across all devices. Highly recommended for any project!',
      rating: 5,
    },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      description: 'Modern e-commerce solution with advanced features',
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      description: 'Secure and user-friendly banking application',
    },
    {
      id: 3,
      title: 'Dashboard Analytics',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      description: 'Beautiful data visualization dashboard',
    },
    {
      id: 4,
      title: 'Social Media Platform',
      category: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&h=600&fit=crop',
      description: 'Complete social networking solution',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Carousel */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-space font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Client Testimonials
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              What our clients say about our work
            </p>
          </div>

          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2">
                  <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <Quote className="w-8 h-8 text-blue-500 mb-4" />
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover mr-4"
                          />
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              {testimonial.name}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Portfolio Carousel */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-space font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Discover our latest work and achievements
            </p>
          </div>

          <Carousel className="max-w-6xl mx-auto">
            <CarouselContent>
              {portfolioItems.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-space font-semibold mb-2 text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
