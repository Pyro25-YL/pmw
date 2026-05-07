import React from 'react';
import { PORTFOLIO_ITEMS } from '../data';

const Portfolio: React.FC = () => (
  <section id="portfolio">
    <div className="container">
      <div className="section-header reveal">
        <span className="badge">📁 Portfolio</span>
        <h2>Karya <span className="grad-text">Terbaik</span> Kami</h2>
        <p>Koleksi proyek yang telah berhasil kami deliver untuk berbagai klien</p>
      </div>
      <div className="portfolio-grid">
        {PORTFOLIO_ITEMS.map((item) => (
          <div
            className="porto-card reveal"
            key={item.name}
            style={item.delay ? { transitionDelay: item.delay } : undefined}
          >
            <div
              className="porto-thumb"
              style={{ background: `linear-gradient(135deg,${item.gradientFrom},${item.gradientTo})` }}
            >
              {item.icon}
            </div>
            <div className="porto-info">
              <div className="porto-name">{item.name}</div>
              <div className="porto-tag">{item.tags}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
