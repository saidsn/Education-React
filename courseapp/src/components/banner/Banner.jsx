import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


function Banner() {

    const url = 'https://localhost:7184';

    const [banner, setBanner] = useState([]);

    const getAllBanner = async () => {
        await axios.get(`${url}/api/Banner/GetAll`)
            .then((res) => {
                setBanner(res.data);
            });
    }

    useEffect(() => {
        getAllBanner();
    }, []);


    return (

        <div className="hero_boxes">
            <div className="hero_boxes_inner">
                <div className="container" style={{ maxWidth: "1140px" }}>
                    <div className="row">
                        {
                            banner.map((banner, index) => {
                                return (
                                    <div key={index} className="col-lg-4 hero_box_col" data-aos="fade-up"
                                        data-aos-anchor-placement="bottom-bottom" data-aos-duration="700">
                                        <div className="hero_box d-flex flex-row align-items-center justify-content-start">
                                            <img className='svg' src={`data:image/svg+xml;base64, ${banner.image}`} alt="" />
                                            <div className="hero_box_content">
                                                <h2 className="hero_box_title">{banner.title}</h2>
                                                <NavLink className='hero_box_link' to="/courses">View More</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
