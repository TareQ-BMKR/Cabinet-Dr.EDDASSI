import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle, Calendar, Phone, MapPin } from './Icons';
import logo from '../assets/logo.png';

const Navbar = ({ onBookingClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Accueil', href: '#accueil', num: '01' },
    { name: 'À propos', href: '#a-propos', num: '02' },
    { name: 'Services', href: '#services', num: '03' },
    { name: 'Contact', href: '#contact', num: '04' },
  ];

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    // Smooth scroll with offset for fixed navbar
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-content">
            <a href="#accueil" className="logo-area" onClick={(e) => { e.preventDefault(); handleNavClick('#accueil'); }}>
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
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link"
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                >
                  {link.name}
                </a>
              ))}
              <button onClick={onBookingClick} className="btn-primary">
                <MessageCircle size={18} />
                Prendre RDV
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="menu-toggle"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              ref={drawerRef}
              className="mobile-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            >
              {/* Drawer Header */}
              <div className="drawer-header">
                <div className="logo-area">
                  <div className="logo-circle" style={{ width: 42, height: 42 }}>
                    <img src={logo} alt="Logo" />
                  </div>
                  <div className="brand-text">
                    <span className="brand-name" style={{ fontSize: '0.95rem' }}>Cabinet Dr. EDDASSI</span>
                    <span className="brand-tagline">Ophtalmologiste</span>
                  </div>
                </div>
                <button
                  className="drawer-close"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Fermer"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="drawer-nav">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="drawer-link"
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index + 0.1 }}
                  >
                    <span className="drawer-link-num">{link.num}</span>
                    <span className="drawer-link-name">{link.name}</span>
                  </motion.a>
                ))}
              </nav>

              {/* Drawer Footer */}
              <div className="drawer-footer">
                <motion.button
                  className="btn-primary drawer-cta"
                  onClick={() => { setIsMobileMenuOpen(false); onBookingClick(); }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <Calendar size={20} />
                  Prendre un RDV
                </motion.button>
                <div className="drawer-contact-info">
                  <a href="tel:0535523029" className="drawer-contact-item">
                    <Phone size={16} />
                    <span>05.35.52.30.29</span>
                  </a>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="drawer-contact-item">
                    <MapPin size={16} />
                    <span>19 Bd Allal Ben Abdallah, Meknès</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
