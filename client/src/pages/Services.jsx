import React from 'react';
import './services.css'

const Services = () => {
  return (
    <section>
      <div className='service-title'>
        <h1 className='services'>Services</h1>
      </div>
      <div className='all-services'>
        <div className='img-left-div'>
          <img src="/img/sw1_no-bkgd.webp" alt="img-left" className='img-left' />
        </div>
        <div className='hand-services'>
          <div className='natural-nail'>
            <h2>Hands</h2>
            <ul className='service-list'>
              <li>Classic Manicure</li>
              <li>Gel Manicure</li>
              <li>Structured Gel Manicure</li>
            </ul>
          </div>
          <div className='nail-extend'>
            <h3>Nail Extensions</h3>
            <ul className='service-list'>
              <li>Gel X</li>
              <li>Hard Gel</li>
              <li>Acrylic</li>
            </ul>
          </div>
          <div className='nail-options'>
            <h4>Nail Options</h4>
            <ul className='service-list'>
              <li>Nail Shape</li>
              <li>Single Color</li>
              <li>French Tip</li>
              <li>Ombre 1 Color</li>
              <li>Ombre 2+ Color</li>
              <li>Cateye 1 Color</li>
              <li>Cateye 2+ Color</li>
              <li>Chrome 1 Color</li>
              <li>Chrome 2+ Color</li>
              <li>Minimal Nail Art</li>
              <li>Advanced Nail Art</li>
              <li>Encapsulated/ Imbedded Art</li>
              <li>Embellishments/Charms 1-2 Nails</li>
              <li>Embellishments/Charms 3 Nails</li>
              <li>Foil Sticker Decals</li>
              <li>Portrait Art</li>
              <li>Artist Choice</li>
              <li>Gel Polish Soak Off</li>
              <li>Acrylic Soak Off</li>
              <li>Gel X Soak Off</li>
              <li>Hand Massage</li>
              <li>Collegen Glove Treatment(Manis Only)</li>
            </ul>
          </div>
        </div>
        <div className='mid-div'>
        <div className='img-mid-div'>
          <img src="/img/rednail1_no-bkgd.png" alt="img-mid" className='img-mid' />
        </div>
        {/* <div className='img-mid-div'>
          <img src="/img/w9_NO-BKGD.webp" alt="img-mid" className='img-mid' />
        </div> */}
        </div>
        <div className='all-foot-services'>
          <div className='foot-service'>
            <h2>Feet</h2>
            <ul className='service-list'>
              <li>Classic Pedi</li>
              <li>Spa Pedi</li>
              <li>Seasonal Offering Pedi</li>
              <li>The Pedi-Cure</li>
              <li>Foot Reflexology Session</li>
            </ul>
            <div className='foot-options'>
              <h4>Pedi Options</h4>
              <ul className='service-list'>
                <li>Gel Polish</li>
                <li>Soak Off</li>
                <li>Collegen Sock Treatment (Pedi-Cure Only)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='img-right-div'>
          <img src="/img/sw6_no-bkgd_CRP.webp" alt="img-right" className='img-right' />
        </div>
      </div>
    </section >
  );
};

export default Services;
