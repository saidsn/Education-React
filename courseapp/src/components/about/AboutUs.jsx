import React, { useState, useEffect } from 'react';
import '../../assets/styles/About.css';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function AboutUs() {
    const url = 'https://localhost:7184';

    const [about, setAbout] = useState([]);

    const getAllAbout = async () => {
        await axios.get(`${url}/api/About/GetAll`)
            .then((res) => {
                setAbout(res.data);
            });
    };

    useEffect(() => {
        getAllAbout();
    }, []);

    return (
        <div className="about">
            <div className="container">
                {about.map((item, index) => (
                    <div
                        key={index}
                        className="row about_row row-lg-eq-height"
                    >
                        {
                            index % 2 === 0 ? (
                                <>
                                    <div className="col-lg-6">
                                        <div className="about_content" data-aos="zoom-in-up" data-aos-duration="1200">
                                            <div className="about_title">{item.title}</div>
                                            <div className="about_text">
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div
                                            className="about_image"
                                            data-aos="flip-left"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="2000"
                                        >
                                            <img src={`data:image/jpg;base64,${item.image}`} alt="aboutImage" />
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="col-lg-6">
                                        <div
                                            className="about_image"
                                            data-aos="flip-left"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="2000"
                                        >
                                            <img src={`data:image/jpg;base64,${item.image}`} alt="aboutImage" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="about_content" data-aos="zoom-in-up" data-aos-duration="1200">
                                            <div className="about_title">{item.title}</div>
                                            <div className="about_text">
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutUs;
