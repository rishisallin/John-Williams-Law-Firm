import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <p className="footer-firm-name">The Law Office of John Williams, P.A.</p>
            <p className="footer-tagline">
              Delaware counsel for real estate, estate planning, and business matters.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Practice Areas</h4>
            <ul>
              <li>Real Estate Law</li>
              <li>Estate Planning &amp; Administration</li>
              <li>Business Transactions</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Firm</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/attorneys">Attorneys</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <p className="footer-address">
              1225 King Street, Suite 700<br />
              Wilmington, DE 19801
            </p>
            <p>
              <a href="tel:+13025714780" className="footer-link">(302) 571-4780</a>
            </p>
            <p>
              <a href="mailto:info@johnwilliamslaw.com" className="footer-link">info@johnwilliamslaw.com</a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} The Law Office of John Williams, P.A. All rights reserved.
            Attorney advertising. Prior results do not guarantee a similar outcome.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
