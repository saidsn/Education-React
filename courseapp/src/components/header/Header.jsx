import React from 'react'

function Header() {
    return (
        <div className="home">
            <div className="home_background_container prlx_parent">
                <div className="home_background prlx" style={{background:`url(${process.env.PUBLIC_URL}/images/courses_background.jpg.webp)`}}></div>
            </div>
            <div className="home_content">
                <h1>Courses</h1>
            </div>
        </div>
    )
}

export default Header;
