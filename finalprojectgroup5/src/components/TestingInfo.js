import react, {Component} from 'react';
import LewistonMap from '../images/LewistonMap.png';

class TestingInfo extends Component {
    render() {
        return ( 
            <div>
                <h1>
                    Testing Information 
                </h1>
                <h3> Lewiston COVID-19 Testing Information  </h3>
                <div>
                    <img src={LewistonMap} height="500px" width="500px" alt="map" />
                </div>
                <h1>
                    Vaccine Information
                </h1>
                <h3>Maine is committed to an accessible, flexible, and equitable vaccination effort.</h3>
                <h4>Our vaccination strategy has two immediate goals:</h4>
                <ol>
                <li>Save the lives of Maine people at greatest risk of serious illness or death from COVID-19. </li>
                <li>Ensure vaccine providers can efficiently and quickly vaccinate as many people as possible. </li>
                </ol>
                <h4>When am I equitable to be vaccinated?</h4>
                <p>The state of Maine is using an age based approach for vaccination eligibility in order to maximize the limited vaccine supply and ensure every dose is used to protect the health of the Maine population</p>
                <h5>Vaccination Eligibility by Age:</h5>
                <ul>
                    <li>March 3: Age 60 and older</li>
                    <li>April: Age 50 and older</li>
                    <li>May: Age 40 and older</li>
                    <li>June: Age 30 and older</li>
                    <li>July: All ages (including children)</li>
                </ul>
                <h4>Visit Maine's COVID-19 Vaccination Dashboard</h4>
                <p>view updated information about COVID-19 vaccine doses administered statewide</p>
                <a href="https://www.maine.gov/covid19/vaccines/dashboard">view dashboard</a>
                <h4>More Vaccine Information Resources:</h4>
                <ul>
                <li><a href="https://www.maine.gov/covid19/vaccines/updates">Latest Vaccine Updates</a></li>
                <li><a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/vaccine-benefits.html">Vaccine Facts</a></li>
                <li><a href="https://www.maine.gov/covid19/vaccines/public-faq">FAQs</a></li>
                </ul>
            </div>
        )
    }
}

export default TestingInfo; 
