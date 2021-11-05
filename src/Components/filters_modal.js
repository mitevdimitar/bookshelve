import React from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { mapStateToProps } from '../services/redux';
import { makeStyles } from '@material-ui/core/styles';
import { isMobileDevice } from '../services/mobile';
import ModalHeader from './modal_header';
import i18n from '../i18n';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

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
    form: {
        marginTop: 50,
        marginLeft: 50,
        width: "100%"
    },
    formRow: {
        marginTop: 20
    }
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
                <ModalHeader handleClose={handleClose} title={i18n.t("default:_FILTERS")} />
                <FormControl className={classes.form} component="fieldset">
                    <RadioGroup
                        aria-label="filter"
                        defaultValue="author"
                        name="radio-buttons-group"
                    >
                        <Grid container alignItems="center" className={classes.formRow}>
                            <Grid item xs={5}>
                                <FormControlLabel value="author" control={<Radio />} label="Author" />
                            </Grid>
                            <Grid item xs={7}>
                                Select
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center"  className={classes.formRow}>
                            <FormControlLabel value="genre" control={<Radio />} label="Genre" />
                        </Grid>
                        <Grid container alignItems="center"  className={classes.formRow}>
                            <FormControlLabel value="nationality" control={<Radio />} label="Nationality" />
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </Grid>
        </Modal>
    )
}

export default connect(mapStateToProps)(Filters);