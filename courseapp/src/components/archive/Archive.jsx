import React from 'react'
import { Link } from 'react-router-dom';

function Archive() {
  return (
    <div className="sidebar_section">
      <div className="sidebar_section_title">
        <h3>Archives</h3>
      </div>
      <ul className="sidebar_list">
        <li className="sidebar_list_item"><Link>Design Courses</Link></li>
        <li className="sidebar_list_item"><Link>All you need to know</Link></li>
        <li className="sidebar_list_item"><Link>Uncategorized</Link></li>
        <li className="sidebar_list_item"><Link>About Our Departments</Link></li>
        <li className="sidebar_list_item"><Link>Choose the right course</Link></li>
      </ul>
    </div>
  )
}

export default Archive;
