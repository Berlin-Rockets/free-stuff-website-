import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from "../Categories/CatData";
import locData from '../Location/LocData';
import baseURL from '../../config/baseUrl';
import Moment from 'react-moment';
import Categories from '../Categories/Categories';
import { useParams } from 'react-router-dom';

export default function FByCategory() {
    const [items, setItems] = useState();
    const [category, setCategory]=useState('All')
    const [location, setLocation]=useState(' ')

    const label = useParams();
    // console.log(label.filter);

    const getItems = async () => {
        try {
          const res = await axios.get(baseURL + '/items/'+ label.filter);
          // console.log(res.data);
          setItems(res.data.data);
          setCategory(label.filter)
        } catch (e) {
          console.log(e);
        }
      };

      useEffect(() => {
        getItems();
      }, []);

      const filterItems = async (cat) => {
      
        
        try {
          const res = await axios.get(baseURL + '/items/' + cat);
          console.log(res.data);
          setItems(res.data.data);
          setCategory(cat)
        } catch (e) {
          console.log(e);
        }
      };

      const filterItemsByLoc=async(loc)=>{
        const res=await axios.get(baseURL+'/items/filter/'+ category +'/'+ loc)
        console.log(res.data.data);
        setItems(res.data.data);
       setLocation(loc)
      }

    //   console.log('itemmmmmmmmmm',items);
      return items ? (
        <div className="container-lg">
          <div className="categories">
          <div className="cat-container">
      <ul className="cat-list">
        {data.map((item) => (
          <li className="cat-item ">
            <span className="btn-circle text-uppercase" onClick={()=>filterItems(item.label)} >{item.label}</span>
          </li>
        ))}
      </ul>,

    </div>
          </div>
          <h1 >{category} {location}</h1>
          <div className="row row-cols-1 row-cols-md-6 g-4">
            {items.map((item) => {
              return (
                <div>
                
                <Link to={'singleItem/' + item._id}> 
                  <div className="col">
                    <div className="card mt-5 mb-4 mx-auto p-0">
                      <div className="img-container ">
                        <img
                          className="card-img-top img-style img-responsive img-resize"
                          src={
                            require(`../../../../images/${item.images[0]}`).default
                          }
                          alt="Card Item"
                        />
                      </div>
    
                      <div className="card-body">
                        <h5 className="card-title mb-0 font-weight-bold">
                          {item.name}
                        </h5>
                        <p className="card-text mb-0">
                          <small className="">Location: {item.location}</small>
                        </p>
                      </div>
                      <div class="card-footer">
                        <small class="text-muted">
                          Published on:{' '}
                          <Moment format="DD.MM.YYYY">{item.createdAt}</Moment>
                        </small>
                      </div>
                    </div>
                  </div>
                </Link>
                
                </div>
                
              );
            })}
          </div>
          <div className="cat-container">
          <ul className="cat-list">
            {locData.map((item) => (
              <li className="cat-item ">
                 {/* <Link to={'/items/'+item} className="btn-circle text-uppercase" >
                   {item}
                </Link> */}
                <span className="btn-circle text-uppercase" onClick={()=>filterItemsByLoc(item)} >{item}</span>
              </li>
            ))}
          </ul>,
      
        </div>
        </div>
      ) : (
        <div>Loading...</div>
      );
}
