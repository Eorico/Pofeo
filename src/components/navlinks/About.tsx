import React, { useState, useEffect, useRef } from "react";
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
        { name: 'Node.js', level: 60 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 50 },
        { name: 'UI/UX', level: 50 }
    ];

    const [startIdx, setStartIdx] = useState(0);
    const timeoutRef = useRef<number | null>(null);

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
                            <p>My journey began with a curiosity about how things work on the web, and it has evolved into a deep passion for creating
                                beautiful, functionaln and user-centered applications. I believe in writing clean code, following best practices
                                , and continuously learning new technologies.
                            </p>
                            <p>
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
        </div>
    );
};

export default About;