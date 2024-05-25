import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="sticky-nav">
      <div className="title-bar">
        <div className="title-bar-title">Menu</div>
        <button className="menu-icon" type="button" onClick={toggleMenu}>
        &#9776;
        </button>
      </div>
      <div className={`top-bar ${menuOpen ? 'active' : ''}`}>
        <div className="top-bar-left">
          <ul className={`dropdown-menu ${menuOpen ? 'active' : ''}`}>
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
          <ul className={`menu ${menuOpen ? 'active' : ''}`}>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Sign In</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
