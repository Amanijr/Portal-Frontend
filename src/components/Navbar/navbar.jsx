import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

import './navbar.css';
import logo from './logo.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="hamburger" onClick={toggleNavbar}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`navbar-links ${isOpen ? 'show' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><HashLink smooth to="#login">Login</HashLink></li>
         <li><HashLink smooth to="#register">Register</HashLink></li>
         <li><Link to="/services">services</Link></li>
         <li><Link to="/contacts">contacts</Link></li>

        </ul>
      </nav>
    </div>
  );
};
