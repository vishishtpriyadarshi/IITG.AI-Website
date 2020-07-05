import React, {Component} from 'react';
import bgImage from '../assets/img/IITG2.jpg';

class Contact extends Component{
	render(){
		return (
            <div className="home_small">
                <div className="home_background_container">
                    <div className="home_background" style={{backgroundImage: `url(${bgImage})`, filter: "brightness(0.4)"}}></div>
                </div>
                <div className="container">
                    <div className="home_small_content col-md-6">
                        <h1>Connect with us.</h1>
                        <h2 style={{color: "white"}}>IITG.ai email ID</h2>
                        <hr />
                        <p> Phasellus sapien augue, accumsan eu magna pellentesque, ornare porttitor erat. Aliquam a risus in lorem mattis varius. Morbi hendrerit justo eget tristique ornare. Morbi rhoncus eget ex vitae feugiat. In vitae feugiat velit. Proin rhoncus ut odio non accumsan. Phasellus hendrerit non nulla in rhoncus. Suspendisse id orci sodales, consectetur eros semper, placerat enim. </p>
                        <h3 style={{color: "white"}}>Follow us on social media</h3>
                        <div className="footer_social contact_social">
                            <ul>
                                <li><a href="https://www.facebook.com/iitgai/"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="https://medium.com/iitg-ai"><i className="fab fa-medium"></i></a></li>
								<li><a href="https://linkedin.com/company/iitg-ai"><i className="fab fa-linkedin"></i></a></li>
								<li><a href="https://github.com/IITGuwahati-AI"><i className="fab fa-github"></i></a></li>
								<li><a href="https://twitter.com/iitgai"><i className="fab fa-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
			</div>
		);
	}
}

export default Contact