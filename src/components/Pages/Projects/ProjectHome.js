import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Demo from './Card';
import FakeNews from './CardFakeNews';
import AnimalAI from './CardAnimalAI';
import CricketCV from './CardCricketCV';
import MaskRCNN from './CardMaskRCNN';
import NTM from './CardNTM';
import StyleGAN from './CardStyleGAN';
import Face2Text from './CardFace2Text';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Jumbotron from '../Jumbotron';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    right: theme.spacing(2),
  },
	
	appBar: {
		backgroundImage: "linear-gradient(to right top, #1f4a60, #135366, #065d68, #0a6667, #1d6e64, #177068, #0d716b, #00736f, #006d7c, #006687, #005d8b, #395187)",
	}
}));

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

class ProjectHome extends Component {
	
	render() {
        return (
			<div className="bg-light"><br />
				{/*<section class="page-section bg-light" id="team">
					<div class="container">
						<div class="text-center">
							<h1 class="section-heading text-uppercase">Projects</h1>
						</div>

					</div>
				</section>*/}
			
                <Jumbotron 
                    title="Projects Section" 
                    description="Phasellus sapien augue, accumsan eu magna pellentesque, ornare porttitor erat. Aliquam a risus in lorem mattis varius. Morbi hendrerit justo eget tristique ornare. Morbi rhoncus eget ex vitae feugiat. In vitae feugiat velit. Proin rhoncus ut odio non accumsan. Phasellus hendrerit non nulla in rhoncus. Suspendisse id orci sodales, consectetur eros semper, placerat enim."
                    backgroundImage="session.jpg"
                />
				<React.Fragment>
					<Grid container spacing={24} justify="center">
						<Grid item md={3} >
							<NTM />
						</Grid>
						<Grid item md={3}>
							<AnimalAI />
						</Grid>
						<Grid item md={3} >
							<StyleGAN />
						</Grid>
					</Grid>
					
					<Grid container spacing={24} justify="center">
						<Grid item md={3} >
							<Face2Text />
						</Grid>
						<Grid item md={3}>
							<FakeNews />
						</Grid>
						<Grid item md={3}>
							<CricketCV />
						</Grid>
					 </Grid>
					
				</React.Fragment>
			</div>
			);
	}
}

export default ProjectHome;
