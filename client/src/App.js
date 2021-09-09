<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Navbar from './components/Navbar/Navbar';

import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Categories from './components/Categories/Categories';
import SingleItem from './components/SingleItem/SingleItem';
import AllItems from './components/AllItems/AllItems';
import axios from 'axios';
import baseURL from '../src/config/baseUrl';
=======
import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import UserForm from "./components/PostItem/UserForm";
>>>>>>> fc18f1cc12a3f6a77be84b4d42187ae9744014a1

function App() {
  const [user, setUser] = useState();

  const getUser = async () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      const userData = await axios.get(baseURL + '/users/' + userId);
      console.log(userData.data);
      setUser(userData.data);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
<<<<<<< HEAD
    <BrowserRouter>
      <div className="App">
        <Navbar user={user} />

        {/* <Banner /> */}
        {/* <SingleItem /> */}
        <AllItems />

        <Switch>
          <Route exact path="/banner" component={Banner} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          {/* <Route exact path="/singleItem/:id" component={SingleItem} /> */}
        </Switch>
        <Categories />
        <Footer />
      </div>
    </BrowserRouter>
=======
    <div className="App">
      <UserForm />
      {/* <Navbar /> */}
      {/* <Banner /> */}
      {/* <PostItem /> */}
      {/* <Footer /> */}
    </div>
>>>>>>> fc18f1cc12a3f6a77be84b4d42187ae9744014a1
  );
}

export default App;
