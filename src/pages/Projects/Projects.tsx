import { useState, useEffect, useRef, ReactNode } from 'react';

const projectImages: Record<string, string> = {
  pixelpong: 'https://i.ibb.co/KWLx9WW/landing-bacground.gif',
  matcha: 'https://i.ibb.co/h1f2mfZq/Screenshot-2025-02-17-at-13-46-44.png',
  orionplat: 'https://i.ibb.co/Lr4w4qP/waves-8905720-1280.webp',
  midlands: 'https://i.ibb.co/7JpDknn/Screenshot-2025-01-24-at-19-22-08.webp',
  mineworld: 'https://i.ibb.co/Qd4khnb/Screenshot-2025-01-24-at-19-35-42.webp',
  minishell: 'https://i.ibb.co/y6gr6pZ/Screenshot-2025-01-24-at-19-48-34.webp',
  irc: 'https://i.ibb.co/fk0hRP5/Wee-Chat-3.webp',
  portfolio: 'https://i.postimg.cc/SqJm8ZbC/IMG-1692-1-2.webp',
  youthbook: 'https://i.ibb.co/Z6DXWgs/MG-8841-CR2.webp',
};

const projectData: Record<string, { title: string; content: ReactNode }> = {
  pixelpong: {
    title: 'Pixel Pong',
    content: (
      <>
        <p><strong>Pixel Pong</strong> is a multiplayer take on the classic Pong game, enhanced with delightful pixel art.</p>
        <video controls autoPlay muted className="w-full max-w-[700px] rounded-[10px] my-6 mx-auto block" src="/assets/Trans_video.mp4"></video>
        <p>This was the final project in the 42 common core, where I led the creative design and front-end implementation.</p>
        <a href="https://github.com/adrgonza/ft_transcendence" className="inline-block mt-2 text-black font-bold hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
      </>
    ),
  },
  matcha: {
    title: 'Matcha',
    content: (
      <>
        <p><strong>Matcha</strong> is a modern dating app that connects people based on real-time location and shared interests.</p>
        <video controls autoPlay muted className="w-full max-w-[700px] rounded-[10px] my-6 mx-auto block" src="/assets/Matcha_video.mp4"></video>
        <p>Built with <strong>React</strong>, <strong>Express</strong>, and <strong>PostgreSQL</strong>, it offers robust privacy settings and a clean, intuitive interface for users seeking meaningful connections.</p>
      </>
    ),
  },
  orionplat: {
    title: 'OrionPlatform',
    content: (
      <>
        <p><strong>OrionPlatform</strong> uses <strong>Docker</strong>, <strong>Python</strong>, and multithreading to create a containerized trading network. Each user runs in a separate container, defined by a single configuration file.</p>
        <video controls autoPlay muted className="w-full max-w-[700px] rounded-[10px] my-6 mx-auto block" src="/assets/Bot_video.mp4"></video>
        <p>A central server receives trading signals and distributes them to user containers, which then place orders through multiple crypto exchange APIs. This approach ensures scalable and secure multi-user trading.</p>
      </>
    ),
  },
  midlands: {
    title: 'Midlands',
    content: (
      <>
        <p><strong>Midlands</strong> is a robust application that demonstrates dynamic graphics rendering using C and specialized libraries.</p>
        <img src="https://i.ibb.co/7JpDknn/Screenshot-2025-01-24-at-19-22-08.webp" alt="Project Screenshot" className="w-full max-w-[700px] rounded-[10px] my-6 mx-auto block" loading="lazy" />
        <p>Additionally, there is also a way to edit maps and create your own levels. The map is simply an array of characters that you can modify at any time, and the game will analyze this array to render the new layout in real-time.</p>
        <img src="https://i.ibb.co/gjyrNF3/Screenshot-2025-01-24-at-20-55-30.webp" alt="Project Screenshot" className="w-full max-w-[700px] rounded-[10px] my-6 mx-auto block" loading="lazy" />
        <a href="https://github.com/adrgonza/so_long" className="inline-block mt-2 text-black font-bold hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
      </>
    ),
  },
  mineworld: {
    title: 'MineWorld',
    content: (
      <>
        <p><strong>MineWorld</strong> is a 2D/3D hybrid game inspired by sandbox-style exploration and raycasting techniques.</p>
        <video controls autoPlay muted className="w-full max-w-[700px] rounded-[10px] my-6 mx-auto block" src="/assets/Cub_video.mp4"></video>
        <p>Developed with <strong>C</strong>, <strong>Graphic libraries</strong>, and <strong>Raycasting</strong> to create procedurally generated maps and immersive environments.</p>
        <img src="https://i.ibb.co/7SywnHW/Screenshot-2025-01-24-at-19-31-53.webp" alt="Project Screenshot" className="w-full max-w-[700px] rounded-[10px] my-6 mx-auto block" loading="lazy" />
        <a href="https://github.com/adrgonza/cub3D" className="inline-block mt-2 text-black font-bold hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
      </>
    ),
  },
  minishell: {
    title: 'Minishell',
    content: (
      <>
        <p><strong>Minishell</strong> is a custom shell implementation that is very close to <strong>Bash</strong> with extensive features, handling core command functionalities and scripting basics.</p>
        <video controls autoPlay muted className="w-full max-w-[700px] rounded-[10px] my-6 mx-auto block" src="/assets/Minishell_video.mp4"></video>
        <p>Written in <strong>C</strong> and inspired by <strong>Bash</strong>, it interprets user commands, manages processes, manipulates files, and supports a wide range of built-in commands.</p>
        <a href="https://github.com/adrgonza/minishell" className="inline-block mt-2 text-black font-bold hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
      </>
    ),
  },
  irc: {
    title: 'IRC',
    content: (
      <>
        <p><strong>IRC</strong> is a classic chat server implementation in C++, allowing real-time messaging and channel creation.</p>
        <img src="https://i.ibb.co/fk0hRP5/Wee-Chat-3.webp" alt="Project Screenshot" className="w-full max-w-[700px] rounded-[10px] my-6 mx-auto block" loading="lazy" />
        <p>Written in <strong>C++</strong> and modeled after Internet Relay Chat protocols for multi-user text communication.</p>
        <a href="https://github.com/adrgonza/ft_irc" className="inline-block mt-2 text-black font-bold hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
      </>
    ),
  },
  portfolio: {
    title: 'MyPortfolio',
    content: (
      <>
        <p><strong>MyPortfolio</strong> is a personal website designed to showcase a curated set of projects and experiences.</p>
        <p>Built using <strong>HTML</strong> and <strong>CSS</strong> with a responsive approach, making it accessible across different devices.</p>
        <a href="https://github.com/adrgonza/adrgonza.github.io" className="inline-block mt-2 text-black font-bold hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
      </>
    ),
  },
  youthbook: {
    title: 'Youthbook',
    content: (
      <>
        <p><strong>Youthbook</strong> is a personal film photography book that explores the essence of adolescence. Every image was shot, developed, and scanned by me at home, capturing genuine, unfiltered moments.</p>
        <img src="https://i.ibb.co/Z6DXWgs/MG-8841-CR2.webp" alt="Project Screenshot" className="w-full max-w-[700px] rounded-[10px] my-6 mx-auto block" loading="lazy" />
        <p>Using analog techniques, <strong>Youthbook</strong> immerses readers in the raw energy and delicate grain of film, reflecting the excitement, vulnerability, and fleeting nature of youth.</p>
        <img src="https://i.ibb.co/W5LxXZQ/50872-D97-5-B5-F-461-C-BEB7-6-B95-F1-AFAAEC.webp" alt="Project Screenshot" className="w-full max-w-[700px] rounded-[10px] my-6 mx-auto block" loading="lazy" />
        <img src="https://i.ibb.co/Z1gDZ0s/IMG-3288.webp" alt="Project Screenshot" className="w-full max-w-[700px] rounded-[10px] my-6 mx-auto block" loading="lazy" />
        <img src="https://i.ibb.co/mDjX1Lp/C724809-E-207-A-4182-9-B05-3-A7-F3-DAB9-EA1.jpg" alt="Project Screenshot" className="w-full max-w-[700px] rounded-[10px] my-6 mx-auto block" loading="lazy" />
      </>
    ),
  },
};

