// Collaps.js
import React, { useState } from 'react';
//scss
import './collapse.scss';
// icon
import arrow from '../../assets/images/arrow.png'

const Collapse = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => setIsOpen(!isOpen);
    const classOpen = isOpen ? 'open' : '';

    return (
        <div className={`collapsContainer ${classOpen}`}>
            <div className="collapsHeader" >
                <h3>{title}</h3>
                <div className={`arrow ${classOpen}`} onClick={toggleCollapse}>
                    <img src={arrow} alt="Arrow" className="arrowIcon" />
                </div>
            </div>

            <div className="collapsContent">
                {typeof description === 'string' ? (
                    <p>{description}</p>
                ) : (
                    <div >{description}</div>
                )}
            </div>
        </div>
    );
};

export default Collapse;
