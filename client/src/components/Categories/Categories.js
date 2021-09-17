import React from 'react';
import { Link } from 'react-router-dom';

import data from './CatData';
import './Categories.css';


function Categories({items}) {


  return (
    <div className="cat-container">
      <ul className="cat-list">
        {data.map((item) => (
          <li className="cat-item ">
             <Link to={'/items/'+item.label} className="btn-circle text-uppercase" >
               {item.label}
            </Link>
          </li>
        ))}
      </ul>,

    </div>
  );
}

export default Categories;
