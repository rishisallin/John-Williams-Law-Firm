import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>John Williams Law</h3>
            <p>Providing affordable legal services that exceed expectations.</p>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Real Estate Law</li>
              <li>Estate Planning</li>
              <li>Business Transactions</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>1225 King Street, Suite 700</p>
            <p>Wilmington, DE 19801</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 John Williams Law Firm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
