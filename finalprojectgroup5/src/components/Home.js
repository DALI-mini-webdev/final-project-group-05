import react, { Component } from "react";
import hopeful from '../images/hopeful.png';
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
          <p id="header1-container" className="header1"> We are committed to providing regular updates to the community about COVID-19 testing results. This dashboard tracks the incidence of COVID-19 cases in the Maine community. </p>
          <h4>I am currently concerned about COVID-19 in my community:
          <button className="button" onClick={buttonFunction}>yes</button>
            <button className="button" onClick={buttonFunction2}>no</button>
          </h4>
          <div className="info-container">
            <div><h3>Symptom List + Self check: </h3><p> Concerned about your health? Use this test to self-check to see if you are eligible for a COVID-19 test or need to quarentine. <a href = "http://localhost:3000/Symptom%20List%20+%20Self%20check">Self Check Assessment</a></p></div>
          </div>
          <div className="info-container">
            <div><h3>Testing/Vaccine Information: </h3><p> Find information on where to get tested in the Lewiston/Aurburn area as well as information on vaccination eligibility and clinic locations  <a href = "http://localhost:3000/Vaccine%20Information">Testing/Vaccine Information</a></p></div>
          </div>
          <div className="info-container">
            <div><h3>Other Resources: </h3><p> More information and resources concerning the COVID-19 pandemic. Find more health information conerning Lewiston Public School community, state-wide COVID-19 updates, as well as more genderal COVID-19 information through the CDC and NAMI <a href = "http://localhost:3000/Other%20Resources">Other Resources</a></p></div>
          </div>
          <div className="tracker-container">
            <div><h2>ANDROSCOGGIN COUNTY COVID-19 TRACKER:</h2><p> insert API </p></div>
            <div id="hopeful"><img clasName="hopeful" src={hopeful} alt="Lewiston Hopeful Sign" width="600px" height="415px"/></div>
          </div>
         </div>
           )
      }
  };

  export default Home;