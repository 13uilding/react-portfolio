import React from 'react';
import { useLocation } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


import Drawer from '../Drawer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  let location = useLocation();
  console.log(location);



  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Drawer></Drawer>
          <Typography className={classes.title} variant="h6" noWrap>
            {location.pathname === "/" ? "WELCOME TO MY PORTFOLIO" : location.pathname.split("/").join(" ").toUpperCase()}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
