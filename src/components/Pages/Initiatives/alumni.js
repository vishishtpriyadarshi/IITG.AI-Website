import React, { Component } from 'react';

import PageHeader from '../PageHeader';
import data from './alumniData';

export default class About extends Component {
    render() {
        return(
            <div className="bg-light">
                <PageHeader 
                    title="Alumni Webinars/Professor Interaction" 
                    description="IITG.ai truly believes that in order to grow better, we need to have better connections with our alumni and also Professors. For this, we have started a webinar series where notable alumni in AI/ML share their experience /career paths and current work. Alumni who have already given talks include Aman Dalmia(Wadhwani AI), Vivek Gupta(founder SIGML), Rishabh Jangir(ex-Robotics club secy), and professors like Dr Ashish Anand."
                    backgroundImage="initiatives/sail.jpg"
                />

				{/*<br />
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
                </div>   */}
				
				<br />
				<div className="section">
                    <h2 className="section-title fancy-heading"> Interactions </h2>
                    <div 
                        id="carouselExampleIndicators"
                        class="carousel slide" 
                        data-ride="carousel"
                        style={{
                            "width": "100vw",
                            "margin": "0 auto",
                        }}>
                    
                        <ol className = "carousel-indicators">
                            {data.map((pic, index) => {
                                const active = index === 0 ? "active" : ""
                                return <li data-target="#carouselExampleIndicators" data-slide-to={index} className={active}> </li>                                
                            })}
                        </ol>
                        <div className = "carousel-inner">
                            {data.map((item, index) => {
                                const carouselClass = index === 0 ? "carousel-item active" : "carousel-item"
                                return (
                                    <div className={carouselClass}>
                                        <img 
											className = "d-block mx-auto"
                                            style={{height:"550px", width: "60%", filter: "brightness(0.7)"}}
                                            src={require(`./InteractionsCarousel/${item.name}`)} 
                                            alt="" 
                                        />
										<div class="carousel-caption">
											<h3 style={{color: "#ffff"}}> {item.text} </h3>
									  	</div>
                                    </div>
                                )
                            })}
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
				<br />
			</div>     
        );
    }
}





