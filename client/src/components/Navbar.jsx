import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Auth from '../utils/auth';

const Navbar = () => {
  const styles = {
    button: {
      color: "black"
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className="row slogan">
        <div className='columns large-8 left-title'>
          <h1 className="menu-title">Polished Up</h1>
        </div>
        <div className='columns large-4 right-title'>
          <img src="/img/NPPNG.png" alt="right-banner" className='right-banner' />
          <div className='marg-right'>
            <p>When all else fails... </p>
          </div>
          <div className='marg-right align'>
            <p>at least you have nice nails</p>
          </div>
        </div>
      </div>

      <div className="sticky-container">
        {isMobile && (
          <div className="title-bar">
            <div className="title-bar-title">Menu</div>
            <button className="menu-icon" type="button" onClick={toggleMenu}>
              &#9776;
            </button>
          </div>
        )}
        <div className={`top-bar row ${menuOpen ? 'active' : ''}`}>
            <div className="top-bar-left column large-8">
              <ul className={`dropdown-menu ${menuOpen ? 'active' : ''}`}>
                <li className="thumbnail-container">
                  <img src="/img/red4.jpg" alt="thmbnail" className='thmbnail' />
                </li>
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
                <li><Link to="/request-appointment" onClick={closeMenu}>Appointments</Link></li>
                <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
                <li><Link to="/reviews" onClick={closeMenu}>Reviews</Link></li>
                <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                {Auth.loggedIn() && <li><Link to="/me" onClick={closeMenu}>Me</Link></li>}
              </ul>
            </div>
            <div className='top-bar-mid'></div>
            <div className="top-bar-right">
              {Auth.loggedIn() ? (
                <button className="logout" type="button" onClick={() => { Auth.logout(); closeMenu(); }} style={styles.button}>
                  Log Out
                </button>
              ) : (
                <ul className={`menu ${menuOpen ? 'active' : ''}`}>
                  <li><Link to="/signup" onClick={closeMenu}>Sign Up</Link></li>
                  <li><Link to="/login" onClick={closeMenu}>Sign In</Link></li>
                </ul>
              )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;