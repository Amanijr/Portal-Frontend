import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

import './navbar.css';
import logo from './logo.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
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
        <li className="dropdown">
          <span onClick={toggleDropdown}><Link to="/">Home</Link></span>
          <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
            {/* <li><HashLink smooth to="#login">Login</HashLink></li>
            <li><HashLink smooth to="#register">Register</HashLink></li> */}
          </ul>
        </li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/Tin">Tin</Link></li>
      </ul>
    </nav>
  );
};
