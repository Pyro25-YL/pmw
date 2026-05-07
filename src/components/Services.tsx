import React from 'react';
import { SERVICES } from '../data';
import type { Service } from '../types';

const ServiceCard: React.FC<Service & { index: number }> = ({
  icon, name, desc, gradientFrom, gradientTo, index,
}) => (
  <div className="service-card reveal" style={{ ['--i' as string]: index }}>
    <div
      className="svc-icon"
      style={{ background: `linear-gradient(135deg,${gradientFrom},${gradientTo})` }}
    >
      {icon}
    </div>
    <div className="svc-name">{name}</div>
    <div className="svc-desc">{desc}</div>
  </div>
);

const Services: React.FC = () => (
  <section id="services">
    <div className="container">
      <div className="section-header reveal">
        <span className="badge">🛠 Services</span>
        <h2>Layanan <span className="grad-text">Lengkap</span> Kami</h2>
        <p>Dari ideasi hingga deployment, kami siap menjadi mitra teknologi terpercaya Anda</p>
      </div>
      <div className="services-grid">
        {SERVICES.map((svc, i) => (
          <ServiceCard key={svc.name} {...svc} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Services;
