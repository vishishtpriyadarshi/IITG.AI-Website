import React, {Component} from 'react';
import { Link, NavLink } from "react-router-dom";
import homeLogo from '../assets/img/IITG.ai_Logo.png';

class PageWrapper extends Component{
	render(){
		return(
            <div>
				{/*<header className="header d-flex flex-row justify-content-end align-items-center trans_200">

                    <div className="logo mr-auto">
                        <Link to="/"><img src={homeLogo} height="80" alt=""/></Link>
                    </div>

                    <nav className="main_nav justify-self-end text-right">
                        <ul>
                            <li><NavLink to="/about">About Us</NavLink></li>
                            <li><NavLink to="/projects">Projects</NavLink></li>
                            <li><NavLink to="/initiatives">Initiatives</NavLink></li>
                            <li><NavLink to="/people">People</NavLink></li>
							<li><NavLink to="/blogs">Blogs</NavLink></li>
                            <li><NavLink to="/calendar">Calendar</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
							
                        </ul>
                    </nav>

                    <div className="hamburger_container bez_1"  data-target = "hamburger_container">
                        <i className="fa fa-bars trans_200"></i>
                    </div>

                </header>
					
                <div className="menu_container">
                    <div className="menu menu_mm text-right">
                        <div className="menu_close"><i className="far fa-times-circle trans_200"></i></div>
                        <ul className="menu_mm">
                            <li className="menu_mm active"><NavLink to="/index">Home</NavLink></li>
                            <li className="menu_mm"><NavLink to="/about">About Us</NavLink></li>
                            <li className="menu_mm"><NavLink to="/projects">Projects</NavLink></li>
                            <li className="menu_mm"><NavLink to="/initiatives">Initiatives</NavLink></li>
                            <li className="menu_mm"><NavLink to="/people">People</NavLink></li>
							<li className="menu_mm"><NavLink to="/blogs">Blogs</NavLink></li>
                            <li className="menu_mm"><a href="/calendar">Calendar</a></li>
                            <li className="menu_mm"><NavLink to="/contact">Contact</NavLink></li>
                        
                        </ul>
                    </div>
                </div>*/}
				
				
				<nav class="navbar navbar-expand-sm mb-4 fixed-top" id="nav1" style={{margin: 0}}>
					<Link class="navbar-brand" to="/">
						
                        	<Link to="/"><img src={homeLogo} height="80" alt=""/></Link>
                    	
					</Link>
					
			  			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
							<span class="navbar-toggler-icon"> <i className="fa fa-bars trans_200"></i> </span>
						</button>
		
						<div class="collapse navbar-collapse" id="mobile-nav" data-target=".navbar-collapse" data-toggle="collapse">

							<ul class="navbar-nav ml-auto">
								<li class="nav-item" >
									<Link class="nav-link" to="/about">About</Link>
								</li>

								<li class="nav-item">
									<Link class="nav-link" to="/projects">Projects</Link>
								</li>

								<li class="nav-item">
									<Link class="nav-link" to="/initiatives">Initiatives</Link>
								</li>

								<li class="nav-item">
									<Link class="nav-link" to="/people">People</Link>
								</li>

								<li class="nav-item">
									<Link class="nav-link" to="/calendar">Calendar</Link>
								</li>

								<li class="nav-item">
									<Link class="nav-link" to="/contact">Contact Us</Link>
								</li>
							
							</ul>
						</div>
				</nav>
        	</div>
        );
	}
}

export default PageWrapper;