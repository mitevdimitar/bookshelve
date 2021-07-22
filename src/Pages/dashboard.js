import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
    },
  }));

function Dashboard() {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            Dashboard
        </Grid>
    )
}

export default Dashboard;