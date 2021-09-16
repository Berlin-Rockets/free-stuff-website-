import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import FirstPostItem from "./components/test-components/PostItem";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Categories from "./components/Categories/Categories";
import SingleItem from "./components/SingleItem/SingleItem";
import AllItems from "./components/AllItems/AllItems";
import axios from "axios";
import baseURL from "../src/config/baseUrl";
import Accordion from "./components/Accordion/Accordion";
// import UserForm from "./components/PostItem/UserForm";
import Home from "./components/Homepage/Home";
import Carousel from "./components/Carousel/Carousel";
import PostItemmm from "./components/StepPages/PostItemmm";
import Support from "./components/Support/Support";

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
        {/* <Banner /> */}

        {/* <Categories /> */}
        {/* <SingleItem /> */}
        {/* <UserForm /> */}
        {/* <AllItems /> */}
        {/* <Accordion /> */}
        {/* <Carousel /> */}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />

          <Route exact path="/items" component={AllItems} />
          {/* <Route exact path="/" component={UserForm} /> */}

          <Route exact path="/postItemmm" component={PostItemmm} />
          <Route exact path="/support" component={Support} />

          <Route exact path="/carousel" component={Carousel} />

          <Route exact path="/singleItem/:id" component={SingleItem} />
        </Switch>
        {/* <FirstPostItem/> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
