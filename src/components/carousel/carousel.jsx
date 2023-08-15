// Import des hooks React
import React, { useState, useEffect } from 'react';
// Import du fichier CSS pour le carrousel
import '../carousel/carousel.scss';

// Définition du composant Carousel
const Carousel = ({ images }) => {
    // Définition de l'état initial de l'index courant
    const [currentIndex, setCurrentIndex] = useState(0);

    // Ajout d'un écouteur d'événements pour les touches fléchées gauche et droite
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

    // Fonction pour aller à l'image précédente
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Fonction pour aller à l'image suivante
    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Rendu du composant Carousel
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

// Export du composant Carousel
export default Carousel;
