import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardMedia } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
import { useHistory } from "react-router-dom";

const styles = {
  card: {
    minWidth: 300,
	height: 500,
	margin: 20,
	transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
	'&:hover': {
		boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
		transform: 'scale(1.04)',
	}
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
	media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function SimpleCard(props) {
  const { classes } = props;
  //const bull = <span className={classes.bullet}>•</span>;
	
  let history = useHistory();

  function handleClick() {
    history.push("/projects/ntm");
  }

  return (
    <div>
      <Card className={classes.card}>
		  <CardMedia
			  className={classes.media}
			  image="https://raw.githubusercontent.com/IITGuwahati-AI/AnimalAI/master/documentation/PrefabsPictures/steampunkFOURcrop.png"
			  title="Animal AI"
        	/>
        <CardContent>
          {/* <Typography className={classes.title} color="textSecondary">
            Word of the Day
          </Typography> */}
          <Typography variant="headline" component="h3">
            Animal AI
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            AnimalAI-Olympics
          </Typography>
          <Typography component="p">
            We implemented a reformed architecture which uses Proximal Policy Optimization for training the agent and also uses Behavior Cloning for incorporating Expert Trajectories.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" align="center"/*onClick={handleClick}*/ href = 'https://github.com/IITGuwahati-AI/AnimalAI'>Learn More <ChevronRightRounded /></Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);