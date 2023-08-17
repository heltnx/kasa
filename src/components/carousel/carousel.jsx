// Import des hooks React
import React, { useState, useEffect, useCallback } from 'react';
// Import du fichier CSS pour le carrousel
import '../carousel/carousel.scss';

const Carousel = ({ images, title }) => { // (fetchLogementData, depuis "logement" (parent))

    // Définition de l'état initial de l'index courant
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fonction pour mettre à jour l'index en gérant la navigation circulaire (step= nombre de click)
    const updateIndex = useCallback((currentIndex, step) => {
        return (currentIndex + step + images.length) % images.length; // + total images (évite valeur negative)
    }, [images]);

    // écouteur d'événements pour les touches fléchées du clavier gauche et droite
    useEffect(() => {
        const handleKeyDown = (event) => { // gère la touche appuyée
            if (event.key === 'ArrowLeft') {
                // met à jour l'index actuel ... enleve 1 de l'index actuel 
                setCurrentIndex((prevIndex) => updateIndex(prevIndex, -1));
            } else if (event.key === 'ArrowRight') {
                setCurrentIndex((prevIndex) => updateIndex(prevIndex, 1));
            }
        };

        window.addEventListener('keydown', handleKeyDown); // appel de la fonction (touches clavier)

        return () => {
            window.removeEventListener('keydown', handleKeyDown); // supprim l'ecouteur d'évenement
        };
    }, [images, updateIndex]); // lorsque la liste "images" change 

    // Fonction pour aller à l'image précédente
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => updateIndex(prevIndex, -1));
    };

    // Fonction pour aller à l'image suivante
    const goToNext = () => {
        setCurrentIndex((prevIndex) => updateIndex(prevIndex, 1));
    };

    // Vérifie s'il y a plus d'une image
    const showPagination = images.length > 1;

    // Rendu du composant Carousel
    return (
        <div className="carousel">
            <img src={images[currentIndex]} alt={`${title} - Slide ${currentIndex + 1}`} />
            {showPagination && (
                <div className='outilsPagination'>
                    <div className="arrow left-arrow" onClick={goToPrevious}>
                        <img src="/images/arrow-left.png" alt={`${title} - Précédent`} />
                    </div>
                    <div className="arrow right-arrow" onClick={goToNext}>
                        <img src="/images/arrow-right.png" alt={`${title} - Suivant`} />
                    </div>
                    <div className="pagination">
                        {currentIndex + 1}/{images.length}
                    </div>
                </div>
            )}
        </div>
    );
};
// Export du composant Carousel
export default Carousel;
