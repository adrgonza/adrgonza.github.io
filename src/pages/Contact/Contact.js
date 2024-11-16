import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="contact-title">LET'S TALK</h1>
        <p className="contact-subtitle">
          I'm here to answer your questions or collaborate on projects. Reach out below.
        </p>
      </div>
      <div className="contact-details">
        <div className="contact-card">
          <p className="contact-info">
            <strong>Name:</strong> Adrián González
          </p>
          <p className="contact-info">
            <strong>Email:</strong> <a href="mailto:adrian.gonser@icloud.com">adrian.gonser@icloud.com</a>
          </p>
          <p className="contact-info">
            <strong>Based in:</strong> Lausanne, Switzerland🇨🇭
          </p>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2620.123456789012!2d6.6323!3d46.5197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c6c1234567890%3A0x1234567890abcdef!2sLausanne!5e0!3m2!1sen!2sch!4v1234567890123"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-links">
          <a href="https://github.com/adrgonza" target="_blank" rel="noopener noreferrer" className="contact-link">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/adrgonza" target="_blank" rel="noopener noreferrer" className="contact-link">
            LinkedIn
          </a>
          <a href="https://salmon-guenevere-10.tiiny.site" target="_blank" rel="noopener noreferrer" className="contact-link">
            CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
