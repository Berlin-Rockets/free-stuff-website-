import React, { useState } from "react";
import axios from "axios";
import baseURL from "../config/baseUrl";
import "./Login.css";


export default function Login() {
    const [error,setError]=useState()
    const [success, setSuccess]=useState()

const loginHandler=async(e)=>{
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    const user = {
      email,
      password,
    };
// console.log('login user', user);
try{
const res = await axios.post(baseURL+'/users/login', user)
console.log(res.data.data.username);
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
}catch(e){
    console.log(e);
}
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

<div class="form-check mt-2">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            
          />
          <label class="form-check-label" for="flexCheckDefault">
          Keep me logged in
          </label>
        </div>

        <div class="form-check mt-2 ">
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
<div  className='my=4'>
  <p className='my=4'>If you don't have an account, please <a href="/register">register here</a> </p>
</div>
        


        <input
          className="btn btn-primary  my-3 "
          type="submit"
          value="login"
        />

        
      </form>
    </div>
    )
}
