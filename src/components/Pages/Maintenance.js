import React, {Component} from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import image from '../assets/img/logo.svg';
import ParticleBlock from '../blocks/ParticleBlock';

class Home extends Component{
	render(){
		return(
			<div style={{marginTop: 0}}>
				<Header 
					title="Under Maintenance"
					subtitle=""
					buttonText="About Us"
				/>
				<ParticleBlock />
			</div>
		)	
	
	}
}

export default Home;