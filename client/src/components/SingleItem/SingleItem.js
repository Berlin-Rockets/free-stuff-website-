import React, { useState, useEffect } from 'react';
import 'react-bootstrap';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import baseURL from '../../config/baseUrl';
import './SingleItem.css';
import Moment from 'react-moment';

const SingleItem = () => {
  const [item, setItem] = useState();
  let history = useHistory();
  const { id } = useParams();
  console.log(id);

  const getSingleItem = async () => {
    try {

      const res = await axios.get(baseURL + "/api/items/singleitem/" + id);

      console.log(res.data);

      setItem(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSingleItem();
  });

  const goBack =()=>{
    history.goBack();
  }

  console.log('Item:', item);

  return item ? (
    <React.Fragment>
      <div className="banner-container d-flex flex-column p-0">
        <div className="card card-styling mt-0 mx-auto col-8 p-0 border-0">
          <img className="card-img-top" src={item.images[0]} alt="Card Item" />
          <div className="card-body">
            <ul className="list-group-flush mb-0">
              <li className="list-group-item">
                <h4 className="mb-0 card-title font-weight-bold">
                  {item.name}
                </h4>
                <p className="mb-2">
                  <small className="text-muted">
                    <Moment format="DD.MM.YYYY">{item.createdAt}</Moment>{' '}
                  </small>
                </p>
              </li>
              <li className="list-group-item">
                <p className="card-text">{item.description}</p>
              </li>
              <li className="list-group-item">
                <li>Location: {item.location}</li>
                <li>
                  Condition:{' '}
                  {item.usedState ? <span>Used</span> : <span>New</span>}
                </li>
              </li>
              <li className="list-group-item">
                <p className="m-0 font-weight-bold">Contact details:</p>
                <p className="m-0">Phone: 123-456-7890</p>
                <p className="m-0">
                  <a href={`mailto:${item.userId.email}`} className="card-link">
                    Send email to:
                  </a>
                  &nbsp; {item.userId.email}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="container text-center px-0 pb-5 m-0 mx-auto">
          {/* <Link to={`/items/${item.category}`} className="btn btn-primary ">
            Back to items
          </Link> */}
          <button type="button" className="btn btn-primary me-2" onClick={goBack}>
          Go Back
            </button>
          <a href="/" className="card-link">
            <button type="button" className="btn btn-primary">
              Go to Home Page
            </button>
          </a>
        </div>
      </div>
    </React.Fragment>
  ) : (
    <div>Loading...</div>
  );
};

export default SingleItem;
