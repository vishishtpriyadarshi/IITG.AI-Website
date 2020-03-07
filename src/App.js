import React from 'react';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Projects from './components/Pages/Projects';
import InitiativeBlock from './components/blocks/InitiativeBlock'
import People from './components/Pages/People';
import PeopleBlock from './components/blocks/PeopleBlock';

function App() {
  return (
	   <Router>
    		<PageWrapper>
		  		<Route
					path="/"
					component={Home}
				/>
				
				<Route
					path="/about"
					component={About}
				/>
				
				<Route
					path="/projects"
					component={Projects}
				/>

				<InitiativeBlock />
				
				<People />

			</PageWrapper>
		</Router>
  );
}

export default App;
