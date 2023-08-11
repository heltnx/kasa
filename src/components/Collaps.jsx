// Collaps.js
import React, { useState } from 'react';
import '../style/collaps.css';

const Collaps = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => setIsOpen(!isOpen);

    return (
        <div className={`collaps-container ${isOpen ? 'open' : ''}`}>
            <div className="collaps-header" onClick={toggleCollapse}>
                <h3>{title}</h3>
                <div className={`arrow ${isOpen ? 'open' : ''}`}>
                    <img src="/images/arrow.svg" alt="Arrow" className="arrow-icon" />
                </div>
            </div>

            <div className="collaps-content">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Collaps;
