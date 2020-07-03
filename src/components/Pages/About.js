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
						<div className = "text_line_content" style={{margin : "auto"}}>
					ymkhana, this was the core vision we wanted to materialize - encourage students to view each other as collaborators to learn from and grow together with. And to help them realise that their network of support extends beyond their present peers in the form of seniors, alumni and Professors. The several paper discussion sessions, workshops, alumni webinars and a hackathon have been important milestones in that direction. Every member of the club is very excited about the future of the club and we have a ton of exciting things planned
					</div>
				</div>
				
				{/* Text */}
				
				{/*<div className = "text_line">
					<div className = "container">
						<div className = "row">
							
							<div className = "col-lg-12 offset-lg-1">
								<div className = "text_line_content">
									<h2> Mentor Talk </h2>
									<ul style={{font: "150px"}}>
										<li>
										<q>I joined the club to get mentorship and work with similar-minded people.</q>
										</li>
										<li>
										<q>I want to solve intelligence by understanding how the brain works and drawing inspiration from other related fields like neuroscience.</q>
										</li>
										<li>
										<q>I believe that a combination of AI and human knowledge is better than both of them individually.</q>
										</li>
										<li>
										<q> I am excited about the real-life applications of advancements in computer vision.</q>
										</li>
										<li>
										<q>I like that we are respecting the research process and taking our time to deeply understand how things actually work.</q>
										</li>
										<li>
										<q>I am very happy that we are thinking about the long-term and making real progress compared to just building prototypes without really understanding how things work.</q>
										</li>
									</ul>
									
									These are some of the excerpts shared by the members of the club when asked about their motivation to work in AI and their experience over the past year. As mentioned above, one of the core aims of the club was to build a community, not only to share knowledge with each other, but also get diverse perspectives for tackling a given problem. It can be seen from the statements that there is already a wide spectrum in the reasons why several members joined the club and why they are excited about the field, ranging from solving intelligence to working on problems of societal importance. It is hard to imagine now, that just a couple of years ago, AI researchers on-campus used to mostly work in isolation, not necessarily because they wanted to do so, but because they lacked the platform that would enable collaboration. 2019 being the inaugural year of the club as an official part of the Gymkhana, this was the core vision we wanted to materialize - encourage students to view each other as collaborators to learn from and grow together with. And to help them realise that their network of support extends beyond their present peers in the form of seniors, alumni and Professors. The several paper discussion sessions, workshops, alumni webinars and a hackathon have been important milestones in that direction. Every member of the club is very excited about the future of the club and we have a ton of exciting things planned for the next year to help each member grow, both in terms of their learning and also their personal development as a future developer/researcher. <br/>
									<i><b>- Aman Dalmia (founder, currently at Wadhwani AI)</b></i>
								</div>
							</div>
						</div>
					</div>
				</div>*/}
				<div className="portfolio">
                    <div className="container">
							<div className="portfolio_items">
								<div className="row">
									  <PortfolioItem 
											header={"Mentor Talk"}
											title={"Aman Dalmia"}
											image={null}
											link={null}
											subtitle={"Founder of IITG.ai, currently at Wadhwani AI"}
											description={"One of the core aims of the club was to build a community, not only to share knowledge with each other, but also get diverse perspectives for tackling a given problem. It can be seen from the statements that there is already a wide spectrum in the reasons why several members joined the club and why they are excited about the field, ranging from solving intelligence to working on problems of societal importance. It is hard to imagine now, that just a couple of years ago, AI researchers on-campus used to mostly work in isolation, not necessarily because they wanted to do so, but because they lacked the platform that would enable collaboration. 2019 being the inaugural year of the club as an official part of the Gymkhana, this was the core vision we wanted to materialize - encourage students to view each other as collaborators to learn from and grow together with. And to help them realise that their network of support extends beyond their present peers in the form of seniors, alumni and Professors. The several paper discussion sessions, workshops, alumni webinars and a hackathon have been important milestones in that direction. Every member of the club is very excited about the future of the club and we have a ton of exciting things planned for the next year to help each member grow, both in terms of their learning and also their personal development as a future developer/researcher."}
											col={"12"}
											key={"1"}
									   / >
								</div>
							</div>
								
							<br/>
								
							<div className="portfolio_items">
								<div className="row">
									  <PortfolioItem 
											header={"Mentor Talk"}
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



