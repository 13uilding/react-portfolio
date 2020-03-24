import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography  from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  portrait: {
    height: 'auto',
    maxHeight: 300,
    maxWidth: 300,
    width: 'auto',
  },
  img: {
    height: 'auto',
    width: 'auto',
  },
  paper: {
    margin: '1rem 0 0 1rem',
    zIndex: '10',
  },
  typography: {
    margin: '0.5rem',
    textIndent: '1rem',
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function About() {
  const classes = useStyles();

  return (
  <div class='wrapper'>
    <Grid container className={classes.root}>
      <Grid item xs={12}> 
  <h1 style={{textAlign: 'center'}}>Hello World, <br/>I'm Dan Brown</h1>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify='center'>
          <Grid container justify='center' item sm={4}>
            <Avatar 
              src='/assets/mustachiothumb.png'
              alt='Dan Brown'
              className={classes.portrait}
            />
          </Grid>
          <Grid container justify='center' item sm={8}>
            <Paper variant='outlined' className={classes.paper}>
              <Typography className={classes.typography}>
                Full Stack Developer with background in Physics and Math eager to apply my knowledge concerning simulations and logic. Recently earned a certificate in Full Stack Web Development from the University of Denver, acquired skills in HTML/CSS, JavaScript, React.js, Node, and MongoDB/SQL. Known as a team player, troubleshooter, and lifelong learner with 5+ years of programming experience. With each project, my aim is guided by agile development, whether that entails working closely with another person, handling things on my own, or learning a new technology. My goal is to acquire new knowledge at every challenge, and be an asset to my future team regardless of the programming language or role.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
  )
}