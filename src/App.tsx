import React, { useEffect } from 'react';

import Particles from './components/Particles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import { useRouter } from './router';
import {
  Home,
  ServicesPage,
  ProductsPage,
  PortfolioPage,
  PricingPage,
  BlogPage,
  FaqPage,
  ContactPage,
} from './pages';

const ROUTES: Record<string, React.FC> = {
  '/': Home,
  '/services': ServicesPage,
  '/products': ProductsPage,
  '/portfolio': PortfolioPage,
  '/pricing': PricingPage,
  '/blog': BlogPage,
  '/faq': FaqPage,
  '/contact': ContactPage,
};

const App: React.FC = () => {
  const { path } = useRouter();
  const PageComponent = ROUTES[path] ?? Home;

  // Intersection observer for reveal animations — re-run whenever the page changes
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [path]);

  return (
    <>
      <Particles />
      <Navbar />

      <PageComponent />

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
