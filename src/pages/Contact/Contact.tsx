const Contact = () => {
  return (
    <main className="min-h-screen bg-[#f5f5f7] flex flex-col items-center justify-center p-8">
      <section className="text-center mb-16">
        <p className="text-2xl text-gray-500 mb-4">Got a project in mind?</p>
        <a href="mailto:adrian.gonser@icloud.com">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 hover:text-gray-600 transition">LET'S TALK</h1>
          <svg className="w-12 h-12 mx-auto mt-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </section>
      <section className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Adrian Gonzalez</h2>
        <p className="text-gray-500 mb-8">Born in Spain, now seeking new challenges in Switzerland.</p>
        <nav aria-label="Social links">
          <ul className="flex gap-6 justify-center">
            <li><a href="https://github.com/adrgonza" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900 font-semibold">Github</a></li>
            <li><a href="https://linkedin.com/in/adrgonza" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900 font-semibold">LinkedIn</a></li>
            <li><a href="https://salmon-guenevere-10.tiiny.site" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900 font-semibold">CV</a></li>
          </ul>
        </nav>
      </section>
    </main>
  );
};

export default Contact;