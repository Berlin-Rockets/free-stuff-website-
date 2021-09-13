import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar/Navbar";
import PostItem from "./components/PostItem";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Carousel from "./components/Carousel";
import axios from "axios";
import baseURL from "../src/config/baseUrl";

function App() {
  const [user, setUser] = useState();

  const getUser = async () => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      const userData = await axios.get(baseURL + "/users/" + userId);
      console.log(userData.data);
      setUser(userData.data);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={user} />

        <Banner />
        <Carousel />
        <Switch>
          <Route exact path="/banner" component={Banner} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/carousel" component={Carousel} />
          <Route exact path="/postItem" component={PostItem} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
