import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import axios from 'axios';
import Header from './Common/Header';
import Footer from './Common/Footer';
import Landing from './Common/Landing';

import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Initiatives from './Pages/Initiatives/Initiatives'
import People from './Pages/People';
import ProjectHome from './Pages/Projects/ProjectHome';
import Calender from './Pages/Calender';
import Contact from './Pages/Contact';
import Blogs from './Pages/Blogs';
import Hackathons from './Pages/Initiatives/Hackathons';
import PaperDiscussions from './Pages/Initiatives/paperDiscussions';
import Alumni from './Pages/Initiatives/alumni';
import InterIIT from './Pages/Initiatives/interIIT';
import Maintenance from './Pages/Maintenance';

function NotFound() {
	  return (
		      <Landing message = "404 - Page Not Found" />
		    )
}

export default function MainPage() {
  return (
      <div className="super_container">
        <Header />
        <Switch>
          	<Route exact
				path = "/"
				component = {Home} 
			/>
			
        	<Route exact 
				path = "/about" 
				component = {About}
			/>
          	
			<Route exact
				path = "/projects"
				component = {ProjectHome}
			/>
			
          	<Route exact 
				path = "/initiatives"
				component = {Initiatives}
			/>
          	
			<Route exact 
				path = "/people"
				component = {People}
			/>
          	
			<Route exact
				path = "/calender"
				component = {Calender} 
			/>
			
			<Route exact
				path = "/contact" 
				component = {Contact} 
			/>
			
			<Route exact 
				path = "/Maintenance" 
				component = {Maintenance} 
			/>
			
			<Route exact 
				path = "/hackathons"
				component = {Hackathons}
			/>
			
			<Route exact
				path = "/alumni" 
				component = {Alumni} 
			/>
			
			<Route exact 
				path = "/paperdiscussions" 
				component = {PaperDiscussions} 
			/>
			
			<Route exact 
				path = "/interIIT"
				component = {InterIIT}
			/>
			
			<Route exact 
				path = "/blogs"
				component = {Blogs}
			/>
          
			<Route exact
				path = "**" 
				component = {NotFound} 
			/>
        
		  </Switch>
       
		  
		  <Footer />
      </div>
  );
}


