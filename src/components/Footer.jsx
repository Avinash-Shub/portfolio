import React from 'react';
import { resumeData } from '../data/resume';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} {resumeData.profile.name}. All rights reserved.</p>
                <p>Built with React & Vite</p>
            </div>
        </footer>
    );
};

export default Footer;
