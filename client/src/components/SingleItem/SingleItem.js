import React, { useState, useEffect } from 'react';
import 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import baseURL from '../../config/baseUrl';
import './SingleItem.css';

const SingleItem = () => {
  const [item, setItem] = useState();
  // console.log('run single item page');
  const { id } = useParams();
  console.log(id);

  const getSingleItem = async () => {
    try {
      const res = await axios.get(baseURL + '/items/singleitem/' + id);
      console.log(res.data);

      setItem(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSingleItem();
  }, []);

  // const goBack =()=>{
  //   window.history.back()
  // }

  console.log('Item:', item);

  return item ? (
    <React.Fragment>
      <div className="card card-styling mt-5 mx-auto col-8 p-0 border-0">
        <img className="card-img-top" src={item.images[0]} alt="Card Item" />
        <div className="card-body">
          <ul className="list-group-flush mb-0">
            <li className="list-group-item">
              <h4 className="mb-0 card-title font-weight-bold">{item.name}</h4>
              <p className="mb-2">
                <small className="text-muted">
                  Published on {item.createdAt}
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

              <p className="m-0 pl-3">Phone: 123-456-7890</p>

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
        <Link to={`/items/${item.category}`} className="btn btn-primary me-2">
          Back to items
        </Link>

        <a href="/" className="card-link">
          <button type="button" className="btn btn-primary">
            Go to Home Page
          </button>
        </a>
      </div>
    </React.Fragment>
  ) : (
    <div>Loading...</div>
  );
};

export default SingleItem;
