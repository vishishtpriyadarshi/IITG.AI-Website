import React, {Component} from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import image from '../assets/img/logo.png';
import ParticleBlock from '../blocks/ParticleBlock';

class Maintenance extends Component{
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

export default Maintenance;