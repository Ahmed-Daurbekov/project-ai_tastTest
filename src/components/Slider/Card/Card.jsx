import React from 'react';
import './Card.scss'
import sliderImg1 from '../../../img/slider-img_1.svg'

const Card = ({children, img}) => {
  return (
    <div className='card'>
      {children}
    </div>
  );
};

export default Card;