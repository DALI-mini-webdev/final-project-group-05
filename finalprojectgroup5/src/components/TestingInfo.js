import react, {Component} from 'react';
import LewistonMap from '../images/LewistonMap.png';
import './TestingInfo.css';
import VaccineSticker from '../images/VaccineSticker.png'
import LewistonME from '../images/LewistonME.png';

class TestingInfo extends Component {
    render() {
        const VaccineLocations = [
            "St. Mary's Regional Medical Center — Call 207-520-2917 to make an appointment",
            "Central Maine Medical Center — Call 207-755-3100 to make an appointment",
        ];
        const VaccineMap = VaccineLocations.map((Vaccine) => {
        return (
      <p>{Vaccine}</p>
        )
    });
        return ( 
            <div>
                <h1 className="header">
                    Testing and Vaccine Information 
                </h1>
                <h3 className="subheader"> Lewiston COVID-19 Testing Information  </h3>
                <div className="LewistonMap">
                    <img src={LewistonMap} height="550px" width="720px" alt="map" />
                </div>
                <div>
                <h2 className="links"> Links</h2>
                <div>
                </div>
                     <a className="link-styling" href="https://www.maine.gov/covid19/restartingmaine/keepmainehealthy/testing">
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
                    <div>
                    <h1 className="VaccineInfo">
                        Vaccine Information
                        <img src={VaccineSticker} height="100px" width="100px" alt="Vaccine Sticker"></img>
                    </h1>
                    </div>
                    <h3 className="MaineVac">Maine is committed to an accessible, flexible, and equitable vaccination effort.</h3>
                    <div>
                        <h4 className="Goals">Our vaccination strategy has two immediate goals:</h4>
                        <div className="list">
                            <ol>
                            <li>Save the lives of Maine people at greatest risk of serious illness or death from COVID-19. </li>
                            <li>Ensure vaccine providers can efficiently and quickly vaccinate as many people as possible. </li>
                            </ol>
                        </div>
                        <h4 className= "Eligible">When am I eligible to be vaccinated?</h4>
                        <p className="list">The state of Maine is using an age based approach for vaccination eligibility in order to maximize the limited vaccine supply and ensure every dose is used to protect the health of the Maine population</p>
                        <h5 className= "Eligibility">Vaccination Eligibility by Age:</h5>
                        <div className="list">
                        <ul>
                            <li>March 3: Age 60 and older</li>
                            <li>April: Age 50 and older</li>
                            <li>May: Age 40 and older</li>
                            <li>June: Age 30 and older</li>
                            <li>July: All ages (including children)</li>
                        </ul>
                        </div>
                        <h4 className="Locations">Lewiston/Auburn Vaccine Administration Locations:</h4>
                        <div className="centering">
                        <h3>Health Care Centers:</h3>
                        <div className="list">{VaccineMap}</div>
                        <h3>Pharmacies:</h3>
                        </div>
                        <div className="list">
                        <ul>
                        <li>To schedule a vaccination appointment at Walgreens, visit <a href="https://www.walgreens.com/findcare/vaccination/covid-19">Walgreens.com/ScheduleVaccine</a></li>
                        <li>To schedule a vaccination appointment at Walmart, visit <a href="https://www.walmart.com/cp/1228302">Walmart.com/COVIDvaccine</a></li>
                        </ul>
                        </div>
                        <h4 className= "Dashboard">Visit Maine's COVID-19 Vaccination Dashboard</h4>
                        <p className="centeringlast">view updated information about COVID-19 vaccine doses administered statewide</p>
                        <a className="centeringlast" href="https://www.maine.gov/covid19/vaccines/dashboard">view dashboard</a>
                        <h4 className= "Dashboard">More Vaccine Information Resources:</h4>
                        <ul>
                        <li><a href="https://www.maine.gov/covid19/vaccines/updates">Latest Vaccine Updates</a></li>
                        <li><a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/vaccine-benefits.html">Vaccine Facts</a></li>
                        <li><a href="https://www.maine.gov/covid19/vaccines/public-faq">FAQs</a></li>
                        </ul>
                        </div>
                        <img src={LewistonME} width="100%" height="500px" alt="Lewiston Aerial"></img>
                </div>    
            </div>
        )
    }
}

export default TestingInfo; 
