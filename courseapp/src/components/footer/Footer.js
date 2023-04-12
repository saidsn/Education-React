import React from 'react'
import Title from '../title/Title';
import { NavLink } from 'react-router-dom';
import { BsPinterest } from 'react-icons/bs';
import { GrLinkedinOption } from 'react-icons/gr';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';

function Footer() {
    return (
        <footer class="footer">
            <div class="container">
                <div class="newsletter">
                    <Title />
                    <div class="row">
                        <div class="col text-center">
                            <div class="newsletter_form_container mx-auto">
                                <form action="">
                                    <div
                                        class="newsletter_form d-flex flex-md-row flex-column flex-xs-column align-items-center justify-content-center">
                                        <input id="newsletter_email" class="newsletter_email" type="email" placeholder="Email Address"
                                            required="required" data-error="Valid email is required." />
                                        <button id="newsletter_submit" type="submit" class="newsletter_submit_btn trans_300"
                                            value="Submit">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer_content">
                    <div class="row">

                        <div class="col-lg-3 footer_col">

                            <div class="logo_container">
                                <div class="logo">
                                    <img src="images/Home/logo.png.webp" alt="" />
                                    <span>course</span>
                                </div>
                            </div>
                            <p class="footer_about_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor
                                nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum, tempor lacus.</p>
                        </div>

                        <div class="col-lg-3 footer_col">
                            <div class="footer_column_title">Menu</div>
                            <div class="footer_column_content">
                                <ul>
                                    <li class="footer_list_item"><a href="#">Home</a></li>
                                    <li class="footer_list_item"><a href="#">About Us</a></li>
                                    <li class="footer_list_item"><a href="courses.html">Courses</a></li>
                                    <li class="footer_list_item"><a href="news.html">News</a></li>
                                    <li class="footer_list_item"><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-3 footer_col">
                            <div class="footer_column_title">Usefull Links</div>
                            <div class="footer_column_content">
                                <ul>
                                    <li class="footer_list_item"><a href="#">Testimonials</a></li>
                                    <li class="footer_list_item"><a href="#">FAQ</a></li>
                                    <li class="footer_list_item"><a href="#">Community</a></li>
                                    <li class="footer_list_item"><a href="#">Campus Pictures</a></li>
                                    <li class="footer_list_item"><a href="#">Tuitions</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-3 footer_col">
                            <div class="footer_column_title">Contact</div>
                            <div class="footer_column_content">
                                <ul>
                                    <li class="footer_contact_item">
                                        <div class="footer_contact_icon">
                                            <img src="images/Home/placeholder.svg" alt="" />
                                        </div>
                                        Blvd Libertad, 34 m05200 Arévalo
                                    </li>
                                    <li class="footer_contact_item">
                                        <div class="footer_contact_icon">
                                            <img src="images/Home/smartphone.svg" alt="" />
                                        </div>
                                        0034 37483 2445 322
                                    </li>
                                    <li class="footer_contact_item">
                                        <div class="footer_contact_icon">
                                            <img src="images/Home/envelope.svg" alt="https://www.flaticon.com/authors/lucy-g" />
                                        </div><a href="https://preview.colorlib.com/cdn-cgi/l/email-protection" class="__cf_email__"
                                            data-cfemail="89e1ece5e5e6c9eae6e4f9e8e7f0a7eae6e4">[email&#160;protected]</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer_bar d-flex flex-column flex-sm-row align-items-center justify-content: space-evenly">
                    <div class="footer_copyright">
                        <span>
                            Copyright &copy;
                            <script data-cfasync="false"
                                src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
                            <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made
                            with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://github.com/saidsn"
                                target="_blank">Seid Nuraliyev</a>
                        </span>
                    </div>
                    <div class="footer_social ml-sm-auto">
                        <ul class="menu_social">
                            <li class="menu_social_item"><NavLink to='https://www.pinterest.com'><BsPinterest className='icon' /></NavLink></li>
                            <li class="menu_social_item"><NavLink to='https://www.linkedin.com'><GrLinkedinOption className='icon' /></NavLink></li>
                            <li class="menu_social_item"><NavLink to='https://www.instagram.com'><AiOutlineInstagram className='icon' /></NavLink></li>
                            <li class="menu_social_item"><NavLink to='https://www.facebook.com'><FaFacebookF className='icon' /></NavLink></li>
                            <li class="menu_social_item"><NavLink to='https://www.twitter.com'><AiOutlineTwitter className='icon' /></NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
