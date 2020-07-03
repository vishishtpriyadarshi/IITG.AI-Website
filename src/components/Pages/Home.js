import React, {Component} from 'react';
import Landing from '../Common/Landing';

class Home extends Component{
	render() {
        return (
            <div>
                <Landing
                    message = "The Artificial Intelligence Community of IIT Guwahati"
                />
			</div>
        );
	}
}

export default Home;