import React from 'react';
import LatestPost from '../latest-post/Latest-post';

const LatestPosts = () => {
  return (
    <div className="sidebar_section">
      <div className="sidebar_section_title">
        <h3>Latest posts</h3>
      </div>
      <div className="latest_posts">
        <LatestPost />
        <LatestPost />
        <LatestPost />
      </div>
    </div>
  );
};

export default LatestPosts;

