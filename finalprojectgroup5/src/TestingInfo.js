import react, {Component} from 'react';
import LewistonMap from './LewistonMap.jpg';

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
            </div>
        )
    }
}

export default TestingInfo; 
