import React, { useState } from "react";
import axios from "axios";
import baseURL from "../config/baseUrl";
import "./Login.css";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

export default function Login() {
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const loginHandler = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    const user = {
      email,
      password,
    };
    // console.log('login user', user);
    try {
      const res = await axios.post(baseURL + "/users/login", user);
      // console.log(res.data);
      if (res.data.success) {
        // console.log(res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userId);
        setError(null);
        setSuccess(
          `Welcome ${res.data.data.username}, registered successfully`
        );
        setTimeout(() => {
          window.location.replace("/");
        }, 500);
      } else {
        setError("NO such user found in DB. Email or password is invalid");
        setSuccess(null);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const responseSuccessGoogle =(response)=>{
// console.log(response);
axios({
  method:'POST',
  url:'http://localhost:4000/users/googlelogin',
  data:{tokenId:response.tokenId}
}).then(response=>{
  console.log(response.data);
  localStorage.setItem("token",response.data.token);
  localStorage.setItem("userId", response.data.userId);
  setError(null);
  setSuccess(
    `Welcome ${response.data.data.username}, registered successfully`
  );
  setTimeout(() => {
    window.location.replace("/");
  }, 500);
})
  }

  const responseErrorGoogle=()=>{
    setError("NO such user found in DB. Email or password is invalid");
    setSuccess(null);
  }

  const responseFacebook =(response)=>{
    // console.log(response);
axios({
  method:'POST',
  url:'http://localhost:4000/users/facebooklogin',
  data:{accessToken:response.accessToken, userID:response.userID}
}).then(response=>{
  console.log('responseeeee', response.data);
  localStorage.setItem("token",response.data.token);
  localStorage.setItem("userId", response.data.userId);
  setError(null);
  setSuccess(
    `Welcome ${response.data.data.name}, registered successfully`
  );
  setTimeout(() => {
    window.location.replace("/");
  }, 500);
})
      }

  return (
    <div className="login d-flex  flex-column align-items-center  height rounded">
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
      <form
        className="d-flex  flex-column mt-5 "
        action="/login"
        method="POST"
        onSubmit={loginHandler}
      >
        <input
          className="form-control   m-3 border"
          type="email"
          name="email"
          aria-label="email"
          id="inputEmail3"
          placeholder="email"
          required
        />

        <input
          type="password"
          className="form-control m-3"
          name="password"
          aria-label="password"
          id="inputPassword3"
          placeholder="Password"
          required
        />

        <div className="form-check mt-2">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Keep me logged in
          </label>
        </div>

        <div className="form-check mt-2 ">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="CheckDefault"
            required
          />
          <label className="form-check-label" for="flexCheckDefault">
            I am not a robot - reCAPTCHA
          </label>
        </div>
        <div className="my=4">
          <p className="my=4">
            If you don't have an account, please{" "}
            <a href="/register">register here</a>{" "}
          </p>
        </div>

        <input className="btn btn-primary  my-3 " type="submit" value="login" />
      </form>
      <div className='d-flex flex-column '>
      <GoogleLogin
    clientId="353102265666-7892m1a66n2nim7n9alca66ctocb62bf.apps.googleusercontent.com"
    buttonText="Login with Google"
    onSuccess={responseSuccessGoogle}
    onFailure={responseErrorGoogle}
    cookiePolicy={'single_host_origin'}
  />,
  <FacebookLogin
    appId="211939294322602"
    autoLoad={false}
    callback={responseFacebook} />,
      </div>
    
    </div>
  );
}

 