{/*import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

class About extends Component{
	render(){
		return (
			<div>
				<br/>
				<div class = "page-section">
					<div id="demo" className="carousel slide" data-ride="carousel">


					  <ul className="carousel-indicators">
						<li data-target="#demo" data-slide-to="0" class="active"></li>
						<li data-target="#demo" data-slide-to="1"></li>
						<li data-target="#demo" data-slide-to="2"></li>
					  </ul>


					<div className="carousel-inner">
						<div className="carousel-item active">
						  <img style={{display: "inline-block", height: "450px;"}} src="img/about/1.jpg" alt="Los Angeles" width="1100" height="300"/>
						</div>
						<div className="carousel-item">
						  <img style={{display: "inline-block", height: "450px;"}} src="img/about/2.jpg" alt="Chicago" width="1100" height="300"/>
						</div>
						<div className="carousel-item">
						  <img style={{display: "inline-block", height: "450px;"}} src="img/about/3.jpg" alt="New York" width="1100" height="300"/>
						</div>
					  </div>


					  <a className="carousel-control-prev" href="#demo" data-slide="prev">
						<span className="carousel-control-prev-icon"></span>
					  </a>
					  <a className="carousel-control-next" href="#demo" data-slide="next">
						<span className="carousel-control-next-icon"></span>
					  </a>
					</div>
				</div>
				
				{/*<div class = "row">
					<div className="timeline-body">
						<div className="card bg-dark text-white">
							<img style={{display: "inline-block", height: "600px"}} src="img/about/Group.png" alt="Card image"/>
							<div className="card-img-overlay">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
								<p className="card-text">Last updated 3 mins ago</p>
							</div>
						</div>
					</div>
				
				</div>*
				<div className = "text_line">
					<div className = "container">
						<div className = "row">
							<div className = "col-lg-6 text-lg-right text-centre">
								<div className = "text_line_image" style = {{marginTop: "50%", marginRight: "10%"}}>
									<img src = "img/about/Group.png" alt />
								</div>

							</div>

							<div className = "col-lg-5 offset-lg-1">
								<div class = "text_line_content">
									<h1> About Us </h1>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!

									</p>
								</div>
							</div>

						</div>
					</div>
				</div>
				
				
				<section className="page-section" id="about">
					<div className="container">
					  <div className="row">
						<div className="col-lg-12 text-center">
						  <h2 className="section-heading text-uppercase">About</h2>
						  <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
						</div>
					  </div>
					  <div className="row">
						<div className="col-lg-12">
						  <ul className="timeline">
							<li>
							  <div className="timeline-image">
								<img className="rounded-circle img-fluid" src="img/about/1.jpg" alt="" />
							  </div>
							  <div className="timeline-panel">
								<div className="timeline-heading">
								  <h4>2009-2011</h4>
								  <h4 className="subheading">Our Humble Beginnings</h4>
								</div>
								
							  </div>
							</li>
							<li className="timeline-inverted">
							  <div className="timeline-image">
								<img className="rounded-circle img-fluid" src="img/about/2.jpg" alt="" />
							  </div>
							  <div className="timeline-panel">
								<div className="timeline-heading">
								  <h4>March 2011</h4>
								  <h4 className="subheading">An Agency is Born</h4>
								</div>
								<div className="timeline-body">
								  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
								</div>
							  </div>
							</li>
							<li>
							  <div className="timeline-image">
								<img className="rounded-circle img-fluid" src="img/about/3.jpg" alt="" />
							  </div>
							  <div className="timeline-panel">
								<div className="timeline-heading">
								  <h4>December 2012</h4>
								  <h4 className="subheading">Transition to Full Service</h4>
								</div>
								<div className="timeline-body">
								  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
								</div>
							  </div>
							</li>
							<li className="timeline-inverted">
							  <div className="timeline-image">
								<img className="rounded-circle img-fluid" src="img/about/4.jpg" alt="" />
							  </div>
							  <div className="timeline-panel">
								<div className="timeline-heading">
								  <h4>July 2014</h4>
								  <h4 className="subheading">Phase Two Expansion</h4>
								</div>
								<div className="timeline-body">
								  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
								</div>
							  </div>
							</li>
							<li className="timeline-inverted">
							  <div className="timeline-image">
								<h4>Be Part
								  <br />Of Our
								  <br />Story!</h4>
							  </div>
							</li>
						  </ul>
						</div>
					  </div>
					</div>
		  		</section>
			</div>
			
		)
	}
}

export default About*/}



