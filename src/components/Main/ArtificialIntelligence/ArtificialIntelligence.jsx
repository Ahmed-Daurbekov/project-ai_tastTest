import React from 'react';
import './ArtificialIntelligence.scss'
import Button from '../../../UI/Button/Button';
import videoPlay from '../../../img/videoPlay.svg'
import artificialIntelligenceImg from '../../../img/artificialIntelligenceImg.png'
import logoIpsum1 from '../../../img/logoipsum-1.svg'
import logoIpsum2 from '../../../img/logoipsum-2.svg'
import logoIpsum3 from '../../../img/logoipsum-3.svg'
import logoIpsum4 from '../../../img/logoipsum-4.svg'

const ArtificialIntelligence = () => {
  return (
    <section className="artificial-intelligence">
      <div className="container">
        <div>
          <div className="artificial-intelligence_text">
            <p className='artificial-intelligence_subtext'>Next genaretion platform</p>
            <h1 className="artificial-intelligence_title">Artificial intelligence & Syber security</h1>
            <p className="artificial-intelligence_description">
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>

            <div className="artificial-intelligence_text-btns">
              <Button>Get Started</Button>
              <Button>
                <img src={videoPlay} alt="videoPlay" />
                Watch Video
              </Button>
            </div>
          </div>

          <div className="artificial-intelligence_img">
            <img src={artificialIntelligenceImg} alt="artificialIntelligenceImg" />
          </div>
        </div>
        <div className="partners">
          <img src={logoIpsum1} alt="logoIpsum1" />
          <img src={logoIpsum2} alt="logoIpsum2" />
          <img src={logoIpsum3} alt="logoIpsum3" />
          <img src={logoIpsum4} alt="logoIpsum4" />
        </div>
      </div>
    </section>
  );
};

export default ArtificialIntelligence;