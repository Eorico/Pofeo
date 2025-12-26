import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send} from 'lucide-react';
import emailjs from '@emailjs/browser';
import '../../styles/Contact.css';
import Particles from '../ui/Background';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
        .send(
            'service_68l42ds',
            'template_pyxfxb9',
            formData,
            'vgVTRh34_bhrc0gWa'
        )
        .then(() => {
            alert('Message sent successfully');
            setFormData({
              name: '',
              email: '',
              subject: '',
              message: ''
            });
        })
        .catch((err) => {
            console.error('Failed to send message:', err);
            alert('Failed to send message. Try again later.');
        })
        .finally(() => setIsSubmitting(false));
    };

    return (
    <div className="contact">
      <section className="contact-header" >
        <div className="container">
          <h1 className="fade-in-up">Get In Touch</h1>
          <p className="contact-lead fade-in-up">
            Ready to start a project or just want to chat? I'd love to hear from you.
            Send me a message and I'll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="paticles-container">
            <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
            />
          <div className="contact-wrapper"> 
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info fade-in-up">
                <h2>Let's Connect</h2>
                <p>
                  I'm always interested in new opportunities and interesting projects. 
                  Whether you have a question or just want to say hi, I'll try my best 
                  to get back to you!
                </p>

                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="method-icon">
                      <Mail size={24} />
                    </div>
                    <div className="method-info">
                      <h3>Email</h3>
                      <p>eoricogonzales@gmail.com</p>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">
                      <Phone size={24} />
                    </div>
                    <div className="method-info">
                      <h3>Phone</h3>
                      <p>+639954849506</p>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">
                      <MapPin size={24} />
                    </div>
                    <div className="method-info">
                      <h3>Location</h3>
                      <p>Philippines, Cavite, Bacoor</p>
                    </div>
                  </div>
                </div>

                
              </div>

              <div className="contact-form-container fade-in-up">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder='Ex: Eorico Gonzales'
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='Ex: eoricogonzales@gmail.com'
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder='Ex: Consultation'
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder='...message'
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      <section className="contact-map">
        <div className="paticles-container">
          <Particles
              particleColors={['#ffffff', '#ffffff']}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
          />
        <div className="map-particle-wrapper contact-wrapper"> 
            <div className="map-container">
              <div className="map-wrapper">
                <div className="map-overlay">
                  <span>View the map</span>
                </div>
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15457.065009305295!2d120.99901686931942!3d14.4118091543385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d1005b665f6f%3A0xf407cbbad9dd2cea!2sElectrozone%20Electronics%20-%20Bacoor%20Cavite!5e0!3m2!1sen!2sph!4v1753253575017!5m2!1sen!2sph"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div> 
            </div>
          </div>
        </div>
      </section>
    </div>
    );
};

export default Contact;