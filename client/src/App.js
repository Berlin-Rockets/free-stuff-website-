import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import baseURL from "../src/config/baseUrl";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner";
import Login from "./components/Login";
import Register from "./components/Register";
import Categories from "./components/Categories/Categories";
import SingleItem from "./components/SingleItem/SingleItem";
import AllItems from "./components/AllItems/AllItems";
import Accordion from "./components/Accordion/Accordion";
import UserForm from "./components/PostItem/UserForm";
import Carousel from "./components/Carousel";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer";

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
        {/* <Navbar user={user} /> */}
        <AboutUs />
        {/* <Banner /> */}
        {/* <Categories /> */}
        {/* <Carousel /> */}
        {/* <Switch> */}
        {/* <Route exact path="/banner" component={Banner} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/carousel" component={Carousel} /> */}
        {/* <Route exact path="/singleItem/:id" component={SingleItem} /> */}
        {/* </Switch> */}
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
