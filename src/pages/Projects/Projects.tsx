import { useState, useEffect, useRef, ReactNode } from 'react';
import './Projects.css';

const projects = [
  { id: 'pixelpong', title: 'Pixel Pong', tools: 'Full-stack', cls: 'pixel-pong' },
  { id: 'matcha', title: 'Matcha', tools: 'React, Express, PostgreSQL', cls: 'matcha' },
  { id: 'orionplat', title: 'OrionPlatform', tools: 'Docker, Python', cls: 'orionplat' },
  { id: 'midlands', title: 'Midlands', tools: 'C, Graphic libraries', cls: 'midlands' },
  { id: 'mineworld', title: 'MineWorld', tools: 'C, Graphic libraries, Raycasting', cls: 'mineworld' },
  { id: 'minishell', title: 'Minishell', tools: 'C, Bash', cls: 'minishell' },
  { id: 'irc', title: 'IRC', tools: 'C++', cls: 'irc' },
  { id: 'portfolio', title: 'MyPortfolio', tools: 'HTML, CSS', cls: 'portfolio' },
  { id: 'youthbook', title: 'Youthbook', tools: 'Film Photography, Creativity', cls: 'youthbook' },
];

const projectData: Record<string, { title: string; content: ReactNode }> = {
  pixelpong: {
    title: 'Pixel Pong',
    content: (
      <>
        <p><strong>Pixel Pong</strong> is a multiplayer take on the classic Pong game, enhanced with delightful pixel art.</p>
        <video controls autoPlay muted className="project-video" src="/assets/Trans_video.mp4"></video>
        <p>This was the final project in the 42 common core, where I led the creative design and front-end implementation.</p>
        <a href="https://github.com/adrgonza/ft_transcendence" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
      </>
    ),
  },
  matcha: {
    title: 'Matcha',
    content: (
      <>
        <p><strong>Matcha</strong> is a modern dating app that connects people based on real-time location and shared interests.</p>
        <video controls autoPlay muted className="project-video" src="/assets/Matcha_video.mp4"></video>
        <p>Built with <strong>React</strong>, <strong>Express</strong>, and <strong>PostgreSQL</strong>, it offers robust privacy settings and a clean, intuitive interface for users seeking meaningful connections.</p>
      </>
    ),
  },
  orionplat: {
    title: 'OrionPlatform',
    content: (
      <>
        <p><strong>OrionPlatform</strong> uses <strong>Docker</strong>, <strong>Python</strong>, and multithreading to create a containerized trading network.</p>
        <video controls autoPlay muted className="project-video" src="/assets/Bot_video.mp4"></video>
        <p>A central server receives trading signals and distributes them to user containers, which then place orders through multiple crypto exchange APIs.</p>
      </>
    ),
  },
  midlands: {
    title: 'Midlands',
    content: (
      <>
        <p><strong>Midlands</strong> is a robust application that demonstrates dynamic graphics rendering using C and specialized libraries.</p>
        <img src="https://i.ibb.co/7JpDknn/Screenshot-2025-01-24-at-19-22-08.webp" alt="Project Screenshot" className="project-video" loading="lazy" />
        <p>Additionally, there is also a way to edit maps and create your own levels. The map is simply an array of characters that you can modify at any time.</p>
        <img src="https://i.ibb.co/gjyrNF3/Screenshot-2025-01-24-at-20-55-30.webp" alt="Project Screenshot" className="project-video" loading="lazy" />
        <a href="https://github.com/adrgonza/so_long" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
      </>
    ),
  },
  mineworld: {
    title: 'MineWorld',
    content: (
      <>
        <p><strong>MineWorld</strong> is a 2D/3D hybrid game inspired by sandbox-style exploration and raycasting techniques.</p>
        <video controls autoPlay muted className="project-video" src="/assets/Cub_video.mp4"></video>
        <p>Developed with <strong>C</strong>, <strong>Graphic libraries</strong>, and <strong>Raycasting</strong> to create procedurally generated maps and immersive environments.</p>
        <img src="https://i.ibb.co/7SywnHW/Screenshot-2025-01-24-at-19-31-53.webp" alt="Project Screenshot" className="project-video" loading="lazy" />
        <a href="https://github.com/adrgonza/cub3D" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
      </>
    ),
  },
  minishell: {
    title: 'Minishell',
    content: (
      <>
        <p><strong>Minishell</strong> is a custom shell implementation that is very close to <strong>Bash</strong> with extensive features, handling core command functionalities and scripting basics.</p>
        <video controls autoPlay muted className="project-video" src="/assets/Minishell_video.mp4"></video>
        <p>Written in <strong>C</strong> and inspired by <strong>Bash</strong>, it interprets user commands, manages processes, manipulates files, and supports a wide range of built-in commands.</p>
        <a href="https://github.com/adrgonza/minishell" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
      </>
    ),
  },
  irc: {
    title: 'IRC',
    content: (
      <>
        <p><strong>IRC</strong> is a classic chat server implementation in C++, allowing real-time messaging and channel creation.</p>
        <img src="https://i.ibb.co/fk0hRP5/Wee-Chat-3.webp" alt="Project Screenshot" className="project-video" loading="lazy" />
        <p>Written in <strong>C++</strong> and modeled after Internet Relay Chat protocols for multi-user text communication.</p>
        <a href="https://github.com/adrgonza/ft_irc" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
      </>
    ),
  },
  portfolio: {
    title: 'MyPortfolio',
    content: (
      <>
        <p><strong>MyPortfolio</strong> is a personal website designed to showcase a curated set of projects and experiences.</p>
        <p>Built using <strong>HTML</strong> and <strong>CSS</strong> with a responsive approach, making it accessible across different devices.</p>
        <a href="https://github.com/adrgonza/adrgonza.github.io" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
      </>
    ),
  },
  youthbook: {
    title: 'Youthbook',
    content: (
      <>
        <p><strong>Youthbook</strong> is a personal film photography book that explores the essence of adolescence. Every image was shot, developed, and scanned by me at home.</p>
        <img src="https://i.ibb.co/Z6DXWgs/MG-8841-CR2.webp" alt="Project Screenshot" className="project-video" loading="lazy" />
        <p>Using analog techniques, <strong>Youthbook</strong> immerses readers in the raw energy and delicate grain of film, reflecting the excitement, vulnerability, and fleeting nature of youth.</p>
        <img src="https://i.ibb.co/W5LxXZQ/50872-D97-5-B5-F-461-C-BEB7-6-B95-F1-AFAAEC.webp" alt="Project Screenshot" className="project-video" loading="lazy" />
        <img src="https://i.ibb.co/Z1gDZ0s/IMG-3288.webp" alt="Project Screenshot" className="project-video" loading="lazy" />
        <img src="https://i.ibb.co/mDjX1Lp/C724809-E-207-A-4182-9-B05-3-A7-F3-DAB9-EA1.jpg" alt="Project Screenshot" className="project-video" loading="lazy" />
      </>
    ),
  },
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (activeProject && overlayRef.current && !overlayRef.current.contains(e.target as Node)) {
        setActiveProject(null);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveProject(null);
    };
    if (activeProject) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [activeProject]);

  return (
    <div className="projects-container">
      <div className="projects-carousel">
        {projects.map((project) => (
          <div key={project.id} className={`projects-item ${project.cls}`}>
            <div className="item-header">
              <h3 className="item-title">{project.title}</h3>
              <p className="item-tools">{project.tools}</p>
            </div>
            <div className="card-overlay-link" onClick={() => setActiveProject(project.id)}></div>
            <div className="expand-button" onClick={() => setActiveProject(project.id)}>+</div>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="project-overlay active">
          <div className="overlay-content" ref={overlayRef}>
            <div className="sticky-close-button">
              <button className="close-button" onClick={() => setActiveProject(null)}>×</button>
            </div>
            <h2 className="dialog-title">{projectData[activeProject].title}</h2>
            <div className="project-details">
              {projectData[activeProject].content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;