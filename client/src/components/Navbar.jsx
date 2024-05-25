import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <div className="sticky-nav">
      <div className="top-bar-left">
        <ul className="dropdown menu" data-dropdown-menu>
          <li className="menu-text">Salon Services</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/Reviews">Reviews</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Sign In</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
