import React, { Component } from 'react';

import data from './hackathonsData';
import Jumbotron from '../Jumbotron';
import HackathonCollection from './HackathonsCollection';

export default class About extends Component {
    render() {
        return(
            <div className="bg-light">
                <Jumbotron 
                    title="Hackathons" 
                    description="What better way to showcase your skills in AI/ML than to participate in a hackathon"
                    backgroundImage="initiatives/Hackathon2.jpg"
                />
				
				<div className="portfolio">
					<div className="container">
						<h2 className="section-title fancy-heading">Events</h2>
						<div className="portfolio_items">
							<div className="row">
								{data.map(project => {
									return (
										<HackathonCollection 
											header={project.header}
											title={project.title}
											image={project.image}
											link={project.link}
											subtitle={project.subtitle}
											description={project.description}
											col={project.col}
											key={project.title}
										/ >
									)
								})}
							</div>
						</div>
					</div>
				</div>
			
			</div>
                
        );
    }
}





