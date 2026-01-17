import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { resumeData } from '../data/resume';
import './Certifications.css';

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const getLogoColor = (logo) => {
        switch (logo) {
            case 'udemy': return '#A435F0';
            case 'meta': return '#0668E1';
            case 'w3schools': return '#04AA6D';
            default: return '#333';
        }
    };

    const getLogoText = (logo) => {
        switch (logo) {
            case 'udemy': return 'U';
            case 'meta': return '∞';
            case 'w3schools': return 'W3';
            default: return 'C';
        }
    };

    const openModal = (cert) => {
        setSelectedCert(cert);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedCert(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="certifications" className="certifications-section">
            <div className="container">
                <h2 className="section-title">Certifications & Courses</h2>
                <div className="certifications-grid">
                    {resumeData.certifications.map((cert, index) => (
                        <div key={index} className="certification-card">
                            <div className="certification-header">
                                <div className="certification-logo" style={{ backgroundColor: getLogoColor(cert.logo) }}>
                                    {getLogoText(cert.logo)}
                                </div>
                                <div>
                                    <h3 className="certification-title">{cert.title}</h3>
                                    <span className="certification-provider">{cert.provider}</span>
                                </div>
                            </div>
                            <p className="certification-description">{cert.description}</p>
                            <button
                                onClick={() => openModal(cert)}
                                className="view-cert-btn"
                            >
                                View Certificate
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {selectedCert && createPortal(
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal-btn" onClick={closeModal}>&times;</button>
                        <img
                            src={selectedCert.image}
                            alt={`${selectedCert.title} Certificate`}
                            className="modal-image"
                        />
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
};

export default Certifications;
