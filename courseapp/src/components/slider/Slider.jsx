import React, { useState } from 'react';
import './Slider.scss';
import Carousel from 'react-bootstrap/Carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Myslider() {


    const directionButtons = (direction) => {
        return (
            <span
                aria-hidden="true"
                className={direction === "Next" ? "next" : "prev"}
            >
                {direction}
            </span>
        );
    };



    return (
        <div className='main'>
            <Carousel

                nextIcon={directionButtons("Next")}
                prevIcon={directionButtons("Prev")}
            >
                <Carousel.Item>
                    <div className='my-image'>
                        <div className='animation' data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom" data-aos-duration="800">
                            Get your <span>Education</span> today!
                        </div>
                        <img
                            className="d-block w-100"
                            src="./images/slider_background.jpg"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='my-image'>
                        <div className='animation' data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom" data-aos-duration="800">
                            Get your <span>Education</span> today!
                        </div>
                        <img
                            className="d-block w-100"
                            src="./images/col-watches.91e22f1d.jpg"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='my-image'>
                        <div className='animation' data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom" data-aos-duration="800">
                            Get your <span>Education</span> today!
                        </div>
                        <img
                            className="d-block w-100"
                            src="./images/col-women.d48a3fbc.jpg"
                        />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Myslider;
