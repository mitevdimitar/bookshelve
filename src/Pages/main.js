import React from "react";
import Home from "./home";
import Dashboard from "./dashboard";
import { connect } from "react-redux";

function Main({ auth }) {
  return auth.isEmpty ? <Home /> : <Dashboard />;
};

function mapStateToProps(state) {
  console.log(state)
  return {
    auth: state.firebase.auth
  };
}

export default connect(mapStateToProps)(Main);