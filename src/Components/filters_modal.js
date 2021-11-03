import React from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { mapStateToProps } from '../services/redux';
import { makeStyles } from '@material-ui/core/styles';
import { isMobileDevice } from '../services/mobile';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: isMobileDevice() ? "99%" : "50%",
        height: 400,
        top: "10%",
        left: isMobileDevice() ? 0 : "20%",
        backgroundColor: theme.palette.background.paper,
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: 10,
        boxShadow: theme.shadows[5],
    },
}));

function Filters({
    myBooks,
    handleClose
}) {
    const classes = useStyles();
    const { filtersModalOpen } = myBooks;

    return (
        <Modal
            open={filtersModalOpen}
            onClose={handleClose}
            aria-labelledby="Add book modal"
            aria-describedby="Modal for adding books to database"
        >
            <Grid className={classes.paper}>
                Filters  
            </Grid>
        </Modal>
    )
}

export default connect(mapStateToProps)(Filters);