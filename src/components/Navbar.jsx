import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, MessageCircle, Calendar, Phone, MapPin } from './Icons';
import logo from '../assets/logo.png';
import { gsap } from 'gsap';

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
    { name: 'Galerie', href: '#galerie', num: '04' },
    { name: 'Contact', href: '#contact', num: '05' },
  ];

  const handleNavClick = (href) => {
    closeDrawer();
    // Smooth scroll with offset for fixed navbar
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 450); // Increased timeout to wait for exit animation
  };

  const backdropRef = useRef(null);

  const openDrawer = () => {
    setIsMobileMenuOpen(true);
  };

  const closeDrawer = () => {
    if (!drawerRef.current) {
      setIsMobileMenuOpen(false);
      return;
    }
    const tl = gsap.timeline({
      onComplete: () => setIsMobileMenuOpen(false)
    });
    tl.to('.drawer-link', { opacity: 0, x: 20, stagger: 0.05, duration: 0.2, ease: 'power2.in' });
    tl.to(drawerRef.current, { x: '100%', duration: 0.4, ease: 'power2.in' }, '-=0.1');
    tl.to(backdropRef.current, { opacity: 0, duration: 0.3 }, '-=0.3');
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      const tl = gsap.timeline();
      tl.fromTo(backdropRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 });
      tl.fromTo(drawerRef.current, { x: '100%' }, { x: 0, duration: 0.6, ease: 'expo.out' }, '-=0.2');
      tl.fromTo('.drawer-link', 
        { opacity: 0, x: 30 }, 
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' }, 
        '-=0.4'
      );
      tl.fromTo('.drawer-footer > *', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1 }, 
        '-=0.3'
      );
    }
  }, [isMobileMenuOpen]);

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
                Réserver Maintenant
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="menu-toggle"
              onClick={openDrawer}
              aria-label="Ouvrir le menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            ref={backdropRef}
            className="drawer-backdrop"
            onClick={closeDrawer}
          />

          {/* Drawer Panel */}
          <div
            ref={drawerRef}
            className="mobile-drawer"
            style={{ willChange: 'transform' }}
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
                onClick={closeDrawer}
                aria-label="Fermer"
              >
                <X size={24} />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="drawer-nav">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="drawer-link"
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                >
                  <span className="drawer-link-num">{link.num}</span>
                  <span className="drawer-link-name">{link.name}</span>
                </a>
              ))}
            </nav>

            {/* Drawer Footer */}
            <div className="drawer-footer">
              <button
                className="btn-primary drawer-cta"
                onClick={() => { closeDrawer(); onBookingClick(); }}
              >
                <Calendar size={20} />
                Réserver Maintenant
              </button>
              <div className="drawer-contact-info">
                <a href="tel:0535523029" className="drawer-contact-item">
                  <Phone size={16} />
                  <span>05.35.52.30.29</span>
                </a>
                <a href="https://maps.app.goo.gl/Buc2kPnmBpkEqHceA" target="_blank" rel="noopener noreferrer" className="drawer-contact-item">
                  <MapPin size={16} />
                  <span>19 avenue Allal Ben Abdallah</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
