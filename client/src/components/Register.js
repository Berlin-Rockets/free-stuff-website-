import React, { useState } from "react";
import axios from "axios";
import baseURL from "../config/baseUrl";
import "./Register.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function Register() {
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const registerHandler = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const phone = e.target.phone.value;
    const user = {
      username,
      email,
      phone,
      password,
      confirmPassword,
    };
    //   console.log(user);
    try {
      const res = await axios.post(baseURL + "/users/register", user);
      console.log(res);
      if (res.data.err) {
        setError(res.data.err);
        setSuccess(null);
      } else {
        setError(null);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userId);
        setSuccess("registered successfully");
        //   setTimeout(() => {
        //     window.location.replace("/");
        //   }, 3000);
      }
      console.log("RES ==> ", res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="register d-flex  flex-column align-items-center  height rounded">
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
      <form className="row flex mt-2 " onSubmit={registerHandler}>
        <div className="col-12 ">
          <div className="d-flex my-1 ">
            <div className="col-6 ">
              <label className="form-label" htmlFor="inputUsername">
                Username
              </label>
              <input
                className="form-control m-1 "
                id="inputUsername"
                type="text"
                name="username"
                required
              />
            </div>

            <div className="col-6 ">
              <label htmlFor="inputEmail4" className="form-label">
                Email
              </label>
              <input
                className="form-control border"
                id="inputEmail4"
                type="email"
                name="email"
                required
              />
            </div>
          </div>

          <div className="d-flex ">
            <div className="col-6">
              <label className="form-label" htmlFor="inputUsername">
                Phone
              </label>
              <input
                className="form-control "
                id="inputUsername"
                type="text"
                name="phone"
                required
              />
            </div>

            <div className="col-6">
              <label className="form-label" htmlFor="inputPassword4">
                Password
              </label>
              <input
                className="form-control"
                id="inputPassword4"
                type="password"
                name="password"
                required
              />
            </div>
          </div>

          <div className="col-6 mt-2">
            <label className="form-label" htmlFor="inputPassword4">
              Confirm Password
            </label>
            <input
              className="form-control"
              id="inputPassword4"
              type="password"
              name="confirmPassword"
              required
            />
          </div>

          <div class="form-check mt-2">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              required
            />
            <label class="form-check-label" for="flexCheckDefault">
              Accept our Terms and Conditions.
            </label>
          </div>

          <div class="form-check mt-2">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Do you wish to receive our newsletter? You can cancel it at any
              time.
            </label>
          </div>

          <div class="form-check mt-2 w-100">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              required
            />
            <label class="form-check-label" for="flexCheckDefault">
              I am not a robot - reCAPTCHA
            </label>
          </div>

          <input
            className="btn btn-primary w-100"
            type="submit"
            value="Register"
          />
         
         
        </div>
      </form>

      <div className="d-flex justify-content-center my-3 w-100">
            <p className="par text-center text-dark bg-light ">or</p>
          </div>

          <div className="d-flex flex-column align-items-center  w-100 ">

            <div className="my-2 w-50 ">
              <button className="w-100 btn btn-primary d-flex  align-items-center justify-content-center">
                <span className="bg-light p-2 rounded">
                  <FaFacebook className="w-100 me-3 text-primary" />
                </span>
                <span className="m-2">Login with Facebook</span>{" "}
              </button>
            </div>

            <div className="my-2 w-50">
              <button className="w-100 btn btn-primary d-flex  align-items-center justify-content-center">
                <span className="bg-light p-2 rounded ">
                  {" "}
                  <FcGoogle className="w-100 me-3" />
                </span>{" "}
                <span className="m-2">Login with Google</span>
              </button>
            </div>
            </div>

    </div>
  );
}
