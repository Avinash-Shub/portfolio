import React, { useState, useEffect } from 'react';
import useActiveSection from '../hooks/useActiveSection';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const activeSection = useActiveSection([
        'hero', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'
    ]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Skills', href: '#skills', id: 'skills' },
        { name: 'Experience', href: '#experience', id: 'experience' },
        { name: 'Projects', href: '#projects', id: 'projects' },
        { name: 'Certifications', href: '#certifications', id: 'certifications' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#" className="navbar-logo">
                    SAR<span className="nav-dot">.</span>
                </a>

                <ul className="nav-links desktop-links">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
