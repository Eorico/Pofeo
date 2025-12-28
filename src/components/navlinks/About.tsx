import React, { useState, useEffect, useRef } from "react";
import { Laptop, Brain, Smartphone, CupSoda, ArrowRight } from "lucide-react";
import { Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import '../../styles/About.css';
import Particles from "../ui/Background";
import LogoLoop from "../ui/TechStack";
import { 
    SiReact, 
    SiNextdotjs, 
    SiTypescript, 
    SiTailwindcss, 
    SiPython, 
    SiGithub,
    SiJavascript,
    SiC,
    SiArduino,
    SiRaspberrypi,
    SiNodedotjs, 
    SiGmail,
    SiBootstrap,
    SiFigma,
    SiCanva
} from 'react-icons/si';

import lineFollowing from '../../../public/video/lineFollowing.mp4';
import showDownCar from '../../../public/video/showDownCar.mp4';

const techLogos = [
  { node: <SiReact color="#09e9e5ff"/>, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs color="#17f117ff"/>, title: "Next.js", href: "https://nextjs.org",  },
  { node: <SiTypescript color="#466cdcff"/>, title: "TypeScript", href: "https://www.typescriptlang.org",  },
  { node: <SiTailwindcss color="#4ba2e8ff"/>, title: "Tailwind CSS", href: "https://tailwindcss.com",   },
  { node: <SiPython color="#e0ee22ff"/>, title: "Python", href: "https://www.python.org/",   },
  { node: <SiGithub color="#e7ebedff"/>, title: "Github", href: "https://github.com",   },
  { node: <SiJavascript color="#c7ce06ff"/>, title: "JavaScript", href: "https://www.w3schools.com/Js/",   },
  { node: <SiC color="#0ac866ff"/>, title: "C", href: "https://www.geeksforgeeks.org/c/c-programming-language/",   },
  { node: <SiArduino color="#5eeadcff"/>, title: "Arduino", href: "https://www.arduino.cc/",   },
  { node: <SiRaspberrypi color="#d40b73ff"/>, title: "Raspberry Pi", href: "https://www.raspberrypi.com/",   },
  { node: <SiGmail color="#c9cad3ff"/>, title: "Raspberry Pi", href: "https://www.gmail.com/", },
  { node: <SiBootstrap color="#0b29d4ff"/>, title: "Raspberry Pi", href: "https://www.bootstrap.com/", },
  { node: <SiFigma color="#940b4fff"/>, title: "Raspberry Pi", href: "https://www.figma.com/", },
  { node: <SiCanva color="#0b94d4ff"/>, title: "Raspberry Pi", href: "https://www.canva.com/", },
];

 

const Certifications = [
    {
        title: "Python Essential 1",
        image: "/assets/PythonCert1.png",
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

const timelineFigures = [
    {figure: '/assets/pythonJourney.png'},
    {figure: '/assets/WebDev1.png'},
    {figure: '/assets/WebDev2.png'},
    {figure: '/assets/React.png'},
    {figure: '/assets/MobileDev.png'},
    {figure: '/assets/Robotics.png'},
]

const VISIBLECARDS = 5

const About: React.FC = () => {
    const skills = [
        { name: 'React', level: 60 , logo: <SiReact size={15} color="#07bbb8ff"/>},
        { name: 'TypeScript', level: 80, logo: <SiTypescript size={15} color="#073dbbff"/> },
        { name: 'Node.js', level: 90, logo: <SiNodedotjs size={15} color="#959f07ff"/> },
        { name: 'Python', level: 80, logo: <SiPython size={15} color="#73bb07ff"/> },
        { name: 'Java/Kotlin', level: 50, logo: <CupSoda size={15} color="#bb074fff"/> },
        { name: 'Aruino', level: 50, logo: <SiArduino size={15} color="#0ac8d2ff"/> },
        { name: 'C++', level: 50, logo: <SiC size={15} color="#4fbb07ff"/> },
        { name: 'RaspBerry Pi', level: 50, logo: <SiRaspberrypi size={15} color="#b009a7ff"/> },
        { name: 'Github', level: 100, logo: <SiGithub size={15} color="#050505ff"/> },
        { name: 'Mobile App - React Native', level: 80, logo: <SiReact size={15} color="#073dbbff"/> },
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
                <div className="about-wrapper"> 
                    <div className="container">
                        <div className="about-Content">
                            <div className="about-Text fade-in-up">
                                <h1>About Me</h1>
                                <p className="about-Lead">I'm a passionate full-stack developer with a years of experience
                                    creating digital solutions for contribution in the field of software developers.
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
                </div>
                
            </div>
            </section>

            <section className="educational-background">
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
                    <div className="educational-background-wrapper about-wrapper">

                        <div className="educational-background-container container">
                            <div className="educational-text about-Text">
                                <h1>Educational Background</h1>
                            </div>

                            <div className="educational-background-content">
                
                                <div className="education-school-image">
                                    <a href="https://tup.edu.ph/">
                                        <img 
                                            src="/assets/TUPCAVITE.jpg" 
                                            alt="Technological University of the Philippines" 
                                        />
                                    </a>
                                </div>

                                <div className="educational-information">
                                    
                                    <h3>Technological University of the Philippines - Cavite Campuse</h3>
        
                                    <p>
                                        I am currently a <strong>college student</strong> at the
                                        Technological University of the Philippines - Cavite Campus.
                                        My academic journey focuses on building strong foundation in programming, 
                                        software development, and teaching.
                                    </p>

                                    <p>
                                        Through hands on projects, research activities, and practical coursework,
                                        I continuously enhance my problem-solving skills and technical experties, 
                                        preparing myself for real-world applications in software and also in teaching.
                                    </p>
                                </div>

                            </div>

                            <div className="educational-background-content">

                                <div className="educational-information">
                                    <h3>About My Course</h3>
                                    <p className="education-course">
                                        Bachelor of Technical Vocation Teacher Education 
                                        <br />
                                        Major in <strong>Computer Programming</strong>
                                    </p>

                                    <p>
                                         I am currently pursuing a Bachelor of Technical Vocation Teacher Education
                                         with a major in Computer Programming. This program uniquely combines in depth
                                         of technical training in software development with professional education subjects
                                         that prepare us or students to become effective technology educators.
                                    </p>

                                    <p>
                                        Throughtout my journey in this course, I have developed a strong foundation in programming
                                        concepts, including structured programming, object-oriented programming, web development, mobile
                                        development, and device programming. Alongside technical skills, I am also trained in teaching methodologies,
                                        classroom management, and instructional planning, allowing me to effectively communicate complex technical concepts
                                        in a clear and engaging manner.
                                    </p>

                                    <p>
                                        I continuously apply theoretical knowledge to real world scenario
                                        . This experience has strengthened my analytical thinking, adaptability, and technical
                                        experties, preparing me not only for careers in software development but also for roles
                                        in technical instructors, mentorship, and educational innovation.
                                    </p>

                                </div>

                                <div className="education-course-image education-school-image">
                                    <img 
                                        src="/assets/aboutmycourse.jpg" 
                                        alt="Technological University of the Philippines" 
                                    />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="features">  
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
                    <div className="features-wrapper about-wrapper "> 
                        <div className="container">
                            <h2 className="section-Title">What I Do</h2>
                            <div className="features-grid">

                            <Link
                                to='/project'
                                state={{ category: 'Web Application' }}
                                style={{ textDecoration: 'none' }}
                            >        
                                <div className="feature-card fade-in-up">
                                    <div className="feature-icon">
                                    <div className="icon-circle"><Laptop size={30}/></div>
                                    </div>
                                    <h3>Web Development</h3>
                                    <p>Building responsive, modern websites using the latest technologies and best practices.</p>
                                </div>
                            </Link>

                            <Link
                                to='/project'
                                state={{ category: 'Python Game Development' }}
                                style={{ textDecoration: 'none' }}
                            >  
                                <div className="feature-card fade-in-up">
                                    <div className="feature-icon">
                                    <div className="icon-circle"><Brain size={30}/></div>
                                    </div>
                                    <h3>Backend Development</h3>
                                    <p>Performative with it comes in problem solving and optimization in the backend logics.</p>
                                </div>
                            </Link>

                            <Link
                                to='/project'
                                state={{ category: 'Mobile Application' }}
                                style={{ textDecoration: 'none' }}
                            >  
                                <div className="feature-card fade-in-up">
                                    <div className="feature-icon">
                                    <div className="icon-circle"><Smartphone size={30}/></div>
                                    </div>
                                    <h3>Mobile Apps</h3>
                                    <p>Developing cross-platform mobile applications that work seamlessly on all devices.</p>
                                </div>
                            </Link>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="Cert-Carousel">
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
                    <div className="Cert-wrapper about-wrapper "> 
                        <div className="container">
                            <h2 className="section-Title">Certifications</h2>
                            <div className="carousel multi-carousel">
                                <button className="carousel-btn" onClick={PrevImg}>
                                    <ArrowLeft size={50}/>
                                </button>
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
                                <button className="carousel-btn" onClick={NextImg}>
                                    <ArrowRight size={50}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="skills">
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
                    <div className="skills-wrapper about-wrapper "> 
                        <div className="container">
                            <h2 className="section-Title">Skills & Expertise</h2>
                            <div className="skills-Content">

                                <div className="skills-Text">
                                    <h3>Technical Skills</h3>
                                    <p>I specialize in modern web technologies and have extensive experience with both fronted and backend development.
                                        My expertise spans across various programming languages, frameworks, and tools.
                                    </p>

                                    <img 
                                        src="/assets/skillsSet.png" 
                                        alt="skillsSet"
                                        className="skillSetIcon" 
                                    />
                                </div>

                                <div className="skills-List">
                                    {skills.map((skill, index) => (
                                        <div key={index} className="skill-Item fade-in-up">
                                            <div className="skill-Header">
                                                <span className="skill-Name">
                                                    {skill.name}
                                                    <span style={{ marginLeft: 10}}>
                                                        {skill.logo}
                                                    </span>
                                                </span>
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

                            <div
                                className="technology-and-tools"
                            >
                                <h2 
                                    className="section-Title"
                                    style={{ fontSize: 60 }}
                                >
                                    TECHNOLOGY AND TOOLS
                                </h2>
                            </div>
                            
                             <div style={{ 
                                height: '60px', 
                                position: 'relative', 
                                overflow: 'hidden',
                                marginTop: 30,
                                }}>
                                {/* Basic horizontal loop */}
 

                                <LogoLoop
                                    logos={techLogos}
                                    speed={60}
                                    direction="left"
                                    logoHeight={48}
                                    gap={60}
                                    hoverSpeed={0}
                                    scaleOnHover
                                    fadeOut
                                    fadeOutColor="#1e1d1dcc"
                                    ariaLabel="Technology partners"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="journey">
                <div className="journey-particles paticles-container">
                    <Particles
                        particleColors={['#ffffff', '#ffffff']}
                        particleCount={600}
                        particleSpread={12}
                        speed={0.1}
                        particleBaseSize={200}
                        moveParticlesOnHover={true}
                        alphaParticles={false}
                        disableRotation={false}
                    />
                    
                <div className="journey-wrapper about-wrapper "> 
                        <div className="container">
                            <h2 className="section-Title">My Journey</h2>
                            <div className="timeline">
                                
                                <div className="timeline-Item fade-in-up">

                                    <div className="timeline-logo-figure">
                                        <img src={timelineFigures[0].figure} alt="timeline figure" className="timeline-figure" />
                                    </div>

                                    <div className="timeline-Content">
                                        <div className="timeline-row">

                                            <div className="timeline-youtube-video">
                                                <iframe 
                                                    width="560" 
                                                    height="315" 
                                                    src="https://www.youtube.com/embed/jQzTnMyLUp4?si=W4xsFm2G5fks4FAB" 
                                                    title="YouTube video player" 
                                                    frameBorder="0" 
                                                    allow="
                                                        accelerometer; 
                                                        autoplay; 
                                                        clipboard-write; 
                                                        encrypted-media; 
                                                        gyroscope; 
                                                        picture-in-picture; 
                                                        web-share" 
                                                        referrerPolicy="strict-origin-when-cross-origin" 
                                                        allowFullScreen>
                                                </iframe>
                                            </div>

                                            <div className="timeline-information">
                                                <h3>Python - Structure Programming/OOP</h3>
                                                <p className="timeline-Date">2023</p>
                                                <p> - studied basic fundamentals and structure programming in python.</p>
                                                <p> - studied object-oriented programming in python.</p>
                                                <p> - learn to apply SOLID principles in python.</p>
                                            </div>
                                        </div>
                                        
                                    </div>

                                </div>

                                

                                <div className="timeline-Item fade-in-up">

                                    <div className="timeline-logo-figure">
                                        <img src={timelineFigures[1].figure} alt="timeline figure" className="timeline-figure" style={{ marginLeft: -250 }} />
                                    </div>

                                    <div className="timeline-Content">

                                        <div className="timeline-row">

                                            <div className="timeline-information">
                                                <h3>HTM/CSS/JS</h3>
                                                <p className="timeline-Date">2024</p>
                                                <p> - learned the basics of web development using HTML, CSS, and JavaScript.</p>
                                                <p> - created several small projects to practice my skills.</p>
                                                <p> - focused on creating responsive, accessible user interface using modern frameworks and best practices in UI/UX design.</p>
                                                <p> - learned to apply interactive elements using JavaScript.</p>
                                                <p> - Also applied best practices in javascript.</p>
                                            </div>

                                            <div className="timeline-youtube-video">
                                                <iframe 
                                                    width="560" 
                                                    height="315" 
                                                    src="https://www.youtube.com/embed/hEB0kfg22yc?si=9eYX0dysZw2UR0PL" 
                                                    title="YouTube video player" 
                                                    frameBorder="0" 
                                                    allow="
                                                        accelerometer; 
                                                        autoplay; 
                                                        clipboard-write; 
                                                        encrypted-media; 
                                                        gyroscope; 
                                                        picture-in-picture; 
                                                        web-share" 
                                                        referrerPolicy="strict-origin-when-cross-origin" 
                                                        allowFullScreen>
                                                </iframe>
                                            </div>
                                        </div>
                                    
                                </div>

                                </div>

                                <div className="timeline-Item fade-in-up">

                                    <div className="timeline-logo-figure">
                                        <img src={timelineFigures[2].figure} alt="timeline figure" className="timeline-figure" />
                                    </div>
                                    
                                    <div className="timeline-Content">
                                        <div className="timeline-row">

                                            <div className="timeline-youtube-video">
                                                <iframe 
                                                    width="560" 
                                                    height="315" 
                                                    src="https://www.youtube.com/embed/hEB0kfg22yc?si=9eYX0dysZw2UR0PL" 
                                                    title="YouTube video player" 
                                                    frameBorder="0" 
                                                    allow="
                                                        accelerometer; 
                                                        autoplay; 
                                                        clipboard-write; 
                                                        encrypted-media; 
                                                        gyroscope; 
                                                        picture-in-picture; 
                                                        web-share" 
                                                        referrerPolicy="strict-origin-when-cross-origin" 
                                                        allowFullScreen>
                                                </iframe>
                                            </div>

                                            <div className="timeline-information"> 
                                                <h3>Full Stack Developer - Django</h3>
                                                <p className="timeline-Date">2024</p>
                                                <p> - studied the fundamentals of Django and its MVC architecture.</p>
                                                <p> - learned to build RESTful APIs using Django REST Framework.</p>
                                                <p> - created full-stack applications using Django, HTML, CSS, and JavaScript.</p>
                                                <p> - focuses in authentication and security.</p>
                                                <p> - learned to use github repositories and version control.</p>
                                            </div>
                                        </div>

                                    </div>
                                    
                                </div>

                                <div className="timeline-Item fade-in-up">

                                    <div className="timeline-logo-figure">
                                        <img src={timelineFigures[3].figure} alt="timeline figure" className="timeline-figure" style={{ marginLeft: -250 }} />
                                    </div>

                                    <div className="timeline-Content">

                                        <div className="timeline-row">

                                            <div className="timeline-information">
                                                <h3>Frameworks - React and React Native</h3>
                                                <p className="timeline-Date">2024 - present</p>
                                                <p> - learned the fundamentals of React and React Native.</p>
                                                <p> - created responsive web and mobile applications using React and React Native.</p>
                                                <p> - focused on building reusable components and managing state with Redux.</p>
                                                <p> - learned to integrate third-party APIs and services.</p>
                                                <p> - created my first "Full stack Web Application" using node.js and express.js</p>
                                                <p> - manage to learn how to have communication between frontend and backend. By the use of axios.</p>
                                            </div>
                                            
                                            <div className="timeline-row-video">
                                                <div className="timeline-youtube-video">
                                                    <iframe 
                                                        width="560" 
                                                        height="315" 
                                                        src="https://www.youtube.com/embed/HElQdwV7Cd0?si=AojelmGPYcw5PkP1" 
                                                        title="YouTube video player" 
                                                        frameBorder="0" 
                                                        allow="
                                                            accelerometer; 
                                                            autoplay; 
                                                            clipboard-write; 
                                                            encrypted-media; 
                                                            gyroscope; 
                                                            picture-in-picture; 
                                                            web-share" 
                                                            referrerPolicy="strict-origin-when-cross-origin" 
                                                            allowFullScreen>
                                                    </iframe>
                                                </div>

                                                <div className="timeline-youtube-video">
                                                    <iframe 
                                                        width="560" 
                                                        height="315" 
                                                        src="https://www.youtube.com/embed/SGJhRMDhMNY?si=ty5dTdcn8YE9xJe7" 
                                                        title="YouTube video player" 
                                                        frameBorder="0" 
                                                        allow="
                                                            accelerometer; 
                                                            autoplay; 
                                                            clipboard-write; 
                                                            encrypted-media; 
                                                            gyroscope; 
                                                            picture-in-picture; 
                                                            web-share" 
                                                            referrerPolicy="strict-origin-when-cross-origin" 
                                                            allowFullScreen>
                                                    </iframe>
                                                </div>
                                                
                                            </div>

                                        </div>
                                    </div>
                                    
                                </div>

                                <div className="timeline-Item fade-in-up">

                                    <div className="timeline-logo-figure">
                                        <img src={timelineFigures[4].figure} alt="timeline figure" className="timeline-figure" />
                                    </div>

                                    <div className="timeline-Content">

                                        <div className="timeline-row">
                                            
                                            <div className="timeline-row-video">
                                                <div className="timeline-youtube-video">
                                                    <iframe 
                                                        width="560" 
                                                        height="315" 
                                                        src="https://www.youtube.com/embed/3MxME6lLwSU?si=-b65CcRlZGK1fjc8" 
                                                        title="YouTube video player" 
                                                        frameBorder="0" 
                                                        allow="
                                                            accelerometer; 
                                                            autoplay; 
                                                            clipboard-write; 
                                                            encrypted-media; 
                                                            gyroscope; 
                                                            picture-in-picture; 
                                                            web-share" 
                                                            referrerPolicy="strict-origin-when-cross-origin" 
                                                            allowFullScreen>
                                                    </iframe>
                                                </div>

                                                <div className="timeline-youtube-video">
                                                    <iframe 
                                                        width="560" 
                                                        height="315" 
                                                        src="https://www.youtube.com/embed/RZfNG1SPrmk?si=QY7Nr9XWacS0zMmT" 
                                                        title="YouTube video player" 
                                                        frameBorder="0" 
                                                        allow="
                                                            accelerometer; 
                                                            autoplay; 
                                                            clipboard-write; 
                                                            encrypted-media; 
                                                            gyroscope; 
                                                            picture-in-picture; 
                                                            web-share" 
                                                            referrerPolicy="strict-origin-when-cross-origin" 
                                                            allowFullScreen>
                                                    </iframe>
                                                </div>

                                            </div>

                                            <div className="timeline-information">
                                                <h3>Mobile Developer - React Native and Android Studio/Kotlin</h3>
                                                <p className="timeline-Date">2024 - present</p>
                                                <p> - study the workflow and analyze best conceptual frameworks approaches</p>
                                                <p> - learned to build cross-platform mobile applications using React Native.</p>
                                                <p> - also learned to build native android applications using Android Studio and Kotlin.</p>
                                                <p> - focuses on performance optimization and user experience.</p>
                                                <p> - also learned to deploy and convert to apk/abb.</p>
                                                <p> - learned to deploy mobile applications to the App Store and Google Play Store.</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="timeline-Item fade-in-up">

                                    <div className="timeline-logo-figure">
                                        <img src={timelineFigures[5].figure} alt="timeline figure" className="timeline-figure" style={{ marginLeft: -250 }}/>
                                    </div>

                                    <div className="timeline-Content">

                                        <div className="timeline-row">

                                            <div className="timeline-information">
                                                <h3>Arduino and Raspberry Pi</h3>
                                                <p className="timeline-Date">2025 - present</p>
                                                <p> - studied the fundamentals of Arduino and Raspberry Pi.</p>
                                                <p> - learned the basics of c++ and python embedded programming.</p>
                                                <p> - learned to build simple IoT projects using Arduino.</p>
                                                <p> 
                                                    - currently undergoing on a research project for integration of IOT devices by the help of raspberry pi for machine learning.
                                                    <br /> - focuses on automation and smart systems.
                                                    <br /> - learning to integrate sensors and actuators with microcontrollers.
                                                    <br /> - focuses on data collection and analysis.
                                                    <br /> - focuses on contributing to aquaculture technology through automation and smart systems.
                                                </p>
                                            </div>

                                            <div className="timeline-row-view">
                                                
                                                <div className="timeline-raw-video">
                                                    <video controls preload="metadata">
                                                        <source src={lineFollowing} type="video/mp4"/>
                                                    </video>
                                                </div>

                                                <div className="timeline-raw-video">
                                                    <video controls preload="metadata">
                                                        <source src={showDownCar} type="video/mp4"/>
                                                    </video>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

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