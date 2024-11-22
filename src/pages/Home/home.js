import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div class="home-page">
      <header class="home-intro">
        <h1 class="home-title">Hey,</h1>
        <h2 class="home-subtitle">I'm Adrian</h2>
      </header>
      <main>
        <p class="home-description">
          Passionate Computer Science student with a love for web development,
          design, and innovation. Currently studying at 42Lausanne,
          I focus on creating functional and visually appealing applications.
          My journey in tech has taken me through various projects, and I strive to keep learning and growing.
        </p>
        <Link to="/projects" class="home-button">
          EXPLORE MY WORK
        </Link>
      </main>
      <aside class="home-content">
        <img
          src="https://1drv.ms/u/c/e86ea5eb6505b4ac/IQRU3dvFPMBeQJ92KNOLSPyEAY3GV7Oa4Z0f_BzxOwr2__s?height=660"
          class="home-img"
          alt="Adrián González Serrano"
        />
        <div class="home-social">
          <a
            href="https://github.com/adrgonza"
            target="_blank"
            rel="noopener noreferrer"
            className="home-social-link github"
            aria-label="GitHub"
          ></a>
          <a
            href="https://linkedin.com/in/adrgonza"
            target="_blank"
            rel="noopener noreferrer"
            className="home-social-link linkedin"
            aria-label="LinkedIn"
          ></a>
          <a
            href="https://salmon-guenevere-10.tiiny.site"
            target="_blank"
            rel="noopener noreferrer"
            className="home-social-link cv"
            aria-label="CV"
          ></a>

        </div>
      </aside>
    </div>
  );
};

export default Home;
