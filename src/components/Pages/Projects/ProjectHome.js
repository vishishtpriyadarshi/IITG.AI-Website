import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Demo from './Card';

class ProjectHome extends Component {
    render() {
        return (
			<div>
			  <Grid container spacing={24} justify="center">
				<Grid item md={3} >
				  <Demo />
				</Grid>
				<Grid item md={3}>
				  <Demo />
				</Grid>
				<Grid item md={3}>
				  <Demo />
				</Grid>
			  </Grid>
			</div>
			)
	}
}

export default ProjectHome;