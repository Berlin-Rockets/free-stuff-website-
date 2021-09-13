import React from 'react';
import { Link } from 'react-router-dom';

import data from './Data';
import './Categories.css';

function Categories() {
  return (
    <div className="cat-container">
      <ul className="cat-list">
        {data.map((item) => (
          <li className="cat-item ">
            <Link to={item.url} className="btn-circle">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
