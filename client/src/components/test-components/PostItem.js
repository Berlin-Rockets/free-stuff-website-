import React from 'react';
import axios from 'axios';
import baseURL from '../../config/baseUrl';
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

export default function PostItem() {
  const [item, setItem] = useState({});
  const [image, setImage] = useState({ preview: false, raw: '' });

  const changeHandler = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const fileHandler = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let fd = new FormData();
    fd.append('category', item.category);
    fd.append('name', item.name);
    fd.append('location', item.location);
    fd.append('file', image.raw, image.preview);
    console.log('fddddddddddd', fd);
    axios({
      method: 'POST',
      url: '/items',
      baseURL: baseURL,
      data: fd,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container rounded text-center mt-3 col-md-7 col-sm-10 col-xs-12">
      <div className="bg-light border p-md-5 p-sm-2 p-xs-1 rounded">
        <h4 className="text-dark mb-5 mt-3">
          User Registration Form
          <hr />
        </h4>

        <form
          className="form m-5"
          onSubmit={submitHandler}
          encType="multipart/form-data"
        >
          {/* upload Image */}
          <label htmlFor="upload-button" className="float-left mb-3">
            {/* image preview */}
            {image.preview ? (
              <div>
                <img
                  src={image.preview}
                  alt="profile-pic"
                  className="rounded-circle ml-3"
                  style={{
                    width: '100px',
                    height: '100px',
                    boxShadow: '3px 3px 6px 2px #173F5F',
                  }}
                />
                <span
                  style={{ float: 'left' }}
                  className="ml-3 mb-4 d-flex flex-direction-column align-items-start"
                >
                  <span className="text-dark col-3">
                    <FaUserCircle
                      style={{ fontSize: 'xxx-large', float: 'left' }}
                    />
                  </span>
                  <br />
                  <h6 className="text-secondary col-7">Upload photo</h6>
                </span>
              </div>
            ) : (
              <span
                style={{ float: 'left' }}
                className="ml-3 mb-4 d-flex flex-direction-column align-items-start"
              >
                <span className="text-dark col-3">
                  <FaUserCircle
                    style={{ fontSize: 'xxx-large', float: 'left' }}
                  />
                </span>
                <br />
                <h6 className="text-secondary col-7">Upload photo</h6>
              </span>
            )}
          </label>

          <input
            type="file"
            name="userImg"
            style={{ display: 'none' }}
            id="upload-button"
            onChange={fileHandler}
          />
          <br />
          <input
            type="text"
            name="category"
            placeholder="category"
            className="form-control mb-3 col-11 ml-3"
            onChange={changeHandler}
          />

          <input
            type="text"
            name="name"
            placeholder="name"
            className="form-control mb-3 col-11 ml-3"
            onChange={changeHandler}
          />

          <input
            type="text"
            name="location"
            id="location"
            className="form-control"
            onChange={changeHandler}
            placeholder="location"
          />
          <input
            type="submit"
            value="Register"
            className="btn btn-primary col-6 mt-3"
          />
        </form>
      </div>
      <div className="col-5 bg-info bg-img"></div>
    </div>
  );
}
