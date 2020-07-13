import React, { Component } from 'react';

import PageHeader from '../PageHeader';
import Grid from "@material-ui/core/Grid";

import FakeNews from './CardFakeNews';
import AnimalAI from './CardAnimalAI';
import CricketCV from './CardCricketCV';
import NTM from './CardNTM';
import StyleGAN from './CardStyleGAN';
import Face2Text from './CardFace2Text';

{/*import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';*/}

{/*const useStyles = makeStyles((theme) => ({
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
*/}

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
			
                <PageHeader 
                    title="Projects Section" 
                    description="Our members undertake a diverse range of projects in vision, language processing and reinforcement learning. You can find all the source code and instructions in the respective github repositories."
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
