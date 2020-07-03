import React, {Component} from 'react';
import Landing from '../Common/Landing';

class Home extends Component{
	render() {
        return (
            <div>
                <Landing
                    message = "Study Group at IIT Guwahati focused on learning Machine Learning & Deep Learning"
                />
			</div>
        );
	}
}

export default Home;