import React from 'react';
// components
import Nav from '../../components/nav/Nav';
import logo from '../../assets/images/logo.png'
// scss
import './header.scss';


const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="logo" />
      <Nav />
    </header>
  );
};

export default Header;