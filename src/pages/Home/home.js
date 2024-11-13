// src/pages/Home/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <section className="home-intro">
        <h1 className="home-title">Welcome to My Website</h1>
        <p className="home-subtitle">I’m a passionate developer focused on creating beautiful and functional web experiences.</p>
        <p className="home-about">
          I specialize in full-stack development, working with modern technologies to build innovative solutions. 
          My goal is to continually learn, grow, and push the boundaries of what’s possible in tech.
        </p>
        <Link to="/projects" className="home-button">
          View My Projects
        </Link>
      </section>
    </div>
  );
};

export default Home;
