import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    header: {
        height: "10%",
        backgroundColor: theme.palette.primary.main,
        color: "white",
        paddingLeft: 20
    },
    closeIcon: {
        cursor: "pointer"
    },
}));

function ModalHeader({
    handleClose,
    title
}) {
    const classes = useStyles();

    return (
        <Grid container className={classes.header}>
            <Grid container alignItems="center" item xs={11}>
                <Typography variant="h6">
                    {title}
                </Typography>
            </Grid>
            <Grid container alignItems="center" justify="center" item xs={1}>
                <HighlightOffIcon className={classes.closeIcon} onClick={()=>handleClose()} />
            </Grid>
        </Grid>
    )
}

export default ModalHeader;