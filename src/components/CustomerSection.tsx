
import React from 'react';
import { Star, Users, Trophy, Heart } from 'lucide-react';

const CustomerSection = () => {
  const stats = [
    {
      icon: Users,
      number: '10,000+',
      label: 'Happy Customers',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Star,
      number: '4.9/5',
      label: 'Average Rating',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Trophy,
      number: '50+',
      label: 'Awards Won',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Heart,
      number: '99%',
      label: 'Satisfaction Rate',
      color: 'from-red-500 to-pink-500',
    },
  ];

  const customers = [
    {
      name: 'TechCorp Solutions',
      logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop',
      industry: 'Technology',
    },
    {
      name: 'InnovateLab',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop',
      industry: 'Research',
    },
    {
      name: 'StartupVenture',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop',
      industry: 'Startup',
    },
    {
      name: 'GlobalTech',
      logo: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=200&h=100&fit=crop',
      industry: 'Enterprise',
    },
    {
      name: 'CreativeStudio',
      logo: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&h=100&fit=crop',
      industry: 'Design',
    },
    {
      name: 'FutureTech',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop',
      industry: 'Innovation',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-space font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their digital transformation
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-space font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Customer Logos */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-space font-semibold text-gray-900 dark:text-white mb-2">
              Our Valued Partners
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Companies that have transformed their business with us
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {customers.map((customer, index) => (
              <div
                key={customer.name}
                className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-4 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                <div className="aspect-video relative overflow-hidden rounded-lg mb-3">
                  <img
                    src={customer.logo}
                    alt={customer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">
                  {customer.name}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {customer.industry}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-space font-bold mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Let's create something amazing together
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;
