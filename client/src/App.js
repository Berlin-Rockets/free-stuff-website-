import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import UserForm from "./components/PostItem/UserForm";

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
    <div className="App">
      <UserForm />
      {/* <Navbar /> */}
      {/* <Banner /> */}
      {/* <PostItem /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
