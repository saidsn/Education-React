import React from 'react';

const Tags = () => {
  return (
    <div className="sidebar_section">
      <div className="sidebar_section_title">
        <h3>Tags</h3>
      </div>
      <div className="tags d-flex flex-row flex-wrap">
        <div className="tag"><a href="#">Course</a></div>
        <div className="tag"><a href="#">Design</a></div>
        <div className="tag"><a href="#">FAQ</a></div>
        <div className="tag"><a href="#">Teachers</a></div>
        <div className="tag"><a href="#">School</a></div>
        <div className="tag"><a href="#">Graduate</a></div>
      </div>
    </div>
  );
};

export default Tags;
