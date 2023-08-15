import React, { useState, useEffect } from 'react';
import '../carousel/carousel.scss';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') {
                setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            } else if (event.key === 'ArrowRight') {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [images]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="carousel">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />

            <div className="arrow left-arrow" onClick={goToPrevious}>
                <img src="/images/arrow-left.png" alt="Précédent" />
            </div>
            <div className="arrow right-arrow" onClick={goToNext}>
                <img src="/images/arrow-right.png" alt="Suivant" />
            </div>

            <div className="pagination">
                {currentIndex + 1}/{images.length}
            </div>
        </div>
    );
};

export default Carousel;
