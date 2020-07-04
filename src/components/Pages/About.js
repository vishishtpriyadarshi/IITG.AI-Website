import React, { Component } from 'react';

import retreat from './retreat';
import Jumbotron from './Jumbotron';
import PortfolioItem from './PortfolioItem';

export default class About extends Component {
    render() {
        return(
            <div className="bg-light">
                <Jumbotron 
                    title="IITG.ai - Student community" 
                    description="The AI community is lead by a dedicated group of student volunteers. Each one of them brings unique insights and expertise across various domains of AI. Our sense of motivation comes from a desire to solve challenging problems and we do this by  providing a platform for motivated students to be a part of a community that will aid in their pursuit of becoming a world class developers or researchers."
                    backgroundImage="Group.png"
                />
				<br />
				<div className="section">
                    <h2 className="section-title fancy-heading"> What we do </h2>
						<div className = "container" style={{margin : "auto"}}>
					ymkhana, this was the core vision we wanted to materialize - encourage students to view each other as collaborators to learn from and grow together with. And to help them realise that their network of support extends beyond their present peers in the form of seniors, alumni and Professors. The several paper discussion sessions, workshops, alumni webinars and a hackathon have been important milestones in that direction. Every member of the club is very excited about the future of the club and we have a ton of exciting things planned
					</div>
				</div>
				
				<div className="portfolio">
                    <div className="container">
							<div className="section" style={{textContent: "center"}}>
								<h2 className="section-title fancy-heading"> Mentor Talk </h2>
							</div>
							<div className="portfolio_items">
								<div className="row">
									  <PortfolioItem 
											header={null}
											title={"Aman Dalmia"}
											image={null}
											link={null}
											subtitle={"Founder of IITG.ai, currently at Wadhwani AI"}
											description={"One of the core aims of the club was to build a community, not only to share knowledge with each other, but also get diverse perspectives for tackling a given problem. It can be seen from the statements that there is already a wide spectrum in the reasons why several members joined the club and why they are excited about the field, ranging from solving intelligence to working on problems of societal importance. It is hard to imagine now, that just a couple of years ago, AI researchers on-campus used to mostly work in isolation, not necessarily because they wanted to do so, but because they lacked the platform that would enable collaboration. 2019 being the inaugural year of the club as an official part of the Gymkhana, this was the core vision we wanted to materialize - encourage students to view each other as collaborators to learn from and grow together with. And to help them realise that their network of support extends beyond their present peers in the form of seniors, alumni and Professors. The several paper discussion sessions, workshops, alumni webinars and a hackathon have been important milestones in that direction. Every member of the club is very excited about the future of the club and we have a ton of exciting things planned for the next year to help each member grow, both in terms of their learning and also their personal development as a future developer/researcher."}
											col={"12"}
											key={"1"}
									   / >
										<PortfolioItem 
											header={null}
											title={"Aditya Mehndiratta"}
											image={null}
											link={null}
											subtitle={"Ex-Secretary, 4th year"}
											description={"IITG.ai is an amazing amalgamation of people with varied interests. For some it is the mathematics that is intriguing while for some it is the code and application of AI. I think these varied interests are what makes this group special.Born out of a frustration in the lack of an AI culture in IITG, I believe that this group has an immense responsibility in taking a lead role in eliminating the high barrier required to excel in this field. In such a short span of time (barely 2 years since we started) we have seen a massive jump in participation and activities. From a mere handful of members we are more than a group of 20 now! Today,we have regular paper discussion ,courses and projects all running in parallel. The rise of IITG.ai has been phenomenal and something I can be truly proud of. I am sure that the current batch of enthusiastic members will set the bar even higher and churn out some incredible AI talent in the days to come."}
											col={"12"}
											key={"2"}
									   / >
								</div>
							</div>
								
									{/*<div className="portfolio_items">
								<div className="row">
									  <PortfolioItem 
											header={null}
											title={"Aditya Mehndiratta"}
											image={null}
											link={null}
											subtitle={"Ex-Secretary, 4th year"}
											description={"IITG.ai is an amazing amalgamation of people with varied interests. For some it is the mathematics that is intriguing while for some it is the code and application of AI. I think these varied interests are what makes this group special.Born out of a frustration in the lack of an AI culture in IITG, I believe that this group has an immense responsibility in taking a lead role in eliminating the high barrier required to excel in this field. In such a short span of time (barely 2 years since we started) we have seen a massive jump in participation and activities. From a mere handful of members we are more than a group of 20 now! Today,we have regular paper discussion ,courses and projects all running in parallel. The rise of IITG.ai has been phenomenal and something I can be truly proud of. I am sure that the current batch of enthusiastic members will set the bar even higher and churn out some incredible AI talent in the days to come."}
											col={"12"}
											key={"2"}
									   / >
								</div>
							</div>*/}
						</div>
					</div>
					
					
				
				{/* Carousel */}
				<br />
				<div className="section">
                    <h2 className="section-title fancy-heading"> Community </h2>
                    <div 
                        id="carouselExampleIndicators"
                        class="carousel slide" 
                        data-ride="carousel"
                        style={{
                            "width": "100vw",
                            "margin": "0 auto",
                        }}>
                    
                        <ol class="carousel-indicators">
                            {retreat.map((pic, index) => {
                                const active = index == 0 ? "active" : ""
                                return <li data-target="#carouselExampleIndicators" data-slide-to={index} class={active}> </li>                                
                            })}
                        </ol>
                        <div class="carousel-inner">
                            {retreat.map((pic, index) => {
                                const carouselClass = index == 0 ? "carousel-item active" : "carousel-item"
                                return (
                                    <div className={carouselClass}>
                                        <img 
											className = "d-block mx-auto"
                                            style={{height:"550px", width: "60%"}}
                                            src={require(`../assets/img/aboutCarousel/${pic.name}`)} 
                                            alt="" 
                                        />
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


