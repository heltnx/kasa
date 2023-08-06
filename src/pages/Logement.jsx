// Logement.js

import React from 'react';
import { useParams } from 'react-router-dom';
// components
import Banniere from '../components/Banniere';
// css
import '../style/banniere.css';

const Logement = () => {
  const { id } = useParams();

  return (
    <div>
      <Banniere backgroundImage='/images/Image%20source%202.jpg' />
      <div>
      <h2>Logement n° {id}</h2>
      {/* Afficher les détails du logement ici */}
    </div>
    </div>
  );
};

export default Logement;
