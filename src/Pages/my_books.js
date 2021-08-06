import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
    root: {
      //height: '100vh',
      marginTop: 20
    },
    button: {
        margin: 20
    },
    paper: {
        position: 'absolute',
        width: "50%",
        height: 500,
        top: "10%",
        left: "20%",
        backgroundColor: theme.palette.background.paper,
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: 10,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
  

function MyBooks() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const openAddBookModal = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <Grid container className={classes.root}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.paper}>
                    Modal
                </div>
            </Modal>
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