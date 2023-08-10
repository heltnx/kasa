import React from 'react';
import Banniere from '../components/Banniere';
import Collaps from '../components/Collaps';


const About = () => {
    return (
        <div className="about">
            <Banniere backgroundImage='/images/Image%20source%202.jpg' />
            <Collaps
                title="Fiabilité"
                description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
 régulièrement vérifiées par nos équipes."
            />
            <Collaps
                title="Respect"
                description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme."
            />
            <Collaps
                title="Service"
                description="Découvrez l'évasion parfaite avec le service de location de vacances Kasa. Des séjours inoubliables vous attendent, offrant confort et aventure dans des destinations de rêve."
            />
            <Collaps
                title="Sécurité"
                description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
également des ateliers sur la sécurité domestique pour nos hôtes."
            />

        </div>
    );
};

export default About;