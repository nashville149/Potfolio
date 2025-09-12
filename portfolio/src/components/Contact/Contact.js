import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container container mt-5">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me via email or social media.</p>
      <a href="mailto:email@example.com" className="btn btn-primary">Email Me</a>
      <div className="social-links mt-3">
        <a href="#" className="me-3">GitHub</a>
        <a href="#">LinkedIn</a>
      </div>
    </div>
  );
};

export default Contact;
