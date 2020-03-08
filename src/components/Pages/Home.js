import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/home-ml.jpg';

// const particle_style = {
// 		"width": "100%",
// 		"height": "100em",
// 		"backgroundImage": "radial-gradient(#053040,#010C0F)",
// 		"backgroundSize": "cover",
// 		"backgroundPosition": "50% 50%",
// 		"backgroundRepeat": "no-repeat"
// }

class Home extends Component{
	render(){
		return(
			<div style={{marginTop: 0}}>
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