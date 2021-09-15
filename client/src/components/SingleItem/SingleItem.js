import React, { useState } from 'react';
import 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import baseUrl from '../../config/baseUrl';
import { Button } from '../Navbar/Button';
import './SingleItem.css';

function SingleItem() {
  const [item, setItem] = useState();
  const { id } = useParams();
  console.log(id);

  return (
    <React.Fragment>
      <div className="card mt-5 mb-4 mx-auto col-8 p-0">
        <img
          className="card-img-top"
          src="https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Card Item"
        />
        <div className="card-body">
          <h4 className="mb-0 card-title font-weight-bold">Item Name</h4>
          <p className="mb-2">
            <small className="text-muted">Published on: 06.09.2021</small>
          </p>
          <p className="card-text">
            {/* text-truncate */}
            Item Description. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Dignissimos quae explicabo libero quasi eos natus
            animi alias, minima nihil itaque.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="row">
              <ul className="list-group list-group-flush">
                <li className="col">Location: Berlin</li>
                <li className="col ">Pick-up / Delivery</li>
                <li className="col ">Used / New</li>
              </ul>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-12 pb-1">
                <p className="m-0 font-weight-bold">Contact Details:</p>
              </div>
            </div>
            <div className="row">
              <p className="m-0 pl-3">Phone: 123-456-7890</p>
            </div>
            <div className="row">
              <p className="m-0 pl-3">
                <a href="mailto:advertizer@email.com" className="card-link">
                  Send email to:
                </a>
                &nbsp; johnathan.swift@dublin.ie
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="container text-center px-0 pb-5 m-0 mx-auto">
        <a href="/" className="card-link">
          <Button> Back to Search Results</Button>
        </a>
        <a href="/" className="card-link">
          <button type="button" className="btn btn--black">
            Back to Home Page
          </button>
        </a>
      </div>
    </React.Fragment>
  );
}

export default SingleItem;
