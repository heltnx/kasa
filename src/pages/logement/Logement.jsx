// Logement.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchLogementData } from '../../utils/api.js';
// components
import Carousel from '../../components/carousel/carousel.jsx';
import Collaps from '../../components/collaps/Collaps.jsx';
import StarRating from '../../components/stars/StarRating.jsx';
// css
import '../logement/logement.scss';
import Layout from '../../layout/Layout.jsx';

const Logement = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  // exécuter la requête une fois que le composant est monté
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
    <Layout>
      <div className='logement'>

        { /* ----- Carousel ---------------------- */}
        <Carousel images={logement.pictures} title={logement.title} />

        { /*------ titre et location ---------------*/}
        <div className='title'>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>

          { /*------ tags ------------------------*/}
          <div className='tags'>
            {logement.tags.map((tag, index) => (
              <span key={index} >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className='user'>
          { /*------ hosts ------------------------*/}
          <div className='host-info'>
            <p className="host-name">{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
          </div>

          { /*------ stars ------------------------*/}
          <div className='rating'>
            <StarRating rating={logement.rating} />
          </div>
        </div>

        { /*------ collapses ------------------------*/}
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
    </Layout>
  );
};

export default Logement;
