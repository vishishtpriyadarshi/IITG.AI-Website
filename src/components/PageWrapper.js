import React, {Component} from 'react';
import { Link, NavLink } from "react-router-dom";
import homeLogo from './assets/img/logo.png';

class PageWrapper extends Component{
	render(){
		
		// return(
		// 	<div>
		// 		<nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
		// 			<div className="container">
		// 			  <Link className="navbar-brand js-scroll-trigger" to="/">IITG.AI</Link>
		// 			  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
		// 				Menu
		// 				<i className="fas fa-bars"></i>
		// 			  </button>
		// 			  <div className="collapse navbar-collapse" id="navbarResponsive">
		// 				<ul className="navbar-nav text-uppercase ml-auto">
		// 				  <li className="nav-item">
		// 					<Link className="nav-link js-scroll-trigger" to="/projects">Projects</Link>
		// 				  </li>
		// 				  <li className="nav-item">
		// 					<Link className="nav-link js-scroll-trigger" to="/initiatives">Initiatives</Link>
		// 				  </li>
		// 				  <li className="nav-item">
		// 					<Link className="nav-link js-scroll-trigger" to="/about">About</Link>
		// 				  </li>
		// 				  <li className="nav-item">
		// 					<Link className="nav-link js-scroll-trigger" to="/team">Team</Link>
		// 				  </li>
		// 				  <li className="nav-item">
		// 					<Link className="nav-link js-scroll-trigger" to="/contact">Contact</Link>
		// 				  </li>
		// 				</ul>
		// 			  </div>
		// 			</div>
		// 		</nav>
		// 		{this.props.children}
		// 	</div>
		// )  

		{/*return (
			<nav class="navbar navbar-expand-sm navbar navbar-dark bg-dark justify-content-between mb-4 fixed-top" style={{margin: 0}}>
				<div class="container" style={{margin: 0}}>
			  <Link class="navbar-brand js-scroll-trigger mx-2 font-italic text-warning" to="/" style={{fontSize: "200px !important;"}}><img id="logo" alt="Logo" src="img/logos/logo.svg" width="65" height="65" /><span>IITG.ai</span></Link>
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
				<span class="navbar-toggler-icon"></span>
			  </button>
		
					
			  
			<div class="collapse navbar-collapse" id="mobile-nav">
		
				<ul class="navbar-nav ml-auto">
				  <li class="nav-item">
					<Link class="nav-link js-scroll-trigger" style={{fontSize: "200px !important;"}}  to="/about">About</Link>
				  </li>
					<li>
					</li>
				  <li class="nav-item">
					<Link class="nav-link js-scroll-trigger" to="/projects">Projects</Link>
				  </li>
				  <li class="nav-item">
					<Link class="nav-link js-scroll-trigger" to="/initiatives">Initiatives</Link>
				  </li>
				  <li class="nav-item">
					<Link class="nav-link js-scroll-trigger" to="/team">Team</Link>
				  </li>
				  <li class="nav-item">
					<Link class="nav-link js-scroll-trigger" to="/calender">Calender</Link>
				  </li>
				  <li class="nav-item">
					<Link class="nav-link js-scroll-trigger" to="/contact">Contact Us</Link>
				  </li>
				</ul>
			  </div>
			</div>
			</nav>
		)*/}
		
		return(
            <div>
                <header className="header d-flex flex-row justify-content-end align-items-center trans_200">

                    <div className="logo mr-auto">
                        <Link to="/"><img src={homeLogo} height="80" alt=""/></Link>
                    </div>

                    <nav className="main_nav justify-self-end text-right">
                        <ul>
                            <li><NavLink to="/about">About Us</NavLink></li>
                            <li><NavLink to="/projects">Projects</NavLink></li>
                            <li><NavLink to="/initiatives">Initiatives</NavLink></li>
                            <li><NavLink to="/team">Team</NavLink></li>
                            <li><a href="/calendar">Calendar</a></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            {/* <li><a target="_blank" href="/api/careerfair"><button className="btn btn-success" style={{backgroundColor: "#005681", borderColor: "#005681", fontWeight: "600"}} className="btn btn-success">Career Fair</button></a></li> */}
                        </ul>
                    </nav>

                    <div className="hamburger_container bez_1">
                        <i className="fas fa-bars trans_200"></i>
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
                            <li className="menu_mm"><NavLink to="/team">Team</NavLink></li>
                            <li className="menu_mm"><a href="/calendar">Calendar</a></li>
                            <li className="menu_mm"><NavLink to="/contact">Contact</NavLink></li>
                        
                        </ul>
                    </div>
                </div>
            </div>
        );
	}
}

export default PageWrapper;