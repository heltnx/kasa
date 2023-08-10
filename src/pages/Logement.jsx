// Logement.js
import React from 'react';
import { useParams } from 'react-router-dom';

// css
import '../style/banniere.css';
import '../style/logement.css';

const Logement = () => {
  const { id } = useParams();

  return (
    <div>
      <div className='logement'>
        <h2>Logement n° {id}</h2>
        {/* Afficher les détails du logement ici */}
      </div>
    </div>
  );
};

export default Logement;
