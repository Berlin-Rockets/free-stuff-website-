import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import SingleItem from './components/SingleItem/SingleItem';
import AllItems from './components/AllItems/AllItems';
import FByCategory from './components/Filter/FByCategory';
import axios from 'axios';
import baseURL from '../src/config/baseUrl';
import Home from './components/Homepage/Home';
import Carousel from './components/Carousel/Carousel';
import PostItemmm from './components/StepPages/PostItemmm';
import Support from './components/Support/Support';
import AboutUs from './components/AboutUs/AboutUs';
import Terms from './components/Terms/Terms';
import Privacy from './components/PrivacyPolicy/Privacy';
import Advertise from './components/Advertise/Advertise';
import Banner from './components/Banner/Banner';
import FirstPostItem from './components/test-components/PostItem';
import Categories from './components/Categories/Categories';
import Accordion from './components/Accordion/Accordion';

function App() {
  const [user, setUser] = useState();

  const getUser = async () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      const userData = await axios.get(baseURL + '/users/' + userId);
      // console.log(userData.data);
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
        {/* <AboutUs /> */}

        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/items" component={AllItems} />
          <Route exact path="/postItemmm" component={PostItemmm} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/aboutUs" component={AboutUs} />
          <Route exact path="/Terms" component={Terms} />
          <Route exact path="/Privacy" component={Privacy} />
          <Route exact path="/advertise" component={Advertise} />
          <Route exact path="/carousel" component={Carousel} />
          <Route exact path="/items/:filter" component={FByCategory} />
          <Route exact path="/items/singleItem/:id" component={SingleItem} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
