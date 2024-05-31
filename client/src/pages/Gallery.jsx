import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Gallery.css';
const glitterNails = '/img/glitter nails.jpg';
const cleaningnails = '/img/pink purples nails.jpg';
const blackNails = '/img/black nails.jpg';
const nailpatterns = '/img/nailpatterns.jpg';
const longNailsPink = '/img/long nails pink.jpg';
const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section className="gallery">
      <h2>Gallery</h2>
      <p>Images showcasing our work...</p>
      <Slider {...settings}>
        <div>
          <img src={glitterNails} alt="Glitter nails" />
        </div>
        <div>
          <img src={cleaningnails} alt="Cleaning Nails" />
        </div>
        <div>
          <img src={blackNails} alt="Black Nails" />
        </div>
        <div>
          <img src={nailpatterns} alt="Nail Patterns" />
        </div>
        <div>
          <img src={longNailsPink} alt="Long Pink Nails" />
        </div>
      </Slider>
    </section>
  );
};
export default Gallery;