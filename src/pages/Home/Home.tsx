import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-5 min-h-screen animate-fade-in"
      style={{
        gridTemplateColumns: '3fr 2fr',
        alignItems: 'center',
        padding: '0 40px',
        backgroundColor: '#f5f5f5',
      }}
    >
      {/* Left: Intro */}
      <header className="mb-[60px]">
        <h1
          className="text-black font-extrabold leading-[1.1] animate-slide-up"
          style={{ fontSize: 'clamp(4.5rem, 10vw, 12rem)' }}
        >
          Hey,
        </h1>
        <h2
          className="text-[#555] font-light leading-[1.1] animate-slide-up"
          style={{ fontSize: 'clamp(4.5rem, 10vw, 12rem)' }}
        >
          I'm Adrian
        </h2>
      </header>

      <main className="col-span-1 row-span-2 lg:row-start-1" style={{ gridColumn: '1 / 2' }}>
        <p
          className="text-[#555] leading-[2] mb-5 max-w-[500px] animate-slide-up-delay"
          style={{ fontSize: '1.2rem' }}
        >
          Passionate Computer Science student with a love for web development,
          design, and innovation. Currently studying at 42Lausanne,
          I focus on creating functional and visually appealing applications.
          My journey in tech has taken me through various projects, and I strive to keep learning and growing.
        </p>
        <Link
          to="/projects"
          className="inline-block px-[18px] py-[18px] text-base font-semibold text-white rounded-[50px] transition-all duration-[0.4s] hover:bg-[#444] hover:scale-[1.05] hover:shadow-[0_6px_10px_rgba(0,0,0,0.2)] mb-[5vh]"
          style={{ backgroundColor: '#000', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
        >
          EXPLORE MY WORK
        </Link>
      </main>

      {/* Right: Image + Social */}
      <aside
        className="flex flex-col items-center col-span-1 animate-scale-in"
        style={{ gridColumn: '2 / 3', gridRow: '1 / 3' }}
      >
        <img
          src="https://i.postimg.cc/SqJm8ZbC/IMG-1692-1-2.webp"
          alt="Adrian Gonzalez"
          className="max-w-[60vh] w-full h-auto object-cover hover:scale-[1.04] transition-transform duration-300"
          style={{ maxWidth: '60vh' }}
        />
        <div className="flex justify-center items-center mt-[10px]">
          {/* GitHub */}
          <a
            href="https://github.com/adrgonza"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-[60px] h-[60px] rounded-full flex items-center justify-center hover:scale-[1.1] hover:shadow-[0_6px_12px_rgba(0,0,0,0.2)] transition-all duration-300 mx-[10px] group"
            style={{ backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', backgroundImage: 'url(https://cdn.jsdelivr.net/npm/simple-icons/icons/github.svg)', backgroundSize: '50%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
          />
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/adrgonza"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-[60px] h-[60px] rounded-full hover:scale-[1.1] hover:shadow-[0_6px_12px_rgba(0,0,0,0.2)] transition-all duration-300 mx-[10px]"
            style={{ backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', backgroundImage: 'url(https://cdn.jsdelivr.net/npm/simple-icons/icons/linkedin.svg)', backgroundSize: '50%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
          />
          {/* CV */}
          <a
            href="https://salmon-guenevere-10.tiiny.site"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CV"
            className="w-[60px] h-[60px] rounded-full hover:scale-[1.1] hover:shadow-[0_6px_12px_rgba(0,0,0,0.2)] transition-all duration-300 mx-[10px]"
            style={{ backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', backgroundImage: 'url(https://www.svgrepo.com/show/11803/curriculum-vitae.svg)', backgroundSize: '50%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
          />
        </div>
      </aside>
    </div>
  );
};

export default Home;
