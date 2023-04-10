import React from 'react'

function CourseHeader() {
    return (
        <div class="home">
            <div class="home_background_container prlx_parent">
                <div class="home_background prlx" style={{background:`url(${process.env.PUBLIC_URL}/images/Home/courses_background.jpg.webp)`}}></div>
            </div>
            <div class="home_content">
                <h1>Courses</h1>
            </div>
        </div>
    )
}

export default CourseHeader;
