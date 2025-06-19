
import { useEffect, useState } from 'react';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <ParallaxSection />
          <Services />
          <FeatureCards />
          <CarouselSection />
          <CustomerSection />
          <StrikingEffect />
          <RippleDemo />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <ScrollPopup />
      </div>
    </ThemeProvider>
  );
};

export default Index;
