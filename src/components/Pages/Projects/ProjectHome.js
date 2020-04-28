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

//import 'semantic-ui-css/semantic.min.css'
class ProjectHome extends Component {
    render() {
        return (
			<div>
				<div style={{padding: "4% 0%"}} className="font-family">
                    <h1 style={{textAlign: 'center', color: "#000000", fontWeight: '1100'}}>Projects</h1>
            	</div>
			  <Grid container spacing={24} justify="center">
				<Grid item md={3} >
				  <NTM />
				</Grid>
				<Grid item md={3}>
				  <AnimalAI />
				</Grid>
				<Grid item md={3}>
				 <MaskRCNN />
				</Grid>
			  </Grid>
				<Grid container spacing={24} justify="center">
				<Grid item md={3} >
				  <StyleGAN />
				</Grid>
				<Grid item md={3}>
				  <FakeNews />
				</Grid>
				<Grid item md={3}>
				  <CricketCV />
				</Grid>
			  </Grid>
				<Grid container spacing={24} justify="center">
				<Grid item md={3} >
				  <Face2Text />
				</Grid>
			  </Grid>
			</div>
			)
	}
}

export default ProjectHome;
