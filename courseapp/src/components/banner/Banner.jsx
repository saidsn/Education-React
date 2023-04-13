import React from 'react'
import { NavLink } from 'react-router-dom';

function Banner() {
    return (

        <div className="hero_boxes">
            <div className="hero_boxes_inner">
                <div className="container" style={{maxWidth:"1140px"}}>
                    <div className="row">
                        <div className="col-lg-4 hero_box_col">
                            <div className="hero_box d-flex flex-row align-items-center justify-content-start">
                                <img className='svg' src="images/earth-globe.svg" alt="" />
                                <div className="hero_box_content">
                                    <h2 className="hero_box_title">Online Courses</h2>
                                    <NavLink className='hero_box_link' to="https://github.com/saidsn">View More</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 hero_box_col">
                            <div className="hero_box d-flex flex-row align-items-center justify-content-start">
                                <img className='svg' src="images/books.svg" alt="" />
                                <div className="hero_box_content">
                                    <h2 className="hero_box_title">Our Library</h2>
                                    <NavLink className='hero_box_link' to="https://github.com/saidsn">View More</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 hero_box_col">
                            <div className="hero_box d-flex flex-row align-items-center justify-content-start">
                                <img className='svg' src="images/professor.svg" alt="" />
                                <div className="hero_box_content">
                                    <h2 className="hero_box_title">Our Teachers</h2>
                                    <NavLink className='hero_box_link' to="https://github.com/saidsn">View More</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
