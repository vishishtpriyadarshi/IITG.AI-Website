import React, { Component } from 'react';

import Jumbotron from '../Jumbotron';
import PortfolioItem from '../PortfolioItem';

export default class About extends Component {
    render() {
        return(
            <div className="bg-light">
                <Jumbotron 
                    title="Alumni Webinars/Professor Interaction" 
                    description="IITG.ai truly believes that in order to grow better, we need to have better connections with our alumni and also Professors. For this, we have started a webinar series where notable alumni in AI/ML share their experience /career paths and current work."
                    backgroundImage="sail.jpg"
                />

                <br />
                <div className="section">
                    <h2 className="section-title fancy-heading"> Interactions </h2>

                    <div className="container">
                            <div className="portfolio_items">
                                <div className="row">
                                    <PortfolioItem 
                                        header={"Professors"}
                                        title={"Dr. Ashish Anand"}
                                        image={"2.jpg"}
                                        link={null}
                                        subtitle={null}
                                        description={"Professors who have given a talk at IITG.ai include Dr Ashish Anand "}
                                        col={"6"}
                                        key={"1"}
                                    / >

                                    <PortfolioItem 
                                        header={"Alumni"}
                                            title={"Webinars"}
                                            image={"2.jpg"}
                                            link={null}
                                            subtitle={null}
                                            description={"Alumni who have already given talks include Aman Dalmia(Wadhwani AI), Vivek Gupta(founder SIGML), Rishabh Jangir(ex-Robotics club secy)."}
                                            col={"6"}
                                            key={"2"}
                                    / >
                                </div>
                            </div>
                                    
                        </div>
                </div>   
			</div>     
        );
    }
}





