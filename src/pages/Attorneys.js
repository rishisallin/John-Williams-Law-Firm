import React from 'react';
import { Link } from 'react-router-dom';
import './Attorneys.css';

const Attorneys = () => {
  return (
    <div className="attorneys">
      <section className="attorneys-hero section">
        <div className="container">
          <h1>Our Legal Team</h1>
          <p>Experienced attorneys dedicated to providing exceptional legal services</p>
        </div>
      </section>

      <section className="attorneys-content section">
        <div className="container">
          <div className="attorney-profile">
            <div className="attorney-image">
              <div className="image-placeholder">
                <p>John Williams</p>
              </div>
            </div>
            <div className="attorney-info">
              <h2>John Williams, Esq.</h2>
              <h3>Principal Attorney</h3>
              <p>
                John Williams is the founding attorney of The Law Office of John Williams, P.A. 
                With extensive experience in real estate law, estate planning, and business transactions, 
                John is committed to providing affordable and exceptional legal services to his clients.
              </p>
              
              <div className="practice-areas">
                <h4>Practice Areas:</h4>
                <ul>
                  <li>Real Estate Law</li>
                  <li>Estate Planning & Administration</li>
                  <li>Business Formation & Transactions</li>
                  <li>Landlord/Tenant Matters</li>
                  <li>Title Issues & Foreclosures</li>
                </ul>
              </div>

              <div className="education">
                <h4>Education & Credentials:</h4>
                <ul>
                  <li>Juris Doctor - [Law School]</li>
                  <li>Admitted to Delaware Bar</li>
                  <li>Member of Delaware State Bar Association</li>
                </ul>
              </div>

              <Link to="/contact" className="btn">Contact John Williams</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="team-values section">
        <div className="container">
          <h2 className="text-center mb-8">Our Commitment to You</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Personalized Service</h3>
              <p>We take the time to understand your unique situation and provide tailored legal solutions.</p>
            </div>
            <div className="value-card">
              <h3>Affordable Rates</h3>
              <p>We believe quality legal services should be accessible and offer competitive pricing.</p>
            </div>
            <div className="value-card">
              <h3>Local Expertise</h3>
              <p>Deep knowledge of Delaware law and local practices to serve you effectively.</p>
            </div>
            <div className="value-card">
              <h3>Proven Results</h3>
              <p>Track record of successful outcomes for our clients across all practice areas.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Attorneys;
