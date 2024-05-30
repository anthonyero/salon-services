import React from 'react';
import glitterNails from '/img/glitter nails.jpg';
import cleaningnails from '/img/pink purples nails.jpg';
import blackNails from '/img/black nails.jpg';
import nailpatterns from '/img/nailpatterns.jpg';
import longNailsPink from '/img/long nails pink.jpg';
import './Gallery.css';
const Gallery = () => {
  return (
    <section className="gallery">
      <h2>Gallery</h2>
      <p>Images showcasing our work...</p>
      <div className="gallery-grid">
        <img src={glitterNails} alt="Glitter nails" />
        <img src={cleaningnails} alt="Cleaning Nails" />
        <img src={blackNails} alt="Black Nails" />
        <img src={nailpatterns} alt="Nail Patterns" />
        <img src={longNailsPink} alt="Long Pink Nails" />
      </div>
    </section>
  );
};
export default Gallery;