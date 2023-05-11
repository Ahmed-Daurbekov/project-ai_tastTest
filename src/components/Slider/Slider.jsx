import React from 'react';
import './Slider.scss'
import Card from './Card/Card';
import sliderImg1 from '../../img/slider-img_1.svg'
import sliderImg2 from '../../img/slider-img_2.svg'
import sliderImg3 from '../../img/slider-img_3.svg'
import sliderImg4 from '../../img/slider-img_4.svg'
import sliderImg5 from '../../img/slider-img_5.svg'

const Slider = () => {
  const [dotCount, setDotCount] = React.useState(3)
  let sliderLine = React.useRef(null)
  let slider = React.useRef(null)

  React.useEffect(() => {
    sliderLine.current.style.width = '5970px'

    window.addEventListener('resize', dotsCount)

  }, [])
  
  function dotsCount() {
    let count = Math.ceil(slider.current.offsetWidth / (slider.current.querySelector('.card').offsetWidth + 35))
    if (count == 1) {
      setDotCount(15)
    } else if (count == 2) {
      setDotCount(7)
    } else if (count == 5) {
      setDotCount(3)
    } else if (count == 3) {
      setDotCount(5)
    } else if (count == 4) {
      setDotCount(3)
    }
  }

  function scrollLeft(e, number) {
    slider.current.querySelectorAll('.dot').forEach(dot => {
      dot.classList.remove('active')
    });
    
    e.target.classList.add('active')
    
    if (number == 0) {
      sliderLine.current.style.left = `0px`
    } else {
      sliderLine.current.style.left = `-${(slider.current.offsetWidth * (number-1)) + (40 * (number - 1))}px`
    }
  }
  let dotArr = []
  for (let i = 2; i <= dotCount; i++) {
    dotArr.push(i)
  }

  return (
    <div ref={slider} className='slider'>
      <div ref={sliderLine} className="slider-line">

        <Card>
          <div className='card-container'>
            <span className="card-img">
              <img src={sliderImg1} alt="sliderImg1" />
            </span>
            <p className='card-title card-title_1'>Naxly as the Winners in Global Agency Awards</p>
            <p className='card-description'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
        </Card>
        <Card>
          <div className='card-container'>
            <span className="card-img">
              <img src={sliderImg2} alt="sliderImg2" />
            </span>
            <p className='card-title card-title_2'>Expert Prespective Agency Awards</p>
            <p className='card-description'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
        </Card>
        <Card>
          <div className='card-container'>
            <span className="card-img">
              <img src={sliderImg3} alt="sliderImg3" />
            </span>
            <p className='card-title card-title_3'>Business Prespective Global Agency Awards</p>
            <p className='card-description'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
        </Card>
        <Card>
          <div className='card-container'>
            <span className="card-img">
              <img src={sliderImg4} alt="sliderImg4" />
            </span>
            <p className='card-title card-title_4'>Value for Results in Global Agency Awards</p>
            <p className='card-description'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
        </Card>
        <Card>
          <div className='card-container'>
            <span className="card-img">
              <img src={sliderImg5} alt="sliderImg5" />
            </span>
            <p className='card-title card-title_5'>Global Experience in Agency Awards</p>
            <p className='card-description'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
        </Card>
        
        <Card>
          <div className='card-container'>
            <span className="card-img">
              <img src={sliderImg1} alt="sliderImg1" />
            </span>
            <p className='card-title card-title_1'>Naxly as the Winners in Global Agency Awards</p>
            <p className='card-description'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
        </Card>
        <Card>
          <div className='card-container'>
            <span className="card-img">
              <img src={sliderImg2} alt="sliderImg2" />
            </span>
            <p className='card-title card-title_2'>Expert Prespective Agency Awards</p>
            <p className='card-description'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
        </Card>
        <Card>
          <div className='card-container'>
            <span className="card-img">
              <img src={sliderImg3} alt="sliderImg3" />
            </span>
            <p className='card-title card-title_3'>Business Prespective Global Agency Awards</p>
            <p className='card-description'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
        </Card>
        <Card>
          <div className='card-container'>
            <span className="card-img">
              <img src={sliderImg4} alt="sliderImg4" />
            </span>
            <p className='card-title card-title_4'>Value for Results in Global Agency Awards</p>
            <p className='card-description'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
        </Card>
        <Card>
          <div className='card-container'>
            <span className="card-img">
              <img src={sliderImg5} alt="sliderImg5" />
            </span>
            <p className='card-title card-title_5'>Global Experience in Agency Awards</p>
            <p className='card-description'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
        </Card>

        <Card>
          <div className='card-container'>
            <span className="card-img">
              <img src={sliderImg1} alt="sliderImg1" />
            </span>
            <p className='card-title card-title_1'>Naxly as the Winners in Global Agency Awards</p>
            <p className='card-description'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
        </Card>
        <Card>
          <div className='card-container'>
            <span className="card-img">
              <img src={sliderImg2} alt="sliderImg2" />
            </span>
            <p className='card-title card-title_2'>Expert Prespective Agency Awards</p>
            <p className='card-description'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
        </Card>
        <Card>
          <div className='card-container'>
            <span className="card-img">
              <img src={sliderImg3} alt="sliderImg3" />
            </span>
            <p className='card-title card-title_3'>Business Prespective Global Agency Awards</p>
            <p className='card-description'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
        </Card>
        <Card>
          <div className='card-container'>
            <span className="card-img">
              <img src={sliderImg4} alt="sliderImg4" />
            </span>
            <p className='card-title card-title_4'>Value for Results in Global Agency Awards</p>
            <p className='card-description'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
        </Card>
        <Card>
          <div className='card-container'>
            <span className="card-img">
              <img src={sliderImg5} alt="sliderImg5" />
            </span>
            <p className='card-title card-title_5'>Global Experience in Agency Awards</p>
            <p className='card-description'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
        </Card>

      </div>
      <div className="pogination-dots">
      <div onClick={(e) => scrollLeft(e, 0)} className="dot dot-1 active"></div>
        {
          dotArr.map(item => {
            return <div onClick={(e) => scrollLeft(e, item)} className="dot dot-1"></div>
          })
        }
        {/* {(dotCount == 15) ? <>
          <div onClick={(e) => scrollLeft(e, 0)} className="dot dot-1 active"></div>
          <div onClick={(e) => scrollLeft(e, 1)} className="dot dot-2"></div>
          <div onClick={(e) => scrollLeft(e, 2)} className="dot dot-3"></div>
          <div onClick={(e) => scrollLeft(e, 3)} className="dot dot-4"></div>
          <div onClick={(e) => scrollLeft(e, 4)} className="dot dot-5"></div>
          <div onClick={(e) => scrollLeft(e, 5)} className="dot dot-6"></div>
          <div onClick={(e) => scrollLeft(e, 6)} className="dot dot-7"></div>
          <div onClick={(e) => scrollLeft(e, 7)} className="dot dot-8"></div>
          <div onClick={(e) => scrollLeft(e, 8)} className="dot dot-9"></div>
          <div onClick={(e) => scrollLeft(e, 9)} className="dot dot-10"></div>
          <div onClick={(e) => scrollLeft(e, 10)} className="dot dot-11"></div>
          <div onClick={(e) => scrollLeft(e, 11)} className="dot dot-12"></div>
          <div onClick={(e) => scrollLeft(e, 12)} className="dot dot-13"></div>
          <div onClick={(e) => scrollLeft(e, 13)} className="dot dot-14"></div>
          <div onClick={(e) => scrollLeft(e, 14)} className="dot dot-15"></div>
        </> : (dotCount == 7) ? <>
          <div onClick={(e) => scrollLeft(e, 0)} className="dot dot-1 active"></div>
          <div onClick={(e) => scrollLeft(e, 1)} className="dot dot-2"></div>
          <div onClick={(e) => scrollLeft(e, 2)} className="dot dot-3"></div>
          <div onClick={(e) => scrollLeft(e, 3)} className="dot dot-4"></div>
          <div onClick={(e) => scrollLeft(e, 4)} className="dot dot-5"></div>
          <div onClick={(e) => scrollLeft(e, 5)} className="dot dot-6"></div>
          <div onClick={(e) => scrollLeft(e, 6)} className="dot dot-7"></div>
          <div onClick={(e) => scrollLeft(e, 7)} className="dot dot-8"></div>
        </> : (dotCount == 5) ? <>
          <div onClick={(e) => scrollLeft(e, 0)} className="dot dot-1 active"></div>
          <div onClick={(e) => scrollLeft(e, 1)} className="dot dot-2"></div>
          <div onClick={(e) => scrollLeft(e, 2)} className="dot dot-3"></div>
          <div onClick={(e) => scrollLeft(e, 3)} className="dot dot-4"></div>
          <div onClick={(e) => scrollLeft(e, 4)} className="dot dot-5"></div>
          <div onClick={(e) => scrollLeft(e, 5)} className="dot dot-6"></div>
        </> : <>
        <div onClick={(e) => scrollLeft(e, 0)} className="dot dot-1 active"></div>
          <div onClick={(e) => scrollLeft(e, 1)} className="dot dot-2"></div>
          <div onClick={(e) => scrollLeft(e, 2)} className="dot dot-3"></div>
        </>} */}
        {/* <div onClick={(e) => scrollLeft(e, 0)} className="dot dot-1 active"></div>
        <div onClick={(e) => scrollLeft(e, 1)} className="dot dot-2"></div>
        <div onClick={(e) => scrollLeft(e, 2)} className="dot dot-3"></div> */}
      </div>
    </div>
  );
};

export default Slider;