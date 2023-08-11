// Logement.js
import React from 'react';
import { useParams } from 'react-router-dom';
// css
import '../style/logement.css';

const Logement = () => {
  const { id } = useParams();
  return (
    <div>
      <div className='logement'>
        <h2>Logement n° {id}</h2>
      </div>
    </div>
  );
};

export default Logement;
