import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Newsletter from '../components/Newsletter';
import { Link } from '../router';

const Divider: React.FC = () => <div className="section-divider" />;

const EXPLORE_LINKS = [
  { to: '/services', icon: '⚙️', title: 'Services', desc: 'AI, chatbot, website, mobile app & lainnya' },
  { to: '/products', icon: '🚀', title: 'Products', desc: 'NexaFinance, NexaInvest, NexaPOS' },
  { to: '/portfolio', icon: '📁', title: 'Portfolio', desc: 'Proyek & testimoni klien kami' },
  { to: '/pricing', icon: '💎', title: 'Pricing', desc: 'Paket harga transparan' },
  { to: '/blog', icon: '📝', title: 'Blog', desc: 'Insight teknologi terbaru' },
  { to: '/faq', icon: '❓', title: 'FAQ', desc: 'Pertanyaan yang sering diajukan' },
];

const Explore: React.FC = () => (
  <section id="explore">
    <div className="container">
      <div className="section-header reveal">
        <span className="badge">🧭 Explore</span>
        <h2>Jelajahi <span className="grad-text">NexaMind</span> Lebih Lanjut</h2>
        <p>Semua informasi lengkap tentang kami ada di halaman-halaman berikut</p>
      </div>
      <div className="portfolio-grid">
        {EXPLORE_LINKS.map((item) => (
          <Link
            to={item.to}
            key={item.to}
            className="porto-card reveal"
            style={{ display: 'block', textDecoration: 'none' }}
          >
            <div
              className="porto-thumb"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '32px', background: 'rgba(0,212,255,0.08)',
              }}
            >
              {item.icon}
            </div>
            <div className="svc-name" style={{ marginTop: '14px' }}>{item.title}</div>
            <div className="svc-desc">{item.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const Home: React.FC = () => (
  <>
    <Hero />
    <Divider />
    <About />
    <Divider />
    <Explore />
    <Divider />
    <Newsletter />
  </>
);

export default Home;
