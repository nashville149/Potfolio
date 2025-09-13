import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-content">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-intro">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology. Feel free to reach out!
          </p>
          
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  📧
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>nashville.dev@example.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  📱
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  📍
                </div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>Your City, Country</p>
                </div>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/nashvile" className="social-link" aria-label="GitHub">
              🐙
            </a>
            <a href="https://linkedin.com/in/nashville-dev" className="social-link" aria-label="LinkedIn">
              💼
            </a>
            <a href="https://twitter.com/nashville_dev" className="social-link" aria-label="Twitter">
              🐦
            </a>
            <a href="mailto:nashville.dev@example.com" className="social-link" aria-label="Email">
              📧
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
