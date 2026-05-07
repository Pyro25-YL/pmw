import React from 'react';
import { TESTIMONIALS } from '../data';

const Testimonials: React.FC = () => (
  <section id="testimonials">
    <div className="container">
      <div className="section-header reveal">
        <span className="badge badge-purple">⭐ Testimonials</span>
        <h2>Apa Kata <span className="grad-text">Klien</span> Kami</h2>
        <p>Kepercayaan klien adalah prioritas utama kami</p>
      </div>
      <div className="testi-grid">
        {TESTIMONIALS.map((t) => (
          <div
            className="testi-card reveal"
            key={t.name}
            style={t.delay ? { transitionDelay: t.delay } : undefined}
          >
            <div className="stars">★★★★★</div>
            <p className="testi-text">{t.text}</p>
            <div className="testi-author">
              <div className="testi-avatar" style={{ background: t.avatarGradient }}>
                {t.avatarLetter}
              </div>
              <div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
