// src/pages/Projects.js
import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      image: "https://via.placeholder.com/600x400",
      title: "Project One: Advanced Web App",
      description: "A sophisticated web application that integrates multiple technologies."
    },
    {
      image: "https://via.placeholder.com/600x400",
      title: "Project Two: Mobile App Development",
      description: "A mobile app built using React Native, designed to enhance user engagement."
    },
    {
      image: "https://via.placeholder.com/600x400",
      title: "Project Three: AI-driven System",
      description: "An artificial intelligence system designed to optimize performance and efficiency."
    },
    {
      image: "https://via.placeholder.com/600x400",
      title: "Project One: Advanced Web App",
      description: "A sophisticated web application that integrates multiple technologies."
    },
    {
      image: "https://via.placeholder.com/600x400",
      title: "Project Two: Mobile App Development",
      description: "A mobile app built using React Native, designed to enhance user engagement."
    },
    {
      image: "https://via.placeholder.com/600x400",
      title: "Project Three: AI-driven System",
      description: "An artificial intelligence system designed to optimize performance and efficiency"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= projects.length - 5 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 5 : prevIndex - 1
    );
  };

  return (
    <div className="projects-container">
      <div className="projects-slider">
        <button className="slider-button prev" onClick={prevSlide}>&lt;</button>
        
        <div className="projects-track" style={{
          transform: `translateX(-${currentIndex * 100}%)`
        }}>
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={`Project ${index + 1}`} 
                  className="project-image"
                />
                <div className="project-overlay">
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-description">{project.description}</p>
                  <a href="#" className="project-link" aria-label="View Project"></a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="slider-button next" onClick={nextSlide}>&gt;</button>
        
        <div className="slider-dots">
          {Array.from({ length: projects.length }).map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
