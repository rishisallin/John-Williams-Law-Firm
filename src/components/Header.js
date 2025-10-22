import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>John Williams Law</h1>
            <p>Professional Legal Services</p>
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/attorneys" className="nav-link">Attorneys</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/contact" className="btn btn-primary">Get Consultation</Link>
          </nav>
          
          <button 
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
