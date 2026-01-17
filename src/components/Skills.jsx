import React from 'react';
import { resumeData } from '../data/resume';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">Skills</h2>
                <div className="skills-grid">
                    {Object.entries(resumeData.skills).map(([category, items]) => (
                        <div key={category} className="skill-category">
                            <h3 className="skill-category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                            <div className="skill-list">
                                {items.map((skill) => (
                                    <span key={skill} className="skill-badge">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
