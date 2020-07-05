import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';

import Jumbotron from '../Jumbotron';

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
    width: "auto",
    margin: "auto",
    color: theme.palette.primary.contrastText
  },
  media: {
    height: "auto",
    width: '100%',
    margin: 'auto'
  }
}));

export default function CenteredGrid() {
  	const classes = useStylesGrid();

  return (
    <div className="bg-light">
		<Jumbotron 
                    title="Initiatives" 
                    description="Phasellus sapien augue, accumsan eu magna pellentesque, ornare porttitor erat. Aliquam a risus in lorem mattis varius. Morbi hendrerit justo eget tristique ornare. Morbi rhoncus eget ex vitae feugiat. In vitae feugiat velit. Proin rhoncus ut odio non accumsan. Phasellus hendrerit non nulla in rhoncus. Suspendisse id orci sodales, consectetur eros semper, placerat enim."
                    backgroundImage="initiatives/Group.png"
        />
		<div className={classes.root}>
			<Paper item sm={12} md={6} className={classes.paper} elevation={3}> 
				{/*<section class="page-section bg-light" id="team">
					<div class="container">
						<div class="text-center">
							<h1 class="section-heading text-uppercase">INITIATIVES</h1>
						</div>

					</div>
				</section>
				<br />*/}
				<Grid container spacing={6} justify="center" alignItems="center">
					<Grid item sm={12} md={6} style={{ display: "flex"}}>
						<Card className={classes.root}>
							<CardActionArea>
								<Link to='/interIIT'>
									<CardMedia
										className={classes.media}
										component="img"
										image="/img/project/interiit3.png"
										title="Inter IIT"
									/>
								</Link>

								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Inter IIT
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										Phasellus sit amet tempus augue. Aliquam eget ipsum metus. Nunc a tellus eros. Fusce ac ante iaculis, lobortis ex porta, suscipit nulla. Integer placerat eleifend lectus, sed tristique erat lacinia et. Duis velit lorem, tincidunt laoreet fringilla in, dictum at dolor. Nunc augue mauris, blandit ac rhoncus eget, dignissim non justo. Duis scelerisque semper euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
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

					<Grid item sm={12} md={6} style={{ display: "flex" }}>
						<Card className={classes.root}>
							<CardActionArea>
								<Link to='/hackathons'>
									<CardMedia
										className={classes.media}
										component="img"
										image="/img/project/Hackathon3.jpg"
										title="Hackathons"
									/>
								</Link>

								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Hackathons
									</Typography>

									<Typography variant="body2" color="textSecondary" component="p">
										Phasellus sit amet tempus augue. Aliquam eget ipsum metus. Nunc a tellus eros. Fusce ac ante iaculis, lobortis ex porta, suscipit nulla. Integer placerat eleifend lectus, sed tristique erat lacinia et. Duis velit lorem, tincidunt laoreet fringilla in, dictum at dolor. Nunc augue mauris, blandit ac rhoncus eget, dignissim non justo. Duis scelerisque semper euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
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


					<Grid item sm={12} md={6} style={{ display: "flex" }}>
						<Card className={classes.root}>
							<CardActionArea>
								<Link to='/paperdiscussions'>
									<CardMedia
										className={classes.media}
										component="img"
										image="/img/project/Discussions.jpg"
										title="Paper Discussions"
									/>
								</Link>

								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Paper Discussions
									</Typography>

									<Typography variant="body2" color="textSecondary" component="p">
										Phasellus sit amet tempus augue. Aliquam eget ipsum metus. Nunc a tellus eros. Fusce ac ante iaculis, lobortis ex porta, suscipit nulla. Integer placerat eleifend lectus, sed tristique erat lacinia et. Duis velit lorem, tincidunt laoreet fringilla in, dictum at dolor. Nunc augue mauris, blandit ac rhoncus eget, dignissim non justo. Duis scelerisque semper euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
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



					<Grid item sm={12} md={6} style={{ display: "flex" }} padding={20}>
						<Card className={classes.root}>
							<CardActionArea>
								<Link to='/alumni'>
								<CardMedia
									className={classes.media}
									component="img"
									image="/img/project/sail.jpg"
									title="Alumni Interactions"
								/>
								</Link>

								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Alumni Interactions
									</Typography>

									<Typography variant="body2" color="textSecondary" component="p">
										Phasellus sit amet tempus augue. Aliquam eget ipsum metus. Nunc a tellus eros. Fusce ac ante iaculis, lobortis ex porta, suscipit nulla. Integer placerat eleifend lectus, sed tristique erat lacinia et. Duis velit lorem, tincidunt laoreet fringilla in, dictum at dolor. Nunc augue mauris, blandit ac rhoncus eget, dignissim non justo. Duis scelerisque semper euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
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
    </div>
  );
}
