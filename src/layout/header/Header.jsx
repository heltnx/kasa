import React from 'react';
// components
import Nav from '../../components/nav/Nav';
// css
import './header.scss';


const Header = () => {
  return (
    <header className="header">
      <img src="../images/logo.png" className="logo" alt="logo" />
      <Nav />
    </header>
  );
};

export default Header;