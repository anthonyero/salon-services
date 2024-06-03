import React from 'react';
import Navbar from '../components/Navbar';

import './Home.css';


const Home = () => {
  return (
    <div>
      <main className='landing-page'>
        <div>
          <img src='/img/nail-banner.png' alt='nail-banner' className='nail-banner' />
          <h1 className='welcome'>Welcome to Polished Up!!</h1>
        </div>
        <div className='landing-body'>
          <div className='main-box'>
            <div className='first-body'>
              <p className='first-fluff'>We know that life can throw all sorts of crazy at you.
                So we are here to FILE away all your worries so you can really NAIL IT !!
                We specialize in nail extensions bringing you different options such as acrylic or
                gel-X extensions. We can sparkle, chrome, bedazzle, paint, customize, or just make it simple.
                We are here to help you embrace your inner sparkle, one nail at a time! Check out some of our
                services we offer in the service page. And feel free to reach out to us via the contact page.
                If you're not seeing something that you would like, I am sure we can make it happen! Nail art is a
                masterpiece in miniature!!!
              </p>
            </div>
            <div className='nailpic'>
              <img src='/img/glitterypng.png' alt='glittery' className='glittery' />
            </div>
          </div>
          <div className='second-body'>
            <div className='img10'>
              <img src='/img/10p.png' alt='p10' className='p10' />
            </div>
            <div className='birthday'>
              <h4 className='fact'>Fun Fact</h4>
              <p className='birthday-fluff'>
                If you havent already been with us then you may not know this fun fact!!! 
                If you schedule your nail appointment within 7 days of your birthday you can receive 10% 
                off of all the services you get that day!!! (Offer is only valid once a year)
              </p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Home;
