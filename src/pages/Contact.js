import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will contact you soon.');
  };

  return (
    <div className="contact">
      <section className="contact-hero section">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep" aria-hidden="true">/</span>
            <span>Contact</span>
          </nav>
          <h1 className="page-hero-title">Contact the firm</h1>
          <p className="page-hero-lead">
            Schedule a consultation or send a confidential message regarding your legal matter.
          </p>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="section-eyebrow">Office</span>
              <h2 className="subsection-title contact-info__title">Wilmington location</h2>
              <p className="contact-info__intro">
                The Law Office of John Williams, P.A. welcomes inquiries from prospective and existing clients.
                Please include a brief description of your matter so we may route your request appropriately.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <h3 className="contact-item__label">Address</h3>
                  <p>1225 King Street, Suite 700<br />Wilmington, DE 19801</p>
                </div>

                <div className="contact-item">
                  <h3 className="contact-item__label">Telephone</h3>
                  <p><a href="tel:+13025714780" className="contact-item__link">(302) 571-4780</a></p>
                </div>

                <div className="contact-item">
                  <h3 className="contact-item__label">Email</h3>
                  <p>
                    <a href="mailto:info@johnwilliamslaw.com" className="contact-item__link">
                      info@johnwilliamslaw.com
                    </a>
                  </p>
                </div>

                <div className="contact-item">
                  <h3 className="contact-item__label">Hours</h3>
                  <p>Monday – Friday: 9:00 a.m. – 5:00 p.m.<br />Saturday: By appointment</p>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="contact-form__heading">Inquiry form</h3>
                <p className="contact-form__note">
                  Fields marked with an asterisk (*) are required.
                </p>

                <div className="form-group">
                  <label htmlFor="name">Full name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Practice area *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="real-estate">Real estate</option>
                    <option value="estate-planning">Estate planning</option>
                    <option value="business">Business transactions</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Briefly describe your legal needs or questions."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-full">
                  Submit inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section section">
        <div className="container">
          <h2 className="section-title text-center">Office location</h2>
          <p className="section-lead text-center map-section__lead">
            1225 King Street, Suite 700, Wilmington, Delaware 19801
          </p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.123456789!2d-75.543210!3d39.745678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fd1234567890%3A0x1234567890abcdef!2s1225%20King%20St%2C%20Wilmington%2C%20DE%2019801!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Law Office of John Williams, P.A. — Wilmington, DE"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
