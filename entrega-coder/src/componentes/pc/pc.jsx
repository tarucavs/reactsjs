import React from 'react';
import './PcRecomendadas.css';
import pcImage1 from '..//..//assets/pc1.jpg'
import pcImage2 from '..//..//assets/pc2.jpg'
import pcImage3 from '..//..//assets/pc3.jpg'



const pcImages = [
  {
    id: 1,
  src: pcImage1,
    alt: 'PC ALTA',
  },
  {
    id: 2,
    src: pcImage2,
    alt: 'PC MEDIA',
  },
  {
    id: 3,
  src: pcImage3,
    alt: 'PC BAJA',
  },
];

function PcRecomendadas() {
  return (
    <div className="section__container">
      <span className="section__title">
        <h5 className="pc__title">PCs <strong>Recomendadas</strong></h5>
      </span>
      <div className="pc__container">
        {pcImages.map((image) => (
          <div className="pc__item" key={image.id}>
            <img src={image.src} alt={image.alt} className="pc__image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PcRecomendadas;