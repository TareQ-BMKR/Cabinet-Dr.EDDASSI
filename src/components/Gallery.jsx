import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, ExternalLink, Eye, X, ChevronLeft, ChevronRight } from './Icons';

gsap.registerPlugin(ScrollTrigger);

// Images are static — define outside component to avoid re-creation on every render
const IMAGES = [
  '/Galerie/cabinet1.jpeg',
  '/Galerie/cabinet2.jpeg',
  '/Galerie/cabinet3.jpeg',
  '/Galerie/cabinet4.jpeg',
  '/Galerie/cabinet5.jpeg',
  '/Galerie/cabinet6.jpeg',
  '/Galerie/cabinet7.jpeg',
  '/Galerie/cabinet8.jpeg',
];
const MAPS_URL = 'https://maps.app.goo.gl/Buc2kPnmBpkEqHceA';

const Gallery = () => {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const sectionRef = useRef(null);
  const headerRef  = useRef(null);
  const gridRef    = useRef(null);
  const bannerRef  = useRef(null);

  /* ── Lightbox helpers (memoised to avoid EventListener churn) ── */
  const close = useCallback(() => {
    setSelectedIdx(null);
    document.body.style.overflow = '';
  }, []);

  const open = useCallback((idx) => {
    setSelectedIdx(idx);
    document.body.style.overflow = 'hidden';
  }, []);

  const next = useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedIdx(i => (i + 1) % IMAGES.length);
  }, []);

  const prev = useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedIdx(i => (i - 1 + IMAGES.length) % IMAGES.length);
  }, []);

  /* ── Keyboard navigation ── */
  useEffect(() => {
    if (selectedIdx === null) return;
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'Escape')     close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedIdx, next, prev, close]);

  /* ── GSAP scroll animations (only opacity + translateY — GPU only) ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 88%',
          fastScrollEnd: true,
        },
      });

      // Header – just fade+slide, no x to avoid layout recalculation
      const headerLeft = headerRef.current?.querySelector('.header-left');
      if (headerLeft) {
        gsap.set(headerLeft, { opacity: 0, y: 30 });
        tl.to(headerLeft, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' });
      }

      // Cards – one ScrollTrigger for the whole grid, lighter stagger
      const cards = gridRef.current?.querySelectorAll('.card-v2');
      if (cards?.length) {
        gsap.set(cards, { opacity: 0, y: 40 });
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 88%',
            fastScrollEnd: true,
          },
        });
      }

      // Banner
      if (bannerRef.current) {
        gsap.set(bannerRef.current, { opacity: 0, y: 30 });
        gsap.to(bannerRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bannerRef.current,
            start: 'top 92%',
            fastScrollEnd: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const selectedImg = selectedIdx !== null ? IMAGES[selectedIdx] : null;

  return (
    <>
      <section id="galerie" ref={sectionRef} className="gallery-v2">
        <div className="container">

          <div className="gallery-header-v2" ref={headerRef}>
            <div className="header-left">
              <span className="badge-v2">Visite Virtuelle</span>
              <h2 className="title-v2">Galerie du Cabinet</h2>
              <p className="desc-v2">Explorez nos installations modernes dédiées à la santé de vos yeux.</p>
            </div>
          </div>

          {/* Grid – plain divs so GSAP has full control; whileTap only for feedback */}
          <div className="grid-v2" ref={gridRef}>
            {IMAGES.map((src, index) => (
              <motion.div
                key={src}
                className="card-v2"
                whileTap={{ scale: 0.97 }}
                onClick={() => open(index)}
                style={{ cursor: 'pointer' }}
              >
                <div className="img-container-v2">
                  <img src={src} alt={`Cabinet Vue ${index + 1}`} loading="lazy" decoding="async" />
                  <div className="hover-overlay-v2">
                    <div className="hover-circle">
                      <Eye size={26} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="maps-banner-v2" ref={bannerRef}>
            <div className="banner-content-v2">
              <div className="pin-box">
                <MapPin size={26} />
              </div>
              <div className="text-box-v2">
                <h3>Cabinet Dr. Eddassi</h3>
                <p>66 Avenue des FAR, Meknès (Immeuble Ben Salem)</p>
              </div>
            </div>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-v2">
              S'y rendre avec Maps
              <ExternalLink size={18} />
            </a>
          </div>

        </div>
      </section>

      {/* Lightbox – kept in framer-motion for smooth enter/exit transitions */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
          >
            <button className="lightbox-close" onClick={close} aria-label="Fermer">
              <X size={28} />
            </button>

            <button className="lightbox-nav-btn prev" onClick={prev} aria-label="Image précédente">
              <ChevronLeft size={36} />
            </button>

            <motion.div
              className="lightbox-img-container"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImg} alt="Vue détaillée du cabinet" />
              <div className="lightbox-counter">
                {selectedIdx + 1} / {IMAGES.length}
              </div>
            </motion.div>

            <button className="lightbox-nav-btn next" onClick={next} aria-label="Image suivante">
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
