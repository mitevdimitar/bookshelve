import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Background from '../img/home_screen.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
      backgroundImage: `url(${Background})`
    },
  }));

function Home() {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            
        </Grid>
    )
}

export default Home;