import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import '../../styles/Project.css';
import Particles from '../ui/Background';
import { useLocation } from 'react-router-dom';
import { projects } from '../ui/Project.Links';

import GLBViewer from '../ui/GLB.Model.Viewer';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const location = useLocation();
  const initialCategory = (location.state as any)?.category || 'All';

  const categories = ["All", "Web Application", "Python Game Development", "Mobile Application", "Device Programming"];
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const [mainImg, setMainImg] = useState<string>("");

  const isGLB = (src?: string) => src?.endsWith(".glb");

  useEffect(() => {
    if (!selectedProjectData) return;

    if (selectedProjectData.model) {
      setMainImg(selectedProjectData.model);
    } else if (selectedProjectData.image) {
      setMainImg(selectedProjectData.image);
    } else {
      setMainImg("");
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
                      {project.image && (
                        <img src={project.image} alt={project.title} />
                      )}
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
                    isGLB(mainImg) ? (
                      <div className='model-container image-viewer'>
                        <GLBViewer src={mainImg}/>
                      </div>
                    ) : (
                      <img className='image-viewer' src={mainImg} alt={selectedProjectData?.title} />
                    )
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