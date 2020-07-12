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
                        <h1>Connect with us</h1>
                        <h2 style={{color: "white"}}>iitguwahati.ai@gmail.com</h2>
                        <hr />
                        <p> Looking for collaboration or volunteering with our society? Shoot us a mail and we would be happy to respond to such requests along with any other general queries you have </p>
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