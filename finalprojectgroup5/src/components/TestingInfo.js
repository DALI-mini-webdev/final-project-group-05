import react, {Component} from 'react';
import LewistonMap from '../images/LewistonMap.png';
import './TestingInfo.css';

class TestingInfo extends Component {
    render() {
        return ( 
            <div>
                <h1 className="header">
                    Testing and Vaccine Information 
                </h1>
                <h3 className="subheader"> Lewiston COVID-19 Testing Information  </h3>
                <div className="LewistonMap">
                    <img src={LewistonMap} height="450px" width="600px" alt="map" />
                </div>
                <div>
                <h2 className="links"> Links</h2>
                <div>
                </div>
                     <a href="https://www.maine.gov/covid19/restartingmaine/keepmainehealthy/testing">
                <h3 className="linkone"> Click here for Maine Government Site-Covid info</h3>
                     </a>
                 <a href="https://www.cmhc.org/about-us/cmh-alert/">
                 <h3 className="linktwo"> Click Here for Central Maine Healthcare </h3>
                </a>
                <a href="https://www.cvs.com/store-locator/cvs-pharmacy-address/8+Union+Street-Auburn-ME-04210/storeid=2382">
                <h3 className="linkthree"> Click Here for CVS Pharmacy</h3>
                </a>
                </div>
            </div>
        )
    }
}

export default TestingInfo; 
