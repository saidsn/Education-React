import React from 'react'
import '../../../src/assets/styles/Contact.css'
import Header from '../../components/header/Header'
import ContactInfo from '../../components/contactInfo/ContactInfo';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Contact() {
    return (
        <>
            <Header />
            <div className="contact">
                <div className="container" style={{maxWidth:"1140px"}}>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="contact_form" data-aos="fade-up" data-aos-duration="800">
                                <div className="contact_title">Get in touch</div>
                                <div className="contact_form_container">
                                    <form >
                                        <input id="contact_form_name" className="input_field contact_form_name" type="text" placeholder="Name"
                                            required="required" data-error="Name is required." />
                                        <input id="contact_form_email" className="input_field contact_form_email" type="email"
                                            placeholder="E-mail" required="required" data-error="Valid email is required." />
                                        <textarea id="contact_form_message" className="text_field contact_form_message" name="message"
                                            placeholder="Message" required="required" data-error="Please, write us a message."></textarea>
                                        <button id="contact_send_btn" type="button" className="contact_send_btn trans_200" value="Submit">send
                                            message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="about" data-aos="fade-up" data-aos-duration="1200">
                                <div className="about_title">Join Courses</div>
                                <p className="about_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl
                                    ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Etiam eu purus nec eros varius
                                    luctus. Praesent finibus risus facilisis ultricies. Etiam eu purus nec eros varius luctus.</p>
                                <ContactInfo/>
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

        </>
    )
}

export default Contact;
