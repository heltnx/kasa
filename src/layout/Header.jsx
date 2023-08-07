import React from 'react';
// components
import Nav from '../components/Nav';
// css
import '../style/header.css';


const Header = () => {
  return (
    <div className='container'>
      <header className="header">
        <img src="../images/logo.png" className="logo" alt="logo" />
        <Nav />
      </header>
    </div>
  );
};

export default Header;