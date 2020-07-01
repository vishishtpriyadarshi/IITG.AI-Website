import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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

		return (
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
		)
	}
}

export default PageWrapper;