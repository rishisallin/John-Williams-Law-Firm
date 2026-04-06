import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <p className="hero-eyebrow">Wilmington, Delaware</p>
            <h1 className="hero-title">Experienced counsel for your property, estate, and business needs</h1>
            <p className="hero-subtitle">
              The Law Office of John Williams, P.A. provides thoughtful, cost-effective representation
              to individuals and small businesses throughout Delaware.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn">Schedule a consultation</Link>
              <Link to="/attorneys" className="btn btn-secondary hero-btn-secondary">Meet our attorney</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-strip">
        <div className="container intro-strip-inner">
          <p>
            Whether you are buying or selling real estate, planning your estate, or structuring a business
            transaction, our firm focuses on clear communication, diligent preparation, and practical outcomes.
          </p>
        </div>
      </section>

      <section className="services section">
        <div className="container">
          <h2 className="section-title text-center">Practice areas</h2>
          <p className="section-lead text-center">
            Comprehensive legal support aligned with Delaware law and local practice.
          </p>
          <div className="services-grid">
            <article className="service-card">
              <span className="service-card__index" aria-hidden="true">01</span>
              <h3>Real estate</h3>
              <p>
                Representation for buyers, sellers, and lenders in purchases, refinances, lending arrangements,
                forbearance agreements, foreclosures, title issues, and landlord–tenant matters.
              </p>
            </article>

            <article className="service-card">
              <span className="service-card__index" aria-hidden="true">02</span>
              <h3>Estate planning &amp; administration</h3>
              <p>
                Wills, powers of attorney, advance health-care directives, and estate administration—from
                straightforward estates to contested and complex matters.
              </p>
            </article>

            <article className="service-card">
              <span className="service-card__index" aria-hidden="true">03</span>
              <h3>Business transactions</h3>
              <p>
                Entity formation and governance, and representation of sellers and purchasers in business
                sales and related transactions.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="why-choose-us section">
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-text">
              <span className="section-eyebrow">Why clients choose us</span>
              <h2 className="subsection-title">Dedicated service rooted in Delaware practice</h2>
              <ul className="benefits-list">
                <li>Transparent, value-driven fee arrangements</li>
                <li>Direct access to experienced counsel</li>
                <li>Depth in Delaware real property and probate matters</li>
                <li>Academic rigor paired with practical judgment</li>
                <li>Representation tailored to individuals and small businesses</li>
              </ul>
              <Link to="/contact" className="btn">Request a consultation</Link>
            </div>
            <aside className="why-choose-aside" aria-label="Firm highlights">
              <div className="aside-panel">
                <h3 className="aside-panel__title">Our commitment</h3>
                <p>
                  We take time to understand your objectives, explain options in plain language, and pursue
                  strategies designed to protect your interests efficiently.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="cta section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Discuss your matter in confidence</h2>
            <p className="cta-text">
              Contact the firm to arrange a consultation and learn how we can assist with your legal needs.
            </p>
            <Link to="/contact" className="btn">Contact the office</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
