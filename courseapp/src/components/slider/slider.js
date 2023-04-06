import React, {useState} from 'react'
import './slider.scss';
import Carousel from 'react-bootstrap/Carousel';
import sliderImage1 from '../../assets/images/slider_background.jpg'
import sliderImage2 from '../../assets/images/col-watches.91e22f1d.jpg'
import sliderImage3 from '../../assets/images/col-women.d48a3fbc.jpg'
import { MdOutlineCastForEducation } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


function Myslider() {




    return (
        <div className='main'>
            <div className='banner'>
                <div className='card' >
                    <span><MdOutlineCastForEducation/></span>
                    <div className='card-content'>
                        <h2 className='hero-title'>Online Courses</h2>
                        <a href="">View More</a>
                    </div>
                </div>
                <div className='card' >
                <span><MdOutlineCastForEducation /></span>
                    <div className='card-content'>
                        <h2 className='hero-title'>Our Library</h2>
                        <a href="">View More</a>
                    </div>
                </div>
                <div className='card' >
                <span><MdOutlineCastForEducation /></span>
                    <div className='card-content'>
                        <h2 className='hero-title'>Our Teachers</h2>
                        <a href="">View More</a>
                    </div>
                </div>
            </div>

            <Carousel>
                <Carousel.Item>
                    <div className='my-image'>
                        <div className='animation' data-aos="zoom-out-up">
                            Get your <span>Education</span> today!
                        </div>

                        <img
                            className="d-block w-100"
                            src={sliderImage1}
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='my-image'>
                        <div className='animation' data-aos="zoom-out-up">
                            Get your <span>Education</span> today!
                        </div>
                        <img
                            className="d-block w-100"
                            src={sliderImage2}
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='my-image'>
                        <div className='animation' data-aos="zoom-out-up">
                            Get your <span>Education</span> today!
                        </div>
                        <img
                            className="d-block w-100"
                            src={sliderImage3}
                        />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div >
    )
}

export default Myslider;
