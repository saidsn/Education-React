import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Title from '../title/Title';

function Student() {
  return (

    <div class="testimonials page_section">
      <div class="testimonials_background_container prlx_parent">
        <div class="testimonials_background prlx" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/Home/testimonials_background.jpg.webp)` }}>
        </div>
      </div>
      <div class="container">
        <Title />
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="testimonials_slider_container">
              <div class="owl-carousel owl-theme testimonials_slider">
                <Carousel>
                  <Carousel.Item>
                    <div class="owl-item">
                      <div class="testimonials_item text-center">
                        <div class="quote">“</div>
                        <p class="testimonials_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
                          tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a
                          gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                          malesuada, finibus tortor fermentum.</p>
                        <div class="testimonial_user">
                          <div class="testimonial_image mx-auto">
                            <img src="images/Home/testimonials_user.jpg.webp" alt="" />
                          </div>
                          <div class="testimonial_name">james cooper</div>
                          <div class="testimonial_title">Graduate Student</div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div class="owl-item">
                      <div class="testimonials_item text-center">
                        <div class="quote">“</div>
                        <p class="testimonials_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
                          tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a
                          gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                          malesuada, finibus tortor fermentum.</p>
                        <div class="testimonial_user">
                          <div class="testimonial_image mx-auto">
                            <img src="images/Home/testimonials_user.jpg.webp" alt="" />
                          </div>
                          <div class="testimonial_name">james cooper</div>
                          <div class="testimonial_title">Graduate Student</div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div class="owl-item">
                      <div class="testimonials_item text-center">
                        <div class="quote">“</div>
                        <p class="testimonials_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
                          tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a
                          gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                          malesuada, finibus tortor fermentum.</p>
                        <div class="testimonial_user">
                          <div class="testimonial_image mx-auto">
                            <img src="images/Home/testimonials_user.jpg.webp" alt="" />
                          </div>
                          <div class="testimonial_name">james cooper</div>
                          <div class="testimonial_title">Graduate Student</div>
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
