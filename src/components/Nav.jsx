import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [activeLink, setActiveLink] = useState('');

  // Fonction pour mettre à jour l'état du lien actif
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <nav>
      <NavLink
        exact
        to="/"
        onClick={() => handleLinkClick('home')}
        className={activeLink === 'home' ? 'nav-link active' : 'nav-link'}
      >
        Accueil
      </NavLink>
      <NavLink
        to="/About"
        onClick={() => handleLinkClick('about')}
        className={activeLink === 'about' ? 'nav-link active' : 'nav-link'}
      >
        A Propos
      </NavLink>
    </nav>
  );
};

export default Nav;



