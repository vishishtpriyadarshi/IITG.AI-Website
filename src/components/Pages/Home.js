import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/logo.svg';
import ParticleBlock from '../blocks/ParticleBlock';

class Home extends Component{
	render(){
		return(
			<div style={{marginTop: 0}}>
				<Header 
					title="Study Group at IIT Guwahati focused on learning Artificial Intelligence."
					subtitle=""
					buttonText="About Us"
					image={image}
				/>
				<ParticleBlock />
			</div>
		)	
	
	}
}

export default Home;