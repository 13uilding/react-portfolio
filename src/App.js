import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import logo from "./logo.svg";

// Pages
import About from './pages/about';
import Algorithms from './pages/algorithms';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
// Components
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
    },
});
function App() {
  // const prefersDarkMode = useMedia

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/portfolio">
              <Portfolio></Portfolio>
            </Route>
            <Route exact path="/algorithms">
              <Algorithms></Algorithms>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route>
              <Solar></Solar>
            </Route>
          </Switch>
        </Router>
      </CssBaseline>
    </MuiThemeProvider>
  );
}

export default App;
