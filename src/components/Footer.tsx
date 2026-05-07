import React from 'react';

const Footer: React.FC = () => (
  <footer>
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#" className="logo" style={{ fontSize: '18px' }}>
            <div className="logo-icon" style={{ width: '32px', height: '32px', fontSize: '16px' }}>⚡</div>
            Nexa<span>Mind</span>
          </a>
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
              <li key={item}><a href="#">{item}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Produk</h4>
          <ul>
            {['NexaFinance', 'NexaInvest', 'NexaPOS', 'Enterprise'].map((item) => (
              <li key={item}><a href="#">{item}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Perusahaan</h4>
          <ul>
            {['About Us', 'Blog', 'Portfolio', 'Karir', 'Kontak'].map((item) => (
              <li key={item}><a href="#">{item}</a></li>
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
