import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import baseURL from '../src/config/baseUrl';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import SingleItem from './components/SingleItem/SingleItem';
import AllItems from './components/AllItems/AllItems';
import FByCategory from './components/Filter/FByCategory';
import Home from './components/Homepage/Home';
import PostItemmm from './components/StepPages/PostItemmm';
import Support from './components/Support/Support';
import AboutUs from './components/AboutUs/AboutUs';
import Terms from './components/Terms/Terms';
import Privacy from './components/PrivacyPolicy/Privacy';
import Advertise from './components/Advertise/Advertise';
import setAuth from './config/AuthSetting';
import AllUsers from './components/AllUsers/AllUsers';
import AllItemsControl from './components/AllItemsControl/AllItemsControl';
import EditItem from './components/Edit Item/EditItem';
import MyItem from './components/My Item/MyItem';
import CareersPage from './components/Careers/Careers';
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

  const setAuthToken = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuth(token);
    }
  };

  useEffect(() => {
    getUser();
    setAuthToken();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={user} />

        <Switch>
          <Route exact path="/" component={Home} />

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
          <Route exact path="/CareersPage" component={CareersPage} />
          <Route exact path="/Accordion" component={Accordion} />
          <Route exact path="/items/:filter" component={FByCategory} />
          <Route exact path="/items/singleItem/:id" component={SingleItem} />
          <Route exact path="/myItem" component={MyItem} />
          <Route exact path="/allusers" component={AllUsers} />
          <Route exact path="/editItem/:id" component={EditItem} />
          <Route exact path="/allItemsControl" component={AllItemsControl} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
