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

export default function People() {
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
}

