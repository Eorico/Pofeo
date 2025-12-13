import React, { useState, useEffect, useRef } from "react";
import { Laptop, Paintbrush, Smartphone } from "lucide-react";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import '../../styles/About.css';

const Certifications = [
    {
        title: "Python Essential 1",
        image: "/assets/PythonCert1.png"
    },
    {
        title: "Python Essential 2",
        image: "/assets/PythonCert2.png"
    },
    {
        title: "JavaScript Essential 1",
        image: "/assets/Js1Cert.png"
    },
    {
        title: "JavaScript Essential 2",
        image: "/assets/Js2Cert.png"
    },
    {
        title: "C++ Essential 1",
        image: "/assets/C++1.png"
    },
    {
        title: "Computer Science 1",
        image: "/assets/CS1.png"
    },
];

const VISIBLECARDS = 5

const About: React.FC = () => {
    const skills = [
        { name: 'React', level: 60 },
        { name: 'TypeScript', level: 40 },
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 50 },
        { name: 'Aruino', level: 50 },
        { name: 'C++', level: 50 },
        { name: 'RaspBerry Pi', level: 50 },
        { name: 'Github', level: 100 },
        { name: 'Mobile App - React Native/Android Studio', level: 80 },
    ];

    const [startIdx, setStartIdx] = useState(0);
    const timeoutRef = useRef<number | null>(null);

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
            "service_68l42ds",  
            "template_mpa82xn",  
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
    }

    useEffect(() => {
        timeoutRef.current = setInterval(() => {
            setStartIdx((prev) => (prev + 1) % Certifications.length);
        }, 2500);

        return () => {
            if (timeoutRef.current) clearInterval(timeoutRef.current);
        }
    }, [startIdx]);

    const Visible_Cards = Array.from({ length: VISIBLECARDS }, (_, i) =>
        Certifications[(startIdx + i) % Certifications.length]
    )

    const PrevImg = () => {
        setStartIdx((prev) => 
            prev === 0 ? Certifications.length - 1 : prev - 1
        );
    };

    const NextImg = () => {
        setStartIdx((prev) =>
            (prev + 1) % Certifications.length
        );
    };

    return (
        <div className="about">
            <section className="about-Self">
                <div className="container">
                    <div className="about-Content">
                        <div className="about-Text fade-in-up">
                            <h1>About Me</h1>
                            <p className="about-Lead">I'm a passionate full-stack developer with a years of experience
                                creating digital solutions that make a difference.
                            </p>
                            <p style={{ fontSize: 19.9 }}>My journey began with a curiosity about how things work on the web, and it has evolved into a deep passion for creating
                                beautiful, functionaln and user-centered applications. I believe in writing clean code, following best practices
                                , and continuously learning new technologies.
                            </p>
                            <p style={{ fontSize: 19.9 }}>
                                When I'm not coding, you can find me exploring new design trends, contributing to open source projects, 
                                or sharing knowledge with the developer community through blog posts and mentorship.
                            </p>
                        </div>
                        <div className="about-Image fade-in-up">
                            <img src="/assets/ProfPic.png" alt="Me" />
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

            <section className="Cert-Carousel">
                <div className="container">
                    <h2 className="section-Title">Certifications</h2>
                    <div className="carousel multi-carousel">
                        <button className="carousel-btn" onClick={PrevImg}>&lt;</button>
                        <div className="carousel-Track">
                            {Visible_Cards.map((cert, idx) => (
                                    <div className="carousel-card" key={idx}>
                                    <img 
                                        src={cert.image} 
                                        alt={cert.title} 
                                        className="cert-image"
                                    />
                                    <p className="cert-Title">{cert.title}</p>
                                </div>
                            ))}
                        </div>
                        <button className="carousel-btn" onClick={NextImg}>&gt;</button>
                    </div>
                </div>
            </section>

            <section className="skills">
                <div className="container">
                    <h2 className="section-Title">Skills & Expertise</h2>
                    <div className="skills-Content">
                        <div className="skills-Text">
                            <h3>Technical Skills</h3>
                            <p>I specialize in modern web technologies and have extensive experience with both fronted and backend development.
                                My expertise spans across various programming languages, frameworks, and tools.
                            </p>
                        </div>
                        <div className="skills-List">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-Item fade-in-up">
                                    <div className="skill-Header">
                                        <span className="skill-Name">{skill.name}</span>
                                        <span className="skill-Percent">{skill.level}%</span>
                                    </div>
                                    <div className="skill-Bar">
                                        <div 
                                            className="skill-Fill"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="journey">
                <div className="container">
                    <h2 className="section-Title">My Journey</h2>
                    <div className="timeline">
                        <div className="timeline-Item fade-in-up">
                            <div className="timeline-Marker"></div>
                            <div className="timeline-Content">
                                <h3>Full-Stack Developer</h3>
                                <p className="timeline-Date">2024 - Present</p>
                                <p>Specialized in Mongo DB, Express.js, React.js, and Node.js</p>
                            </div>
                        </div>
                        <div className="timeline-Item fade-in-up">
                            <div className="timeline-Marker"></div>
                            <div className="timeline-Content">
                                <h3>Frontend Developer</h3>
                                <p className="timeline-Date">2024 - Present</p>
                                <p>Focused on creating responsive, accessible user interface using modern frameworks and best practices in UI/UX design.</p>
                            </div>
                        </div>
                          <div className="timeline-Item fade-in-up">
                            <div className="timeline-Marker"></div>
                            <div className="timeline-Content">
                                <h3>Backend Developer</h3>
                                <p className="timeline-Date">2023 - Present</p>
                                <p>Started to program in python and mastering the principles. Then learning java and c# for game development.</p>
                            </div>
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
        </div>
    );
};

export default About;