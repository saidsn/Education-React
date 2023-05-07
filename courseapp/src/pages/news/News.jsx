import React from 'react'
import Navbar from '../../components/layout/Navbar';
import { Link } from 'react-router-dom';
import '../../../src/assets/styles/News.css';
import Header from '../../components/header/Header';
import Blog from '../../components/blog/Blog';
import Archive from '../../components/archive/Archive';
import LatestPosts from '../../components/latest-posts/Latest-posts';
import Tags from '../../components/tags/Tags';
import Footer from '../../components/layout/Footer';

function News() {
  return (
    <>
      <Navbar />
      <Header sectionHeader="The News" />
      <div className="news-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="news_posts">
                <Blog />
                <Blog />
                <Blog />
              </div>
              <div className="news_page_nav">
                <ul>
                  <li className="active text-center trans_200"><Link>01</Link></li>
                  <li className="text-center trans_200"><Link>02</Link></li>
                  <li className="text-center trans_200"><Link>03</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar">
                <Archive />
                <LatestPosts />
                <Tags />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default News;
