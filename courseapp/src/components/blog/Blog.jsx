import React from 'react'
import '../../../src/assets/styles/News.css';
function Blog() {
  return (
    <div class="news_post">
      <div class="news_post_image">
        <img src="./images/news_1.jpg.webp" alt="" />
      </div>
      <div class="news_post_top d-flex flex-column flex-sm-row">
        <div class="news_post_date_container">
          <div class="news_post_date d-flex flex-column align-items-center justify-content-center">
            <div>18</div>
            <div>dec</div>
          </div>
        </div>
        <div class="news_post_title_container">
          <div class="news_post_title">
            <a href="news_post.html">Why do you need a qualification?</a>
          </div>
          <div class="news_post_meta">
            <span class="news_post_author"><a href="#">By Christian Smith</a></span>
            <span>|</span>
            <span class="news_post_comments"><a href="#">3 Comments</a></span>
          </div>
        </div>
      </div>
      <div class="news_post_text">
        <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc.
          Proin quis mi malesuada, finibus tortor fermentum. Etiam eu purus nec eros varius luctus. Praesent
          finibus risus facilisis ultricies.</p>
      </div>
      <div class="news_post_button text-center trans_200">
        <a href="news_post.html">Read More</a>
      </div>
    </div>
  )
}

export default Blog;
