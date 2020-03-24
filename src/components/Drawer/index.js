import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { MemoryRouter as Router } from 'react-router';
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Link from '@material-ui/core/Link';
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// Icons
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FunctionsIcon from "@material-ui/icons/Functions";
import MailIcon from "@material-ui/icons/Mail";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
// My files

// const LinkBehavior = React.forwardRef((props, ref) => (
//   <RouterLink ref={ref} to="/getting-started/installation/" {...props} />
// ));

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
}));

export default function TemporaryDrawer() {


  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["About", "Portfolio", "Algorithms"].map(text => (
          <ListItem button key={text}>
            <ListItemIcon>
              {text === "About" ? (
                <AccountCircleIcon />
              ) : text === "Portfolio" ? (
                <FunctionsIcon />
              ) : (
                <AccountTreeIcon />
              )}
            </ListItemIcon>
            <Link component={RouterLink} to={`/${text.toLowerCase()}`}>
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Contact", "LinkedIn", "Github"].map(text => (
          <ListItem button key={text}>
            <ListItemIcon>
              {text === "Contact" ? (
                <MailIcon />
              ) : text === "LinkedIn" ? (
                <LinkedInIcon />
              ) : (
                <GitHubIcon />
              )}
            </ListItemIcon>
            <Link component={RouterLink} to={`/${text.toLowerCase()}`}>
              <ListItemText style={{fontWeight: 'strong'}} primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer("top", true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer("top", false)}
        color="inherit"
      >
        {list("top")}
      </Drawer>
    </div>
  );
}
