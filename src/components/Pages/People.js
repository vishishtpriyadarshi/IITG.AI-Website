import PeopleBlock from '../blocks/PeopleBlock'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const data_profs = require('../assets/people_data/profs')
const data_core = require('../assets/people_data/coreteam')
const data_mentors = require('../assets/people_data/mentors')
const data_heads = require('../assets/people_data/grpheads')

const inner_div_style = {
    "textAlign": "center",
    "marginBottom": "64px",
    "padding": "16px",
}

const header_style = {
    "padding": "16px",
    "fontWeight": "500",
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "75%",
    margin: "auto" 
  }
}));

/*export default function People() {
  const classes = useStyles();

  const profsList = data_profs.map(item => 
        <Grid item xs={2} sm={3}
            ><PeopleBlock img_src={item.source} name={item.name}/>
        </Grid>
        );
  const coreList = data_core.map(item => 
        <Grid item xs={2} sm={3}
            ><PeopleBlock img_src={item.source} name={item.name}/>
        </Grid>
        );
  const mentorsList = data_mentors.map(item => 
        <Grid item xs={2} sm={3}
            ><PeopleBlock img_src={item.source} name={item.name}/>
        </Grid>
        );
  const headsList = data_heads.map(item => 
        <Grid item xs={2} sm={3}
            ><PeopleBlock img_src={item.source} name={item.name}/>
        </Grid>
        );

  return (
      <div>

        <div style={inner_div_style}>
            <h2 style={header_style}> Professors </h2>
                <div className={classes.root}>
                    <Grid container spacing={2}>
                        {profsList}      
                    </Grid>
                </div>
        </div>

        <div style={inner_div_style}>
            <h2 style={header_style}> Secretary </h2>
                <PeopleBlock img_src="../assets/img/2.jpg" name="Aditya M." />
        </div>

        <div style={inner_div_style}>
            <h2 style={header_style}> Mentors </h2>
                <div className={classes.root}>
                    <Grid container spacing={2}>
                        {mentorsList}      
                    </Grid>
                </div>
        </div>
        
        <div style={inner_div_style}>
            <h2 style={header_style}> Group Heads </h2>
                <div className={classes.root}>
                    <Grid container spacing={2}>
                        {headsList}      
                    </Grid>
                </div>
        </div>

        <div style={inner_div_style}>
            <h2 style={header_style}> Core Team </h2>
                <div className={classes.root}>
                    <Grid container spacing={2}>
                        {coreList}      
                    </Grid>
                </div>
        </div>

    </div>
  );
}*/


export default function People() {
	return (
      	<div>
			<section class="page-section bg-light" id="team">
				<div class="container">
					<div class="text-center">
						<h2 class="section-heading text-uppercase">Our Amazing Team</h2>
						<h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
					</div>
					<div class="row">
						<div class="col-lg-4">
							<div class="team-member">
								<img class="mx-auto rounded-circle" src="img/team/M12.png" alt="" />
								<h4>Neeraja J.</h4>
								<p class="text-muted">Secretary</p>
								<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-github"></i></a>
								<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
								<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="team-member">
								<img class="mx-auto rounded-circle" src="img/team/2.jpg" alt="" />
								<h4>Animesh Renanse</h4>
								<p class="text-muted">ML Head</p>
								<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-github"></i></a>
								<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
								<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="team-member">
								<img class="mx-auto rounded-circle" src="img/team/M14.png" alt="" />
								<h4>Yashwant</h4>
								<p class="text-muted">CV Head</p>
								<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-github"></i></a>
								<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
								<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
							</div>
						</div>
					</div>
					
					<div class="row">
						<div class="col-lg-4">
							<div class="team-member">
								<img class="mx-auto rounded-circle" src="img/team/M11.png" alt="" />
								<h4>Abhilash</h4>
								<p class="text-muted">NLP Head</p>
								<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-github"></i></a>
								<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
								<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="team-member">
								<img class="mx-auto rounded-circle" src="img/team/2.jpg" alt="" />
								<h4>Vishisht Priyadarshi</h4>
								<p class="text-muted">Web Development Head</p>
								<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-github"></i></a>
								<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
								<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="team-member">
								<img class="mx-auto rounded-circle" src="img/team/M8.png" alt="" />
								<h4>Dibyakanti</h4>
								<p class="text-muted">Outreach & Open Source Head</p>
								<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-github"></i></a>
								<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
								<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
							</div>
						</div>
					</div>
					
					<div class="row">
						<div class="col-lg-3">
							<div class="team-member">
								<img class="mx-auto rounded-circle" src="img/team/M4.png" alt="" />
								<h4>Shrey Jani</h4>
								<p class="text-muted">Convenor (ML reasearch Day)</p>
								<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-github"></i></a>
								<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
								<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
							</div>
						</div>
						<div class="col-lg-3">
							<div class="team-member">
								<img class="mx-auto rounded-circle" src="img/team/M3.png" alt="" />
								<h4>Koushik Rajesh</h4>
								<p class="text-muted">Core Team Member</p>
								<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-github"></i></a>
								<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
								<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
							</div>
						</div>
						<div class="col-lg-3">
							<div class="team-member">
								<img class="mx-auto rounded-circle" src="img/team/M9.png" alt="" />
								<h4>Animesh Tiwari</h4>
								<p class="text-muted">Core Team Member</p>
								<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-github"></i></a>
								<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
								<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
							</div>
						</div>
						<div class="col-lg-3">
							<div class="team-member">
								<img class="mx-auto rounded-circle" src="img/team/M2.png" alt="" />
								<h4>Eshwar Nukala</h4>
								<p class="text-muted">Core Team Member</p>
								<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-github"></i></a>
								<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
								<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
  );
}

