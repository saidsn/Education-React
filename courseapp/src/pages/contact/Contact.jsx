import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/layout/Navbar';
import '../../../src/assets/styles/Contact.css'
import Header from '../../components/header/Header'
import ContactInfo from '../../components/contactInfo/ContactInfo';
import Footer from '../../components/layout/Footer';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Contact() {

    const url = 'https://localhost:7184';

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const submitMessage = async (e) => {
        e.preventDefault();

        const newMessage = {
            name,
            email,
            message
        }
        await axios
            .post(`${url}/api/Contact/Create`, newMessage)
            .then((res) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfly Contacted',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  console.log(res);
            })
            .catch((err) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'User Not Created',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  console.log(err);
            });

        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <>
            <Navbar />
            <Header sectionHeader="Contact Us" />
            <div className="contact">
                <div className="container" style={{ maxWidth: "1140px" }}>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="contact_form" data-aos="fade-up" data-aos-duration="800">
                                <div className="contact_title">Get in touch</div>
                                <div className="contact_form_container">
                                    <form onSubmit={submitMessage} >
                                        <input
                                            id="contact_form_name"
                                            className="input_field contact_form_name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            type="text"
                                            placeholder="Name"
                                            required="required"
                                        />
                                        <input
                                            id="contact_form_email"
                                            className="input_field contact_form_email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email"
                                            placeholder="E-mail"
                                            required="required"
                                        />
                                        <textarea
                                            id="contact_form_message"
                                            className="text_field contact_form_message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            name="message"
                                            placeholder="Message"
                                            required="required"
                                        ></textarea>
                                        <button id="contact_send_btn" type="submit" className="contact_send_btn trans_200" value="Submit">send
                                            message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="about" data-aos="fade-up" data-aos-duration="1200">
                                <div className="about_title">Join Courses</div>
                                <p className="about_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl
                                    ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Etiam eu purus nec eros varius
                                    luctus. Praesent finibus risus facilisis ultricies. Etiam eu purus nec eros varius luctus.</p>
                                <ContactInfo />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div id="google_map" data-aos="fade-up" data-aos-duration="1000">
                                <div className="map_container">
                                    <div id="map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d780976.7888206078!2d49.29102349070986!3d40.12689850306108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307db472eb07d1%3A0x529ac68af9a1cec2!2sBaku%20City%20Circuit!5e0!3m2!1sen!2saz!4v1681376530941!5m2!1sen!2saz"
                                            style={{ width: "100%", height: "100%" }}></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact;
