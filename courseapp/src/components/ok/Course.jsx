
import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
AOS.init();


const Course = () => {

  const url = 'https://localhost:7184';

  const [course, setCourse] = useState([]);

  const getAllCourse = async () => {
    await axios.get(`${url}/api/Course/GetAll`)
      .then((res) => {
        const coursesWithAuthors = res.data.map(courseItem => {
          return { ...courseItem, authors: courseItem.authorName };
        });
        setCourse(coursesWithAuthors);
      });
  }

  useEffect(() => {
    getAllCourse();
  })

  return (
    <div className="popular page_section" data-aos="fade-up"
      data-aos-duration="1200">
      <div className="container">
        <div className="row course_boxes">
          {
            course.map((item, index) => {
              return (
                <div key={index} className="col-lg-4 course_box">
                  <div className="card">
                    <div className="image">
                      <img className="card-img-top" src={`data:image/png;base64,${item.image}`} alt="" />
                    </div>
                    <div className="card-body text-center">
                      <div className="card-title"><a href="courses.html">{item.title}</a></div>
                      <div className="card-text">{item.description}</div>
                    </div>
                    <div className="price_box d-flex flex-row align-items-center">
                      {
                        item.authorName.map((authorname, index) => {
                          return (
                            <>
                            <div key={index} className="course_author_image">
                              {/* <img src={`data:image/png;base64,${author.image}`} alt="" /> */}
                            </div>
                            <div className="course_author_name">{authorname}, <span>Author</span></div>
                            </>
                          )
                        })
                      }
                      <div className="course_price d-flex flex-column align-items-center justify-content-center"><span>${item.price}</span></div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Course;