import React from "react";
import Home from "./home";
import Login from "./login";

function Main({ auth }) {
  return !auth.isEmpty ? <Home /> : <Login />;
};

function mapStateToProps(state) {
  return {
    auth: state.firebaseReducer.auth
  };
}

export default connect(mapStateToProps)(Main);