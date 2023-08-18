import React from 'react';
import logoFooter from '../../assets/images/logo-footer.png'
import './footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <img src={logoFooter} alt="Logo" class="footer-logo" />
      <span>© 2020 Kasa. All rights reserved</span>
    </div>
  );
};

export default Footer;