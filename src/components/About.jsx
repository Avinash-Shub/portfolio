import React from 'react';
import { resumeData } from '../data/resume';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <p className="about-text">{resumeData.profile.summary}</p>
                </div>
            </div>
        </section>
    );
};

export default About;
