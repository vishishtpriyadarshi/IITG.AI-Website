import React, { Component } from 'react';

import Jumbotron from '../Jumbotron';

export default class About extends Component {
    render() {
        return(
            <div className="bg-light">
                <Jumbotron 
                    title="Inter IIT Events" 
                    description="3 representatives (Eshwar, Dibyakanti and Shrey) from IITG.ai society took part in the Bitgrit data science competition and stood 2nd overall! "
                    backgroundImage="initiatives/interIIT.jpg"
                />

                <br />
                <div className="section">
                    <h2 className="section-title fancy-heading"> This page is under Maintenance </h2>
                </div>
				<br />  
			</div>     
        );
    }
}





