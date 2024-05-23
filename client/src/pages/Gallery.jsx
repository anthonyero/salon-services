import React from 'react';
import nailpolish from '../assets/bunchofnailpolish.jpg';
import cleaningnails from '../assets/cleaningnails.jpg';
import manicure from '../assets/manicure.jpg';
import nailpatterns from '../assets/nailpatterns.jpg';
import nailtech from '../assets/nailtechwithcolors.jpg';
 // Ensure this path is correct for the CSS file

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
