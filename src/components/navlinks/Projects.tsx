import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import '../../styles/Project.css';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Financial Tracker Application",
      category: "Web Application",
      image: "/assets/FinanceWeb.gif",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://financeweb.onrender.com",
      githubUrl: "https://github.com/Eorico/FinanceWeb"
    },
    {
      id: 2,
      title: "Python Game OOP-SOLID principles",
      category: "Python Game Development",
      image: "/assets/Python3.gif",
      description: "A Python-based game that demonstrates OOP and SOLID principles. Features include modular design, unit testing, and a clean architecture.",
      technologies: ["Python", "OOP", "SOLID"],
      liveUrl: "https://github.com/Eorico/Python-Project",
      githubUrl: "https://github.com/Eorico/Python-Project"
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "Web Application",
      image: "/assets/PortFolio1.0.gif",
      description: "A modern, responsive portfolio website with smooth animations and interactive elements. Built with performance and accessibility in mind.",
      technologies: ["React", "CSS3", "Framer Motion", "Netlify"],
      liveUrl: "https://port-folio-eo-rnxj.vercel.app/",
      githubUrl: "https://github.com/Eorico/PortFolioEo"
    },
    {
      id: 4,
      title: "Gym Website",
      category: "Web Application",
      image: "/assets/Gym-Web.gif",
      description: "A gym website with class schedules, trainer profiles, and membership plans. Built with React and integrated with a backend for dynamic content.",
      technologies: ["HTML5", "CSS3", "Python3", "Django", "JavaScript"],
      liveUrl: "https://gym-web-5eko.onrender.com",
      githubUrl: "https://github.com/Eorico/Gym-Website"
    },
    {
      id: 5,
      title: "Cray Fish Simulator - Machine Learning",
      category: "Python Game Development",
      image: "/assets/crayfish.png",
      description: "A simulation of crayfish and face detection using machine learning techniques. Built with Python and OpenCV.",
      technologies: ["Python3", "OpenCV", "Machine Learning"],
      liveUrl: "https://github.com/Eorico/CrayFish_Prototype/tree/main",
      githubUrl: "https://github.com/Eorico/CrayFish_Prototype/tree/main"
    },
  ];

  const categories = ["All", "Web Application", "Python Game Development", "Mobile Application"];
  const [activeCategory, setActiveCategory] = useState("All");

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
              <p style={{ textAlign: 'center' }}>No projects found in this category.</p>
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
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            )))}
          </div>
        </div>
      </section>

      {selectedProject && selectedProjectData && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            <div className="modal-image">
              <img src={selectedProjectData.image} alt={selectedProjectData.title} />
            </div>
            <div className="modal-info">
              <h2>{selectedProjectData.title}</h2>
              <p className="modal-category">{selectedProjectData.category}</p>
              <p className="modal-description">{selectedProjectData.description}</p>
              <div className="modal-tech">
                {selectedProjectData.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="modal-actions">
                {
                  selectedProjectData.category !== "Python Game Development" && (
                    <a href={selectedProjectData.liveUrl} className="btn">
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  )
                }
                <a href={selectedProjectData.githubUrl} className="btn btn-outline">
                  <Github size={20} />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;