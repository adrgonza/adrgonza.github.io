const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 min-h-screen items-center px-10 animate-fade-in">
      {/* Main intro */}
      <header className="md:col-span-3 flex flex-col">
        <h2 className="text-xl md:text-2xl font-light text-gray-600 animate-slide-up">
          Got a project in mind?
        </h2>
        <a
          href="mailto:adrian.gonser@icloud.com"
          aria-label="Contact Me"
          className="group mt-4"
        >
          <div className="flex items-center justify-between animate-slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              LET'S TALK
            </h1>
            {/* Arrow */}
            <div className="relative w-24 h-36 md:w-32 md:h-44 mr-[15%] cursor-pointer transition-transform group-hover:scale-[1.03]">
              <div className="absolute top-[20%] left-0 w-full h-1 bg-black origin-right rotate-[-45deg] transition-all group-hover:animate-pulse">
                <div className="absolute top-0 right-full h-full bg-gray-500 transition-all group-hover:right-0 group-hover:delay-150"></div>
              </div>
              <div className="absolute top-[20%] left-0 w-full h-1 bg-black origin-right rotate-[-135deg] transition-all">
                <div className="absolute top-0 left-full h-full bg-gray-500 transition-all group-hover:left-full group-hover:right-0 transition-delay-150"></div>
              </div>
            </div>
          </div>
          <hr className="border-t-2 md:border-t-3 border-black mt-4" />
        </a>
      </header>

      {/* Sidebar content */}
      <main className="md:col-span-2 md:col-start-4 flex flex-col animate-slide-up-delay">
        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">
            Adrian Gonzalez
          </h2>
          <p className="text-gray-600">
            Born in Spain, now seeking new challenges in Switzerland.
          </p>
        </section>
        <ul className="space-y-2">
          <li>
            <a
              href="https://github.com/adrgonza"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/adrgonza"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://salmon-guenevere-10.tiiny.site"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CV"
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              CV
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Contact;
