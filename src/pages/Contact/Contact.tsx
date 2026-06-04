const Contact = () => {
  return (
    <div
      className="grid min-h-screen animate-fade-in"
      style={{
        gridTemplateColumns: '3fr 2fr',
        alignItems: 'center',
        padding: '0 40px',
        backgroundColor: '#f5f5f5',
      }}
    >
      {/* Main intro - spans full width, row 2 */}
      <header
        className="flex flex-col"
        style={{ gridColumn: '1 / -1', gridRow: '2 / 3' }}
      >
        <h2
          className="text-[#555] font-light animate-slide-up"
          style={{ fontSize: 'clamp(1rem, 3vw, 2rem)', lineHeight: 1.1 }}
        >
          Got a project in mind?
        </h2>
        <a
          href="mailto:adrian.gonser@icloud.com"
          aria-label="Contact Me"
          className="no-underline text-inherit group"
        >
          <div className="flex items-center justify-between animate-slide-up group-hover:scale-[1.03] transition-transform duration-[0.3s]">
            <h1
              className="font-extrabold tracking-tight"
              style={{ fontSize: 'clamp(3rem, 10vw, 6rem)' }}
            >
              LET'S TALK
            </h1>
            {/* Arrow */}
            <div
              className="relative cursor-pointer transition-transform duration-[0.15s]"
              style={{
                width: 'clamp(4rem, 10vw, 8rem)',
                height: 'clamp(6rem, 15vw, 10rem)',
                marginRight: 'calc(15% - 3rem)',
              }}
            >
              {/* top bar */}
              <div
                className="absolute top-[20%] left-0 w-full h-[4px] transition-all duration-[0.15s]"
                style={{ backgroundColor: '#000', transformOrigin: 'right center', transform: 'rotate(-45deg)' }}
              >
                <div
                  className="absolute top-0 h-full transition-all duration-[0.15s] group-hover:transition-all"
                  style={{
                    backgroundColor: '#7d7d7d',
                    left: '100%',
                    right: 0,
                    transitionDelay: '0s',
                  }}
                />
              </div>
              {/* bottom bar */}
              <div
                className="absolute top-[20%] left-0 w-full h-[4px] transition-all duration-[0.15s]"
                style={{ backgroundColor: '#000', transformOrigin: 'right center', transform: 'rotate(-135deg)' }}
              >
                <div
                  className="absolute top-0 h-full transition-all duration-[0.15s]"
                  style={{
                    backgroundColor: '#7d7d7d',
                    left: 0,
                    right: '100%',
                    transitionDelay: '0.15s',
                  }}
                />
              </div>
            </div>
          </div>
          <hr className="border-0 border-t-[3px] border-solid mt-4" style={{ borderColor: '#000' }} />
        </a>
      </header>

      {/* Sidebar - column 2, row 1 */}
      <main
        className="flex flex-col animate-slide-up-delay"
        style={{ gridColumn: '2 / 3', gridRow: '1 / 2' }}
      >
        <section className="mb-20">
          <h2 className="text-[1.1rem] font-semibold mb-[10px] text-[#333]">
            Adrian Gonzalez
          </h2>
          <p className="text-[#555]">
            Born in Spain, now seeking new challenges in Switzerland.
          </p>
        </section>
        <ul className="list-none p-0">
          {[
            { href: 'https://github.com/adrgonza', label: 'Github' },
            { href: 'https://linkedin.com/in/adrgonza', label: 'LinkedIn' },
            { href: 'https://salmon-guenevere-10.tiiny.site', label: 'CV' },
          ].map(({ href, label }) => (
            <li key={label} className="my-[5px]">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-inherit hover:text-[#005999] transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Contact;
