import React, { useEffect, useRef } from 'react';
import { Calendar, PhoneCall, ChevronRight } from './Icons';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Hero = ({ onBookingClick }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const content = heroRef.current?.querySelector('.hero-content');
      const visual = heroRef.current?.querySelector('.hero-visual');

      if (content) {
        gsap.fromTo(content, 
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        );
      }

      if (visual) {
        gsap.fromTo(visual,
          { opacity: 0, scale: 0.9, x: 20 },
          { opacity: 1, scale: 1, x: 0, duration: 1.2, delay: 0.2, ease: 'expo.out' }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="accueil" ref={heroRef} className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              Cabinet Ophtalmologique
              <span className="arabic" dir="rtl">
                عيادة الدكتور الداسي نور الدين
              </span>
            </h1>

            <p className="hero-subtitle">
              Spécialiste en médecine et chirurgie oculaire. Modernité, expertise et soins de pointe pour votre vision.
            </p>

            <div className="hero-btns">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onBookingClick}
                className="btn-primary hero-rdv-btn"
                style={{ height: 60, fontSize: '1.2rem', padding: '0 2.5rem', justifyContent: 'center' }}
              >
                <Calendar size={22} />
                Prendre RDV
              </motion.button>
              <a
                href="#services"
                className="btn-secondary"
                style={{ height: 60, fontSize: '1.2rem' }}
              >
                Nos Services
                <ChevronRight size={20} />
              </a>
            </div>

            <div className="hero-phone-row">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <PhoneCall size={20} color="var(--primary-orange)" />
                <span style={{ fontWeight: 600 }}>+212 535 52 30 29</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="floating-card">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
                alt="Cabinet Ophtalmologique"
                className="floating-img"
                fetchpriority="high"
                decoding="async"
              />
            </div>

            <div style={{ 
              position: 'absolute', 
              bottom: '15%', 
              right: '-30px', 
              background: '#fff', 
              padding: '1.25rem 2rem', 
              borderRadius: '1.5rem', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)', 
              zIndex: 10, 
              color: 'var(--primary-navy)', 
              border: '1px solid rgba(200, 88, 26, 0.1)' 
            }}>
              <div style={{ display: 'flex', color: 'var(--primary-orange)', marginBottom: '0.4rem', fontSize: '1.1rem' }}>★★★★★</div>
              <div style={{ fontWeight: 800, fontSize: '1rem', whiteSpace: 'nowrap' }}>Service Elite</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
