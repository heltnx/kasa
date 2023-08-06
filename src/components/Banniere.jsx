// Banniere.js

import React from 'react';
import '../style/banniere.css';

const Banniere = ({ children, backgroundImage }) => { // 2 prop
  const banniereStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return ( // return la div avec l'url de l'image appropriée
    <div className="banniere" style={banniereStyle}>
      {children} 
    </div>
  );
};

export default Banniere;

