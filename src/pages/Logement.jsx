// Logement.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchLogementData } from '../utils/api.js';
// components
import Collaps from '../components/Collaps';
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
      <div>chargement en cours...</div>
    )

  }

  return (
    <div className='logement'>
      <div className='title'>
        <h1>{logement.title}</h1>
        <p>{logement.location}</p>
        <div className='tags'>
          {logement.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>

      </div>
      <div className='user'>

      </div>
      <div className='collaps-logement'>
        <Collaps title="Description" description={logement.description} />
        <Collaps
          title="Équipements"
          description={
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default Logement;
