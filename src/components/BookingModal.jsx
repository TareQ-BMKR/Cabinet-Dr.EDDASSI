import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, ChevronRight, MessageCircle } from './Icons';

const BookingModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1); // 1: Day, 2: Hour
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedHour, setSelectedHour] = useState(null);
    const [availableDays, setAvailableDays] = useState([]);

    // Generate next 6 available days (excluding Sundays)
    useEffect(() => {
        const days = [];
        let current = new Date();
        current.setDate(current.getDate() + 1); // Start from tomorrow

        while (days.length < 6) {
            if (current.getDay() !== 0) { // Not Sunday
                days.push(new Date(current));
            }
            current.setDate(current.getDate() + 1);
        }
        setAvailableDays(days);
    }, []);

    const getAvailableHours = () => {
        if (!selectedDate) return [];
        
        const day = selectedDate.getDay();
        
        if (day >= 1 && day <= 5) { // Lun - Ven
            return [
                '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00',
                '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
            ];
        } else if (day === 6) { // Sam
            return [
                '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30'
            ];
        }
        return [];
    };

    const hours = getAvailableHours();

    const formatDate = (date) => {
        const options = { weekday: 'short', day: 'numeric', month: 'short' };
        return date.toLocaleDateString('fr-FR', options);
    };

    const handleConfirm = () => {
        if (!selectedDate || !selectedHour) return;

        const dateStr = formatDate(selectedDate);
        const message = `Bonjour, je souhaiterais prendre un rendez-vous pour le ${dateStr} à ${selectedHour}.`;
        const whatsappUrl = `https://wa.me/212618689329?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappUrl, '_blank');
        onClose();
        // Reset for next time
        setTimeout(() => {
            setStep(1);
            setSelectedDate(null);
            setSelectedHour(null);
        }, 500);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="modal-backdrop" onClick={onClose}>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="modal-container" 
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className="modal-close" onClick={onClose}>
                        <X size={24} />
                    </button>

                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <div className="icon-box" style={{ margin: '0 auto 1.5rem', width: '70px', height: '70px' }}>
                            {step === 1 ? <Calendar size={32} /> : <Clock size={32} />}
                        </div>
                        <h3 className="booking-step-title">
                            {step === 1 ? 'Choisissez le jour' : 'Choisissez l\'heure'}
                        </h3>
                        <p className="booking-step-subtitle">
                            {step === 1 
                                ? 'Sélectionnez une date disponible pour votre consultation' 
                                : `Pour le ${formatDate(selectedDate)}`}
                        </p>
                    </div>

                    {step === 1 ? (
                        <div className="days-grid">
                            {availableDays.map((date, index) => (
                                <button
                                    key={index}
                                    className={`selection-btn ${selectedDate?.getTime() === date.getTime() ? 'active' : ''}`}
                                    onClick={() => {
                                        setSelectedDate(date);
                                        // Reset hour if previously selected and not available on new date
                                        setSelectedHour(null);
                                        setStep(2);
                                    }}
                                >
                                    <span className="day-name">
                                        {date.toLocaleDateString('fr-FR', { weekday: 'short' })}
                                    </span>
                                    <span className="day-num">{date.getDate()}</span>
                                    <span style={{ fontSize: '0.65rem', opacity: 0.7 }}>
                                        {date.toLocaleDateString('fr-FR', { month: 'short' })}
                                    </span>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="hours-grid">
                            {hours.map((hour) => (
                                <button
                                    key={hour}
                                    className={`selection-btn ${selectedHour === hour ? 'active' : ''}`}
                                    onClick={() => setSelectedHour(hour)}
                                >
                                    <span style={{ fontSize: '1.1rem' }}>{hour}</span>
                                </button>
                            ))}
                        </div>
                    )}

                    <div className="booking-footer">
                        {step === 2 && (
                            <button 
                                onClick={() => setStep(1)}
                                style={{ fontWeight: 600, color: 'var(--primary-navy)', opacity: 0.6 }}
                            >
                                Retour
                            </button>
                        )}
                        
                        <button 
                            className="btn-confirm" 
                            disabled={!selectedDate || !selectedHour}
                            onClick={handleConfirm}
                            style={{ 
                                marginLeft: step === 2 ? 'auto' : '0',
                                width: step === 1 ? '100%' : 'auto',
                                minWidth: '200px'
                            }}
                        >
                            <span>Confirmer le RDV</span>
                            <MessageCircle size={20} />
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default BookingModal;
