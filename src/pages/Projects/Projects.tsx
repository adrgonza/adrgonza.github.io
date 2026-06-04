import { useState, useEffect, useRef, ReactNode } from 'react';

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
        <video controls autoPlay muted className="w-full max-w-2xl mt-4 rounded" src="/assets/Trans_video.mp4"></video>
        <p className="mt-4">This was the final project in the 42 common core, where I led the creative design and front-end implementation.</p>
        <a href="https://github.com/adrgonza/ft_transcendence" className="inline-block mt-4 px-6 py-2 bg-black text-white hover:bg-gray-800 transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
      </>
    ),
  },
  matcha: {
    title: 'Matcha',
    content: (
      <>
        <p><strong>Matcha</strong> is a modern dating app that connects people based on real-time location and shared interests.</p>
        <video controls autoPlay muted className="w-full max-w-2xl mt-4 rounded" src="/assets/Matcha_video.mp4"></video>
        <p className="mt-4">Built with <strong>React</strong>, <strong>Express</strong>, and <strong>PostgreSQL</strong>, it offers robust privacy settings and a clean, intuitive interface for users seeking meaningful connections.</p>
      </>
    ),
  },
  orionplat: {
    title: 'OrionPlatform',
    content: (
      <>
        <p><strong>OrionPlatform</strong> uses <strong>Docker</strong>, <strong>Python</strong>, and multithreading to create a containerized trading network.</p>
        <video controls autoPlay muted className="w-full max-w-2xl mt-4 rounded" src="/assets/Bot_video.mp4"></video>
        <p className="mt-4">A central server receives trading signals and distributes them to user containers, which then place orders through multiple crypto exchange APIs.</p>
      </>
    ),
  },
  midlands: {
    title: 'Midlands',
    content: (
      <>
        <p><strong>Midlands</strong> is a robust application that demonstrates dynamic graphics rendering using C and specialized libraries.</p>
        <img src="https://i.ibb.co/7JpDknn/Screenshot-2025-01-24-at-19-22-08.webp" alt="Project Screenshot" className="w-full max-w-2xl mt-4 rounded" loading="lazy" />
        <p className="mt-4">Additionally, there is also a way to edit maps and create your own levels. The map is simply an array of characters that you can modify at any time.</p>
        <img src="https://i.ibb.co/gjyrNF3/Screenshot-2025-01-24-at-20-55-30.webp" alt="Project Screenshot" className="w-full max-w-2xl mt-4 rounded" loading="lazy" />
        <a href="https://github.com/adrgonza/so_long" className="inline-block mt-4 px-6 py-2 bg-black text-white hover:bg-gray-800 transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
      </>
    ),
  },
  mineworld: {
    title: 'MineWorld',
    content: (
      <>
        <p><strong>MineWorld</strong> is a 2D/3D hybrid game inspired by sandbox-style exploration and raycasting techniques.</p>
        <video controls autoPlay muted className="w-full max-w-2xl mt-4 rounded" src="/assets/Cub_video.mp4"></video>
        <p className="mt-4">Developed with <strong>C</strong>, <strong>Graphic libraries</strong>, and <strong>Raycasting</strong> to create procedurally generated maps and immersive environments.</p>
        <img src="https://i.ibb.co/7SywnHW/Screenshot-2025-01-24-at-19-31-53.webp" alt="Project Screenshot" className="w-full max-w-2xl mt-4 rounded" loading="lazy" />
        <a href="https://github.com/adrgonza/cub3D" className="inline-block mt-4 px-6 py-2 bg-black text-white hover:bg-gray-800 transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
      </>
    ),
  },
  minishell: {
    title: 'Minishell',
    content: (
      <>
        <p><strong>Minishell</strong> is a custom shell implementation that is very close to <strong>Bash</strong> with extensive features, handling core command functionalities and scripting basics.</p>
        <video controls autoPlay muted className="w-full max-w-2xl mt-4 rounded" src="/assets/Minishell_video.mp4"></video>
        <p className="mt-4">Written in <strong>C</strong> and inspired by <strong>Bash</strong>, it interprets user commands, manages processes, manipulates files, and supports a wide range of built-in commands.</p>
        <a href="https://github.com/adrgonza/minishell" className="inline-block mt-4 px-6 py-2 bg-black text-white hover:bg-gray-800 transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
      </>
    ),
  },
  irc: {
    title: 'IRC',
    content: (
      <>
        <p><strong>IRC</strong> is a classic chat server implementation in C++, allowing real-time messaging and channel creation.</p>
        <img src="https://i.ibb.co/fk0hRP5/Wee-Chat-3.webp" alt="Project Screenshot" className="w-full max-w-2xl mt-4 rounded" loading="lazy" />
        <p className="mt-4">Written in <strong>C++</strong> and modeled after Internet Relay Chat protocols for multi-user text communication.</p>
        <a href="https://github.com/adrgonza/ft_irc" className="inline-block mt-4 px-6 py-2 bg-black text-white hover:bg-gray-800 transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
      </>
    ),
  },
  portfolio: {
    title: 'MyPortfolio',
    content: (
      <>
        <p><strong>MyPortfolio</strong> is a personal website designed to showcase a curated set of projects and experiences.</p>
        <p className="mt-4">Built using <strong>HTML</strong> and <strong>CSS</strong> with a responsive approach, making it accessible across different devices.</p>
        <a href="https://github.com/adrgonza/adrgonza.github.io" className="inline-block mt-4 px-6 py-2 bg-black text-white hover:bg-gray-800 transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
      </>
    ),
  },
  youthbook: {
    title: 'Youthbook',
    content: (
      <>
        <p><strong>Youthbook</strong> is a personal film photography book that explores the essence of adolescence. Every image was shot, developed, and scanned by me at home.</p>
        <img src="https://i.ibb.co/Z6DXWgs/MG-8841-CR2.webp" alt="Project Screenshot" className="w-full max-w-2xl mt-4 rounded" loading="lazy" />
        <p className="mt-4">Using analog techniques, <strong>Youthbook</strong> immerses readers in the raw energy and delicate grain of film, reflecting the excitement, vulnerability, and fleeting nature of youth.</p>
        <img src="https://i.ibb.co/W5LxXZQ/50872-D97-5-B5-F-461-C-BEB7-6-B95-F1-AFAAEC.webp" alt="Project Screenshot" className="w-full max-w-2xl mt-4 rounded" loading="lazy" />
        <img src="https://i.ibb.co/Z1gDZ0s/IMG-3288.webp" alt="Project Screenshot" className="w-full max-w-2xl mt-4 rounded" loading="lazy" />
        <img src="https://i.ibb.co/mDjX1Lp/C724809-E-207-A-4182-9-B05-3-A7-F3-DAB9-EA1.jpg" alt="Project Screenshot" className="w-full max-w-2xl mt-4 rounded" loading="lazy" />
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
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 w-full max-w-6xl">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`relative aspect-[4/3] bg-gray-200 overflow-hidden cursor-pointer group ${project.cls}`}
            onClick={() => setActiveProject(project.id)}
          >
            <div className="absolute inset-0 bg-gray-300 group-hover:bg-gray-400 transition-colors"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white font-semibold text-sm">{project.title}</h3>
              <p className="text-gray-300 text-xs mt-1">{project.tools}</p>
            </div>
            <div className="absolute top-2 right-2 w-8 h-8 bg-black text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              +
            </div>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto relative" ref={overlayRef}>
            <div className="sticky top-0 bg-white p-4 flex justify-end border-b">
              <button
                className="text-3xl font-light hover:text-gray-600 transition-colors"
                onClick={() => setActiveProject(null)}
              >
                ×
              </button>
            </div>
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {projectData[activeProject].title}
              </h2>
              <div className="text-gray-700 leading-relaxed">
                {projectData[activeProject].content}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
