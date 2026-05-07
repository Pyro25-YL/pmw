import React from 'react';
import { PRICING_PLANS } from '../data';

const Pricing: React.FC = () => (
  <section id="pricing">
    <div className="container">
      <div className="section-header reveal">
        <span className="badge">💎 Pricing</span>
        <h2>Paket <span className="grad-text">Harga</span> Transparan</h2>
        <p>Pilih paket yang sesuai kebutuhan bisnis Anda. Tanpa biaya tersembunyi.</p>
      </div>
      <div className="pricing-grid">
        {PRICING_PLANS.map((plan) => (
          <div
            className={`pricing-card reveal${plan.popular ? ' popular' : ''}`}
            key={plan.name}
            style={plan.delay ? { transitionDelay: plan.delay } : undefined}
          >
            {plan.popular && <div className="popular-badge">Popular</div>}
            <div className="pc-name">{plan.name}</div>
            <div className="pc-price">{plan.price}</div>
            <div className="pc-desc">{plan.desc}</div>
            <ul className="pc-features">
              {plan.features.map((f) => (
                <li key={f.text}>
                  <span className={f.included ? 'feat-ok' : 'feat-no'}>
                    {f.included ? '✓' : '–'}
                  </span>
                  {f.text}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`btn ${plan.ctaVariant === 'cyan' ? 'btn-cyan' : 'btn-outline'}`}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
