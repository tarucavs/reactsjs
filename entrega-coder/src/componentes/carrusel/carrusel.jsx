import React from 'react';
import { Carrusel as BootstrapCarousel } from 'react-bootstrap';
import carousel1 from '../../assets/carru1.jpeg';
import carousel2 from '../../assets/carru2.jpg';
import carousel3 from '../../assets/carru3.jfif';
import './Carousel.css';

const carouselItems = [
  {
    src: carousel1,
    alt: 'Primera imagen'
  },
  {
    src: carousel2,
    alt: 'Segunda imagen'
  },
  {
    src: carousel3,
    alt: 'Tercera imagen'
  }
];

function Carousel() {
  return (
    
    <BootstrapCarousel className="custom-carousel">
      {carouselItems.map((item, index) => (
        <BootstrapCarousel.Item key={index}>
          <img className="d-block w-100" src={item.src} alt={item.alt} />
        </BootstrapCarousel.Item>
      ))}
    </BootstrapCarousel>
    
  );
}

export default Carousel;