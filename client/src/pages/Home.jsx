import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth'; // Importing to use the `loggedIn` functionality
import FoundationButton from '../components/FoundationButton';

// Placeholder content for the different sections

const Home = () => {
  return (
    <main>
      <h2>Landing Page</h2>
      <h3>{Auth.loggedIn() ? `You are logged in!` : `You are not logged in!`}</h3>

      <section id="about">
        <h3>About</h3>
        <p>Information about the salon...</p>
      </section>

      <section id="services">
        <h3>Services</h3>
        <p>List of available services...</p>
        {/* Example: Using a query to fetch services */}
        {/* {data.services.map(service => (
          <div key={service.id}>
            <h4>{service.name}</h4>
            <p>{service.description}</p>
          </div>
        ))} */}
      </section>

      <section id="gallery">
        <h3>Gallery</h3>
        <p>Images showcasing our work...</p>
      </section>

      <section id="auth">
        <h3>Sign Up / Sign In</h3>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Sign In</Link>
      </section>

      <section id="booking">
        <h3>Booking</h3>
        <FoundationButton />
      </section>

      <section id="experiences">
        <h3>Experiences and Reviews</h3>
        <p>Stories</p>
      </section>

      <section id="social-media">
        <h3>Social Media Links</h3>
        <p>Links to our social media pages...</p>
      </section>

      <section id="contact">
        <h3>Contact</h3>
        <p>Contact information and form...</p>
      </section>
    </main>
  );
};

export default Home;
