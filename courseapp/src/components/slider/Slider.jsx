import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Slider.scss';
import Carousel from 'react-bootstrap/Carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Myslider() {

  const url = 'https://localhost:7184';

  const [slider, setSlider] = useState([]);

  const getAllSlider = async () => {
    await axios.get(`${url}/api/Slider/GetAll`)
    .then((res) => {
      setSlider(res.data);
    });
  }

  useEffect(() => {
    getAllSlider();
  }, []);

  const directionButtons = (direction) => {
    return (
      <span aria-hidden="true" className={direction === 'Next' ? 'next' : 'prev'}>
        {direction}
      </span>
    );
  };

  return (
    <div className="main">
      <Carousel nextIcon={directionButtons('Next')} prevIcon={directionButtons('Prev')}>
        {slider.map((slider, index) => {
          return (
            <Carousel.Item key={index}>
              <div className="my-image">
                <div
                  className="animation"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="800"
                dangerouslySetInnerHTML={{ __html: slider.title }}
                ></div>
                 
                <img className="d-block w-100" src={`data:image/jpg;base64, ${slider.image}`} alt="Slider Image" />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Myslider;
