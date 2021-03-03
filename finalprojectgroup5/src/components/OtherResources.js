import react, { Component } from 'react';
import './OtherResources.css';
import LewistonME from '../images/LewistonME.png';

class OtherResources extends Component {
    render() {
        return ( 
        <div>
            <div><h1> Other resources for Covid Information</h1>
      <a className="resource-container" href="https://www.lewistonpublicschools.org/covid-19-school-community-information-45f4095b">
          <h2>Lewiston Public Schools: School Community and Health Information</h2>
      </a>
      <a className="resource-container" href= "https://www.cdc.gov/coronavirus/2019-ncov/index.html">
      <h2> CDC National Website Information</h2>
      </a>
      <a className="resource-container" href = "https://www.maine.gov/dhhs/mecdc/infectious-disease/epi/airborne/coronavirus/index.shtml">
      <h2> Local Maine Covid Updates </h2>
      </a>
      <a className="resource-container" href = "https://www.nami.org/Support-Education/NAMI-HelpLine/COVID-19-Information-and-Resources/COVID-19-Resource-and-Information-Guide">
      <h2> NAMI Covid Information Guide</h2>
      </a>
    </div>
    <img src={LewistonME} width="100%" height="500px" alt="Lewiston Aerial"></img>
    </div>
    
        )
    }
}

export default OtherResources; 