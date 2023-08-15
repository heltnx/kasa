// components/StarIcon.js
import React from 'react';

const StarIcon = ({ active }) => (
    <img
        src={active ? '/images/starIconSolid.png' : '/images//starIconGray.png'}
        alt="Star"
        className="star-icon"
    />
);

export default StarIcon;


