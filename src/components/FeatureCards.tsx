
import React from 'react';
import { Monitor, Smartphone, Zap, Shield, Globe, Database } from 'lucide-react';
import RippleCard from './RippleCard';

const FeatureCards = () => {
  const features = [
    {
      icon: Monitor,
      title: 'Responsive Design',
      description: 'Perfect display on all devices and screen sizes',
      color: 'from-blue-500 to-cyan-500',
      rippleColor: 'rgba(59, 130, 246, 0.4)',
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Optimized for mobile experience from the ground up',
      color: 'from-purple-500 to-pink-500',
      rippleColor: 'rgba(147, 51, 234, 0.4)',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance for instant loading',
      color: 'from-yellow-500 to-orange-500',
      rippleColor: 'rgba(245, 158, 11, 0.4)',
    },
    {
      icon: Shield,
      title: 'Secure & Safe',
      description: 'Built with security best practices in mind',
      color: 'from-green-500 to-emerald-500',
      rippleColor: 'rgba(34, 197, 94, 0.4)',
    },
    {
      icon: Globe,
      title: 'Global Ready',
      description: 'Multi-language support and worldwide accessibility',
      color: 'from-indigo-500 to-blue-500',
      rippleColor: 'rgba(99, 102, 241, 0.4)',
    },
    {
      icon: Database,
      title: 'Scalable',
      description: 'Built to grow with your business needs',
      color: 'from-red-500 to-pink-500',
      rippleColor: 'rgba(239, 68, 68, 0.4)',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-space font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Feature Cards
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Interactive cards with ripple effects showcasing our key features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <RippleCard
                key={feature.title}
                rippleColor={feature.rippleColor}
                className="transform hover:scale-105 transition-all duration-300"
                onClick={() => console.log(`${feature.title} clicked`)}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-space font-semibold mb-3 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </RippleCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
