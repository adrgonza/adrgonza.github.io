// src/pages/Contact.js
import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-subtitle">I’d love to hear from you. Feel free to reach out for collaborations or questions!</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="contact-input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="contact-input"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="contact-textarea"
          required
        ></textarea>
        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
