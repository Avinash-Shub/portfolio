import React from 'react';
import { resumeData } from '../data/resume';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Personal Projects</h2>
                <div className="projects-grid">
                    {resumeData.projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-content">
                                <h3 className="project-card-title">{project.name}</h3>
                                <div className="project-card-tech">{project.tech}</div>
                                <p className="project-card-description">{project.description}</p>
                                <ul className="project-features">
                                    {project.keyFeatures.map((feature, i) => (
                                        <li key={i} className="feature-item">{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
