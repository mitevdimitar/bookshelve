import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#9D383B",
    },
    appBar: {
        minHeight: 54
    }
  }));

function MenuBar() {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar className={classes.appBar}>
                <Grid container justify="space-between">
                    <Grid container item xs={8} alignItems="center">        
                        <IconButton href="/" edge="start" color="inherit" aria-label="menu">
                            <HomeIcon />
                        </IconButton>
                        <Typography variant="h6">
                            Header
                        </Typography>
                    </Grid>
                    <Grid container item xs={4} justify="flex-end">
                        <Button href="/login" color="inherit">
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default MenuBar;