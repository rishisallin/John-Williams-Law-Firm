import React, { useState } from 'react';
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
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will contact you soon.');
  };

  return (
    <div className="contact">
      <section className="contact-hero section">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch for a consultation or to discuss your legal needs</p>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>
                We're here to help with your legal needs. Contact us today for a consultation 
                or to discuss how we can assist you.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <h3>📍 Address</h3>
                  <p>1225 King Street, Suite 700<br />Wilmington, DE 19801</p>
                </div>
                
                <div className="contact-item">
                  <h3>📞 Phone</h3>
                  <p>(302) 571-4780</p>
                </div>
                
                <div className="contact-item">
                  <h3>✉️ Email</h3>
                  <p>info@johnwilliamslaw.com</p>
                </div>
                
                <div className="contact-item">
                  <h3>🕒 Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday: By Appointment</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send us a Message</h3>
                
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="estate-planning">Estate Planning</option>
                    <option value="business">Business Transactions</option>
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
                    placeholder="Please describe your legal needs or questions..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section section">
        <div className="container">
          <h2 className="text-center mb-8">Our Location</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.123456789!2d-75.543210!3d39.745678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fd1234567890%3A0x1234567890abcdef!2s1225%20King%20St%2C%20Wilmington%2C%20DE%2019801!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="John Williams Law Firm Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
