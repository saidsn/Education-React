import React from 'react'
import Title from '../title/Title';
import { Link, NavLink } from 'react-router-dom';
import { BsPinterest } from 'react-icons/bs';
import { GrLinkedinOption } from 'react-icons/gr';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="newsletter">

                    <Title sectionTitle="Subscribe to newsletter" />

                    <div className="row">
                        <div className="col text-center">
                            <div className="newsletter_form_container mx-auto">
                                <form action="">
                                    <div
                                        className="newsletter_form d-flex flex-md-row flex-column flex-xs-column align-items-center justify-content-center">
                                        <input id="newsletter_email" className="newsletter_email" type="email" placeholder="Email Address"
                                            required="required" data-error="Valid email is required." />
                                        <button id="newsletter_submit" type="submit" className="newsletter_submit_btn trans_300"
                                            value="Submit">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer_content">
                    <div className="row">

                        <div className="col-lg-3 footer_col">

                            <div className="logo_container">
                                <div className="logo">
                                    <img src="images/logo.png.webp" alt="" />
                                    <span>course</span>
                                </div>
                            </div>
                            <p className="footer_about_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor
                                nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum, tempor lacus.</p>
                        </div>

                        <div className="col-lg-3 footer_col">
                            <div className="footer_column_title">Menu</div>
                            <div className="footer_column_content">
                                <ul>
                                    <li className="footer_list_item"><Link>Home</Link></li>
                                    <li className="footer_list_item"><Link>About Us</Link></li>
                                    <li className="footer_list_item"><Link>Courses</Link></li>
                                    <li className="footer_list_item"><Link>News</Link></li>
                                    <li className="footer_list_item"><Link>Contact</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 footer_col">
                            <div className="footer_column_title">Usefull Links</div>
                            <div className="footer_column_content">
                                <ul>
                                    <li className="footer_list_item"><Link>Testimonials</Link></li>
                                    <li className="footer_list_item"><Link>FAQ</Link></li>
                                    <li className="footer_list_item"><Link>Community</Link></li>
                                    <li className="footer_list_item"><Link>Campus Pictrues</Link></li>
                                    <li className="footer_list_item"><Link>Tuitions</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 footer_col">
                            <div className="footer_column_title">Contact</div>
                            <div className="footer_column_content">
                                <ul>
                                    <li className="footer_contact_item">
                                        <div className="footer_contact_icon">
                                            <img src="images/placeholder.svg" alt="" />
                                        </div>
                                        Blvd Libertad, 34 m05200 Arévalo
                                    </li>
                                    <li className="footer_contact_item">
                                        <div className="footer_contact_icon">
                                            <img src="images/smartphone.svg" alt="" />
                                        </div>
                                        0034 37483 2445 322
                                    </li>
                                    <li className="footer_contact_item">
                                        <div className="footer_contact_icon">
                                            <img src="images/envelope.svg" alt="https://www.flaticon.com/authors/lucy-g" />
                                        </div><a href="https://preview.colorlib.com/cdn-cgi/l/email-protection" className="__cf_email__"
                                            data-cfemail="89e1ece5e5e6c9eae6e4f9e8e7f0a7eae6e4">[email&#160;protected]</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer_bar d-flex flex-column flex-sm-row align-items-center justify-content: space-evenly">
                    <div className="footer_copyright">
                        <span>
                            Copyright &copy;
                            <script data-cfasync="false"
                                src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
                            <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made
                            with <i className="fa fa-heart" aria-hidden="true"></i> by <Link to="https://github.com/saidsn"
                                target="_blank">Seid Nuraliyev</Link>
                        </span>
                    </div>
                    <div className="footer_social ml-sm-auto">
                        <ul className="menu_social">
                            <li className="menu_social_item"><NavLink to='https://www.pinterest.com'><BsPinterest className='icon' /></NavLink></li>
                            <li className="menu_social_item"><NavLink to='https://www.linkedin.com'><GrLinkedinOption className='icon' /></NavLink></li>
                            <li className="menu_social_item"><NavLink to='https://www.instagram.com'><AiOutlineInstagram className='icon' /></NavLink></li>
                            <li className="menu_social_item"><NavLink to='https://www.facebook.com'><FaFacebookF className='icon' /></NavLink></li>
                            <li className="menu_social_item"><NavLink to='https://www.twitter.com'><AiOutlineTwitter className='icon' /></NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
