import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Github, Mail, Laptop, Paintbrush, Smartphone } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import '../../styles/Home.css';

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [submitted, setSubmitted] = useState(false);

  const OpenModal = () => setShowModal(true);
  const CloseModal = () => {
    setShowModal(false);
    setForm({ name: "", email: "", msg: "" })
    setSubmitted(false); 
  };

  const ChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const DownloadResume = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_68l42ds", // servceID,
        "template_mpa82xn", // Template,
        {
          name: form.name,
          from: form.email,
          message: form.msg,
          time: new Date().toLocaleString(),
        },
        "vgVTRh34_bhrc0gWa"
      );
      setSubmitted(true);
      setForm({ name: "", email: "", msg: "" })
    } catch (error) {
      alert(`Failed to send email notification ${error}`);
    }

  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text fade-in-up">
            <h1 className="hero-title">
              Creative <span className="highlight">Developer</span>
              <br />
              & Designer
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
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-Title">What I Do</h2>
          <div className="features-grid">
            <div className="feature-card fade-in-up">
              <div className="feature-icon">
                <div className="icon-circle"><Laptop size={30}/></div>
              </div>
              <h3>Web Development</h3>
              <p>Building responsive, modern websites using the latest technologies and best practices.</p>
            </div>
            <div className="feature-card fade-in-up">
              <div className="feature-icon">
                <div className="icon-circle"><Paintbrush size={30}/></div>
              </div>
              <h3>UI/UX Design</h3>
              <p>Creating intuitive and beautiful user interfaces that provide exceptional user experiences.</p>
            </div>
            <div className="feature-card fade-in-up">
              <div className="feature-icon">
                <div className="icon-circle"><Smartphone size={30}/></div>
              </div>
              <h3>Mobile Apps</h3>
              <p>Developing cross-platform mobile applications that work seamlessly on all devices.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's collaborate and bring your ideas to life with cutting-edge design and development.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn">
                Start a Project
              </Link>
              <a 
                className="btn btn-outline"
                onClick={OpenModal}
              >
                <Download size={20} />
                Request Resume
              </a>
            </div>
          </div>
        </div>
      </section>  

      {
      showModal && (
        <div className="Request-Form-Modal">
          <div className="Request-Form">
            <button className="RSQClose-Modal" onClick={CloseModal}>x</button>
            {!submitted ? (
              <>
                <h3>Request Resume/CV</h3>
                <form onSubmit={DownloadResume} className="RSQ-Form">
                <input 
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={ChangeHandler}
                  required 
                />
                <input 
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={ChangeHandler}
                  required 
                />
                <textarea 
                  name="msg" 
                  placeholder="Reason for requesting Resume/CV"
                  value={form.msg}
                  onChange={ChangeHandler}
                  required
                />
                <button type="submit" className="btn RSQ-btn" >Send Request</button>
              </form>
              </>
            ) : (
              <div>
                <h4>Request Sent!</h4>
                <p>Thank you for your interest. Your request is under review, please wait for approval of the owner</p>
                <button className="btn RSQClose-btn" onClick={CloseModal}>Close</button>
              </div>
            )}
          </div>
        </div>
      )}

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