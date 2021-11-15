import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { mapStateToProps } from '../services/redux';
import { makeStyles } from '@material-ui/core/styles';
import { isMobileDevice } from '../services/mobile';
import ModalHeader from './modal_header';
import ModalFooter from './modal_footer';
import i18n from '../i18n';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


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
        paddingLeft: "10%",
        width: "80%",
    },
    formRow: {
        marginTop: 20
    },
    select: {
        marginBottom: 20
    }
}));

function Filters({
    myBooks,
    handleClose
}) {
    const classes = useStyles();
    const { filtersModalOpen, authors } = myBooks;
    const [filterValue, setFilterValue] = useState("");

    const handleAuthorChange = (e) => {
        setFilterValue(e.target.value);
    }

    const onApplyFilter = () => {
        console.log('applying filter')
    }

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
                            <Grid className={classes.select} item xs={7}>
                                <FormControl fullWidth>
                                    <InputLabel id="author-select-label">Author</InputLabel>
                                    <Select
                                        labelId="author-select-label"
                                        id="author-select"
                                        value={filterValue}
                                        label="Author"
                                        onChange={handleAuthorChange}
                                    >
                                        {authors.map((author, ind) => {
                                            return <MenuItem key={ind} value={author.name}>{author.name}</MenuItem>
                                        })}
                                    </Select>
                                </FormControl>
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
                <ModalFooter 
                    buttonName={i18n.t("default:_APPLY")}
                    onButtonClick={onApplyFilter}
                />
            </Grid>
        </Modal>
    )
}

export default connect(mapStateToProps)(Filters);