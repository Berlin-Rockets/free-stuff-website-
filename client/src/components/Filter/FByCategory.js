import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from '../Categories/CatData';
import locData from '../Location/LocData';
import baseURL from '../../config/baseUrl';
import Moment from 'react-moment';
import { useParams } from 'react-router-dom';
import './FByCategory.css';

export default function FByCategory() {
  const [items, setItems] = useState();
  const [category, setCategory] = useState('All');
  const [location, setLocation] = useState(' ');

  const label = useParams();
  // console.log(label.filter);


    const getItems = async () => {
        try {
          const res = await axios.get(baseURL + '/api/items/'+ label.filter);
          // console.log(res.data);
          setItems(res.data.data);
          setCategory(label.filter)
        } catch (e) {
          console.log(e);
        }
      };


  useEffect(() => {
    getItems();
  },[]);


      const filterItems = async (cat) => {
      
        
        try {
          const res = await axios.get(baseURL + '/api/items/' + cat);
          console.log(res.data);
          setItems(res.data.data);
          setCategory(cat)
        } catch (e) {
          console.log(e);
        }
      };

      const filterItemsByLoc=async(loc)=>{
        console.log('filter by location');
        const res=await axios.get(baseURL+'/api/items/filter/'+ category +'/'+ loc)
        console.log(res.data.data);
        setItems(res.data.data);
       setLocation(loc)
      }


  //   console.log('itemmmmmmmmmm',items);
  return items ? (
    <React.Fragment>
      <div className="container-fluid item-container-filter d-flex mx-0 flex-column">
        <div className="categories mb-3">
          <div className="cat-container p-0">
            <ul className="cat-list">
              {data.map((item) => (
                <li className="cat-item ">
                  <span
                    className="btn-circle text-uppercase "
                    onClick={() => filterItems(item.url)}
                  >
                    <img
                      src={require(`../Categories/img/${item.img}`).default}
                      alt={item.label}
                      className="cat-icon"
                    />
                  </span>
                  <p className="icon-label">{item.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="item-container d-flex justify-content-around mx-0 flex-column">
          <h1 className="text-center mb-5">
            {category} - {location}
          </h1>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 row-cols-xl-8">
            {items.map((item) => {
              return (
                <div>
                  <Link
                    to={'singleItem/' + item._id}
                    className="text-decoration-none"
                  >
                    <div className="col">
                      <div className="card card-style mx-auto border-0">
                        <div className="img-container ">
                          <img
                            className="card-img-top img-style img-responsive img-resize"
                            src={item.images[0]}
                            alt="Card Item"
                          />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title-style mb-0 font-weight-bold">
                            {item.name}
                          </h5>
                          <p className="card-text card-text-style mb-0">
                            <small className="">
                              Location: {item.location}
                            </small>
                          </p>
                        </div>
                        <div class="card-footer">
                          <small class="text-muted">
                            Published on:{' '}
                            <Moment format="DD.MM.YYYY">
                              {item.createdAt}
                            </Moment>
                          </small>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="cat-container">
          <ul className="cat-list">
            {locData.map((item) => (
              <li className="cat-item ">
                {/* <Link to={'/items/'+item} className="btn-circle text-uppercase" >
                     {item}
                  </Link> */}
                <span
                  className="btn-circle-location text-capitalize"
                  onClick={() => filterItemsByLoc(item)}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  ) : (
    <div className="loading">Loading...</div>
  );
}
