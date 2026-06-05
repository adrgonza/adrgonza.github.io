import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="min-h-screen animate-fade-in"
      style={{
        display: 'grid',
        gridTemplateColumns: '3fr 2fr',
        alignItems: 'center',
        padding: '0 40px',
        backgroundColor: '#f5f5f5',
      }}
    >
      {/* Column 1 - Left side */}
      <div>
        {/* Header: Hey, I'm Adrian */}
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

        {/* Image + Social (mobile only) */}
        <div className="mobile-media-row">
          <img
            src="https://i.postimg.cc/SqJm8ZbC/IMG-1692-1-2.webp"
            alt="Adrian Gonzalez"
            className="mobile-portrait"
          />
          <div className="mobile-social">
            <a
              href="https://github.com/adrgonza"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-[60px] h-[60px] rounded-full hover:scale-[1.1] hover:shadow-[0_6px 12px_rgba(0,0,0,0.2)] transition-all duration-300"
              style={{
                backgroundColor: '#fff',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                backgroundImage: 'url(https://cdn.jsdelivr.net/npm/simple-icons/icons/github.svg)',
                backgroundSize: '50%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            />
            <a
              href="https://linkedin.com/in/adrgonza"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-[60px] h-[60px] rounded-full hover:scale-[1.1] hover:shadow-[0_6px 12px_rgba(0,0,0,0.2)] transition-all duration-300"
              style={{
                backgroundColor: '#fff',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                backgroundImage: 'url(https://cdn.jsdelivr.net/npm/simple-icons/icons/linkedin.svg)',
                backgroundSize: '50%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            />
            <a
              href="https://salmon-guenevere-10.tiiny.site"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CV"
              className="w-[60px] h-[60px] rounded-full hover:scale-[1.1] hover:shadow-[0_6px 12px_rgba(0,0,0,0.2)] transition-all duration-300"
              style={{
                backgroundColor: '#fff',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                backgroundImage: 'url(https://www.svgrepo.com/show/11803/curriculum-vitae.svg)',
                backgroundSize: '50%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            />
          </div>
        </div>

        {/* Description */}
        <main className="animate-slide-up-delay">
          <p
            className="text-[#555] leading-[2] mb-5 max-w-[500px]"
            style={{ fontSize: '1.2rem' }}
          >
            Passionate Computer Science student with a love for web development,
            design, and innovation. Currently studying at 42Lausanne,
            I focus on creating functional and visually appealing applications.
            My journey in tech has taken me through various projects, and I strive to keep learning and growing.
          </p>
          <Link
            to="/projects"
            className="inline-block px-[18px] py-[18px] text-base font-semibold text-white rounded-[50px] transition-all duration-[0.4s] hover:bg-[#444] hover:scale-[1.05] hover:shadow-[0_6px 10px_rgba(0,0,0,0.2)] mb-[5vh]"
            style={{ backgroundColor: '#000', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
          >
            EXPLORE MY WORK
          </Link>
        </main>
      </div>

      {/* Column 2 - Right side: image + social (desktop only) */}
      <aside className="desktop-media animate-scale-in">
        <img
          src="https://i.postimg.cc/SqJm8ZbC/IMG-1692-1-2.webp"
          alt="Adrian Gonzalez"
          className="max-w-[60vh] w-full h-auto object-cover hover:scale-[1.04] transition-transform duration-300"
        />
        <div className="flex justify-center items-center mt-[10px]">
          <a
            href="https://github.com/adrgonza"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-[60px] h-[60px] rounded-full mx-[10px] hover:scale-[1.1] hover:shadow-[0_6px 12px_rgba(0,0,0,0.2)] transition-all duration-300"
            style={{
              backgroundColor: '#fff',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              backgroundImage: 'url(https://cdn.jsdelivr.net/npm/simple-icons/icons/github.svg)',
              backgroundSize: '50%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
          <a
            href="https://linkedin.com/in/adrgonza"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-[60px] h-[60px] rounded-full mx-[10px] hover:scale-[1.1] hover:shadow-[0_6px 12px_rgba(0,0,0,0.2)] transition-all duration-300"
            style={{
              backgroundColor: '#fff',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              backgroundImage: 'url(https://cdn.jsdelivr.net/npm/simple-icons/icons/linkedin.svg)',
              backgroundSize: '50%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
          <a
            href="https://salmon-guenevere-10.tiiny.site"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CV"
            className="w-[60px] h-[60px] rounded-full mx-[10px] hover:scale-[1.1] hover:shadow-[0_6px 12px_rgba(0,0,0,0.2)] transition-all duration-300"
            style={{
              backgroundColor: '#fff',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              backgroundImage: 'url(https://www.svgrepo.com/show/11803/curriculum-vitae.svg)',
              backgroundSize: '50%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
        </div>
      </aside>

      <style>{`
        /* Mobile layout (< 1000px) */
        @media (max-width: 1000px) {
          .min-h-screen {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto auto auto !important;
            align-items: start !important;
            padding: 40px 15px !important;
          }

          .desktop-media {
            display: none !important;
          }

          .mobile-media-row {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            margin-bottom: 30px !important;
          }

          .mobile-portrait {
            display: block !important;
            max-width: 180px !important;
            width: 100% !important;
            height: auto !important;
            object-fit: cover !important;
          }

          .mobile-social {
            display: flex !important;
            flex-direction: column !important;
            margin-left: auto !important;
            margin-right: 0 !important;
            gap: 10px !important;
          }
        }

        /* Default: hide mobile elements on desktop */
        .mobile-media-row {
          display: none;
        }
        .mobile-portrait {
          display: none;
        }
        .mobile-social {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Home;
