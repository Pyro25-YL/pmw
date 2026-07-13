import React from 'react';
import { Link } from '../router';

const Footer: React.FC = () => (
  <footer>
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo" style={{ fontSize: '18px' }}>
            <div className="logo-icon" style={{ width: '32px', height: '32px', fontSize: '16px' }}>⚡</div>
            Nexa<span>Mind</span>
          </Link>
          <p>Your One Stop IT Solutions. Solusi teknologi AI terintegrasi untuk transformasi bisnis digital Indonesia.</p>
          <div className="footer-social">
            {['📸', '💼', '🐦', '💬'].map((icon, i) => (
              <a href="#" className="social-btn" key={i}>{icon}</a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>Layanan</h4>
          <ul>
            {['AI Development', 'Smart Chatbot', 'Website Dev', 'Mobile App', 'UI/UX Design'].map((item) => (
              <li key={item}><Link to="/services">{item}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Produk</h4>
          <ul>
            {['NexaFinance', 'NexaInvest', 'NexaPOS', 'Enterprise'].map((item) => (
              <li key={item}><Link to="/products">{item}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Perusahaan</h4>
          <ul>
            {[
              { label: 'About Us', to: '/' },
              { label: 'Blog', to: '/blog' },
              { label: 'Portfolio', to: '/portfolio' },
              { label: 'Karir', to: '/contact' },
              { label: 'Kontak', to: '/contact' },
            ].map((item) => (
              <li key={item.label}><Link to={item.to}>{item.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 NexaMind Solutions. All rights reserved.</p>
        <p style={{ color: 'var(--text3)' }}>Privacy Policy · Terms of Service</p>
      </div>
    </div>
  </footer>
);

export default Footer;
