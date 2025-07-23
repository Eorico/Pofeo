import React from "react";
import { Award, Code, Palette, User } from "lucide-react";
import '../../styles/About.css';

const About: React.FC = () => {
    const skills = [
        { name: 'React', level: 60 },
        { name: 'TypeScript', level: 40 },
        { name: 'Node.js', level: 60 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 50 },
        { name: 'UI/UX', level: 50 }
    ];

    return (
        <div className="about">
            <section className="about-Self">
                <div className="container">
                    <div className="about-Content">
                        <div className="about-Text fade-in-up">
                            <h1>About Me</h1>
                            <p className="about-Lead">I'm a passionate full-stack developer with 1 year of experience
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
                        <div className="about-Image fade-in">
                            <img src="src/assets/Img1.jpg" alt="Me" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="stats">
                <div className="container">
                    <div className="stats-Grid">
                        <div className="stats-Card fade-in-up">
                            <div className="stats-Icon">
                                <Code size={32}/>
                            </div>
                            <h3>7+</h3>
                            <p>Project </p>
                        </div>
                        <div className="stats-Card fade-in-up">
                            <div className="stats-Icon">
                                <User size={32}/>
                            </div>
                            <h3>7</h3>
                            <p>Clients </p>
                        </div>
                        <div className="stats-Card fade-in-up">
                            <div className="stats-Icon">
                                <Award size={32}/>
                            </div>
                            <h3>1+</h3>
                            <p>Year Experience</p>
                        </div>
                        <div className="stats-Card fade-in-up">
                            <div className="stats-Icon">
                                <Palette size={32}/>
                            </div>
                            <h3>10+</h3>
                            <p>Designs Created</p>
                        </div>
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
                                <h3>Senior Full-Stack Developer</h3>
                                <p className="timeline-Date">2024 - Present</p>
                                <p>Specialized in React, Node.js, and cloud architecture</p>
                            </div>
                        </div>
                        <div className="timeline-Item fade-in-up">
                            <div className="timeline-Marker"></div>
                            <div className="timeline-Content">
                                <h3>Frontend Developer</h3>
                                <p className="timeline-Date">2023 - Present</p>
                                <p>Focused on creating responsive, accessible user interface using modern frameworks and best practices in UI/UX design.</p>
                            </div>
                        </div>
                          <div className="timeline-Item fade-in-up">
                            <div className="timeline-Marker"></div>
                            <div className="timeline-Content">
                                <h3>Backend Developer</h3>
                                <p className="timeline-Date">2024 - Present</p>
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