import React from 'react';
import nailpolish from '/img/bunchofnailpolish.jpg';
import cleaningnails from '/img/cleaningnails.jpg';
import manicure from '/img/manicure.jpg';
import nailpatterns from '/img/nailpatterns.jpg';
import nailtech from '/img/nailtechwithcolors.jpg';
import './Gallery.css'; // Ensure this path is correct for the CSS file

const Gallery = () => {
  return (
    <section className="gallery">
      <h2>Gallery</h2>
      <p>Images showcasing our work...</p>
      <div className="gallery-grid">
        <img src={nailpolish} alt="Bunch of Nail Polish" />
        <img src={cleaningnails} alt="Cleaning Nails" />
        <img src={manicure} alt="Manicure" />
        <img src={nailpatterns} alt="Nail Patterns" />
        <img src={nailtech} alt="Nail Tech with Colors" />
      </div>
    </section>
  );
};

export default Gallery;
