import React from 'react';
import { resumeData } from '../data/resume';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container contact-wrapper">
                <h2 className="section-title">Get In Touch</h2>
                <p className="contact-text">Looking for a React developer to join your team? Let's connect!</p>

                <div className="contact-card">
                    <div className="contact-info-item">
                        <span className="contact-label">Email</span>
                        <a href={`mailto:${resumeData.profile.email}`} className="contact-link">{resumeData.profile.email}</a>
                    </div>
                    <div className="contact-info-item">
                        <span className="contact-label">Phone</span>
                        <div className="contact-value">{resumeData.profile.phone}</div>
                    </div>

                    <div className="contact-socials">
                        {resumeData.profile.github && (
                            <a href={resumeData.profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                GitHub Profile
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
