import React from 'react';
import { Link } from 'react-router-dom';

import data from './CatData';
import './Categories.css';


function Categories({items}) {


  return (
    <div className=" d-flex cat-container">
      <ul className="cat-list">
        {data.map((item) => (
          <li className="cat-item ">
             <Link to={'/items/'+item.label} className="btn-circle text-uppercase text-decoration-none" >
               {item.label}
            </Link>
          </li>
        ))}
      </ul>,

    </div>
  );
}

export default Categories;
