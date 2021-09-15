import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-bootstrap';

import './AllItems.css';
import baseURL from '../../config/baseUrl';
import CardItem from '../SingleItem/SingleItem';
import Moment from 'react-moment';

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
  console.log(items);

  return items ? (
    <div className="container-lg">
      <div className="row row-cols-1 row-cols-md-6 g-4">
        {items.map((item) => {
          return (
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
          );
        })}
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default AllItems;

// row-cols-1 row-cols-sm-12 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 g-4 justify-content-center
