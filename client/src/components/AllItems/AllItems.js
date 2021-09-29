import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-bootstrap';
import { Link } from 'react-router-dom';

import './AllItems.css';
import baseURL from '../../config/baseUrl';
import Moment from 'react-moment';
import Categories from '../Categories/Categories';

const AllItems = () => {
  const [items, setItems] = useState();

  const getAllItems = async () => {
    try {
      const res = await axios.get(baseURL + '/items');
      // console.log(res.data);

      setItems(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllItems();
  }, []);
  // console.log(items);

  return items ? (
    <React.Fragment>
      <Categories />
      <div className="item-container d-flex justify-content-around mx-0">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 row-cols-xl-8">
          {items.map((item) => {
            return (
              <div className="col">
                <div className="card card-style mx-auto border-0">
                  <Link
                    to={'items/singleItem/' + item._id}
                    className="text-decoration-none p-0"
                  >
                    <div className="img-container">
                      <img
                        className="card-img-top img-style img-responsive img-resize"
                        src={item.images[0]}
                        alt="Card Item"
                      />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title mb-0 font-weight-bold">
                        {item.name}
                      </h5>
                      <p className="card-text card-text-style mb-0">
                        <small className="">Location: {item.location}</small>
                      </p>
                    </div>
                    <div class="card-footer">
                      <small class="text-muted">
                        Published on:{' '}
                        <Moment format="DD.MM.YYYY">{item.createdAt}</Moment>
                      </small>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  ) : (
    <div>Loading...</div>
  );
};

export default AllItems;

// row-cols-1 row-cols-sm-12 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 g-4 justify-content-center
