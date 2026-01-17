import { useEffect } from 'react';

const useScrollAnimation = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('section');
        elements.forEach((el) => {
            el.classList.add('animate-on-scroll', 'fade-up');
            observer.observe(el);
        });

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }); // Run on every render to catch new elements if any, or use logic to run once
};

export default useScrollAnimation;
