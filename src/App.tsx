import React, { useEffect } from 'react';

import Particles from './components/Particles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Faq from './components/Faq';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const Divider: React.FC = () => (
  <div className="section-divider" />
);

const App: React.FC = () => {
  // Intersection observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Particles />
      <Navbar />

      <Hero />
      <Divider />

      <About />
      <Divider />

      <Services />
      <Divider />

      <Products />
      <Divider />

      <Portfolio />
      <Divider />

      <Testimonials />
      <Divider />

      <Pricing />
      <Divider />

      <Blog />
      <Divider />

      <Faq />

      <Newsletter />
      <Divider />

      <Contact />

      <Footer />

      {/* Floating buttons */}
      <a href="https://wa.me/6281234567890" className="wa-float" title="Chat WhatsApp">
        💬
      </a>
      <ChatWidget />
    </>
  );
};

export default App;
