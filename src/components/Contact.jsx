import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, MessageCircle, Clock, ExternalLink } from './Icons';
import interiorImg from '../assets/cabinet-interior.jpg';


const Contact = ({ onBookingClick }) => {
    return (
        <section id="contact" className="section-padding" style={{ backgroundColor: '#fff' }}>
            <div className="container" style={{ maxWidth: '1280px' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <span style={{ color: 'var(--primary-orange)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem' }}>Nous Contacter</span>
                    <h2 className="section-title" style={{ marginTop: '1rem', fontSize: '3rem' }}>Prenez RDV dès aujourd'hui</h2>
                    <div className="title-underline" style={{ margin: '1rem auto' }} />
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="cabinet-image-wrapper"
                    style={{ marginBottom: '3rem', borderRadius: '3rem', overflow: 'hidden', height: '400px', boxShadow: 'var(--shadow-lg)' }}
                >
                    <img 
                        src={interiorImg} 
                        alt="Intérieur du Cabinet" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </motion.div>

                <div className="contact-container">
                    <div className="contact-info">
                        <div className="contact-info-card">
                            <div className="icon-box" style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e' }}>
                                <MessageCircle size={32} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>WhatsApp</h4>
                                <button
                                    onClick={onBookingClick}
                                    style={{ fontSize: '1.8rem', fontWeight: 800, color: '#22c55e', background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left' }}
                                >
                                    Prendre RDV en ligne
                                </button>
                            </div>
                        </div>

                        <div className="contact-info-card">
                            <div className="icon-box">
                                <Phone size={32} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>Téléphone Fixe</h4>
                                <a href="tel:0535523029" style={{ fontSize: '1.8rem', fontWeight: 800 }}>05.35.52.30.29</a>
                            </div>
                        </div>

                        <div className="contact-info-card">
                            <div className="icon-box" style={{ color: 'var(--primary-orange)', background: 'rgba(200, 88, 26, 0.1)' }}>
                                <MapPin size={32} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>Adresse</h4>
                                <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>19 Bd Allal Ben Abdallah, VN – Meknès</p>
                                <p style={{ fontSize: '0.8rem', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '1px' }}>1er Étage, Bureau 5</p>
                            </div>
                        </div>

                        <div className="contact-info-card">
                            <div className="icon-box">
                                <Clock size={32} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>Horaires</h4>
                                <p style={{ fontWeight: 600 }}>Lun - Ven: 08:30 - 17:00</p>
                                <p style={{ fontWeight: 600 }}>Sam: 09:00 - 13:00</p>
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
