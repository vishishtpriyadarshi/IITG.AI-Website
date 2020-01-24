import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/home-ml.jpg';

class Home extends Component{
	render(){
		return(
			<div>
				<Header 
					title="Study Group at IIT Guwahati focused on learning Artificial Intelligence."
					subtitle=""
					buttonText="About Us"
					link="/about"
					showButton={true}
					image={image}
				/>
			</div>
		)	
	
	}
}

export default Home;