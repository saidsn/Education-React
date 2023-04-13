import React from 'react'
import '../../../src/assets/styles/News.css';
import Header from '../../components/header/Header';
import Blog from '../../components/blog/Blog';
import Archive from '../../components/archive/Archive';
import LatestPosts from '../../components/latest-posts/Latest-posts';
import Tags from '../../components/tags/Tags';

function News() {
  return (
    <>
      <Header />
      <div class="news-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="news_posts">
                <Blog />
                <Blog />
                <Blog />
              </div>
              <div class="news_page_nav">
                <ul>
                  <li class="active text-center trans_200"><a href="#">01</a></li>
                  <li class="text-center trans_200"><a href="#">02</a></li>
                  <li class="text-center trans_200"><a href="#">03</a></li>
                </ul>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="sidebar">
                <Archive />
                <LatestPosts />
                <Tags />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default News;
