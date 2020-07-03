import React from 'react';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Projects from './components/Pages/Projects';
import Initiatives from './components/Pages/Initiatives'
import People from './components/Pages/People';
import ProjectHome from './components/Pages/Projects/ProjectHome';
import Calender from './components/Pages/Calender';
import Footer from './components/Common/Footer';
import Contact from './components/Pages/Contact';
import Hackathons from './components/Pages/Initiatives/Hackathons';
import PaperDiscussions from './components/Pages/Initiatives/paperDiscussions';
import Alumni from './components/Pages/Initiatives/alumni';
import InterIIT from './components/Pages/Initiatives/interIIT';
import Maintenance from './components/Pages/Maintenance';

function App() {
  return (
	   <Router>
    		<PageWrapper />
				<div className="outermost" style={{marginTop: "50px"}}>

				<Route
				  	exact
					path="/"
					component={Home}
				/>
				
				<Route
					exact
					path="/about"
					component={About}
				/>
				
				<Route
					exact
					path="/projects"
					component={ProjectHome}
				/>
				
				<Route
					exact
					path="/initiatives"
					component={Initiatives}
				/>

				<Route
					exact
					path="/team"
					component={People}
				/>

				<Route
					exact
					path="/calender"
					component={Calender}
				/>
					
				<Route
					exact
					path="/contact"
					component={Contact}
				/>
					
				<Route
					exact
					path="/Maintenance"
					component={Maintenance}
				/>
					
				<Route
					exact
					path="/hackathons"
					component={Hackathons}
				/>

				<Route
					exact
					path="/paperdiscussions"
					component={PaperDiscussions}
				/>

				<Route
					exact
					path="/alumni"
					component={Alumni}
				/>

				<Route
					exact
					path="/interIIT"
					component={InterIIT}
				/>
			</div>
		 <Footer />
		</Router>
  );
}

export default App;
