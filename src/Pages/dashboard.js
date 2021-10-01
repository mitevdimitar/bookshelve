import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "../services/firebase";
import Pergament from '../img/pergament.jpg';
import { isMobileDevice } from '../services/mobile';

const useStyles = makeStyles((theme) => ({
    root: {
      height: "80vh",
      backgroundImage: !isMobileDevice() && `url(${Pergament})`,
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      fontSize: 35,
      color: "grey",
      textAlign: "center"
    },
  }));

function Dashboard() {
    const user = firebase.auth().currentUser;
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
          <Grid container item alignItems="center" justify="center">
              {user && `Welcome, ${user.displayName}!`}
          </Grid>
        </Grid>
    )
}

export default Dashboard;