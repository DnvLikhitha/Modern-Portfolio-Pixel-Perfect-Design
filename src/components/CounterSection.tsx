
import React, { useEffect, useState, useRef } from 'react';
import { Users, Award, Coffee, Code } from 'lucide-react';

const CounterSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ clients: 0, awards: 0, coffee: 0, projects: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const finalCounts = {
    clients: 150,
    awards: 25,
    coffee: 1200,
    projects: 300
  };

  const counters = [
    { key: 'clients', label: 'Happy Clients', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { key: 'awards', label: 'Awards Won', icon: Award, color: 'from-purple-500 to-pink-500' },
    { key: 'coffee', label: 'Cups of Coffee', icon: Coffee, color: 'from-yellow-500 to-orange-500' },
    { key: 'projects', label: 'Projects Done', icon: Code, color: 'from-green-500 to-teal-500' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const timer = setInterval(() => {
        setCounts(prev => {
          const newCounts = { ...prev };
          let allComplete = true;

          Object.keys(finalCounts).forEach(key => {
            const finalValue = finalCounts[key as keyof typeof finalCounts];
            const currentValue = prev[key as keyof typeof prev];
            const increment = Math.ceil(finalValue / steps);
            
            if (currentValue < finalValue) {
              newCounts[key as keyof typeof newCounts] = Math.min(currentValue + increment, finalValue);
              allComplete = false;
            }
          });

          if (allComplete) {
            clearInterval(timer);
          }

          return newCounts;
        });
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Journey in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Every milestone tells a story of dedication, creativity, and success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((counter, index) => {
            const Icon = counter.icon;
            const count = counts[counter.key as keyof typeof counts];
            
            return (
              <div 
                key={counter.key} 
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${counter.color} flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-2xl`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </div>
                
                <div className="text-5xl font-bold text-white mb-2 font-mono">
                  {count.toLocaleString()}
                  {counter.key === 'coffee' && count > 0 && '+'}
                </div>
                
                <div className="text-gray-300 text-lg font-medium">
                  {counter.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
