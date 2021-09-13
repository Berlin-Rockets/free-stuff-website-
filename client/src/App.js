import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar/Navbar";

import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Categories from "./components/Categories/Categories";
import SingleItem from "./components/SingleItem/SingleItem";
import AllItems from "./components/AllItems/AllItems";
import axios from "axios";
import baseURL from "../src/config/baseUrl";
import Accordion from "./components/Accordion/Accordion";
import UserForm from "./components/";

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
        {/* <Banner /> */}
        {/* <SingleItem /> */}
        <UserForm />
        {/* <AllItems /> */}

        <Switch>
          {/* <Route exact path="/banner" component={Banner} /> */}
          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Route exact path="/register" component={Register} /> */}
          {/* <Route exact path="/singleItem/:id" component={SingleItem} /> */}
        </Switch>
        <Categories />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
