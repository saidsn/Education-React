import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const SearchCourse = () => {
    return (
        <div className="register" data-aos="fade-up"
            data-aos-duration="1200">
            <div className="container-fluid">
                <div className="row row-eq-height">
                    <div className="col-lg-6 nopadding">
                        <div className="register_section d-flex flex-column align-items-center justify-content-center">
                            <div className="register_content text-center">
                                <h1 className="register_title">Register now and get a discount <span>50%</span> discount until 1 January</h1>

                                <p className="register_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor
                                    nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida
                                    rutrum, ante nisl fermentum nulla, vitae tempo.</p>
                                <div className="button button_1 register_button mx-auto trans_200"><a href="#">register now</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 nopadding">
                        <div className="search_section d-flex flex-column align-items-center justify-content-center">
                            <div className="search_background" style={{ background: `url(${process.env.PUBLIC_URL}/images/search_background.jpg.webp)` }}></div>
                            <div className="search_content text-center">
                                <h1 className="search_title">Search for your course</h1>
                                <form id="search_form" className="search_form" action="https://preview.colorlib.com/theme/course/post">
                                    <input id="search_form_name" className="input_field search_form_name" type="text"
                                        placeholder="Course Name" required="required" data-error="Course name is required." />
                                    <input id="search_form_category" className="input_field search_form_category" type="text"
                                        placeholder="Category" />
                                    <input id="search_form_degree" className="input_field search_form_degree" type="text"
                                        placeholder="Degree" />
                                    <button id="search_submit_button" type="submit" className="search_submit_button trans_200"
                                        value="Submit">search course</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchCourse;

