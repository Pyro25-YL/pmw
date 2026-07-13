import React, { useEffect } from 'react';
import { HERO_STATS, HERO_BAR_HEIGHTS } from '../data';
import { Link } from '../router';

const HeroDashboard: React.FC = () => (
  <div className="hero-visual-panel">
    <div style={{ position: 'relative' }}>
      <div className="dash-mock">
        <div className="dash-bar">
          <div className="dash-dots">
            <span /><span /><span />
          </div>
          <span className="dash-title-bar">NexaFinance — Dashboard</span>
        </div>
        <div className="dash-body">
          <div className="dash-cards">
            <div className="dash-card">
              <div className="dash-card-label">Revenue</div>
              <div className="dash-card-val" style={{ color: 'var(--green)' }}>Rp 142M</div>
            </div>
            <div className="dash-card">
              <div className="dash-card-label">Expense</div>
              <div className="dash-card-val" style={{ color: 'var(--orange)' }}>Rp 48M</div>
            </div>
            <div className="dash-card">
              <div className="dash-card-label">Profit</div>
              <div className="dash-card-val" style={{ color: 'var(--cyan)' }}>Rp 94M</div>
            </div>
          </div>
          <div className="dash-chart">
            <div className="chart-label">Monthly Cashflow</div>
            <div className="chart-bars" id="hero-bars" />
          </div>
        </div>
      </div>
      <div className="ai-badge-float">
        <div className="ai-dot" />
        <span style={{ fontSize: '12px', fontFamily: "'Syne',sans-serif", fontWeight: 700 }}>
          AI Insight Active
        </span>
      </div>
    </div>
  </div>
);

const Hero: React.FC = () => {
  useEffect(() => {
    const container = document.getElementById('hero-bars');
    if (!container) return;
    HERO_BAR_HEIGHTS.forEach((h, i) => {
      const bar = document.createElement('div');
      bar.className = 'chart-bar';
      bar.style.height = `${h}%`;
      bar.style.animationDelay = `${i * 0.1}s`;
      container.appendChild(bar);
    });
    return () => { if (container) container.innerHTML = ''; };
  }, []);

  return (
    <section id="hero">
      <div className="glow-orb" style={{ width: '500px', height: '500px', background: 'var(--blue)', top: '-100px', left: '-100px' }} />
      <div className="glow-orb" style={{ width: '400px', height: '400px', background: 'var(--purple)', top: '200px', right: '100px' }} />
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="badge">🤖 AI-Powered IT Solutions</span>
          </div>
          <h1 className="hero-title">
            <span className="grad-text-warm">NexaMind</span><br />
            Solutions
          </h1>
          <p className="hero-sub">
            Solusi terintegrasi berbasis AI, algoritma, website, chatbot, dan sistem digital
            untuk transformasi bisnis modern Indonesia.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">🚀 Konsultasi Gratis</Link>
            <Link to="/products" className="btn btn-outline">⚡ Lihat Produk</Link>
          </div>
          <div className="hero-stats">
            {HERO_STATS.map((s) => (
              <div className="stat-item" key={s.label}>
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <HeroDashboard />
      </div>
    </section>
  );
};

export default Hero;
