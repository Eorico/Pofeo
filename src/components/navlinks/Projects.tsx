import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, X, Code, CameraIcon, Cog } from 'lucide-react';
import '../../styles/Project.css';
import Particles from '../ui/Background';
import { useLocation } from 'react-router-dom';

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs,
} from 'react-icons/fa';

import { MdOutlineWaves } from "react-icons/md";

import { 
  SiMongodb, 
  SiExpress, 
  SiDjango, 
  SiFirebase ,
  SiTypescript,
  SiBlender,

} from 'react-icons/si';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const location = useLocation();
  const initialCategory = (location.state as any)?.category || 'All';

  const projects = [
    {
      id: 1,
      title: "Financial Tracker Website",
      category: "Web Application",
      image: "",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      technologies: [
        { name: "React", icon: FaReact },
        { name: "Node.js", icon: FaNodeJs },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Express", icon: SiExpress },
      
      ],
      liveUrl: "https://financeweb.onrender.com",
      githubUrl: "https://github.com/Eorico/FinanceWeb",
      thumbnails : [
         
      ]
    },
    {
      id: 2,
      title: "Python Game OOP-SOLID principles",
      category: "Python Game Development",
      image: "assets/py_screen.png",
      description: "A Python-based game that demonstrates OOP and SOLID principles. Features include modular design, unit testing, and a clean architecture.",
      technologies: [
        // "Python", "OOP", "SOLID"
        {name: "Python", icon: FaPython},
        {name: "OOP", icon: Code},
        {name: "SOLID", icon: Code},
      ],
      liveUrl: "https://github.com/Eorico/Python-Project",
      githubUrl: "https://github.com/Eorico/Python-Project",
      thumbnails : [
        "assets/py_screen1.png",
        "assets/py_screen2.png",
        "assets/py_screen3.png",
        "assets/py_screen4.png",
      ]
    },
    {
      id: 3,
      title: "MAMBA EO",
      category: "Web Application",
      image: "/assets/WEB_DEV1.png",
      description: "A modern, responsive portfolio website with smooth animations and interactive elements. Built with performance and accessibility in mind.",
      technologies: [
        {name: "Html5", icon: FaHtml5},
        {name: "CSS3", icon: FaCss3Alt},
        {name: "JavaScript", icon: FaJs},
      ],
      liveUrl: "https://port-folio-eo-rnxj.vercel.app/",
      githubUrl: "https://github.com/Eorico/PortFolioEo",
      thumbnails : [
        "/assets/WEB_DEV1.png",
        "/assets/WEB_DEV2.png",
        "/assets/WEB_DEV3.png",
      ]
    },
    {
      id: 4,
      title: "Gym Website",
      category: "Web Application",
      image: "/assets/GYMWEB1.png",
      description: "A gym website with class schedules, trainer profiles, and membership plans. Built with React and integrated with a backend for dynamic content.",
      technologies: [
        // "HTML5", "CSS3", "Python3", "Django", "JavaScript"
        {name: "Html5", icon: FaHtml5},
        {name: "CSS3", icon: FaCss3Alt},
        {name: "Python", icon: FaPython},
        {name: "Django", icon: SiDjango},
        {name: "JavaScript", icon: FaJs},
      ],
      liveUrl: "https://gym-web-5eko.onrender.com",
      githubUrl: "https://github.com/Eorico/Gym-Website",
      thumbnails : [
        "/assets/GYMWEB1.png",
        "/assets/GYMWEB2.png",
        "/assets/GYMWEB3.png",
        "/assets/GYMWEB4.png",
      ]
    },
    {
      id: 5,
      title: "Cray Fish Simulator - Machine Learning",
      category: "Python Game Development",
      image: "/assets/CRAYFISH1.png",
      description: "A simulation of crayfish and face detection using machine learning techniques. Built with Python and OpenCV.",
      technologies: [
        // "Python3", "OpenCV", "Machine Learning"
        {name: "Python", icon: FaPython},
        {name: "OpenCV", icon: CameraIcon},
        {name: "Machine Learning", icon: Cog},
      ],
      liveUrl: "https://github.com/Eorico/CrayFish_Prototype/tree/main",
      githubUrl: "https://github.com/Eorico/CrayFish_Prototype/tree/main",
      thumbnails : [
        "/assets/CRAYFISH1.png",
        "/assets/CRAYFISH2.png",
        "/assets/CRAYFISH3.png",
      ]
    },
    {
      id: 6,
      title: "Learning page: Chemistry Hub",
      category: "Web Application",
      image: "/assets/CHEMHUB1.png",
      description: "a learning page to learn chemistry concepts built with HTML, CSS, and JavaScript. then it is integrated with a react javascript.",
      technologies: [
        // "HTML", "CSS", "JavaScript", "React"
        {name: "Html5", icon: FaHtml5},
        {name: "CSS3", icon: FaCss3Alt},
        {name: "JavaScript", icon: FaJs},
        {name: "React", icon: FaReact},
      ],
      liveUrl: "https://chemistry-learning-hub.onrender.com/",
      githubUrl: "https://github.com/Eorico/Chemistry-Learning-Hub",
      thumbnails : [
        "/assets/CHEMHUB1.png",
        "/assets/CHEMHUB2.png",
        "/assets/CHEMHUB3.png",
      ]
    },
    {
      id: 7,
      title: "E-SIGNIE",
      category: "Mobile Application",
      image: "/assets/ESIGNIE1.png",
      description: "a mobile application that allows users to sign documents electronically, built with React Native and integrated with a backend for document management.",
      technologies: [
        // "JavaScript", "React Native", "TypeScript", "Firebase"
        {name: "javaScript", icon: FaJs},
        {name: "React Native", icon: FaReact},
        {name: "TypeScript", icon: SiTypescript},
        {name: "Firebase", icon: SiFirebase},
      ],
      liveUrl: "/assets/e-signie.apk",
      githubUrl: "https://github.com/Eorico/eSignie-App",
      thumbnails : [
        "/assets/ESIGNIE1.png",
        "/assets/ESIGNIE2.png",
        "/assets/ESIGNIE3.png",
        "/assets/ESIGNIE4.png",
        "/assets/ESIGNIE5.png",
        "/assets/ESIGNIE6.png",
      ]
    },
    {
      id: 8,
      title: "EORIX",
      category: "Web Application",
      image: "/assets/CHATBOTAI1.png",
      description: "Eorix is an AI-powered chatbot built with machine learning to deliver intelligent, context-aware conversations. It is designed to understand user intent, learn from interactions, and continuously improve its responses. Eorix demonstrates the practical application of machine learning, natural language processing, and modern web technologies in creating an interactive and responsive AI system.",
      technologies: [
        // "React", "TypeScript", "", "Machine Learning", "Blender 3D Model", "DeepSeek"
        {name: "React", icon: FaReact},
        {name: "TypeScript", icon: SiTypescript},
        {name: "Machine Learning", icon: Cog},
        {name: "Blender 3D Model", icon: SiBlender},
        {name: "DeepSeek", icon: MdOutlineWaves},
      ],
      liveUrl: "https://eorix-chat-bot-ai.vercel.app/",
      githubUrl: "https://github.com/Eorico/Eorix_ChatBOT_AI",
      thumbnails : [
        "/assets/CHATBOTAI1.png",
        "/assets/CHATBOTAI2.png",
        "/assets/CHATBOTAI3.png",
      ]
    },
    {
      id: 9,
      title: "?",
      category: "",
      image: "",
      description: "ON PROCESS",
      technologies: [],
      liveUrl: "",
      githubUrl: "",
      thumbnails : [
        
      ]
    },
  ];

  const categories = ["All", "Web Application", "Python Game Development", "Mobile Application"];
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const [mainImg, setMainImg] = useState<string>("")

  useEffect(() => {
    if (selectedProjectData?.image) {
      setMainImg(selectedProjectData.image);
    }
  }, [selectedProject]);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openModal = (id: number) => {
    setSelectedProject(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <div className="project">
      <section className="project-header">
        <div className="container">
          <h1 className="fade-in-up">My Work</h1>
          <p className="project-lead fade-in-up">
            A collection of projects that showcase my skills and creativity. 
            Each project represents a unique challenge and learning experience.
          </p>
        </div>
      </section>

      <section className="project-content">
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
            <div className="project-wrapper"> 
            <div className="container">
              <div className="filter-tabs fade-in-up">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`filter-tab ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="projects-grid">
                {filteredProjects.length === 0 ? (
                  <p style={{ textAlign: 'center', color: 'white' }}>No projects found in this category.</p>
                )
                : (filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="project-card fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => openModal(project.id)}
                  >
                    <div className="project-image">
                      <img src={project.image} alt={project.title} />
                      <div className="project-overlay">
                        <div className="project-actions">
                          <button className="action-btn">
                            <ExternalLink size={20} />
                          </button>
                          <button className="action-btn">
                            <Github size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="project-info">
                      <h3>{project.title}</h3>
                      <p className="project-category">{project.category}</p>
                      <p className="project-description">{project.description}</p>
                      <div className="project-tech">
                         {project.technologies.map((tech, i) => {
                            if (typeof tech === "object" && "icon" in tech) {
                              const Icon = tech.icon;
                              return (
                                <span key={i} className='tech-badge'>
                                  <span>{tech.name} <Icon size={16}/></span>
                                </span>
                              );
                            }
                            
                         })}
                      </div>
                    </div>
                  </div>
                )))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedProject && selectedProjectData && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          
            <button className="modal-close-btn" onClick={closeModal} aria-label="Close modal">
              <X size={15} strokeWidth={3} />
            </button>

        
            <div className="modal-left">
              <div className="modal-main-image-container">
                <div className="main-image-wrapper">
                  {mainImg && (
                    <img src={mainImg} alt={selectedProjectData?.title || "Project Image"} />
                  )}
                </div>
              </div>

          
            <div className='thumbnails-container'>
              <div className="thumbnails-grid">
                {selectedProjectData.thumbnails?.slice(0, 6).map((thumb, i) => (
                  <button 
                    key={i} 
                    className={`thumbnail-btn ${mainImg === thumb ? 'active' : ''}`}
                    onClick={() => setMainImg(thumb)}
                  >
                    <img src={thumb} alt={`Thumbnail ${i + 1}`} />
                  </button>
                ))}
              </div>
            </div>
              
            </div>

 
            <div className="modal-right">
              <div className='modal-right-wrapper'>
                <h2 className="modal-title">{selectedProjectData.title}</h2>
                <p className="modal-subtitle">{selectedProjectData.category}</p>
                <div className="divider"></div>

                <div>
                  <h3 className="section-title">Description</h3>
                  <p className="section-text">{selectedProjectData.description}</p>
                </div>

                {selectedProjectData.technologies.length > 0 && (
                  <div>
                    <h3 className="section-title">Tech Stack</h3>
                    <div>
                      {selectedProjectData.technologies.map((tech, i) => {
                         if (typeof tech === "object" && "icon" in tech) {
                          const Icon = tech.icon;
                          return (
                            <span key={i} className='tech-badge'>
                              <span>{tech.name} <Icon size={16}/></span>
                            </span>
                          );
                         }
                      })}
                    </div>
                  </div>
                )}
              </div>

              <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {selectedProjectData.liveUrl && selectedProjectData.category !== "Python Game Development" && (
                  <a
                    href={selectedProjectData.liveUrl}
                    className="modal-button live-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span></span>
                    <ExternalLink size={18} />
                    {selectedProjectData.category === "Mobile Application" ? 'Download APK' : 'Live Demo'}
                  </a>
                )}

                {selectedProjectData.githubUrl && (
                  <a
                    href={selectedProjectData.githubUrl}
                    className="modal-button code-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span></span>
                    <Github size={18} />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;