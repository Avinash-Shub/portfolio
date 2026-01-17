import { useState, useEffect } from 'react';

const useActiveSection = (sectionIds, offset = 100) => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            let current = '';

            for (const id of sectionIds) {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Check if top of section is near the top of viewport
                    if (rect.top <= offset && rect.bottom >= offset) {
                        current = id;
                        break; // Found the active section
                    }
                }
            }

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionIds, offset]);

    return activeSection;
};

export default useActiveSection;
