import React from 'react';
import logo from '../../assets/logo.svg';

import './Navbar.css';

const Navbar = () => (
  <header className="Navbar">
    <div className="Navbar__Logo">
      <img src={logo} alt="Logo" />
    </div>
    <div className="Navbar__Menu">
      <ul>
        <li>Inicio</li>
        <li>Sobre Mi</li>
        <li>Contacto</li>
      </ul>
    </div>
  </header>
);

export default Navbar;
