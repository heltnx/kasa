// Import des hooks React
import React, { useState, useEffect, useCallback } from 'react';
// SCSS
import '../carousel/carousel.scss';
//images
import arrowLeft from '../../assets/images/arrow-left.png'
import arrowRight from '../../assets/images/arrow-right.png'

const Carousel = ({ images, title }) => { // (fetchLogementData, depuis "logement" (parent))

    const [currentIndex, setCurrentIndex] = useState(0); //état initial de l'index courant

    // mise à jour de l'index en gérant la navigation circulaire 
    const updateIndex = useCallback((currentIndex, step) => { // (step= nombre de click)
        return (currentIndex + step + images.length) % images.length; // + total images (évite valeur negative)
    }, [images]); //au changement d'image


    /* Touches clavier: ---- gestion d'événements pour les touches fléches gauche et droite*/
    useEffect(() => {
        const handleKeyDown = (event) => { // gère la touche appuyée
            if (event.key === 'ArrowLeft') {
                // met à jour l'index actuel ... enleve 1 de l'index actuel 
                goToPrevious()
            } else if (event.key === 'ArrowRight') {
                goToNext()
            }
        };
        window.addEventListener('keydown', handleKeyDown); // appel de la fonction (touches clavier)
        return () => {
            window.removeEventListener('keydown', handleKeyDown); // supprim l'ecouteur d'évenement
        };
        // eslint-disable-next-line
    }, []); // Dépendance vide, car cette fonction ne dépend pas des images ou de l'index.
    // ------------------------------------------------------------------//


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

            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`${title} - Slide ${index + 1}`}
                    className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
                />
            ))}

            {showPagination && ( // plus d'une image "true"
                <div className='outilsPagination'>
                    <div className="arrow left-arrow" onClick={goToPrevious}>
                        <img src={arrowLeft} alt={`${title} - Précédent`} />
                    </div>
                    <div className="arrow right-arrow" onClick={goToNext}>
                        <img src={arrowRight} alt={`${title} - Suivant`} />
                    </div>
                    <div className="pagination">
                        {currentIndex + 1}/{images.length}
                    </div>
                </div>
            )}
        </div>
    );
};


export default Carousel;
