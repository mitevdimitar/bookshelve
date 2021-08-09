import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
        height: "10%",
        backgroundColor: theme.palette.primary.main,
        color: "white",
        paddingLeft: 20
    },
    closeIcon: {
        cursor: "pointer"
    },
    body: {
        height: "80%",
        padding: "15px 25px"
    },
    footer: {
        height: "10%"
    },
}));

function AddBookModal({
    open,
    handleClose,
}) {
    const classes = useStyles();
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [nationality, setNationality] = useState("");

    const onEnterAuthor = (e) => {
        setAuthor(e.target.value);
    }

    const onEnterTitle = (e) => {
        setTitle(e.target.value);
    }

    const onNationalityChange = (e) => {
        setNationality(e.target.value);
    }

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
                <Grid container className={classes.body}>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="author"
                            name="author"
                            variant="outlined"
                            required
                            fullWidth
                            id="author"
                            label="Author"
                            onChange={onEnterAuthor}
                            value={author}
                            placeholder="e.g. Stephen King"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="title"
                            name="title"
                            variant="outlined"
                            required
                            fullWidth
                            id="title"
                            label="Book title"
                            onChange={onEnterTitle}
                            value={title}
                            placeholder="e.g. The dark tower"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl variant="outlined" style={{width: "100%"}}>
                            <InputLabel id="nationality-label">Nationality</InputLabel>
                            <Select
                                labelId="nationality-label"
                                id="nationality-id"
                                value={nationality}
                                onChange={onNationalityChange}
                                label="Nationality"
                            >
                                <MenuItem value={"Bulgarian"}>Bulgarian</MenuItem>
                                <MenuItem value={"English"}>English</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container className={classes.footer}>
                    Footer
                </Grid>
            </Grid>
        </Modal>
    )
}

export default AddBookModal;