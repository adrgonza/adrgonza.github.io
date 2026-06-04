import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="flex min-h-screen items-center px-10">
      {/* Left side - intro */}
      <section className="flex flex-col justify-center flex-1">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight animate-fade-in">
          Hey,
        </h1>
        <h2 className="text-4xl md:text-6xl font-light mt-2 animate-slide-up">
          I'm Adrian
        </h2>

        <p className="text-lg md:text-xl text-gray-600 mt-8 max-w-lg animate-slide-up-delay leading-relaxed">
          Passionate Computer Science student with a love for web development,
          design, and innovation. Currently studying at 42Lausanne,
          I focus on creating functional and visually appealing applications.
        </p>

        <div className="mt-10 animate-scale-in">
          <Link
            to="/projects"
            className="inline-block bg-black text-white px-8 py-4 text-sm font-semibold tracking-widest hover:bg-gray-800 transition-colors"
          >
            EXPLORE MY WORK
          </Link>
        </div>
      </section>

      {/* Right side - image & social */}
      <aside className="flex flex-col items-center gap-8 flex-1">
        <img
          src="https://i.postimg.cc/SqJm8ZbC/IMG-1692-1-2.webp"
          alt="Adrian Gonzalez"
          className="w-64 md:w-80 h-auto object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="flex gap-4">
          <a
            href="https://github.com/adrgonza"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 bg-black rounded-full hover:bg-gray-700 transition-colors"
          />
          <a
            href="https://linkedin.com/in/adrgonza"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 bg-black rounded-full hover:bg-gray-700 transition-colors"
          />
          <a
            href="https://salmon-guenevere-10.tiiny.site"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CV"
            className="w-10 h-10 bg-black rounded-full hover:bg-gray-700 transition-colors"
          />
        </div>
      </aside>
    </main>
  );
};

export default Home;