const projectOrder = [
  'pixelpong', 'mineworld', 'orionplat', 'midlands', 'matcha',
  'minishell', 'irc', 'portfolio', 'youthbook',
];

const projectTitles: Record<string, string> = {
  pixelpong: 'Pixel Pong',
  mineworld: 'MineWorld',
  orionplat: 'OrionPlatform',
  midlands: 'Midlands',
  matcha: 'Matcha',
  minishell: 'Minishell',
  irc: 'IRC',
  portfolio: 'MyPortfolio',
  youthbook: 'Youthbook',
};

const projectTools: Record<string, string> = {
  pixelpong: 'Full-stack',
  mineworld: 'C, Graphic libraries, Raycasting',
  orionplat: 'Docker, Python',
  midlands: 'C, Graphic libraries',
  matcha: 'React, Express, PostgreSQL',
  minishell: 'C, Bash',
  irc: 'C++',
  portfolio: 'HTML, CSS',
  youthbook: 'Film Photography, Creativity',
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
    <div
      className="flex items-center justify-center w-full h-screen overflow-hidden"
      style={{ backgroundColor: '#f5f5f7' }}
    >
      {/* Carousel */}
      <div
        className="flex items-center gap-6 w-full max-w-[1200px] h-[90%] px-6 overflow-x-auto"
        style={{
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
          scrollbarWidth: 'none',
        }}
      >
        {projectOrder.map((id) => (
          <div
            key={id}
            className="relative flex flex-col justify-start text-[#c8c8c8] cursor-pointer group transition-transform duration-300 hover:scale-[1.01]"
            style={{
              flex: '0 0 calc(33.33% - 24px)',
              maxWidth: '350px',
              height: '70%',
              scrollSnapAlign: 'center',
              backgroundColor: '#fff',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              padding: '16px',
              backgroundImage: `url(${projectImages[id]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            onClick={() => setActiveProject(id)}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[20px]"
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)',
              }}
            >
              <div className="absolute bottom-4 right-4 w-10 h-10 bg-[#2e2e2e] text-white rounded-full flex items-center justify-center text-xl font-bold z-10 group-hover:bg-[#6d6d6d] transition-colors">
                +
              </div>
            </div>

            {/* Header */}
            <div className="relative z-10">
              <h3 className="text-[1.25rem] font-bold text-white">{projectTitles[id]}</h3>
              <p className="text-[0.875rem] font-bold text-gray-300 mt-1">{projectTools[id]}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Overlay Dialog */}
      {activeProject && (
        <div
          className="fixed inset-0 flex items-center justify-center z-[999] transition-opacity duration-300"
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            opacity: 1,
          }}
        >
          <div
            className="relative flex flex-col items-center justify-start text-center text-[#333] overflow-y-auto animate-dialog-in"
            style={{
              background: '#fff',
              borderRadius: '30px',
              boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
              maxWidth: '900px',
              width: '90%',
              maxHeight: '90vh',
              padding: '40px',
              transform: 'translateY(20px)',
              opacity: 0,
            }}
            ref={overlayRef}
          >
            {/* Sticky close button */}
            <div className="self-end mb-2.5 sticky top-0 z-10">
              <button
                className="w-[35px] h-[35px] bg-[#2e2e2e] text-white rounded-full text-xl font-bold flex items-center justify-center cursor-pointer transition-all duration-300 hover:rotate-90 hover:scale-[1.05] hover:bg-[#4e4e4e]"
                onClick={() => setActiveProject(null)}
              >
                ×
              </button>
            </div>

            {/* Content */}
            <div className="w-full max-w-[800px] mx-auto text-base leading-relaxed">
              <h2 className="text-[1.75rem] text-[#333] mb-6 font-bold">{projectData[activeProject].title}</h2>
              <div className="[&>p]:mb-3">
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
