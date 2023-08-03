import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Title from '../title/Title';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Student = () => {

  const directButtons = (direction) => {
    return (
      <span
        className={direction}
      >
        {direction}
      </span>
    );
  };


  return (

    <div className="testimonials page_section" data-aos="fade-up"
      data-aos-duration="1200">
      <div className="testimonials_background_container prlx_parent">
        <div className="testimonials_background prlx" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/testimonials_background.jpg.webp)` }}>
        </div>
      </div>
      <div className="container">

        <Title sectionTitle="What our students say" />

        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="testimonials_slider_container">
              <div className="owl-carousel owl-theme testimonials_slider">
                <Carousel
                  nextIcon={directButtons("d-none")}
                  prevIcon={directButtons("d-none")}
                >
                  <Carousel.Item>
                    <div className="owl-item">
                      <div className="testimonials_item text-center">
                        <div className="quote">“</div>
                        <p className="testimonials_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
                          tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a
                          gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                          malesuada, finibus tortor fermentum.</p>
                        <div className="testimonial_user">
                          <div className="testimonial_image mx-auto">
                            <img src="images/testimonials_user.jpg.webp" alt="" />
                          </div>
                          <div className="testimonial_name">james cooper</div>
                          <div className="testimonial_title">Graduate Student</div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="owl-item">
                      <div className="testimonials_item text-center">
                        <div className="quote">“</div>
                        <p className="testimonials_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
                          tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a
                          gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                          malesuada, finibus tortor fermentum.</p>
                        <div className="testimonial_user">
                          <div className="testimonial_image mx-auto">
                            <img src="images/testimonials_user.jpg.webp" alt="" />
                          </div>
                          <div className="testimonial_name">james cooper</div>
                          <div className="testimonial_title">Graduate Student</div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="owl-item">
                      <div className="testimonials_item text-center">
                        <div className="quote">“</div>
                        <p className="testimonials_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
                          tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a
                          gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                          malesuada, finibus tortor fermentum.</p>
                        <div className="testimonial_user">
                          <div className="testimonial_image mx-auto">
                            <img src="images/testimonials_user.jpg.webp" alt="" />
                          </div>
                          <div className="testimonial_name">james cooper</div>
                          <div className="testimonial_title">Graduate Student</div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Student;
