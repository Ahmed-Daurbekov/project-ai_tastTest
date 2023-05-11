import React from 'react';
import Button from '../../../UI/Button/Button';
import applyAI from '../../../img/applyAI.png'
import customerOpinions from '../../../img/customer-opinions.png'
import './ApplyAI.scss'
import Slider from '../../Slider/Slider';

const ApplyAI = () => {
  return (
    <section className='applyAI'>
      <div className="container">
        <div className="applyAI_img">
          <img src={applyAI} alt="applyAI" />
        </div>
        <div className="applyAI_text">
          <h2 className='applyAI_title'>
            Apply AI, Deep Learning and Data Sciece to solve
          </h2>
          <p className='applyAI_description'>
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </p>
          <Button>Learn More</Button>
        </div>
      </div>
      <Slider />
      <div className='customer-opinions'>
        <div className="container">
          <div className="customer-opinions_img">
            <img src={customerOpinions} alt="customerOpinions" />
          </div>
          <div className="customer-opinions_text">
            <h1 className="applyAI_title">What our clients say about our awesome solutions</h1>
            <p className="customer-opinions_description">To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it who do not know.</p>
            <p className="customer-opinions_description">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing .</p>
            <p className="customer-opinions_description">Lorem ipsum is placeholder previewing layouts and visual mockups.</p>
            <p className="customer-opinions_description">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyAI;