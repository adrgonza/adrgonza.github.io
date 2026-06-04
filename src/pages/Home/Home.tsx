import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <main className="home-page">
      <section className="home-intro">
        <h1 className="home-title fade-in">Hey,</h1>
        <h2 className="home-subtitle slide-up">I'm Adrian</h2>
      </section>

      <p className="home-description slide-up-delay">
        Passionate Computer Science student with a love for web development,
        design, and innovation. Currently studying at 42Lausanne,
        I focus on creating functional and visually appealing applications.
      </p>

      <div className="scale-in">
        <Link to="/projects" className="home-button">
          EXPLORE MY WORK
        </Link>
      </div>

      <aside className="home-content">
        <img
          src="https://i.postimg.cc/SqJm8ZbC/IMG-1692-1-2.webp"
          alt="Adrian Gonzalez"
          className="home-img hover-scale-img"
        />
        <div className="home-social">
          <a
            href="https://github.com/adrgonza"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="home-social-link github"
          />
          <a
            href="https://linkedin.com/in/adrgonza"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="home-social-link linkedin"
          />
          <a
            href="https://salmon-guenevere-10.tiiny.site"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CV"
            className="home-social-link cv"
          />
        </div>
      </aside>
    </main>
  );
};

export default Home;