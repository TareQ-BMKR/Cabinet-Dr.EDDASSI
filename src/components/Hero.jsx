import React from 'react';
import { Calendar, PhoneCall, ChevronRight, MousePointer2 } from './Icons';
import { motion } from 'framer-motion';

const Hero = ({ onBookingClick }) => {
  return (
    <section id="accueil" className="hero">
      <div className="container">
        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >

            <h1 className="hero-title">
              Cabinet Ophtalmologique
              <span className="arabic" dir="rtl">
                عيادة الدكتور إداسي نور الدين
              </span>
            </h1>

            <p className="hero-subtitle">
              Spécialiste en médecine et chirurgie oculaire. Modernité, expertise et soins de pointe pour votre vision.
            </p>

            <div className="hero-btns">
              <button
                onClick={onBookingClick}
                className="btn-primary"
                style={{ height: 60, fontSize: '1.2rem', padding: '0 2.5rem' }}
              >
                <Calendar size={22} />
                Prendre RDV
              </button>
              <a
                href="#services"
                className="btn-secondary"
                style={{ height: 60, fontSize: '1.2rem' }}
              >
                Nos Services
                <ChevronRight size={20} />
              </a>
            </div>

            <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', opacity: 0.7, alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <PhoneCall size={20} color="var(--primary-orange)" />
                <span style={{ fontWeight: 600 }}>+212 535 52 30 29</span>
              </div>
            </div>
          </motion.div>

          <div className="hero-visual">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="floating-card"
            >
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
                alt="Clinic"
                className="floating-img"
              />
            </motion.div>

            {/* Stats badges using inline styles for layout since tailwind is gone */}
            <div style={{ position: 'absolute', bottom: '15%', right: '-30px', background: '#fff', padding: '1.25rem 2rem', borderRadius: '1.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', zIndex: 10, color: 'var(--primary-navy)', border: '1px solid rgba(200, 88, 26, 0.1)' }}>
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
