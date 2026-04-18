import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, MapPin, MessageCircle, Clock } from './Icons';

gsap.registerPlugin(ScrollTrigger);

const Contact = ({ onBookingClick }) => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = sectionRef.current?.querySelectorAll('.contact-info-card');
            const map = sectionRef.current?.querySelector('.map-wrapper');
            const header = sectionRef.current?.querySelector('.contact-header');

            if (header) {
                gsap.fromTo(header,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
                        scrollTrigger: { trigger: header, start: 'top 90%', fastScrollEnd: true }
                    }
                );
            }

            if (cards?.length) {
                gsap.fromTo(cards,
                    { opacity: 0, x: -30 },
                    {
                        opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
                        scrollTrigger: { trigger: cards[0], start: 'top 85%', fastScrollEnd: true }
                    }
                );
            }

            if (map) {
                gsap.fromTo(map,
                    { opacity: 0, scale: 0.95 },
                    {
                        opacity: 1, scale: 1, duration: 1, ease: 'power2.out',
                        scrollTrigger: { trigger: map, start: 'top 85%', fastScrollEnd: true }
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" ref={sectionRef} className="section-padding" style={{ backgroundColor: '#fff' }}>
            <div className="container" style={{ maxWidth: '1280px' }}>
                <div className="contact-header" style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <span style={{ color: 'var(--primary-orange)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem' }}>Nous Contacter</span>
                    <h2 className="section-title" style={{ marginTop: '1rem', fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>Prenez RDV dès aujourd'hui</h2>
                    <div className="title-underline" style={{ margin: '1rem auto' }} />
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onBookingClick}
                            className="btn-primary btn-glow"
                            style={{ height: '56px', padding: '0 3.5rem', fontSize: '1.1rem', fontWeight: 700 }}
                        >
                            Cliquez ici
                        </motion.button>
                    </div>
                </div>

                <div className="contact-container">
                    <div className="contact-info">
                        <div className="contact-info-card">
                            <div className="icon-box" style={{ width: 48, height: 48, minWidth: 48, borderRadius: '0.875rem' }}>
                                <MessageCircle size={24} />
                            </div>
                            <div style={{ minWidth: 0 }}>
                                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.2rem' }}>WhatsApp</h4>
                                <a
                                    href="https://wa.me/212618689329"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ fontSize: 'clamp(1.1rem, 4vw, 1.6rem)', fontWeight: 800, display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                                >
                                    06.18.68.93.29
                                </a>
                            </div>
                        </div>

                        <div className="contact-info-card">
                            <div className="icon-box" style={{ width: 48, height: 48, minWidth: 48, borderRadius: '0.875rem' }}>
                                <Phone size={24} />
                            </div>
                            <div style={{ minWidth: 0 }}>
                                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.2rem' }}>Téléphone Fixe</h4>
                                <a
                                    href="tel:0535523029"
                                    style={{ fontSize: 'clamp(1.1rem, 4vw, 1.6rem)', fontWeight: 800, display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                                >
                                    05.35.52.30.29
                                </a>
                            </div>
                        </div>

                        <div className="contact-info-card">
                            <div className="icon-box" style={{ width: 48, height: 48, minWidth: 48, borderRadius: '0.875rem', color: 'var(--primary-orange)', background: 'rgba(200, 88, 26, 0.1)' }}>
                                <MapPin size={24} />
                            </div>
                            <div style={{ minWidth: 0 }}>
                                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.2rem' }}>Adresse</h4>
                                <p style={{ fontSize: 'clamp(0.85rem, 2.5vw, 1.1rem)', fontWeight: 600, lineHeight: 1.4 }}>19 Bd Allal Ben Abdallah, VN – Meknès</p>
                                <p style={{ fontSize: '0.75rem', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.2rem' }}>1er Étage, Bureau 5</p>
                            </div>
                        </div>

                        <div className="contact-info-card">
                            <div className="icon-box" style={{ width: 48, height: 48, minWidth: 48, borderRadius: '0.875rem' }}>
                                <Clock size={24} />
                            </div>
                            <div style={{ minWidth: 0 }}>
                                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.2rem' }}>Horaires</h4>
                                <p style={{ fontWeight: 600, fontSize: 'clamp(0.85rem, 2.5vw, 1rem)' }}>Lun - Ven: 08:30 - 17:00</p>
                                <p style={{ fontWeight: 600, fontSize: 'clamp(0.85rem, 2.5vw, 1rem)' }}>Sam: 09:00 - 13:00</p>
                                <p style={{ opacity: 0.5, fontSize: '0.8rem' }}>Dimanche: Fermé</p>
                            </div>
                        </div>
                    </div>

                    <div className="map-wrapper">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7684.007004770923!2d-5.551159564587405!3d33.899286961540945!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda04577aaa18653%3A0xed6ddd016df78e0e!2sDR.%20EDDASSI%20NOUREDDINE%20OPHTALMOLOGISTE!5e1!3m2!1sfr!2sma!4v1774619246065!5m2!1sfr!2sma"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Emplacement du Cabinet Dr. Eddassi"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
