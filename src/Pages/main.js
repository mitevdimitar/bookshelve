import React from "react";
import Home from "./home";
import Dashboard from "./dashboard";
import { connect } from "react-redux";
import { mapStateToProps } from '../services/redux';

function Main({ firebase }) {
  return firebase.isEmpty ? <Home /> : <Dashboard />;
};

export default connect(mapStateToProps)(Main);