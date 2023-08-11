// Card.jsx
import React, { useState, useEffect } from 'react';
// fonction import elements
import { fetchLogementsData } from './api';
// css
import '../style/card.css';

const Card = () => {
  // State pour stocker les données des logements
  const [logements, setLogements] = useState([]);

  // useEffect pour exécuter la requête une fois que le composant est monté
  useEffect(() => {
    // Appeler la fonction de récupéreration des données depuis l'API
    fetchLogementsData().then((data) => setLogements(data));
  }, []);

  // Fonction pour gérer le clic sur un logement
  const handleLogementClick = (id) => {
    // Redirection vers la fiche "logement" avec l'id sélectionné
    window.location.href = `/logement/${id}`;
  };

  return (
    <div className='item-contain'>
      {/* boucle map pour créer une carte pour chaque logement */}
      {logements.map((logement) => (
        // Utiliser la propriété "key" pour chaque élément
        <div key={logement.id} onClick={() => handleLogementClick(logement.id)} className="card-contain">
          <img src={logement.cover} alt={logement.title} />
          <h2>{logement.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Card;
