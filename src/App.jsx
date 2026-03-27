import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

const App = () => {
    useEffect(() => {
        document.title = "Cabinet Dr. Eddassi Noureddine – Ophtalmologiste Meknès";
        
        // Add meta description for SEO
        const metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            const meta = document.createElement('meta');
            meta.name = "description";
            meta.content = "Cabinet d'ophtalmologie du Dr. Eddassi Noureddine à Meknès. Spécialiste en chirurgie de la cataracte, laser, et maladies de l'œil. Prenez rendez-vous.";
            document.head.appendChild(meta);
        }

        // Scroll reveal logic
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

    }, []);

    return (
        <div className="main-wrapper">
            <Navbar />
            <main>
                <div data-reveal><Hero /></div>
                <div data-reveal><About /></div>
                <div data-reveal><Services /></div>
                <div data-reveal><Contact /></div>
            </main>
            <Footer />
        </div>
    );
};

export default App;
