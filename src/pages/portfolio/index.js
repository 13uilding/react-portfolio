import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography  from '@material-ui/core/Typography';

import MediaCard from '../../components/MediaCard';

import updateProjects from '../../github';

// An array of pinned items
let pinned = [
  "react-portfolio", 
  "project3", 
  "project-two", 
  "Project01", 
  "HW6-WeatherAPI", 
  "EmployeeSummary"
]
let repoKeys = [
  "contributors_url",
  "description",
  "html_url",
  "name",
]
// let repoKeys = [
//   "node_id",
//   "name",
//   "html_url",
//   "description",
//   "url",
//   "languages_url",
//   "contributors_url",
//   "deployments_url",
//   "created_at",
//   "updated_at"
// ]

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
  const [repos, setRepos] = useState([{}])

  useEffect(() => {
    updateProjects(pinned, repoKeys, response => {
      setRepos(response);
    })
  }, [])

  return (
  <div class='wrapper'>
    <Grid container className={classes.root}>
      <Grid item xs={12}> 
  <h1 style={{textAlign: 'center'}}>Pinned GitHub Projects</h1>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify='center' spacing={3}>
          {repos.map(repos => {
            return (<MediaCard 
              contributors={repos.contributors_url}
              deployedLink={repos.name}
              description={repos.description}
              image={'/assets/' + repos.name + '.png'}
              repositoryLink={repos.html_url}
              title={repos.name}
              xs={12} lg={3}
            />)
          })}
        </Grid>
      </Grid>
    </Grid>
  </div>
  )
}