import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>The Law Office of John Williams, P.A.</h1>
            <p className="hero-subtitle">
              Committed to bringing value to our clients by providing affordable legal services 
              that exceed their expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services section">
        <div className="container">
          <h2 className="text-center mb-8">Our Practice Areas</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏠</div>
              <h3>Real Estate</h3>
              <p>
                We represent buyers, sellers, and lenders in a variety of real estate matters 
                including purchases, refinances, lending arrangements, forbearance agreements, 
                foreclosures, title issues, and landlord/tenant matters.
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3>Estate Planning & Administration</h3>
              <p>
                We assist clients with preparing their estate plans (wills, powers of attorney, 
                advance health-care directives) as well as administering both small and large estates. 
                We also represent clients with contested estates and complex estate matters.
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">💼</div>
              <h3>Business Transactions</h3>
              <p>
                We have experience in the formation and governance of business entities, 
                and have represented sellers and buyers of businesses in various transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us section">
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-text">
              <h2>Why Choose John Williams Law?</h2>
              <ul className="benefits-list">
                <li>✓ Affordable legal services</li>
                <li>✓ Personalized attention</li>
                <li>✓ Extensive experience in Delaware law</li>
                <li>✓ Commitment to exceeding expectations</li>
                <li>✓ Serving individuals and small businesses</li>
              </ul>
              <Link to="/contact" className="btn">Schedule Consultation</Link>
            </div>
            <div className="why-choose-image">
              <div className="image-placeholder">
                <p>Professional Legal Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Contact us today for a consultation and let us help you with your legal needs.</p>
            <Link to="/contact" className="btn">Contact Us Today</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
