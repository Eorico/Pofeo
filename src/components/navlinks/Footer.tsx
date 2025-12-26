import React from 'react';
import { Github, Facebook, Instagram, Mail, Phone, MapPin} from 'lucide-react';
import { Link } from 'react-router-dom';
import '../../styles/Footer.css'; 

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3 className="footer-title">Let's Connect</h3>
              <p className="footer-description">
                Ready to bring your ideas to life? Let's create something amazing together.
              </p>
              <div className="footer-social">
                <a href="https://github.com/Eorico" className="footer-social-link" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://www.facebook.com/ej.gonzales.37" className="footer-social-link" aria-label="LinkedIn">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/ico_gonzales/" className="footer-social-link" aria-label="Twitter">
                  <Instagram size={20} />
                </a>
                <a href="mailto:eoricogonzales@gmail.com" className="footer-social-link" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/project">Project</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Services</h3>
              <ul className="footer-links">
                <li><Link to="/contact">Web Development</Link></li>
                <li><Link to="/contact">Back-end Development</Link></li>
                <li><Link to="/contact">Front-end Development</Link></li>
                <li><Link to="/contact">Consulting</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Contact Info</h3>
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <Mail size={16} />
                  <span>eoricogonzales@gmail.com</span>
                </div>
                <div className="footer-contact-item">
                  <Phone size={16} />
                  <span>+639954849506</span>
                </div>
                <div className="footer-contact-item">
                  <MapPin size={16} />
                  <span>Philippines, Cavite, Bacoor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} Portfolio. Made with {' '} 
              <img 
                src="/animation/heart.gif" 
                alt="Dancing heart" 
                className='heart-icon'
                /> {' '} 
              by Eorico Gonzales
            </p>
            <div className="footer-bottom-links">
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;