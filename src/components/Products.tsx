import React, { useState } from 'react';
import { PRODUCTS } from '../data';
import type { Product, ProductTab } from '../types';
import { Link } from '../router';

// ─── Mockup visuals per product ───
const FinanceMockup: React.FC = () => (
  <div className="mock-body">
    <div className="mini-cards">
      <div className="mini-card"><div className="mini-card-t">Pemasukan</div><div className="mini-card-v" style={{ color: 'var(--green)' }}>Rp 87.4M</div></div>
      <div className="mini-card"><div className="mini-card-t">Pengeluaran</div><div className="mini-card-v" style={{ color: 'var(--red)' }}>Rp 32.1M</div></div>
      <div className="mini-card"><div className="mini-card-t">Profit Bersih</div><div className="mini-card-v" style={{ color: 'var(--cyan)' }}>Rp 55.3M</div></div>
      <div className="mini-card"><div className="mini-card-t">ROI</div><div className="mini-card-v" style={{ color: 'var(--purple2)' }}>172%</div></div>
    </div>
    <div className="mini-chart">
      <div className="chart-label">Cashflow 6 Bulan</div>
      <svg className="line-chart-svg" viewBox="0 0 280 70">
        <defs>
          <linearGradient id="lg1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" points="10,55 56,40 102,45 148,25 194,30 240,15 270,10" />
        <polygon fill="url(#lg1)" points="10,55 56,40 102,45 148,25 194,30 240,15 270,10 270,70 10,70" />
      </svg>
    </div>
    <div style={{ marginTop: '12px', background: 'linear-gradient(135deg,rgba(0,212,255,0.08),rgba(124,58,237,0.08))', border: '1px solid rgba(0,212,255,0.2)', borderRadius: '10px', padding: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
      <span style={{ fontSize: '20px' }}>🤖</span>
      <span style={{ fontSize: '12px', color: 'var(--text2)' }}>
        <b style={{ color: 'var(--cyan)' }}>AI Insight:</b> Profit meningkat 23% bulan ini. Rekomendasi: investasi di Q4.
      </span>
    </div>
  </div>
);

const InvestMockup: React.FC = () => (
  <div className="mock-body">
    <div className="mini-cards">
      <div className="mini-card"><div className="mini-card-t">Modal Awal</div><div className="mini-card-v">Rp 50M</div></div>
      <div className="mini-card"><div className="mini-card-t">Return/Tahun</div><div className="mini-card-v" style={{ color: 'var(--green)' }}>+18.5%</div></div>
      <div className="mini-card"><div className="mini-card-t">Proyeksi 5T</div><div className="mini-card-v" style={{ color: 'var(--cyan)' }}>Rp 115M</div></div>
      <div className="mini-card"><div className="mini-card-t">Risk Level</div><div className="mini-card-v" style={{ color: 'var(--orange)' }}>Medium</div></div>
    </div>
    <div className="mini-chart">
      <div className="chart-label">Proyeksi Investasi 5 Tahun</div>
      <svg className="line-chart-svg" viewBox="0 0 280 70">
        <defs>
          <linearGradient id="lg2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" points="10,60 66,52 122,42 178,28 234,18 270,10" />
        <polygon fill="url(#lg2)" points="10,60 66,52 122,42 178,28 234,18 270,10 270,70 10,70" />
      </svg>
    </div>
  </div>
);

const PosMockup: React.FC = () => (
  <div className="mock-body">
    <div style={{ background: 'var(--bg2)', borderRadius: '10px', padding: '14px', border: '1px solid var(--border)', marginBottom: '10px' }}>
      <div style={{ fontSize: '10px', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Transaksi Aktif</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {[['Kopi Susu Gula Aren', 'Rp 28.000'], ['Nasi Goreng Spesial', 'Rp 45.000'], ['Es Teh Manis (x2)', 'Rp 16.000']].map(([name, price]) => (
          <div key={name} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
            <span style={{ color: 'var(--text2)' }}>{name}</span>
            <span style={{ color: 'var(--cyan)' }}>{price}</span>
          </div>
        ))}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '8px', display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontFamily: "'Syne',sans-serif", fontWeight: 700 }}>
          <span>Total</span><span style={{ color: 'var(--green)' }}>Rp 89.000</span>
        </div>
      </div>
    </div>
    <div className="mini-cards">
      <div className="mini-card"><div className="mini-card-t">Transaksi Hari Ini</div><div className="mini-card-v" style={{ color: 'var(--cyan)' }}>247</div></div>
      <div className="mini-card"><div className="mini-card-t">Omset Hari Ini</div><div className="mini-card-v" style={{ color: 'var(--green)' }}>Rp 14.2M</div></div>
    </div>
  </div>
);

const MOCKUPS: Record<ProductTab, React.FC> = {
  finance: FinanceMockup,
  invest: InvestMockup,
  pos: PosMockup,
};

// ─── Product Panel ───
const ProductPanel: React.FC<Product> = (product) => {
  const MockupContent = MOCKUPS[product.id];
  const badgeClass = product.badgeVariant === 'purple' ? 'badge badge-purple'
    : product.badgeVariant === 'green' ? 'badge badge-green' : 'badge';

  return (
    <div className="product-panel active">
      <div className="product-layout">
        <div className="product-info reveal">
          <span className={badgeClass}>{product.badge}</span>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div className="feat-grid">
            {product.features.map((f) => (
              <div className="feat-item" key={f.text}>
                <span className="feat-check">✓</span>{f.text}
              </div>
            ))}
          </div>
          {product.id === 'pos' && (
            <div style={{ marginBottom: '16px' }}>
              <span className="badge badge-green">✦ Customizable for Your Business</span>
            </div>
          )}
          <div className="pricing-row">
            {product.pricing.map((pc) => (
              <div className={`price-card${pc.featured ? ' featured' : ''}`} key={pc.plan}>
                <div className="price-plan">{pc.plan}</div>
                <div className="price-val" style={{ color: pc.color, fontSize: pc.value === 'Custom' ? '14px' : undefined }}>{pc.value}</div>
                <div className="price-period">{pc.period}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '20px' }}>
            <Link to="/contact" className="btn btn-primary">Coba Sekarang →</Link>
          </div>
        </div>

        <div className="product-mockup reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="mock-topbar">
            <div className="mock-dots"><span /><span /><span /></div>
            <span className="mock-url">{product.mockUrl}</span>
          </div>
          <MockupContent />
        </div>
      </div>
    </div>
  );
};

// ─── Products Section ───
const Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProductTab>('finance');
  const activeProduct = PRODUCTS.find((p) => p.id === activeTab)!;

  return (
    <section id="products">
      <div className="container">
        <div className="section-header reveal">
          <span className="badge badge-green">🚀 Featured Products</span>
          <h2>Produk <span className="grad-text">SaaS</span> Kami</h2>
          <p>Solusi perangkat lunak siap pakai yang dapat disesuaikan dengan kebutuhan bisnis Anda</p>
        </div>

        <div className="products-tabs">
          {PRODUCTS.map((p) => (
            <button
              key={p.id}
              className={`tab-btn${activeTab === p.id ? ' active' : ''}`}
              onClick={() => setActiveTab(p.id)}
            >
              {p.tabIcon} {p.tabLabel}
            </button>
          ))}
        </div>

        <ProductPanel {...activeProduct} />
      </div>
    </section>
  );
};

export default Products;
