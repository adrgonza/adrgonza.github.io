import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="min-h-screen bg-[#f5f5f7] flex flex-col md:flex-row items-center justify-center p-8 gap-12">
      <section className="flex-1 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-2">Hey,</h1>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-600 mb-8">I'm Adrian</h2>
        <p className="text-lg text-gray-600 max-w-lg mb-8">
          Passionate Computer Science student with a love for web development,
          design, and innovation. Currently studying at 42Lausanne,
          I focus on creating functional and visually appealing applications.
        </p>
        <Link to="/projects" className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-700 transition">
          EXPLORE MY WORK
        </Link>
      </section>
      <aside className="flex-1 flex justify-center">
        <img
          src="https://i.postimg.cc/SqJm8ZbC/IMG-1692-1-2.webp"
          alt="Adrian Gonzalez"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-xl"
        />
      </aside>
      <footer className="absolute bottom-8 flex gap-4">
        <a href="https://github.com/adrgonza" target="_blank" rel="noreferrer" aria-label="GitHub" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <a href="https://linkedin.com/in/adrgonza" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
        <a href="https://salmon-guenevere-10.tiiny.site" target="_blank" rel="noreferrer" aria-label="CV" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2h6v6h2V2c-2 0-4 1-6 4H8V0H2v8h2v10h16V10h2V2h-6zM4 8V2h4v6H4zm16 12H4v-2h16v2z"/></svg>
        </a>
      </footer>
    </main>
  );
};

export default Home;