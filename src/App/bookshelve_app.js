import React, { useCallback, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Main from "../Pages/main";
import Login from "../Pages/login";
import MenuBar from "../Components/MenuBar/menu_bar";
import Signup from "../Pages/signup";
import MyBooks from "../Pages/my_books";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import green from '@material-ui/core/colors/green';
import { connect } from "react-redux";
import { mapStateToProps } from '../services/redux';
import { getSettings } from '../services/settings';
import { SET_LANGUAGE } from '../store/actions/action_types';

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

function App({
  settings,
  firebase,
  dispatch
}) {
  const { lang } = settings;
  const token = firebase.stsTokenManager && firebase.stsTokenManager.accessToken;

  const setSettings = useCallback(async () => {
    const id = firebase.uid;
    const response = await getSettings(id, token);
    if (response && response.data) {
      const { lang } = response.data.settings;
      dispatch({
        type: SET_LANGUAGE,
        data: lang
      });
    }
  }, [firebase.uid, dispatch, token])

  useEffect(()=>{
    if (!firebase.isEmpty) {
      setSettings();
    }
  }, [lang, setSettings, firebase.isEmpty]);

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
            <Route path="/my-books">
              <MyBooks />
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

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(App);