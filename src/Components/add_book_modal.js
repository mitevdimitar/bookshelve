import React from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
        //padding: theme.spacing(3),
    },
    header: {
        height: 50,
        backgroundColor: theme.palette.primary.main,
        color: "white",
        paddingLeft: 20
    },
    closeIcon: {
        cursor: "pointer"
    }
}));

function AddBookModal({
    open,
    handleClose,
}) {
    const classes = useStyles();

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="Add book modal"
            aria-describedby="Modal for adding books to database"
        >
            <Grid /* container  */className={classes.paper}>
                <Grid container className={classes.header}>
                    <Grid container alignItems="center" item xs={11}>
                        <Typography variant="h6">
                            Add book
                        </Typography>
                    </Grid>
                    <Grid container alignItems="center" justify="center" item xs={1}>
                        <HighlightOffIcon className={classes.closeIcon} onClick={()=>handleClose()} />
                    </Grid>
                </Grid>
                <Grid container>
                    Body
                </Grid>
                <Grid container>
                    Footer
                </Grid>
            </Grid>
        </Modal>
    )
}

export default AddBookModal;