import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="container header-top-inner">
          <span className="header-top-item">
            <a href="tel:+13025714780" className="header-top-link">(302) 571-4780</a>
          </span>
          <span className="header-top-item header-top-hours">
            Mon–Fri: 9:00 AM – 5:00 PM · Wilmington, Delaware
          </span>
        </div>
      </div>
      <div className="header-main">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo" onClick={closeMenu}>
              <span className="logo-name">The Law Office of John Williams, P.A.</span>
              <span className="logo-tagline">Real Estate · Estate Planning · Business Law</span>
            </Link>

            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`} aria-label="Primary">
              <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
              <Link to="/attorneys" className="nav-link" onClick={closeMenu}>Attorneys</Link>
              <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
              <Link to="/contact" className="btn btn-primary nav-cta" onClick={closeMenu}>
                Request Consultation
              </Link>
            </nav>

            <button
              type="button"
              className="menu-toggle"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
