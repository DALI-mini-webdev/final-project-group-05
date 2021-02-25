import React, { Component } from 'react';
import './App.css';
import LewistonMap from './LewistonMap.png';
import Navbar from "./components/Navbar/Navbar";
import hopeful from './images/hopeful.png';

class App extends Component {
  render() {
    const buttonFunction = () => {
      console.log("the yes button was clicked");
    }
    const buttonFunction2 = () => {
      console.log("the no button was clicked");
    }
    return (
      <div className="App">
        <Navbar />
        <p id="header1-container" className="header1"> We are committed to providing regular updates to the community about COVID-19 testing results. This dashboard tracks the incidence of COVID-19 cases in the Maine community. </p>
        <h4>I am currently concerned about COVID-19 in my community:
        <button className="button" onClick={buttonFunction}>yes</button>
          <button className="button" onClick={buttonFunction2}>no</button>
        </h4>
        <div className="info-container">
          <div><h3>Symptom List + Self check: </h3><p> (information overview + link here)</p></div>
        </div>
        <div className="info-container">
          <div><h3>Testing Information: </h3><p> (information overview + link here)</p></div>
        </div>
        <div className="info-container">
          <div><h3>Vaccine Information: </h3><p> (information overview + link here)</p></div>
        </div>
        <div className="info-container">
          <div><h3>Other Resources: </h3><p> (information overview + link here)</p></div>
        </div>
        <div className="tracker-container">
          <div><h2>ANDROSCOGGIN COUNTY COVID-19 TRACKER:</h2><p> insert API </p></div>
        </div>
        <div>
          <img clasName="hopeful" src={hopeful} alt="Lewiston Hopeful Sign" />
        </div>
        <div className="Title">
          <h1> Testing Information</h1>
        </div>
        <h2> Map </h2>
        <div>
          <img src={LewistonMap} height="400px" width="500px" alt="map" />
        </div>
        <h2> Links</h2>
        <a href="https://www.maine.gov/covid19/restartingmaine/keepmainehealthy/testing">
          <h3> Click here for Maine Government Site-Covid info</h3>
        </a>
        <a href="https://www.cmhc.org/about-us/cmh-alert/">
          <h3> Click Here for Central Maine Healthcare </h3>
        </a>
        <a href="https://www.cvs.com/store-locator/cvs-pharmacy-address/8+Union+Street-Auburn-ME-04210/storeid=2382">
          <h3> Click Here for CVS Pharmacy</h3>
        </a>
      </div>
    )
  }
};

export default App;
