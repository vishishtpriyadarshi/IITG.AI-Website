import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from 'react-router-dom'

const useStylesGrid = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "auto",
    height: "90%",
    width: "100%",
    padding: "5%",
	background: "bg-light"
  },
  paper: {
    padding: "2% 5% 5% 5%",
    width: 1200,
    margin: "auto",
    color: theme.palette.primary.contrastText
  },
  media: {
    height: 250,
    width: '100%',
    margin: 'auto'
  }
}));

export default function CenteredGrid() {
  	const classes = useStylesGrid();

  return (
    // <div className={classes.root}> onClick={() => alert("Hello from here")}>
	  
    <div className={classes.root}>
		<br />
    	<Paper className={classes.paper} elevation={3}> 
			<section class="page-section bg-light" id="team">
				<div class="container">
					<div class="text-center">
						<h1 class="section-heading text-uppercase">INITIATIVES</h1>
					</div>
			
				</div>
			</section>
			<br />
			<Grid container spacing={6} justify="center" alignItems="center">
				<Grid item xs={6} style={{ display: "flex"}}>
					<Card className={classes.root}>
						<CardActionArea>
							<Link to='/interIIT'>
								<CardMedia
								className={classes.media}
								component="img"
								image="/img/project_images/interiit3.png"
								title="Inter IIT"
								/>
							</Link>

							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Inter IIT
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Some Intro text on Inter-IIT
								</Typography>
							</CardContent>

						</CardActionArea>

						<CardActions>
							<Link to='/interIIT'>
								<Button size="small" color="primary">
								Learn More
								</Button>
							</Link>
						</CardActions>
					</Card>
				</Grid>
        
				<Grid item xs={6} style={{ display: "flex" }}>
					<Card className={classes.root}>
						<CardActionArea>
							<Link to='/hackathons'>
								<CardMedia
									className={classes.media}
									component="img"
									image="/img/project_images/Hackathon3.jpg"
									title="Hackathons"
								/>
							</Link>

							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Hackathons
								</Typography>

								<Typography variant="body2" color="textSecondary" component="p">
								Some Intro text on Hackathons
								</Typography>
							</CardContent>
						</CardActionArea>

						<CardActions>
							<Link to='/hackathons'>
								<Button size="small" color="primary">
									Learn More
								</Button>
							</Link>
						</CardActions>
					</Card>
				</Grid>
				
				
				<Grid item xs={6} style={{ display: "flex" }}>
					<Card className={classes.root}>
						<CardActionArea>
							<Link to='/paperdiscussions'>
								<CardMedia
									className={classes.media}
									component="img"
									image="/img/project_images/Discussions.jpg"
									title="Paper Discussions"
								/>
							</Link>

							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Paper Discussions
								</Typography>

								<Typography variant="body2" color="textSecondary" component="p">
								Some Intro text on Paper Discussions
								</Typography>
							</CardContent>
						</CardActionArea>

						<Link to='/paperdiscussions'>
							<Button size="small" color="primary">
							  Learn More
							</Button>
						</Link>
					</Card>
				</Grid>
				
				
				
				<Grid item xs={6} style={{ display: "flex" }} padding={20}>
					<Card className={classes.root}>
						<CardActionArea>
							<Link to='/alumni'>
							<CardMedia
							  className={classes.media}
							  component="img"
							  image="/img/project_images/sail.jpg"
							  title="Alumni Interactions"
							/>
							</Link>

							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Alumni Interactions
								</Typography>

								<Typography variant="body2" color="textSecondary" component="p">
								Some Intro text on Alumni Interactions
								</Typography>
							</CardContent>
						</CardActionArea>

						<Link to='/alumni'>
							<Button size="small" color="primary">
								Learn More
							</Button>
						</Link>
					</Card>
				</Grid>
    		</Grid>
		</Paper>
    </div>
  );
}
