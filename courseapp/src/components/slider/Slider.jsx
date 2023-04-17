import './Slider.scss';
import Carousel from 'react-bootstrap/Carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


function Myslider() {

    return (
        <div className='main'>
            <Carousel>
                <Carousel.Item>
                    <div className='my-image'>
                        <div className='animation' data-aos="zoom-out-up">
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
                        <div className='animation' data-aos="zoom-out-up">
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
                        <div className='animation' data-aos="zoom-out-up">
                            Get your <span>Education</span> today!
                        </div>
                        <img
                            className="d-block w-100"
                            src="./images/col-women.d48a3fbc.jpg"
                        />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div >
    )
}

export default Myslider;
