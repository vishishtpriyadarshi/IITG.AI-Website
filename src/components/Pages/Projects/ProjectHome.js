import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Demo from './Card';

class ProjectHome extends Component {
    render() {
        return (
			<div>
				<div style={{padding: "4% 0%"}} className="font-family">
                    <h1 style={{textAlign: 'center', color: "#000000", fontWeight: '1100'}}>Projects</h1>
            	</div>
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