// Collaps.js
import React, { useState } from 'react';
import '../style/collaps.css';

const Collaps = ({ title, description }) => {
    // Utilisation de l'état local pour gérer l'ouverture et la fermeture du panneau
    const [isOpen, setIsOpen] = useState(false);
    // Fonction pour basculer l'état "isOpen" entre vrai et faux
    const toggleCollapse = () => setIsOpen(!isOpen);

    return (
        <div className={`collaps-container ${isOpen ? 'open' : ''}`}>
            <div className="collaps-header" onClick={toggleCollapse}>
                <h3>{title}</h3>
                <div className="arrow">
                    <img src="/images/arrow.svg" alt="Arrow" className={`arrow-icon ${isOpen ? 'open' : ''}`} />
                </div>
            </div>

            {isOpen && <div className="collaps-content"><p>{description}</p></div>}
        </div>
    );

};

export default Collaps;
