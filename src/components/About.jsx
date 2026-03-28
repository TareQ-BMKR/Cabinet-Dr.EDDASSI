import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Building2 } from './Icons';
import drPhoto from '../assets/dr-eddassi.jpg';

const About = () => {
    const credentials = [
        {
            icon: <GraduationCap size={24} />,
            text: "Lauréat de la Faculté de Médecine et de Pharmacie de Fès",
            arabic: "خريج كلية الطب والصيدلة بفاس"
        },
        {
            icon: <Award size={24} />,
            text: "Diplômé en chirurgie réfractive et phacoémulsification – Université de Brest, France",
            arabic: "دبلوم تصحيح البصر بالليزر وجراحة المياه البيضاء(الجلالة) - بجامعة بريست فرنسا"
        },
        {
            icon: <Award size={24} />,
            text: "Diplômé en Adaptation des Lentilles de Contact – Université de Versailles Paris, France",
            arabic: "دبلوم في العدسات اللاصقة - جامعة فرساي باربس، فرنسا"
        },
        {
            icon: <Building2 size={24} />,
            text: "Ancien Médecin à l'Hôpital Moulay Ismail de Meknès",
            arabic: "طبيب سابق بمستشفى مولاي إسماعيل بمكناس"
        },
        {
            icon: <Building2 size={24} />,
            text: "Ancien Médecin à l'Hôpital Omar Idrissi de Fès",
            arabic: "طبيب سابق بمستشفى عمر الإدريسي بفاس"
        }
    ];

    return (
        <section id="a-propos" className="section-padding about">
            <div className="container" style={{ maxWidth: '1200px' }}>
                <div className="about-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="about-img-container"
                    >
                        <img
                            src={drPhoto}
                            alt="Dr. Eddassi Noureddine"
                            className="about-img"
                        />
                        <div style={{ 
                            position: 'absolute', 
                            bottom: 0, 
                            left: 0, 
                            right: 0,
                            padding: '2.5rem 3rem',
                            background: 'linear-gradient(to top, rgba(26, 42, 74, 0.95) 0%, rgba(26, 42, 74, 0.8) 50%, transparent 100%)',
                            borderBottomLeftRadius: '2rem',
                            borderBottomRightRadius: '2rem',
                            color: '#fff',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem'
                        }}>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: 0 }}>Dr. EDDASSI Noureddine</h3>
                            <p style={{ 
                                color: 'var(--primary-orange)', 
                                fontWeight: 700, 
                                fontSize: '0.9rem', 
                                textTransform: 'uppercase', 
                                letterSpacing: '3px',
                                margin: 0
                            }}>Ophtalmologiste Expert</p>
                        </div>
                    </motion.div>

                    <div className="about-content">
                        <div style={{ marginBottom: '2.5rem' }}>
                            <h2 className="section-title">Parcours & Expertise</h2>
                            <div className="title-underline" />
                            <p style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', color: '#666', borderLeft: '4px solid var(--primary-orange)', paddingLeft: '1.25rem', fontStyle: 'italic', marginBottom: '2rem', lineHeight: 1.7 }}>
                                "Engagé pour offrir les meilleurs soins ophtalmologiques en utilisant des techniques chirurgicales avancées et des technologies de pointe."
                                <span className="font-arabic" dir="rtl" style={{ display: 'block', marginTop: '0.875rem', fontSize: 'clamp(1rem, 3vw, 1.4rem)', color: 'var(--primary-navy)', lineHeight: 1.8 }}>
                                    ملتزمون بتقديم أفضل رعاية للعيون باستخدام تقنيات جراحية متقدمة وأحدث التقنيات.
                                </span>
                            </p>
                        </div>

                        <div className="credentials-list">
                            {credentials.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="credential-item"
                                >
                                    <div className="icon-box">
                                        {item.icon}
                                    </div>
                                    <div className="credential-text">
                                        <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--primary-navy)', marginBottom: '0.25rem' }}>{item.text}</p>
                                        <p className="font-arabic" dir="rtl" style={{ fontSize: '1.1rem', color: '#999' }}>{item.arabic}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
