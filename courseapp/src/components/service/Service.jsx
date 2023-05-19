import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Service() {

    const url = 'https://localhost:7184';

    const [service, setService] = useState([]);

    const getAllService = async () => {
        await axios.get(`${url}/api/Service/GetAll`)
            .then((res) => {
                setService(res.data);
            });
    };

    useEffect(() => {
        getAllService();
    }, []);


    return (
        <div className="services page_section" data-aos="fade-up"
            data-aos-duration="1200">
            <div className="container">
                <div className="row services_row">
                    {
                        service.map((item, index) => {
                            return (
                                <div key={index} className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
                                    <div className="icon_container d-flex flex-column justify-content-end">
                                        <img src={`data:image/svg+xml;base64, ${item.image}`} alt="" />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Service;
