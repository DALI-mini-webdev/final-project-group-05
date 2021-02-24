import React, { Component } from 'react';
import './App.css';
import LewistonMap from './LewistonMap.png';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className= "Title">
       <h1> Testing Information</h1>
      </div>
         <h2> Map </h2>
         <div>
            <img src={LewistonMap} height="400px" width="500px" alt="map" />
         </div>
         <h2> Links</h2>
          <a href= "https://www.maine.gov/covid19/restartingmaine/keepmainehealthy/testing">
            <h3> Click here for Maine Government Site-Covid info</h3>
          </a>
          <a href = "https://www.cmhc.org/about-us/cmh-alert/">
          <h3> Click Here for Central Maine Healthcare </h3>
          </a>
          <a href = "https://www.cvs.com/store-locator/cvs-pharmacy-address/8+Union+Street-Auburn-ME-04210/storeid=2382">
            <h3> Click Here for CVS Pharmacy</h3>
          </a>
    </div>
  );
}

export default App;
