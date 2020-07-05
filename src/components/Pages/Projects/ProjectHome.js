import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Jumbotron from '../Jumbotron';
import Grid from "@material-ui/core/Grid";

import FakeNews from './CardFakeNews';
import AnimalAI from './CardAnimalAI';
import CricketCV from './CardCricketCV';
import NTM from './CardNTM';
import StyleGAN from './CardStyleGAN';
import Face2Text from './CardFace2Text';


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
                    backgroundImage="project/session.jpg"
                />
				<React.Fragment>
					<Grid container spacing={24} justify="center">
						<Grid item md={3} xs={12} sm={6}>
							<NTM />
						</Grid>
						<Grid item md={3} xs={12} sm={6}>
							<AnimalAI />
						</Grid>
						<Grid item md={3} xs={12} sm={6}>
							<StyleGAN />
						</Grid>
					</Grid>
					
					<Grid container spacing={24} justify="center">
						<Grid item md={3} xs={12} sm={6}>
							<Face2Text />
						</Grid>
						<Grid item md={3} xs={12} sm={6}>
							<FakeNews />
						</Grid>
						<Grid item md={3} xs={12} sm={6}>
							<CricketCV />
						</Grid>
					 </Grid>
					
				</React.Fragment>
			</div>
			);
	}
}

export default ProjectHome;
