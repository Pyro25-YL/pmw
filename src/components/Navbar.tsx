import React, { useState } from 'react';
import { NAV_LINKS } from '../data';
import { useNavScroll } from '../hooks';
import { Link, useRouter } from '../router';

const Navbar: React.FC = () => {
  const scrolled = useNavScroll();
  const { path } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((v) => !v);

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <div className="nav-inner">
          <Link to="/" className="logo">
            <div className="logo-icon">⚡</div>
            Nexa<span>Mind</span>
          </Link>

          <ul className={`nav-links${menuOpen ? ' mobile-open' : ''}`} id="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={path === link.href ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={`nav-cta${menuOpen ? ' mobile-open' : ''}`} id="nav-cta">
            <Link to="/contact" className="btn btn-outline" style={{ padding: '9px 20px', fontSize: '13px' }}>
              Konsultasi
            </Link>
            <Link to="/products" className="btn btn-primary" style={{ padding: '9px 20px', fontSize: '13px' }}>
              Lihat Produk
            </Link>
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
