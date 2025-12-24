import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Mail } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import '../../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero" id="Home">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text fade-in-up">
              <h1 className="hero-title">
                <span className="highlight"> Software Developer,</span>
                <br />
                and I am {' '}
                <br />
                <span 
                  className={`highlight typing`} style={{ 
                    background: "linear-gradient(50deg, #ffffffff, #0a5d80ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }} >
                    Eorico Gonzales.
                  </span>
              </h1>
              <p className="hero-description">
                I craft beautiful digital experiences that combine elegant design 
                with powerful functionality. Let's build something amazing together.
              </p>
              <div className="hero-buttons">
                <Link to="/project" className="btn">
                  View My Work
                  <ArrowRight size={20} />
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Get In Touch
                </Link>
              </div>
            </div>

            <div className="hero-Image fade-in-up">
              <img 
                src="/assets/EO.png" 
                alt="eorico-gonzales" 
              />
            </div>
          </div>
        </div>
      </section>

      <div className="social-links">
        <a href="https://github.com/Eorico" className="social-link">
          <Github size={24} />
        </a>
        <a href="https://www.facebook.com/ej.gonzales.37" className="social-link">
          <FaFacebook size={24} />
        </a>
        <a href="mailto:eoricogonzales@gmail.com" className="social-link">
          <Mail size={24} />
        </a>
      </div>
    </div>
  );
};

export default Home;