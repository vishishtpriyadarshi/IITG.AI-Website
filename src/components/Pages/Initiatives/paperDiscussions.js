import React, { Component } from 'react';
import Jumbotron from '../Jumbotron';


export default class About extends Component {
    render() {
        return(
            <div className="bg-light">
                <Jumbotron 
                    title="Paper Discussions" 
                    description="IITG.ai conducts weekly discussion sessions on research papers in various areas of ML"
                    backgroundImage="initiatives/paperDiscussion.jpg"
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





