import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const LatestPost = () => {
    return (
        <div className="latest_post" data-aos="fade-up" data-aos-duration="1600">
            <div className="latest_post_image">
                <img src="./images/latest_1.jpg.webp" alt="" />
            </div>
            <div className="latest_post_title"><a href="news_post.html">Why do you need a qualification?</a></div>
            <div className="latest_post_meta">
                <span className="latest_post_author"><a href="#">By Christian Smith</a></span>
                <span>|</span>
                <span className="latest_post_comments"><a href="#">3 Comments</a></span>
            </div>
        </div>
    );
};

export default LatestPost;
