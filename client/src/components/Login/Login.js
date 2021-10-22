import React, { useState } from "react";
import axios from "axios";
import baseURL from "../../config/baseUrl";
import "./Login.css";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import "../Button/Button.css";

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
      console.log(res.data);
      if (res.data.success) {
        // console.log(res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userId);
        setError(null);
        setSuccess(
          `Welcome ${res.data.data.username}, registered successfully`
        );
        // setTimeout(() => {
        //   window.location.replace('/');
        // }, 500);
      } else {
        setError("NO such user found in DB. Email or password is invalid");
        setSuccess(null);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const responseSuccessGoogle = (response) => {
    axios({
      method: "POST",
      url: `${baseURL}/users/googlelogin`,

      data: { tokenId: response.tokenId },
    }).then((response) => {
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);
        setError(null);
        setSuccess(
          `Welcome ${response.data.data.username}, registered successfully`
        );
        setTimeout(() => {
          window.location.replace("/");
        }, 200);
      } else {
        setError("please try to login again");
        setSuccess(null);
      }
    });
  };

  const responseErrorGoogle = () => {
    setError("please try to login again");
    setSuccess(null);
  };

  const responseFacebook = (response) => {
    axios({
      method: "POST",
      url: `${baseURL}/users/facebooklogin`,
      // url: 'http://localhost:4000/users/facebooklogin',
      data: { accessToken: response.accessToken, userID: response.userID },
    }).then((response) => {
      if ("name" in response.data.data) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);
        setError(null);
        setSuccess(
          `Welcome ${response.data.data.name}, registered successfully`
        );
        setTimeout(() => {
          window.location.replace("/");
        }, 200);
      } else {
        setError("please try to login again");
        setSuccess(null);
      }
    });
  };

  return (
    <div className="login-container d-flex justify-content-center mx-0">
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
      <div className="card-container card">
        <div className="card-header header-style text-center">
          <h5 className="pt-2">Log in with your account!</h5>
        </div>
        <div className="card-body ">
          <div className="card-title mt-3">
            Please enter your credentials below:
          </div>
          <form
            className="d-flex flex-column"
            action="/login"
            method="POST"
            onSubmit={loginHandler}
          >
            <input
              className="form-control border mb-3"
              type="email"
              name="email"
              aria-label="email"
              id="inputEmail3"
              placeholder="Email"
              required
            />
            <input
              type="password"
              className="form-control"
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
              <label
                className="form-check-label text-color"
                for="flexCheckDefault"
              >
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
              <label
                className="form-check-label text-color"
                for="flexCheckDefault"
              >
                I am not a robot - reCAPTCHA
              </label>
            </div>

            <p className="my-4 text-color">
              If you don't have an account, please{" "}
              <a href="/register">register here</a>{" "}
            </p>

            <input
              className="btn-dark btn-log-modal mt-3 mb-4 py-0"
              type="submit"
              value="login"
            />
          </form>
          <div className="d-flex flex-row justify-content-between">
            <div className="btn-google">
              <GoogleLogin
                clientId="353102265666-7892m1a66n2nim7n9alca66ctocb62bf.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseSuccessGoogle}
                onFailure={responseErrorGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </div>
            <FacebookLogin
              appId="211939294322602"
              autoLoad={false}
              callback={responseFacebook}
              cssClass="my-facebook-button-class"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
