import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "../services/firebase";

const useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
    },
  }));

function Dashboard() {
    const user = firebase.auth().currentUser;
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
          {user && `Welcome, ${user.displayName}!`}
        </Grid>
    )
}

export default Dashboard;