import React, { Component } from 'react';

import data from './hackathonsData';
import PageHeader from '../PageHeader';
import HackathonCollection from './HackathonsCollection';

export default class About extends Component {
    render() {
        return(
            <div className="bg-light">
                <PageHeader 
                    title="Hackathons" 
                    description="What better way to showcase your skills in AI/ML than to participate in a hackathon. The great thing about such hackathons is that we can easily develop an interesting application in just the span of a day or 24 hours. Subsequently, one could work on improving the model and getting better results. The learning outcome is also notable."
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
										/>
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





