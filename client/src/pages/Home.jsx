import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth'; // Importing to use the `loggedIn` functionality
import FoundationButton from '../components/FoundationButton';
import Navbar from '../components/Navbar'; // Import the Navbar component

const Home = () => {
  return (
    <div>
      <main>
        <h2>Landing Page</h2>
        <h3>{Auth.loggedIn() ? `You are logged in!` : `You are not logged in!`}</h3>
      </main>
    </div>
  );
};

export default Home;
