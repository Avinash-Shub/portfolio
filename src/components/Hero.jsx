import React from 'react';
import { resumeData } from '../data/resume';
import './Hero.css';

import profileImage from '../assets/profile.png';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-background"></div>
            <div className="hero-background"></div>
            {/* Shapes removed as per user request */}
            <div className="container hero-content">
                <div className="hero-image-container">
                    <img src={resumeData.profile.avatar || profileImage} alt="Profile" className="hero-image" />
                </div>
                <div className="hero-text">
                    <p className="hero-greeting">Hi, I'm</p>
                    <h1 className="hero-title gradient-text">{resumeData.profile.name}</h1>
                    <h2 className="hero-subtitle">{resumeData.profile.role}</h2>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">View Work</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
