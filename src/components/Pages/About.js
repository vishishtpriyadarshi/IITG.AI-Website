import React, {Component} from 'react';
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
				
				<div class = "page-section">
					<div className="timeline-body">
						<div className="card bg-dark text-white">
							<img style={{display: "inline-block", height: "600px"}} src="img/about/1.jpg" alt="Card image"/>
							<div className="card-img-overlay">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
								<p className="card-text">Last updated 3 mins ago</p>
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

export default About