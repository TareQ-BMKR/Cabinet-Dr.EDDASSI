import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Layers, Eye, Scissors, Microscope, Shield, Activity, Users, MonitorCheck } from './Icons';

const Services = ({ onBookingClick }) => {
    const services = [
        {
            title: "Chirurgie de la Cataracte",
            arabic: "جراحة المياه البيضاء",
            description: "Technique de phacoémulsification de pointe avec implants de haute qualité pour restaurer la clarté de votre vision.",
            icon: <Zap size={32} />
        },
        {
            title: "Chirurgie Réfractive au Laser",
            arabic: "جراحة الانكسار بالليزر",
            description: "Correction définitive de la myopie, l'hypermétropie et l'astigmatisme pour une vie sans lunettes.",
            icon: <Layers size={32} />
        },
        {
            title: "Chirurgie des paupières",
            arabic: "جراحة الجفون",
            description: "Chirurgie esthétique et fonctionnelle des paupières et traitement de l'appareil lacrymal.",
            icon: <Scissors size={32} />
        },
        {
            title: "Lentilles de Contact",
            arabic: "العدسات اللاصقة",
            description: "Adaptation personnalisée de lentilles souples, rigides ou sclérales pour un confort visuel optimal.",
            icon: <Eye size={32} />
        },
        {
            title: "Kératocône & Glaucome",
            arabic: "القرنية المخروطية والجلوكوما",
            description: "Diagnostic précoce et prise en charge multidisciplinaire des pathologies cornéennes et de la tension oculaire.",
            icon: <Shield size={32} />
        },
        {
            title: "Maladies rétiniennes",
            arabic: "أمراض الشبكية",
            description: "Traitement spécialisé des troubles de la rétine, y compris la DMLA et la rétinopathie diabétique.",
            icon: <Activity size={32} />
        },
        {
            title: "Ophtalmologie pédiatrique",
            arabic: "طب عيون الأطفال",
            description: "Soins spécialisés adaptés pour les enfants, traitement du strabisme et de l'amblyopie.",
            icon: <Users size={32} />
        },
        {
            title: "Exploration Ophtalmologique",
            arabic: "استكشاف العيون",
            description: "Examens complets : OCT, Échographie, Angiographie et Topographie cornéenne avec des équipements de haute résolution.",
            icon: <Microscope size={32} />
        }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2,
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }
        }
    };

    return (
        <section id="services" className="section-padding services">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    style={{ textAlign: 'center', marginBottom: '3.5rem' }}
                >
                    <span style={{ color: 'var(--primary-orange)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem' }}>Expertise Médicale</span>
                    <h2 className="section-title" style={{ marginTop: '1rem', fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>Nos Services Spécialisés</h2>
                    <div className="title-underline" style={{ margin: '1rem auto' }} />
                </motion.div>

                <motion.div
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="service-card"
                        >
                            <div className="icon-box" style={{ width: 70, height: 70 }}>
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <span className="arabic-inline">{service.arabic}</span>
                            <p style={{ color: '#666', fontSize: '0.95rem' }}>{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
                
                <div style={{ marginTop: '4rem', background: 'var(--primary-navy)', padding: 'clamp(2rem, 6vw, 5rem)', borderRadius: 'clamp(1.5rem, 4vw, 4rem)', color: '#fff', textAlign: 'center' }}>
                     <h3 style={{ fontSize: 'clamp(1.4rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: '1.25rem', lineHeight: 1.2 }}>Besoin d'un diagnostic approfondi ?</h3>
                     <p style={{ opacity: 0.7, maxWidth: '700px', margin: '0 auto 2rem', fontSize: 'clamp(0.95rem, 2.5vw, 1.2rem)', fontStyle: 'italic' }}>
                        "Notre cabinet est équipé des technologies d'imagerie les plus récentes pour garantir une précision absolue dans nos diagnostics et traitements."
                     </p>
                     <div style={{ display: 'flex', justifyContent: 'center' }}>
                         <button 
                            onClick={onBookingClick}
                            className="btn-primary"
                            style={{ height: '56px', fontSize: '1.05rem', padding: '0 2.5rem' }}
                         >
                            <MonitorCheck size={22} />
                            Prendre un rendez-vous
                         </button>
                     </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
