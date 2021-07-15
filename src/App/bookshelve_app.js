import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "../Pages/home";
import Login from "../Pages/login";
import MenuBar from "../Components/menu_bar";
import Signup from "../Pages/signup";

function App() {
  return (
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
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
