import React from 'react';
import { Facebook, Instagram, Linkedin, ArrowUp } from './Icons';
import logo from '../assets/logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div style={{ gridColumn: 'span 2' }}>
            <div className="footer-logo">
              <div className="logo-circle" style={{ width: 50, height: 50 }}>
                <img src={logo} alt="Logo" />
              </div>
              <div className="brand-text">
                <span className="brand-name" style={{ fontSize: '1.4rem' }}>Cabinet Dr. EDDASSI</span>
                <span className="brand-tagline">Ophtalmologiste</span>
              </div>
            </div>
            <p style={{ opacity: 0.6, maxWidth: '400px', marginBottom: '2rem' }}>
              Cabinet privé spécialisé dans la micro-chirurgie de l'œil et les traitements ophtalmologiques de haute précision à Meknès, Maroc.
              <br /><br />
              <i>"Voir le monde avec clarté."</i>
            </p>
          </div>

          <div>
            <h4 style={{ color: 'var(--primary-orange)', fontWeight: 700, marginBottom: '1.5rem', fontSize: '1.25rem' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><a href="#accueil" style={{ opacity: 0.6 }}>Accueil</a></li>
              <li><a href="#a-propos" style={{ opacity: 0.6 }}>À propos</a></li>
              <li><a href="#services" style={{ opacity: 0.6 }}>Services</a></li>
              <li><a href="#contact" style={{ opacity: 0.6 }}>Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--primary-orange)', fontWeight: 700, marginBottom: '1.5rem', fontSize: '1.25rem' }}>Cabinet</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', opacity: 0.6 }}>
              <li>19 avenue  Allal Ben Abdallah</li>
              <li>1er Étage, Bureau 5</li>
              <li> HMARIA  – Meknès, Maroc</li>
              <li style={{ color: '#fff', fontWeight: 800 }}>+212 535 52 30 29</li>
            </ul>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', opacity: 0.3, fontSize: '0.8rem' }}>
          <p>© {new Date().getFullYear()} Cabinet Dr. Eddassi Noureddine. Tous droits réservés.</p>
          <button
            onClick={scrollToTop}
            style={{ background: 'var(--primary-orange)', padding: '0.75rem', borderRadius: '50%', color: '#fff', opacity: 1 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
