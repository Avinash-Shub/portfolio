import React from 'react';
import { resumeData } from '../data/resume';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="container experience-wrapper">
                <h2 className="section-title">Experience</h2>
                {resumeData.experience.map((job, index) => (
                    <div key={index} className="job-item">
                        <h3 className="job-role">{job.role}</h3>
                        <div className="job-company">{job.company}</div>
                        <div className="job-period">{job.period}</div>

                        {job.projects.map((proj, i) => (
                            <div key={i} className="job-project">
                                <h4 className="project-title">{proj.name}</h4>
                                <div className="project-tech">{proj.tech}</div>
                                <ul>
                                    {proj.details.map((detail, j) => (
                                        <li key={j} className="project-point">
                                            <span className="bullet-point">•</span>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
