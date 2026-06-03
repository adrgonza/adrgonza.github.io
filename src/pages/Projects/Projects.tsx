import { useState, useEffect, useRef } from 'react';

interface Project {
  id: string;
  title: string;
  tools: string;
  image: string;
  description: string;
  media?: { type: 'video' | 'image'; src: string; alt?: string }[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 'pixelpong',
    title: 'Pixel Pong',
    tools: 'Full-stack',
    image: 'https://i.ibb.co/KWLx9WW/landing-bacground.gif',
    description: 'Pixel Pong is a multiplayer take on the classic Pong game, enhanced with delightful pixel art. This was the final project in the 42 common core.',
    media: [{ type: 'video', src: '/assets/Trans_video.mp4' }],
    link: 'https://github.com/adrgonza/ft_transcendence',
  },
  {
    id: 'matcha',
    title: 'Matcha',
    tools: 'React, Express, PostgreSQL',
    image: 'https://i.ibb.co/h1f2mfZq/Screenshot-2025-02-17-at-13-46-44.png',
    description: 'Matcha is a modern dating app connecting people based on real-time location and shared interests. Built with React, Express, and PostgreSQL.',
    media: [{ type: 'video', src: '/assets/Matcha_video.mp4' }],
  },
  {
    id: 'orionplat',
    title: 'OrionPlatform',
    tools: 'Docker, Python',
    image: 'https://i.ibb.co/Lr4w4qP/waves-8905720-1280.webp',
    description: 'OrionPlatform uses Docker, Python, and multithreading for a containerized trading network.',
    media: [{ type: 'video', src: '/assets/Bot_video.mp4' }],
  },
  {
    id: 'midlands',
    title: 'Midlands',
    tools: 'C, Graphic libraries',
    image: 'https://i.ibb.co/7JpDknn/Screenshot-2025-01-24-at-19-22-08.webp',
    description: 'Midlands demonstrates dynamic graphics rendering using C. Maps can be edited as simple character arrays.',
    media: [
      { type: 'image', src: 'https://i.ibb.co/7JpDknn/Screenshot-2025-01-24-at-19-22-08.webp', alt: 'Midlands' },
      { type: 'image', src: 'https://i.ibb.co/gjyrNF3/Screenshot-2025-01-24-at-20-55-30.webp', alt: 'Editor' },
    ],
    link: 'https://github.com/adrgonza/so_long',
  },
  {
    id: 'mineworld',
    title: 'MineWorld',
    tools: 'C, Raycasting',
    image: 'https://i.ibb.co/Qd4khnb/Screenshot-2025-01-24-at-19-35-42.webp',
    description: 'MineWorld is a 2D/3D hybrid game inspired by sandbox-style exploration and raycasting techniques.',
    media: [
      { type: 'video', src: '/assets/Cub_video.mp4' },
      { type: 'image', src: 'https://i.ibb.co/7SywnHW/Screenshot-2025-01-24-at-19-31-53.webp', alt: 'MineWorld' },
    ],
    link: 'https://github.com/adrgonza/cub3D',
  },
  {
    id: 'minishell',
    title: 'Minishell',
    tools: 'C, Bash',
    image: 'https://i.ibb.co/y6gr6pZ/Screenshot-2025-01-24-at-19-48-34.webp',
    description: 'Minishell is a custom shell implementation close to Bash with extensive features.',
    media: [{ type: 'video', src: '/assets/Minishell_video.mp4' }],
    link: 'https://github.com/adrgonza/minishell',
  },
  {
    id: 'irc',
    title: 'IRC',
    tools: 'C++',
    image: 'https://i.ibb.co/fk0hRP5/Wee-Chat-3.webp',
    description: 'IRC is a classic chat server implementation in C++, allowing real-time messaging.',
    media: [{ type: 'image', src: 'https://i.ibb.co/fk0hRP5/Wee-Chat-3.webp', alt: 'IRC' }],
    link: 'https://github.com/adrgonza/ft_irc',
  },
  {
    id: 'portfolio',
    title: 'MyPortfolio',
    tools: 'HTML, CSS',
    image: 'https://i.postimg.cc/SqJm8ZbC/IMG-1692-1-2.webp',
    description: 'MyPortfolio is a personal website designed to showcase projects and experiences.',
  },
  {
    id: 'youthbook',
    title: 'Youthbook',
    tools: 'Film Photography',
    image: 'https://i.ibb.co/Z6DXWgs/MG-8841-CR2.webp',
    description: 'Youthbook is a personal film photography book exploring adolescence. Every image shot, developed, and scanned at home.',
    media: [
      { type: 'image', src: 'https://i.ibb.co/Z6DXWgs/MG-8841-CR2.webp', alt: 'Photo 1' },
      { type: 'image', src: 'https://i.ibb.co/W5LxXZQ/50872-D97-5-B5-F-461-C-BEB7-6-B95-F1-AFAAEC.webp', alt: 'Photo 2' },
      { type: 'image', src: 'https://i.ibb.co/Z1gDZ0s/IMG-3288.webp', alt: 'Photo 3' },
      { type: 'image', src: 'https://i.ibb.co/mDjX1Lp/C724809-E-207-A-4182-9-B05-3-A7-F3-DAB9-EA1.jpg', alt: 'Photo 4' },
    ],
  },
];

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

  const currentProject = projects.find((p) => p.id === activeProject);

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center p-6">
      <div className="flex gap-6 overflow-x-auto py-4 px-6 max-w-6xl w-full snap-x snap-mandatory">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex-shrink-0 w-[300px] h-[400px] bg-white rounded-2xl shadow-lg snap-center overflow-hidden cursor-pointer group relative"
            style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            onClick={() => setActiveProject(project.id)}
          >
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-white text-xl font-bold">{project.title}</h3>
              <p className="text-white/80 text-sm">{project.tools}</p>
            </div>
            <div className="absolute top-4 right-4 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">+</div>
          </div>
        ))}
      </div>

      {currentProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div ref={overlayRef} className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8">
            <div className="sticky top-0 bg-white pb-4 flex justify-between items-center border-b mb-6">
              <h2 className="text-2xl font-bold text-gray-800">{currentProject.title}</h2>
              <button onClick={() => setActiveProject(null)} className="w-10 h-10 bg-gray-800 text-white rounded-full text-xl hover:bg-gray-600 transition flex items-center justify-center">×</button>
            </div>
            <p className="text-gray-600 mb-6">{currentProject.description}</p>
            {currentProject.media?.map((m, i) =>
              m.type === 'video' ? (
                <video key={i} controls autoPlay muted src={m.src} className="w-full rounded-xl mb-4" />
              ) : (
                <img key={i} src={m.src} alt={m.alt} className="w-full rounded-xl mb-4" />
              )
            )}
            {currentProject.link && (
              <a href={currentProject.link} target="_blank" rel="noreferrer" className="text-gray-800 font-bold hover:underline">
                GitHub →
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;