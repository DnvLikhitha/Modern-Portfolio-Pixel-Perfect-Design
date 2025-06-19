
import { Monitor, Smartphone, Database, Zap, Shield, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.',
      features: ['React & Next.js', 'TypeScript', 'Responsive Design', 'SEO Optimization'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['React Native', 'Flutter', 'iOS & Android', 'App Store Deployment'],
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Scalable server-side solutions and APIs that power your applications reliably.',
      features: ['Node.js & Python', 'Database Design', 'API Development', 'Cloud Integration'],
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed up your applications and improve user satisfaction with expert optimization.',
      features: ['Code Splitting', 'Image Optimization', 'Caching Strategies', 'Core Web Vitals'],
    },
    {
      icon: Shield,
      title: 'Security & Testing',
      description: 'Comprehensive security audits and testing to ensure your applications are bulletproof.',
      features: ['Security Audits', 'Automated Testing', 'CI/CD Pipelines', 'Quality Assurance'],
    },
    {
      icon: Globe,
      title: 'DevOps & Deployment',
      description: 'Streamlined deployment processes and infrastructure management for scalable growth.',
      features: ['AWS & Vercel', 'Docker & Kubernetes', 'Monitoring', 'Auto Scaling'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-space font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-space font-semibold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
