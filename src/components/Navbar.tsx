import React, { useState } from 'react';
import { NAV_LINKS } from '../data';
import { useNavScroll } from '../hooks';

const Navbar: React.FC = () => {
  const scrolled = useNavScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((v) => !v);

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <div className="nav-inner">
          <a href="#" className="logo">
            <div className="logo-icon">⚡</div>
            Nexa<span>Mind</span>
          </a>

          <ul className={`nav-links${menuOpen ? ' mobile-open' : ''}`} id="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={`nav-cta${menuOpen ? ' mobile-open' : ''}`} id="nav-cta">
            <a href="#contact" className="btn btn-outline" style={{ padding: '9px 20px', fontSize: '13px' }}>
              Konsultasi
            </a>
            <a href="#products" className="btn btn-primary" style={{ padding: '9px 20px', fontSize: '13px' }}>
              Lihat Produk
            </a>
          </div>

          <div className="hamburger" id="hamburger" onClick={toggleMenu}>
            <span /><span /><span />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
