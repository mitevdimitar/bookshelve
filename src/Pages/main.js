import React from "react";
import Home from "./home";
import Dashboard from "./dashboard";

function Main({ auth }) {
  return !auth.isEmpty ? <Home /> : <Dashboardzxs />;
};

function mapStateToProps(state) {
  return {
    auth: state.firebaseReducer.auth
  };
}

export default connect(mapStateToProps)(Main);