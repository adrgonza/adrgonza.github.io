import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <header className='contact-intro'>
        <h2 className="contact-subtitle">Got a project in mind?</h2>
        <div className='contact-arrow'>
          <h1 className='contact-title'>LET'S TALK</h1>
          <span>⤴</span>
        </div>
        <hr></hr>
      </header>
      <main className='contact-content'>
        <section className='contact-info'>
          <h2>About me</h2>
          <p>Currently living Switzerland🇨🇭</p>
        </section>
        <ul className='contact-links'>
          <li><a
            href="https://github.com/adrgonza"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            >Github</a></li>
          <li><a
            href="https://linkedin.com/in/adrgonza"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            >LinkedIn</a></li>
          <li><a
            href="https://salmon-guenevere-10.tiiny.site"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CV"
            >CV</a></li>
        </ul>
      </main>
    </div>
  );
};

export default Contact;
