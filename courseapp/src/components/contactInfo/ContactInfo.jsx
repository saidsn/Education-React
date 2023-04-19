import React from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function ContactInfo() {
    return (
        <>
            <div className="contact_info">
                <ul>
                    <li className="contact_info_item">
                        <div className="contact_info_icon">
                            <img src="images/placeholder.svg" alt="" />
                        </div>
                        Blvd Libertad, 34 m05200 Arévalo
                    </li>
                    <li className="contact_info_item">
                        <div className="contact_info_icon">
                            <img src="images/smartphone.svg" alt="" />
                        </div>
                        +994 70 441 51 91
                    </li>
                    <li className="contact_info_item">
                        <div className="contact_info_icon">
                            <img src="images/envelope.svg" alt="" />
                        </div>
                        <Link className="__cf_email__" to="https://www.linkedin.com/in/s%C9%99id-nuraliyev-a156b4232" style={{color:"#a5a5a5"}}>LinkedIn</Link>
                           
                    </li>
                </ul>
            </div>
        </>

    )
}

export default ContactInfo;
