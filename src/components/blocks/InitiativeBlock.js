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

const useStyles = makeStyles({
  root: {
    maxWidth: 245
  },
  media: {
    height: 140
  }
});

const useStylesGrid = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "20px 20px",
    height: "75%",
    width: "90%",
    align: "center"
  },
  paper: {
    padding: theme.spacing(),
    textAlign: "center",
    backgroundColor: "#7986cb",
    color: theme.palette.primary.contrastText
  }
}));

export default function CenteredGrid() {
  const classes = useStylesGrid();

  return (
    // <div className={classes.root}> onClick={() => alert("Hello from here")}>
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} style={{ display: "flex" }}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                //className={classes.media}
                component="img"
                image="/img/project_images/interiit.jpeg"
                title="Inter IIT"
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
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
              </CardActions>
          </Card>
          
        </Grid>
        <Grid item xs={6} style={{ display: "flex" }}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                //className={classes.media}
                component="img"
                image="/img/project_images/hackathons.jpg"
                title="Hackathons"
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
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
              </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6} style={{ display: "flex" }}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                //className={classes.media}
                component="img"
                image="/img/project_images/pdiscussions.jpeg"
                title="Paper Discussions"
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
          </Card>
        </Grid>
        <Grid item xs={6} style={{ display: "flex" }} padding={20}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                //className={classes.media}
                component="img"
                image="/img/project_images/alumni.jpeg"
                title="Alumni Interactions"
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
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
