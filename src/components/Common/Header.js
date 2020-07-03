import React, {Component} from 'react';
import { Link, NavLink } from "react-router-dom";
import homeLogo from '../assets/img/logo.png';

class PageWrapper extends Component{
	render(){
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
                            <li><NavLink to="/calender">Calendar</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
							
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