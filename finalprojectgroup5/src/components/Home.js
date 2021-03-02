import react, { Component } from "react";
import LewistonME from '../images/LewistonME.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
   } from "react-router-dom";
import './Home.css';

class Home extends Component {
    render() {
      const buttonFunction = () => {
        console.log("the yes button was clicked");
      }
      const buttonFunction2 = () => {
        console.log("the no button was clicked");
      }
      
      return (
        <div className="App">
          <div>
          <p id="header1-container" className="header1"> Lewiston, Maine COVID-19 Information </p>
          </div>
          <div className="info-container">
            <div><h3><a href = "http://localhost:3000/Symptom%20List%20+%20Self%20check">Symptom List+ Self Check</a></h3><p> Concerned about your health? Use this test to self-check to see if you are eligible for a COVID-19 test or need to quarentine.</p></div>
          </div>
          <div className="info-container">
            <div><h3><a href = "http://localhost:3000/Testing%20+%20Vaccine%20Information">Testing + Vaccine Information</a></h3><p> Find information on where to get tested in the Lewiston/Aurburn area as well as information on vaccination eligibility and clinic locations</p></div>
          </div>
          <div className="info-container">
            <div><h3><a href = "http://localhost:3000/Other%20Resources">Other Resources</a></h3><p> More information and resources concerning the COVID-19 pandemic. Find more health information conerning Lewiston Public School community, state-wide COVID-19 updates, as well as more genderal COVID-19 information through the CDC and NAMI</p></div>
          </div>
          <img src={LewistonME} width="100%" height="500px" alt="Lewiston Aerial"></img>
         </div>
           )
      }
  };

  export default Home;