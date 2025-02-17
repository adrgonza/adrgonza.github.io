import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-carousel">
        {/* Pixel Pong */}
        <div className="projects-item pixel-pong">
          <div className="item-header">
            <h3 className="item-title">Pixel Pong</h3>
            <p className="item-tools">Full-stack</p>
          </div>
          <label htmlFor="project-pixelpong" className="card-overlay-link"></label>
          <label htmlFor="project-pixelpong" className="expand-button">+</label>
        </div>

        {/* MineWorld */}
        <div className="projects-item mineworld">
          <div className="item-header">
            <h3 className="item-title">MineWorld</h3>
            <p className="item-tools">C, Graphic libraries, Raycasting</p>
          </div>
          <label htmlFor="project-mineworld" className="card-overlay-link"></label>
          <label htmlFor="project-mineworld" className="expand-button">+</label>
        </div>


        {/* Orionplatform */}
        <div className="projects-item orionplat">
          <div className="item-header">
            <h3 className="item-title">OrionPlatform</h3>
            <p className="item-tools">Docker, Python</p>
          </div>
          <label htmlFor="project-orionplat" className="card-overlay-link"></label>
          <label htmlFor="project-orionplat" className="expand-button">+</label>
        </div>

        {/* Midlands */}
        <div className="projects-item midlands">
          <div className="item-header">
            <h3 className="item-title">Midlands</h3>
            <p className="item-tools">C, Graphic libraries</p>
          </div>
          <label htmlFor="project-midlands" className="card-overlay-link"></label>
          <label htmlFor="project-midlands" className="expand-button">+</label>
        </div>

        {/* Minishell */}
        <div className="projects-item minishell">
          <div className="item-header">
            <h3 className="item-title">Minishell</h3>
            <p className="item-tools">C, Bash</p>
          </div>
          <label htmlFor="project-minishell" className="card-overlay-link"></label>
          <label htmlFor="project-minishell" className="expand-button">+</label>
        </div>

        {/* IRC */}
        <div className="projects-item irc">
          <div className="item-header">
            <h3 className="item-title">IRC</h3>
            <p className="item-tools">C++</p>
          </div>
          <label htmlFor="project-irc" className="card-overlay-link"></label>
          <label htmlFor="project-irc" className="expand-button">+</label>
        </div>

        {/* Matcha */}
        <div className="projects-item matcha">
          <div className="item-header">
            <h3 className="item-title">Matcha</h3>
            <p className="item-tools">React, Express, PostgreSQL</p>
          </div>
          <label htmlFor="project-matcha" className="card-overlay-link"></label>
          <label htmlFor="project-matcha" className="expand-button">+</label>
        </div>

        {/* MyPortfolio */}
        <div className="projects-item portfolio">
          <div className="item-header">
            <h3 className="item-title">MyPortfolio</h3>
            <p className="item-tools">HTML, CSS</p>
          </div>
          <label htmlFor="project-portfolio" className="card-overlay-link"></label>
          <label htmlFor="project-portfolio" className="expand-button">+</label>
        </div>

        {/* Youthbook */}
        <div className="projects-item youthbook">
          <div className="item-header">
            <h3 className="item-title">Youthbook</h3>
            <p className="item-tools">Film Photography, Creativity</p>
          </div>
          <label htmlFor="project-youthbook" className="card-overlay-link"></label>
          <label htmlFor="project-youthbook" className="expand-button">+</label>
        </div>
      </div>

      {/* Pixel Pong Overlay */}
      <input type="checkbox" id="project-pixelpong" className="overlay-toggle" />
      <div className="project-overlay">
        <div className="overlay-content">
          <label htmlFor="project-pixelpong" className="close-button">×</label>
          <div className="project-details">
            <p>
              <strong>Pixel Pong</strong> is a multiplayer take on the classic Pong 
              game, enhanced with delightful pixel art.
            </p>
            <video controls autoplay muted ="none" src='/assets/Trans_video.mp4' className="project-video"></video>
            <p>
              This was the final project in the 42 common core, where I led the creative 
              design and front-end implementation.
            </p>
            <a href="https://github.com/adrgonza/ft_transcendence" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>

      {/* Matcha Overlay */}
      <input type="checkbox" id="project-matcha" className="overlay-toggle" />
      <div className="project-overlay">
        <div className="overlay-content">
          <label htmlFor="project-matcha" className="close-button">×</label>
          <div className="project-details">
            <p>
              <strong>Matcha</strong> is a modern dating app that connects people based 
              on real-time location and shared interests.
            </p>
            <video controls autoplay muted ="none" src="/assets/Matcha_video.mp4" className="project-video"></video>
            <p>
              Built with <strong>React</strong>, <strong>Express</strong>, and <strong>PostgreSQL</strong>, it offers robust
              privacy settings and a clean, intuitive interface for users seeking meaningful connections.
            </p>
          </div>
        </div>
      </div>

      {/* Orionplatform Overlay */}
      <input type="checkbox" id="project-orionplat" className="overlay-toggle" />
      <div className="project-overlay">
        <div className="overlay-content">
          <label htmlFor="project-orionplat" className="close-button">×</label>
          <div className="project-details">
            <p>
              <strong>OrionPlatform</strong> uses <strong>Docker</strong>, <strong>Python</strong>, and multithreading 
              to create a containerized trading network. Each user runs in a separate container, defined by a single 
              configuration file.
            </p>
            <video controls autoplay muted ="none" src="/assets/Bot_video.mp4" className="project-video"></video>
            <p>
              A central server receives trading signals and distributes them to user containers, which then place 
              orders through multiple crypto exchange APIs. This approach ensures scalable and secure multi-user 
              trading.
            </p>
          </div>
        </div>
      </div>

      {/* Midlands Overlay */}
      <input type="checkbox" id="project-midlands" className="overlay-toggle" />
      <div className="project-overlay">
        <div className="overlay-content">
          <label htmlFor="project-midlands" className="close-button">×</label>
          <div className="project-details">
            <p>
              <strong>Midlands</strong> is a robust application that demonstrates 
              dynamic graphics rendering using C and specialized libraries.
            </p>
            <img src="https://i.ibb.co/7JpDknn/Screenshot-2025-01-24-at-19-22-08.webp" alt="Project Screenshot" className="project-video" loading="lazy"/>
            <p>
              Additionally, there is also a way to edit maps and create your own levels.
              The map is simply an array of characters that you can modify at any time, 
              and the game will analyze this array to render the new layout in real-time.
            </p>
            <img src="https://i.ibb.co/gjyrNF3/Screenshot-2025-01-24-at-20-55-30.webp" alt="Project Screenshot" className="project-video" loading="lazy"/>
            <a href="https://github.com/adrgonza/so_long" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>

      {/* MineWorld Overlay */}
      <input type="checkbox" id="project-mineworld" className="overlay-toggle" />
      <div className="project-overlay">
        <div className="overlay-content">
          <label htmlFor="project-mineworld" className="close-button">×</label>
          <div className="project-details">
            <p>
              <strong>MineWorld</strong> is a 2D/3D hybrid game inspired by 
              sandbox-style exploration and raycasting techniques.
            </p>
            <video controls autoplay muted ="none" src="/assets/Cub_video.mp4" className="project-video"></video>
            <p>
              Developed with <strong>C</strong>, <strong>Graphic libraries</strong>, and <strong>Raycasting </strong> 
              to create procedurally generated maps and immersive environments.
            </p>
            <img src="https://i.ibb.co/7SywnHW/Screenshot-2025-01-24-at-19-31-53.webp" alt="Project Screenshot" className="project-video" loading="lazy"/>
            <a href="https://github.com/adrgonza/cub3D" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>

      {/* Minishell Overlay */}
      <input type="checkbox" id="project-minishell" className="overlay-toggle" />
      <div className="project-overlay">
        <div className="overlay-content">
          <label htmlFor="project-minishell" className="close-button">×</label>
          <div className="project-details">
            <p>
              <strong>Minishell</strong> is a custom shell implementation that is very close 
              to <strong>Bash</strong> with extensive features, handling core command 
              functionalities and scripting basics.
            </p>
            <video controls autoplay muted ="none" src="/assets/Minishell_video.mp4" className="project-video"></video>
            <p>
              Written in <strong>C</strong> and inspired by <strong>Bash</strong>, it interprets 
              user commands, manages processes, manipulates files, and supports a wide range 
              of built-in commands.
            </p>
            <a href="https://github.com/adrgonza/minishell" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>

      {/* IRC Overlay */}
      <input type="checkbox" id="project-irc" className="overlay-toggle" />
      <div className="project-overlay">
        <div className="overlay-content">
          <label htmlFor="project-irc" className="close-button">×</label>
          <div className="project-details">
            <p>
              <strong>IRC</strong> is a classic chat server implementation in C++, 
              allowing real-time messaging and channel creation.
            </p>
            <img src="https://i.ibb.co/fk0hRP5/Wee-Chat-3.webp" alt="Project Screenshot" className="project-video" loading="lazy"/>
            <p>
              Written in <strong>C++</strong> and modeled after Internet Relay Chat 
              protocols for multi-user text communication.
            </p>
            <a href="https://github.com/adrgonza/ft_irc" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>

      {/* MyPortfolio Overlay */}
      <input type="checkbox" id="project-portfolio" className="overlay-toggle" />
      <div className="project-overlay">
        <div className="overlay-content">
          <label htmlFor="project-portfolio" className="close-button">×</label>
          <div className="project-details">
            <p>
              <strong>MyPortfolio</strong> is a personal website designed to showcase 
              a curated set of projects and experiences.
            </p>
            <p>
              Built using <strong>HTML</strong> and <strong>CSS</strong> with a responsive approach, 
              making it accessible across different devices.
            </p>
            <a href="https://github.com/adrgonza/adrgonza.github.io" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>

      {/* Youthbook Overlay */}
      <input type="checkbox" id="project-youthbook" className="overlay-toggle" />
      <div className="project-overlay">
        <div className="overlay-content">
          <label htmlFor="project-youthbook" className="close-button">×</label>
          <div className="project-details">
            <p>
              <strong>Youthbook</strong> is a personal film photography book that explores 
              the essence of adolescence. Every image was shot, developed, and scanned 
              by me at home, capturing genuine, unfiltered moments.
            </p>
            <img src="https://i.ibb.co/Z6DXWgs/MG-8841-CR2.webp" alt="Project Screenshot" className="project-video" loading="lazy"/>
            <p>
              Using analog techniques, <strong>Youthbook</strong> immerses readers in the 
              raw energy and delicate grain of film, reflecting the excitement, 
              vulnerability, and fleeting nature of youth.
            </p>
            <img src="https://i.ibb.co/W5LxXZQ/50872-D97-5-B5-F-461-C-BEB7-6-B95-F1-AFAAEC.webp" alt="Project Screenshot" className="project-video" loading="lazy"/>
            <img src="https://i.ibb.co/Z1gDZ0s/IMG-3288.webp" alt="Project Screenshot" className="project-video" loading="lazy"/>
            <img src="https://i.ibb.co/mDjX1Lp/C724809-E-207-A-4182-9-B05-3-A7-F3-DAB9-EA1.jpg" alt="Project Screenshot" className="project-video" loading="lazy"/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
