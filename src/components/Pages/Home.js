import React, {Component} from 'react';
import Landing from '../Common/Landing';

class Home extends Component{
	render() {
        return (
            <div>
                <Landing
                    message="Building and fostering a vibrant machine learning community."
                />
			</div>
        );
	}
}

export default Home;