// Stars
import React from 'react';
// icon
import starGray from '../../assets/images/starIconGray.png';
import starSolid from '../../assets/images/starIconSolid.png';

const StarIcon = ({ active }) => (
    <img
        src={active ? starSolid : starGray}
        alt="Star"
        className="star-icon"
    />
);

export default StarIcon;


