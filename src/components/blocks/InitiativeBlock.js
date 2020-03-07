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

const useStylesGrid = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "20px 20px",
    height: "90%",
    width: "80%",
	
    align: "center"
  },
  paper: {
    padding: theme.spacing(1),
	marginLeft: '140px',
    width: 1200,
    color: theme.palette.primary.contrastText
  },
  media: {
    height: 250,
    width: '100%',
	align: "center",
	margin: 'auto'
  }
}));

export default function CenteredGrid() {
  	const classes = useStylesGrid();

  return (
    // <div className={classes.root}> onClick={() => alert("Hello from here")}>
    <div className={classes.root}>
		
	<Paper className={classes.paper} elevation={3}>  
		<h1 style={{textAlign: 'center', color: "#4169E1", fontWeight: '1500'}}> Initiatives</h1>
      <Grid container spacing={5} justify="center" alignItems="center">
        <Grid item xs={6} style={{ display: "flex"}}>
			<Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                image="/img/project_images/interiit3.png"
                title="Inter IIT"
				onClick={event => window.location.href='https://www.google.com'}
				
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Inter IIT
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
				{/*<Button size="small" color="primary" onClick={event => window.location.href='https://www.google.com'}>
                	Learn More
              	</Button>*/}
              </CardActions>
          </Card>
          
        </Grid>
		  
        <Grid item xs={6} style={{ display: "flex" }}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                image="/img/project_images/pdiscussions.jpeg"
                title="Hackathons"
				onClick={event => window.location.href='https://www.google.com'}
				
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Hackathons
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
				{/*<Button size="small" color="primary" onClick={event => window.location.href='https://www.google.com'}>
                	Learn More
              	</Button>*/}
              </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6} style={{ display: "flex" }}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                image="/img/project_images/hackathons.jpg"
                title="Paper Discussions"
				onClick={event => window.location.href='https://www.google.com'}
				  
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Paper Discussions
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
			  {/* <CardActions>
               	<Button size="small" color="primary" onClick={event => window.location.href='https://www.google.com'}>
                	Learn More
              	</Button>
              </CardActions>*/}
          </Card>
        </Grid>
        <Grid item xs={6} style={{ display: "flex" }} padding={20}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                image="/img/project_images/sail.jpg"
                title="Alumni Interactions"
				onClick={event => window.location.href='https://www.google.com'}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Alumni Interactions
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
			  {/*<CardActions>
				   
				   <Button size="small" color="primary" onClick={event => window.location.href='https://www.google.com'}>
                	Learn More
              		</Button>
				  
              
              </CardActions>*/}
          </Card>
        </Grid>
      </Grid>
		</Paper>
    </div>
  );
}
