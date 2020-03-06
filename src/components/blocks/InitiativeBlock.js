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
    height: 360,
    width: 600,
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
                image="data:image/jpeg;base64,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"
                title="Inter IIT"
                //component="a"
                href="www.google.com"
                target="_blank"
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
                image="https://www.meetingsnet.com/sites/meetingsnet.com/files/styles/article_featured_retina/public/uploads/2016/11/thinkstockphotos-529162111.jpg?itok=_KWp52Hg"
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
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSol7055-r-ZVxVu_Ik00HUH1fVIA3EEEQHBMr_nwj9NylwdDYL"
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
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9gZdXpabJdmnKDXNJj3BXZgLkHDpNLK2nrw3NmpA_XTY5svXC"
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
