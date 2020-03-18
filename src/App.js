import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import logo from "./logo.svg";

import Solar from "./components/Solar";
import Header from "./components/Header";

const theme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#9c27b0"
      },
      secondary: {
        main: "#ff1744"
      }
  }
});
function App() {
  // const prefersDarkMode = useMedia
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/solar">
              <Solar></Solar>
            </Route>
          </Switch>
        </Router>
      </CssBaseline>
    </MuiThemeProvider>
  );
}

export default App;
