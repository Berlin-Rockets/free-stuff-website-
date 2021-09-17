import React from 'react';
import { Link } from 'react-router-dom';

import data from './Data';
import './Categories.css';
import { useState } from 'react';
import axios from 'axios';
import baseURL from '../../config/baseUrl';

function Categories({items}) {
//   const filterItems= async (label)=>{
// try{
// const res = await axios.get(baseURL+'/items/filter/'+label)
// console.log(res.data);
// items=res.data
// }catch(e){
// console.log(e);
// }
//   }

  return (
    <div className="cat-container">
      <ul className="cat-list">
        {data.map((item) => (
          <li className="cat-item ">
             <Link to={`/items/filter${item.url}`} className="btn-circle text-uppercase" >
               {item.label}
            </Link>
            {/* <span className="btn-circle text-uppercase" onClick={()=>filterItems(item.label)} >{item.label}</span> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
