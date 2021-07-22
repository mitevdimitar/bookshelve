import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Main from "../Pages/main";
import Login from "../Pages/login";
import MenuBar from "../Components/menu_bar";
import Signup from "../Pages/signup";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#9D383B",
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <MenuBar />
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
