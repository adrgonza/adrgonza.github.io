// src/pages/Projects.js
import React from 'react';
import './Projects.css'; // Import the CSS for styling

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-subtitle">
          Explore my work and how I solve real-world challenges with technology.
        </p>
      </div>

      <div className="projects-list">
        <div className="project-item">
          <div className="project-image">
            <img src="https://via.placeholder.com/600x400" alt="Project 1" />
          </div>
          <div className="project-details">
            <h2 className="project-name">Project One: Advanced Web App</h2>
            <p className="project-description">
              A sophisticated web application that integrates multiple technologies, including React, Node.js, and MongoDB, to provide seamless user experiences.
            </p>
            <a href="#" className="project-button">View Project</a>
          </div>
        </div>

        <div className="project-item">
          <div className="project-image">
            <img src="https://via.placeholder.com/600x400" alt="Project 2" />
          </div>
          <div className="project-details">
            <h2 className="project-name">Project Two: Mobile App Development</h2>
            <p className="project-description">
              A mobile app built using React Native, designed to enhance user engagement with innovative features and a beautiful, intuitive interface.
            </p>
            <a href="#" className="project-button">View Project</a>
          </div>
        </div>

        <div className="project-item">
          <div className="project-image">
            <img src="https://via.placeholder.com/600x400" alt="Project 3" />
          </div>
          <div className="project-details">
            <h2 className="project-name">Project Three: AI-driven System</h2>
            <p className="project-description">
              An artificial intelligence system designed to optimize performance and efficiency in high-demand environments, such as data processing and automation.
            </p>
            <a href="#" className="project-button">View Project</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
