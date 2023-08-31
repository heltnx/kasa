import React from 'react';
import logoFooter from '../../assets/images/logo-footer.png'
import './footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <img src={logoFooter} alt="Logo" className="footer-logo" />
      <span>© 2020 Kasa. All rights reserved</span>
    </footer>
  );
};

export default Footer;