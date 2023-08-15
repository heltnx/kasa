// components/StarRating.js
import React from 'react';
import StarIcon from './StarIcon';
import './StarIcon'

const StarRating = ({ rating }) => {
    return (
        <div className="star-rating">
            {[...Array(5)].map((_, index) => (
                <StarIcon key={index} active={index < rating} />
            ))}
        </div>
    );
};

export default StarRating;
