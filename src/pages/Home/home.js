import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page fade-in">
      <header className="home-intro slide-up">
        <h1 className="home-title">Hey,</h1>
        <h2 className="home-subtitle">I'm Adrian</h2>
      </header>
      <main>
        <p className="home-description slide-up-delay">
          Passionate Computer Science student with a love for web development,
          design, and innovation. Currently studying at 42Lausanne,
          I focus on creating functional and visually appealing applications.
          My journey in tech has taken me through various projects, and I strive to keep learning and growing.
        </p>
        <Link to="/projects" className="home-button hover-scale">
          EXPLORE MY WORK
        </Link>
      </main>
      <aside className="home-content scale-in">
        <img
          src="https://i.postimg.cc/SqJm8ZbC/IMG-1692-1-2.webp"
          className="home-img hover-scale-img"
          alt="Adrián González Serrano"
        />
        <div className="home-social">
          <a
            href="https://github.com/adrgonza"
            target="_blank"
            rel="noopener noreferrer"
            className="home-social-link github hover-scale"
            aria-label="GitHub"
          />
          <a
            href="https://linkedin.com/in/adrgonza"
            target="_blank"
            rel="noopener noreferrer"
            className="home-social-link linkedin hover-scale"
            aria-label="LinkedIn"
          />
          <a
            href="https://salmon-guenevere-10.tiiny.site"
            target="_blank"
            rel="noopener noreferrer"
            className="home-social-link cv hover-scale"
            aria-label="CV"
          />
        </div>
      </aside>
    </div>
  );
};

export default Home;
