import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="intro-section">
        <h1 className="home-title">
          Hey,<br />
          <span className="home-subtitle">I'm Adrian</span>
        </h1>
      </div>
      <div className="content-section">
        <div className="home-description">
          <p>
            Passionate Computer Science student with a love for web development,
            design, and innovation. Currently studying at 42Lausanne, I focus
            on creating functional and visually appealing applications. My
            journey in tech has taken me through various projects, and I strive
            to keep learning and growing.
          </p>
          <Link to="/projects" className="explore-button">
            Explore My Work
          </Link>
        </div>
        <div className="home-image">
          <div className="image-wrapper">
            <img
              src="https://i.ibb.co/stnKDfR/Home-photo.jpg"
              alt="Adrián González Serrano"
            />
          </div>
          <div className="social-links">
            <a
              href="https://github.com/adrgonza"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link github-link"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/adrgonza"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link linkedin-link"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://salmon-guenevere-10.tiiny.site"
              download
              className="social-link download-link"
            >
              <i className="fas fa-file-download"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
