import React from 'react';
import '../style/header.css';
import Nav from '../components/Nav';

const Header = () => {
  return (
    <div className='container'>
      <header className="header">
        <img src="../images/logo.svg" className="App-logo" alt="logo" />
        <Nav />
      </header>
    </div>
  );
};

export default Header;