import React from 'react';
import { Link } from 'react-router-dom';

import data from './CatData';
import './Categories.css';



function Categories({ items }) {
  return (
    <div className="cat-container">
      <ul className="cat-list">
        {data.map((item) => (
          <li className="cat-item" key={item.label}>
            <Link to={'/items/' + item.url} className="btn-circle">
              <img
                src={require(`./img/${item.img}`).default}
                alt={item.label}
                className="cat-icon"
              />
            </Link>
            <p className="icon-label">{item.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
