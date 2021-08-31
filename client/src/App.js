import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
