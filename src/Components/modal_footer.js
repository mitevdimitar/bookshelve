import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    footer: {
        height: "10%"
    },
    button: {
        minWidth: 100,
        marginRight: 20
    },
}));

function ModalFooter({
    buttonName,
    onButtonClick
}) {
    const classes = useStyles();

    return (
        <Grid container className={classes.footer} justify="flex-end" alignItems="flex-start">
            <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={onButtonClick}
            >
                {buttonName}
            </Button>
        </Grid>
    )
}

export default ModalFooter;