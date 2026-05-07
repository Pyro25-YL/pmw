import React from 'react';
import { PILLARS, VISION_MISSION } from '../data';

const About: React.FC = () => (
  <section id="about">
    <div className="container">
      <div className="about-grid">

        {/* Left: Text + Pillars */}
        <div className="about-text reveal">
          <span className="badge badge-purple">✦ About Us</span>
          <h2>We Build <span className="grad-text">Intelligent</span> Digital Systems</h2>
          <p>
            NexaMind Solutions adalah perusahaan IT Consultant yang berfokus pada inovasi teknologi
            berbasis AI untuk membantu bisnis dan UMKM Indonesia bertransformasi digital secara
            efektif dan efisien.
          </p>
          <p>
            Kami menghadirkan solusi komprehensif mulai dari pengembangan sistem AI, website,
            chatbot cerdas, hingga konsultasi transformasi digital end-to-end.
          </p>
          <div className="about-pillars">
            {PILLARS.map((p) => (
              <div className="pillar" key={p.label}>
                <span className="pillar-icon">{p.icon}</span>
                <span className="pillar-text">{p.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Vision/Mission */}
        <div className="about-vision reveal" style={{ transitionDelay: '0.2s' }}>
          {VISION_MISSION.map((item) => (
            <div className="vm-item" key={item.label}>
              <div className="vm-label" style={{ color: item.color }}>
                <span className="vm-line" style={{ background: item.lineColor }} />
                {item.label}
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  </section>
);

export default About;
