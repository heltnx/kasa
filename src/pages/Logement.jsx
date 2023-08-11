// Logement.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchLogementData } from '../components/api.js';
// css
import '../style/logement.css';

const Logement = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  // useEffect pour exécuter la requête une fois que le composant est monté
  useEffect(() => {
    // Appeler la fonction de récupéreration des données depuis l'API
    fetchLogementData(id).then(
      (data) => {
        if (data != null) {
          setLogement(data)
        } else {
          navigate("/landing404")
        }
      }
    );
  }, [id, navigate]);

  if (logement === null) {
    return (
      <div></div> // chargement
    )

  }

  return (
    <div>
      <div className='logement'>
        <h2>{logement.title}</h2>
        <p>{logement.location}</p>
      </div>
    </div>
  );
};

export default Logement;
