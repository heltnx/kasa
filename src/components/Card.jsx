import React, { useState, useEffect } from 'react';
import '../style/card.css'


const Card = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    // Récupération des données du fichier JSON
    fetch('db.json/logements.json')
      .then((response) => response.json())
      .then((data) => setLogements(data));
  }, []);

  const handleLogementClick = (id) => {
    // Redirection vers la fiche "logement" avec l'id sélectionné
    window.location.href = `/logement/${id}`;
  };

  return (
    <div className='card-contain'>
      {logements.map((logement) => (
        <div key={logement.id} onClick={() => handleLogementClick(logement.id)}>
          <h2>{logement.title}</h2>
          <img src={logement.cover} alt={logement.title} />
          {/* Vous pouvez afficher d'autres informations du logement ici */}
        </div>
      ))}
    </div>
  );
};

export default Card;