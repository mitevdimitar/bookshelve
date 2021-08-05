import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      //height: '100vh',
      marginTop: 20
    },
    button: {
        margin: 20
    }
  }));
  

function MyBooks() {
    const classes = useStyles();

    const openAddBookModal = () => {
        console.log('modal opened')
    }

    return(
        <Grid container className={classes.root}>
            <Grid container item className={classes.button}>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={openAddBookModal}
                >
                    Add book
                </Button>
            </Grid>
            <Grid>
                My books
            </Grid>
        </Grid>
    )
}

export default MyBooks;