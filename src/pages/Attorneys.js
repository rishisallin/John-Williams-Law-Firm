import React from 'react';
import { Link } from 'react-router-dom';
import './Attorneys.css';

const Attorneys = () => {
  return (
    <div className="attorneys">
      <section className="attorneys-hero section">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep" aria-hidden="true">/</span>
            <span>Attorneys</span>
          </nav>
          <h1 className="page-hero-title">Attorney profile</h1>
          <p className="page-hero-lead">John Williams — principal attorney</p>
        </div>
      </section>

      <section className="attorneys-content section">
        <div className="container">
          <div className="attorney-profile">
            <div className="attorney-image">
              <div className="image-placeholder">
                <span className="image-placeholder__text">Photograph</span>
              </div>
            </div>
            <div className="attorney-info">
              <p className="attorney-info__role">Principal &amp; founding attorney</p>
              <h2 className="attorney-info__name">John Williams, Esq.</h2>
              <p className="attorney-info__subtitle">Professor of law · Delaware practitioner</p>
              <p className="attorney-info__body">
                John Williams is the founding attorney of The Law Office of John Williams, P.A. As both a
                practicing attorney and educator, he combines scholarly depth with practical experience in
                real estate, estate planning, and business transactions. The firm is committed to delivering
                accessible, high-quality representation to individuals and small businesses.
              </p>

              <div className="info-block">
                <h3 className="info-block__title">Practice focus</h3>
                <ul>
                  <li>Real estate law</li>
                  <li>Estate planning and administration</li>
                  <li>Business formation and transactions</li>
                  <li>Landlord–tenant matters</li>
                  <li>Title issues and foreclosures</li>
                </ul>
              </div>

              <div className="info-block">
                <h3 className="info-block__title">Education &amp; admissions</h3>
                <ul>
                  <li>Juris Doctor — [Law School]</li>
                  <li>Admitted to practice in Delaware</li>
                  <li>Member, Delaware State Bar Association</li>
                  <li>Professor of law — [University Name]</li>
                </ul>
              </div>

              <Link to="/contact" className="btn">Contact the office</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="team-values section">
        <div className="container">
          <h2 className="section-title text-center">How we serve clients</h2>
          <p className="section-lead text-center">
            Principles that guide our work at every stage of representation.
          </p>
          <div className="values-grid">
            <article className="value-card">
              <h3>Personal attention</h3>
              <p>We invest in understanding your objectives and tailoring strategy to your circumstances.</p>
            </article>
            <article className="value-card">
              <h3>Rigorous analysis</h3>
              <p>Academic training supports careful review of documents, risk, and Delaware-specific requirements.</p>
            </article>
            <article className="value-card">
              <h3>Local knowledge</h3>
              <p>Experience with Delaware courts, recording practices, and commercial norms across the state.</p>
            </article>
            <article className="value-card">
              <h3>Practical outcomes</h3>
              <p>Advice is aimed at resolving matters efficiently without sacrificing legal soundness.</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Attorneys;
