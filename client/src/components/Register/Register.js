import React, { useState } from 'react';
import axios from 'axios';
import baseURL from '../../config/baseUrl';
import './Register.css';
import '../Login/Login.css';


export default function Register() {
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const registerHandler = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const phone = e.target.phone.value;
    const user = {
      name,
      email,
      phone,
      password,
      confirmPassword,
    };
    
    try {
      const res = await axios.post(baseURL + '/users/register', user);
      
      if (res.data.err) {
        setError(res.data.err);
        setSuccess(null);
      } else {
        setError(null);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userId', res.data.userId);
        setSuccess('registered successfully');
        setTimeout(() => {
          window.location.replace('/');
        }, 500);
      }
     
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="register-container d-flex align-items-center mx-0">
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      {success && (
        <div className="alert alert-success" role="alert">
          {success}
        </div>
      )}
      <div className="card-container-reg card">
        <div className="card-header header-style text-center">
          <h5 className="pt-2">Register with us!</h5>
        </div>
        <div className="card-body">
          <div className="card-title mt-3">
            Please fill out the fields below:
          </div>
          <form className="d-flex flex-column" onSubmit={registerHandler}>
            <div className="container p-0 d-flex flex-column flex-wrap">
              <div className="container p-0 d-flex justify-content-between">
                <input
                  className="form-control mb-3 input-style"
                  id="inputUsername"
                  type="text"
                  name="name"
                  placeholder="Username*"
                  required
                />
                <input
                  className="form-control border mb-3 mt-0 input-style"
                  id="inputEmail4"
                  type="email"
                  name="email"
                  placeholder="Email*"
                  required
                />
              </div>
              <div className="container p-0 d-flex">
                <input
                  className="form-control mb-3 input-style"
                  id="inputPassword4"
                  type="password"
                  name="password"
                  placeholder="Password*"
                  required
                />
                <input
                  className="form-control mb-3 input-style"
                  id="inputPassword4"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password*"
                  required
                />
              </div>
              <input
                className="form-control mb-3 input-style"
                id="inputUsername"
                type="text"
                name="phone"
                placeholder="Phone (optional)"
                required
              />
            </div>

            <div className="form-check mt-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                required
              />
              <label className="form-check-label" for="flexCheckDefault">
                Accept our Terms and Conditions.
              </label>
            </div>
            <div className="form-check mt-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Do you wish to receive our newsletter? You can cancel it at any
                time.
              </label>
            </div>
            <div className="form-check mt-2 w-100">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                required
              />
              <label className="form-check-label" for="flexCheckDefault">
                I am not a robot - reCAPTCHA
              </label>
            </div>
            <input
              className="btn btn-dark w-50 mt-4 mx-auto text-capitalize"
              type="submit"
              value="Register"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
