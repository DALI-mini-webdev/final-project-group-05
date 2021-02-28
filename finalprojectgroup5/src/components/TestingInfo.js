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
                <div> 
                    <h1 className="VaccineInfo">
                        Vaccine Information
                    </h1>
                    <h3 className="MaineVac">Maine is committed to an accessible, flexible, and equitable vaccination effort.</h3>
                    <h4 className="Goals">Our vaccination strategy has two immediate goals:</h4>
                    <ol>
                    <li>Save the lives of Maine people at greatest risk of serious illness or death from COVID-19. </li>
                    <li>Ensure vaccine providers can efficiently and quickly vaccinate as many people as possible. </li>
                    </ol>
                    <h4 className= "Equitable">When am I equitable to be vaccinated?</h4>
                    <p>The state of Maine is using an age based approach for vaccination eligibility in order to maximize the limited vaccine supply and ensure every dose is used to protect the health of the Maine population</p>
                    <h5 className= "Eligibility">Vaccination Eligibility by Age:</h5>
                    <ul>
                        <li>March 3: Age 60 and older</li>
                        <li>April: Age 50 and older</li>
                        <li>May: Age 40 and older</li>
                        <li>June: Age 30 and older</li>
                        <li>July: All ages (including children)</li>
                    </ul>
                    <h4 className= "Dashboard">Visit Maine's COVID-19 Vaccination Dashboard</h4>
                    <p>view updated information about COVID-19 vaccine doses administered statewide</p>
                    <a href="https://www.maine.gov/covid19/vaccines/dashboard">view dashboard</a>
                    <h4>More Vaccine Information Resources:</h4>
                    <ul>
                    <li><a href="https://www.maine.gov/covid19/vaccines/updates">Latest Vaccine Updates</a></li>
                    <li><a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/vaccine-benefits.html">Vaccine Facts</a></li>
                    <li><a href="https://www.maine.gov/covid19/vaccines/public-faq">FAQs</a></li>
                    </ul>
                </div>    
            </div>
        )
    }
}

export default TestingInfo; 
