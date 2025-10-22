import React from 'react';
import { Link } from 'react-router-dom';
import './Attorneys.css';

const Attorneys = () => {
  return (
    <div className="attorneys">
      <section className="attorneys-hero section">
        <div className="container">
          <h1>Attorney Profile</h1>
          <p>Meet John Williams, Esq. - Your trusted legal advisor</p>
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
              <h3>Principal Attorney & Professor</h3>
              <p>
                John Williams is the founding attorney of The Law Office of John Williams, P.A. 
                As both a practicing attorney and professor, John brings a unique combination of 
                academic expertise and real-world experience to his legal practice. With extensive 
                experience in real estate law, estate planning, and business transactions, John is 
                committed to providing affordable and exceptional legal services to his clients.
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
                  <li>Professor of Law - [University Name]</li>
                  <li>Academic expertise in legal theory and practice</li>
                </ul>
              </div>

              <Link to="/contact" className="btn">Contact John Williams</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="team-values section">
        <div className="container">
          <h2 className="text-center mb-8">John's Commitment to You</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Personalized Service</h3>
              <p>John takes the time to understand your unique situation and provide tailored legal solutions.</p>
            </div>
            <div className="value-card">
              <h3>Academic Excellence</h3>
              <p>As a professor, John brings deep theoretical knowledge combined with practical experience.</p>
            </div>
            <div className="value-card">
              <h3>Local Expertise</h3>
              <p>Deep knowledge of Delaware law and local practices to serve you effectively.</p>
            </div>
            <div className="value-card">
              <h3>Proven Results</h3>
              <p>Track record of successful outcomes for clients across all practice areas.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Attorneys;
