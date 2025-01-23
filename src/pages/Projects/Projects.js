import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div class="projects-container">
      <div class="projects-carousel">
        {/* <!-- Pixel Pong --> */}
        <div class="projects-item">
          <div class="item-header">
            <h3 class="item-title">Pixel Pong</h3>
            <p class="item-tools">JavaScript, HTML5 Canvas</p>
          </div>
          <label for="project-pixelpong" class="expand-button">+</label>
        </div>

        {/* <!-- Matcha --> */}
        <div class="projects-item">
          <div class="item-header">
            <h3 class="item-title">Matcha</h3>
            <p class="item-tools">React, Express, PostgreSQL</p>
          </div>
          <label for="project-matcha" class="expand-button">+</label>
        </div>

        {/* <!-- OrionPlattform --> */}
        <div class="projects-item">
          <div class="item-header">
            <h3 class="item-title">OrionPlattform</h3>
            <p class="item-tools">Docker, Python</p>
          </div>
          <label for="project-orionplatt" class="expand-button">+</label>
        </div>

        {/* <!-- Midlands --> */}
        <div class="projects-item">
          <div class="item-header">
            <h3 class="item-title">Midlands</h3>
            <p class="item-tools">C, Graphic libraries</p>
          </div>
          <label for="project-midlands" class="expand-button">+</label>
        </div>

        {/* <!-- MineWorld --> */}
        <div class="projects-item">
          <div class="item-header">
            <h3 class="item-title">MineWorld</h3>
            <p class="item-tools">C, Graphic libraries, Raycasting</p>
          </div>
          <label for="project-mineworld" class="expand-button">+</label>
        </div>

        {/* <!-- Minishell --> */}
        <div class="projects-item">
          <div class="item-header">
            <h3 class="item-title">Minishell</h3>
            <p class="item-tools">C, Bash</p>
          </div>
          <label for="project-minishell" class="expand-button">+</label>
        </div>

        {/* <!-- IRC --> */}
        <div class="projects-item">
          <div class="item-header">
            <h3 class="item-title">IRC</h3>
            <p class="item-tools">C++</p>
          </div>
          <label for="project-irc" class="expand-button">+</label>
        </div>

        {/* <!-- MyPortfolio --> */}
        <div class="projects-item">
          <div class="item-header">
            <h3 class="item-title">MyPortfolio</h3>
            <p class="item-tools">Html, CSS</p>
          </div>
          <label for="project-portfolio" class="expand-button">+</label>
        </div>

        {/* <!-- Youthbook --> */}
        <div class="projects-item">
          <div class="item-header">
            <h3 class="item-title">Youthbook</h3>
            <p class="item-tools">Film Photography, Creativity</p>
          </div>
          <label for="project-youthbook" class="expand-button">+</label>
        </div>
      </div>

      {/* <!-- Full-page overlay for Pixel Pong --> */}
      <input type="checkbox" id="project-pixelpong" class="overlay-toggle" />
      <div class="project-overlay">
        <div class="overlay-content">
          <label for="project-pixelpong" class="close-button">×</label>
          <div class="project-details">
            <p>A multiplayer pong game with pixel art.</p>
            <h2>Pixel Pong</h2>
            <video controls src="pixelpong.mp4" class="project-video"></video>
            <p>This was the last project in the common core at 42, I did the creative part, the design, and I worked in the frontend.</p>
            <video controls src="pixelpong.mp4" class="project-video"></video>
            <p>Curiosities: Inspired by retro games.</p>
            <a href="#" class="project-link">GitHub Link</a>
          </div>
        </div>
      </div>

      {/* <!-- Full-page overlay for Matcha --> */}
      <input type="checkbox" id="project-matcha" class="overlay-toggle" />
      <div class="project-overlay">
        <div class="overlay-content">
          <label for="project-matcha" class="close-button">×</label>
          <div class="project-details">
            <p>A modern dating app with location-based features.</p>
            <h2>Matcha</h2>
            <video controls src="matcha.mp4" class="project-video"></video>
            <p>React, Express, PostgreSQL</p>
            <video controls src="matcha.mp4" class="project-video"></video>
            <p>Designed with privacy and compatibility in mind.</p>
            <a href="#" class="project-link">GitHub Link</a>
          </div>
        </div>
      </div>

      {/* <!-- Full-page overlay for OrionPlattform --> */}
      <input type="checkbox" id="project-orionplatt" class="overlay-toggle" />
      <div class="project-overlay">
        <div class="overlay-content">
          <label for="project-orionplatt" class="close-button">×</label>
          <div class="project-details">
            <p>A platform for efficient project management.</p>
            <h2>OrionPlattform</h2>
            <video controls src="orionplatt.mp4" class="project-video"></video>
            <p>Vue, Node.js</p>
            <video controls src="orionplatt.mp4" class="project-video"></video>
            <p>Built to handle large-scale projects.</p>
            <a href="#" class="project-link">GitHub Link</a>
          </div>
        </div>
      </div>

      {/* <!-- Full-page overlay for Midlands --> */}
      <input type="checkbox" id="project-midlands" class="overlay-toggle" />
      <div class="project-overlay">
        <div class="overlay-content">
          <label for="project-midlands" class="close-button">×</label>
          <div class="project-details">
            <p>A robust system for team collaboration.</p>
            <h2>Midlands</h2>
            <video controls src="midlands.mp4" class="project-video"></video>
            <p>Vue, Node.js</p>
            <video controls src="midlands.mp4" class="project-video"></video>
            <p>Designed with scalability in mind.</p>
            <a href="#" class="project-link">GitHub Link</a>
          </div>
        </div>
      </div>

      {/* <!-- Full-page overlay for MineWorld --> */}
      <input type="checkbox" id="project-mineworld" class="overlay-toggle" />
      <div class="project-overlay">
        <div class="overlay-content">
          <label for="project-mineworld" class="close-button">×</label>
          <div class="project-details">
            <p>A fun game inspired by Minecraft.</p>
            <h2>MineWorld</h2>
            <video controls src="mineworld.mp4" class="project-video"></video>
            <p>Vue, Node.js</p>
            <video controls src="mineworld.mp4" class="project-video"></video>
            <p>Features procedural generation for infinite maps.</p>
            <a href="#" class="project-link">GitHub Link</a>
          </div>
        </div>
      </div>

      {/* <!-- Full-page overlay for Minishell --> */}
      <input type="checkbox" id="project-minishell" class="overlay-toggle" />
      <div class="project-overlay">
        <div class="overlay-content">
          <label for="project-minishell" class="close-button">×</label>
          <div class="project-details">
            <p>A simple shell implementation.</p>
            <h2>Minishell</h2>
            <video controls src="minishell.mp4" class="project-video"></video>
            <p>Vue, Node.js</p>
            <video controls src="minishell.mp4" class="project-video"></video>
            <p>Handles basic shell commands and file manipulation.</p>
            <a href="#" class="project-link">GitHub Link</a>
          </div>
        </div>
      </div>

      {/* <!-- Full-page overlay for IRC --> */}
      <input type="checkbox" id="project-irc" class="overlay-toggle" />
      <div class="project-overlay">
        <div class="overlay-content">
          <label for="project-irc" class="close-button">×</label>
          <div class="project-details">
            <p>A simple chat system based on IRC.</p>
            <h2>IRC</h2>
            <video controls src="irc.mp4" class="project-video"></video>
            <p>Vue, Node.js</p>
            <video controls src="irc.mp4" class="project-video"></video>
            <p>Implements basic messaging and channel features.</p>
            <a href="#" class="project-link">GitHub Link</a>
          </div>
        </div>
      </div>

      {/* <!-- Full-page overlay for MyPortfolio --> */}
      <input type="checkbox" id="project-portfolio" class="overlay-toggle" />
      <div class="project-overlay">
        <div class="overlay-content">
          <label for="project-portfolio" class="close-button">×</label>
          <div class="project-details">
            <p>A personal portfolio website showcasing my projects.</p>
            <h2>MyPortfolio</h2>
            <video controls src="portfolio.mp4" class="project-video"></video>
            <p>Vue, Node.js</p>
            <video controls src="portfolio.mp4" class="project-video"></video>
            <p>Built with responsive design for mobile devices.</p>
            <a href="#" class="project-link">GitHub Link</a>
          </div>
        </div>
      </div>

      {/* <!-- Full-page overlay for Youthbook --> */}
      <input type="checkbox" id="project-youthbook" class="overlay-toggle" />
      <div class="project-overlay">
        <div class="overlay-content">
          <label for="project-youthbook" class="close-button">×</label>
          <div class="project-details">
            <p>A social networking platform for the younger generation.</p>
            <h2>Youthbook</h2>
            <video controls src="youthbook.mp4" class="project-video"></video>
            <p>Vue, Node.js</p>
            <video controls src="youthbook.mp4" class="project-video"></video>
            <p>Features include messaging, profiles, and posts.</p>
            <a href="#" class="project-link">GitHub Link</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;