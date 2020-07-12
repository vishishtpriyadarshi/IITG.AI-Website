import React, { Component } from 'react';

import data from './aboutCarouselData';
import PageHeader from './PageHeader';
import PortfolioItem from './PortfolioItem';

class About extends Component {
    render() {
        return(
            <div className="bg-light">
                <PageHeader 
                    title="IITG.ai - Student community" 
                    description="Dedicated student community of IITG with an aim to accelerate collaboration among students in AI research and development. Read on to find what motivates our members to be a part of our society and the need for a community in an institute like ours!"
                    backgroundImage="about/Group.png"
                />
				<br />
				<div className="section">
						<div className = "container2" style={{margin : "auto", fontSize: "250px !important"}}>
							“I joined the club to get mentorship and work with similar-minded people.”< br/>
“I want to work in AI to build something that can bring a meaningful change in the world.”< br/>
“We really enjoy discussing new ideas and papers together.”< br/>
“I like that we are respecting the research process and taking our time to deeply understand how things actually work.” <br />
“I want to solve intelligence by understanding how the brain works and drawing inspiration from other related fields like neuroscience.”< br/>
“I want to understand the theory behind why these algorithms learn what they do.”< br/>
“I believe that a combination of AI and human knowledge is better than both of them individually.”< br/> “I am excited about the real-life applications of advancements in computer vision.”< br/>
“I am very happy that we are thinking about the long-term and making real progress compared to just building prototypes without really understanding how things work.” < br/>< br/>
These are some of the excerpts shared by the members of the club when asked about their motivation to work in AI and their experience.
This community is led by a dedicated group of student volunteers. Each one of them brings unique insights and expertise across various domains of AI. 
We aim to provide a platform for like-minded people to come together and discuss ideas. In the process equipping them with sufficient theoretical and practical knowledge to take a career path in AI either as researchers or developers. We are excited about the possibilities and challenges that the field offers and we believe you should be too!
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
									    />
										<PortfolioItem  
											header={null}
											title={"Aditya Mehndiratta"}
											image={null}
											link={null}
											subtitle={"Ex-Secretary, 4th year"}
											description={"IITG.ai is an amazing amalgamation of people with varied interests. For some it is the mathematics that is intriguing while for some it is the code and application of AI. I think these varied interests are what makes this group special.Born out of a frustration in the lack of an AI culture in IITG, I believe that this group has an immense responsibility in taking a lead role in eliminating the high barrier required to excel in this field. In such a short span of time (barely 2 years since we started) we have seen a massive jump in participation and activities. From a mere handful of members we are more than a group of 20 now! Today,we have regular paper discussion ,courses and projects all running in parallel. The rise of IITG.ai has been phenomenal and something I can be truly proud of. I am sure that the current batch of enthusiastic members will set the bar even higher and churn out some incredible AI talent in the days to come."}
											col={"12"}
											key={"2"}
									    />
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
                            "width": "100%",
                            "margin": "0 auto",
                        }}>
                    
                        <ol class="carousel-indicators">
                            {data.map((pic, index) => {
                                const active = index === 0 ? "active" : ""
                                return <li data-target="#carouselExampleIndicators" data-slide-to={index} class={active}> </li>                                
                            })}
                        </ol>
                        <div class="carousel-inner">
                            {data.map((pic, index) => {
                                const carouselClass = index === 0 ? "carousel-item active" : "carousel-item"
                                return (
                                    <div className={carouselClass}>
                                        <img 
											className = "d-block mx-auto peopleCarouselImg"
                                            style={{height:"50%", width: "auto"}}
                                            src={require(`./aboutCarousel/${pic.name}`)} 
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


export default About;