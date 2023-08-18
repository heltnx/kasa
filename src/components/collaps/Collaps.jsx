// Collaps.js
import React, { useState } from 'react';
//scss
import '../collaps/collaps.scss';
// icon
import arrow from '../../assets/images/arrow.png'

const Collaps = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => setIsOpen(!isOpen);

    return (
        <div className={`collapsContainer ${isOpen ? 'open' : ''}`}>
            <div className="collapsHeader" >
                <h3>{title}</h3>
                <div className={`arrow ${isOpen ? 'open' : ''}`} onClick={toggleCollapse}>
                    <img src={arrow} alt="Arrow" className="arrowIcon" />
                </div>
            </div>

            <div className="collapsContent">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Collaps;
