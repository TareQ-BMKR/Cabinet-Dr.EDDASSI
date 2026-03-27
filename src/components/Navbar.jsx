import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from './Icons';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À propos', href: '#a-propos' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <a href="#accueil" className="logo-area">
            <div className="logo-circle">
              <img src={logo} alt="Logo" />
            </div>
            <div className="brand-text">
              <span className="brand-name">Cabinet Dr. EDDASSI</span>
              <span className="brand-tagline">Ophtalmologiste</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/212618689329" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              <MessageCircle size={18} />
              Prendre RDV
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="menu-toggle" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <button 
          className="close-btn" 
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a 
          href="https://wa.me/212618689329" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary"
          style={{ fontSize: '1.25rem', padding: '1rem 2rem' }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <MessageCircle size={24} />
          RDV WhatsApp
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
