import react, { Component } from "react";
import hopeful from '../images/hopeful.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
   } from "react-router-dom";

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
            <div><h3>Symptom List + Self check: </h3><p> (information overview + link here) <a href = "http://localhost:3000/Symptom%20List%20+%20Self%20check">Self Check Assessment</a></p></div>
          </div>
          <div className="info-container">
            <div><h3>Testing/Vaccine Information: </h3><p> (information overview + link here) <a href = "http://localhost:3000/Vaccine%20Information">Testing/Vaccine Information</a></p></div>
          </div>
          <div className="info-container">
            <div><h3>Other Resources: </h3><p> (information overview + link here) <a href = "http://localhost:3000/Other%20Resources">Other Resources</a></p></div>
          </div>
          <div className="tracker-container">
            <div><h2>ANDROSCOGGIN COUNTY COVID-19 TRACKER:</h2><p> insert API </p></div>
          </div>
          <div>
            <img clasName="hopeful" src={hopeful} alt="Lewiston Hopeful Sign" />
          </div>
         </div>
           )
      }
  };

  export default Home;