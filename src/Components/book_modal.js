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
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { addBook, editBook } from '../services/books';
import { connect } from "react-redux";
import { mapStateToProps } from '../services/redux';
import { isMobileDevice } from '../services/mobile';
import SelectNationalities from './select_nationalities';
import { GENRES } from '../services/constants';
import i18n from '../i18n';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: isMobileDevice() ? "99%" : "50%",
        height: 500,
        top: "10%",
        left: isMobileDevice() ? 0 : "20%",
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
    button: {
        minWidth: 100,
        marginRight: 20
    },
}));

function BookModal({
    handleClose,
    firebase,
    refresh,
    myBooks
}) {
    const classes = useStyles();
    const { bookModalOpen, currentBook, bookMode } = myBooks;
    const token = firebase.stsTokenManager && firebase.stsTokenManager.accessToken;
    const [author, setAuthor] = useState(currentBook ? currentBook.author : "");
    const [title, setTitle] = useState(currentBook ? currentBook.title : "");
    const [nationality, setNationality] = useState(currentBook ? currentBook.nationality : "");
    const [genre, setGenre] = useState(currentBook ? currentBook.genre : "");
    const [code, setCode] = useState(currentBook ? currentBook.code : "");
    const [link, setLink] = useState(currentBook ? currentBook.link : "");

    const onEnterAuthor = (e) => {
        setAuthor(e.target.value);
    }

    const onEnterTitle = (e) => {
        setTitle(e.target.value);
    }

    const onNationalityChange = (e) => {
        setNationality(e.target.value);
    }

    const onGenreChange = (e) => {
        setGenre(e.target.value);
    }

    const onEnterCode = (e) => {
        setCode(e.target.value);
    }

    const onEnterLink = (e) => {
        setLink(e.target.value);
    }

    const resetSelection = () => {
        setAuthor("");
        setTitle("");
        setNationality("");
        setGenre("");
        setCode("");
        setLink("");
    }

    const onSetBook = async () => {
        const book = {
            author,
            title,
            nationality,
            genre,
            code,
            link
        }
        const uid = firebase.uid;
        const bookId = currentBook && currentBook.id;
        bookMode === "add" ? await addBook(uid, book, token) : await editBook(uid, book, token, bookId);
        refresh();
        resetSelection();
        handleClose();
    }

    return (
        <Modal
            open={bookModalOpen}
            onClose={handleClose}
            aria-labelledby="Add book modal"
            aria-describedby="Modal for adding books to database"
        >
            <Grid /* container  */className={classes.paper}>
                <Grid container className={classes.header}>
                    <Grid container alignItems="center" item xs={11}>
                        <Typography variant="h6">
                            {i18n.t("default:_ADD_BOOK")}
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
                            label={i18n.t("default:_AUTHOR")}
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
                            label={i18n.t("default:_BOOK_TITLE")}
                            onChange={onEnterTitle}
                            value={title}
                            placeholder="e.g. The dark tower"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <SelectNationalities onNationalityChange={onNationalityChange} nationality={nationality} />
                    </Grid>
                    <Grid container item justify="space-between">
                        <Grid item xs={7}>
                            <FormControl variant="outlined" style={{width: "100%"}}>
                                <InputLabel id="genre-label">{i18n.t("default:_GENRE")}</InputLabel>
                                <Select
                                    labelId="genre-label"
                                    id="genre-id"
                                    value={genre}
                                    onChange={onGenreChange}
                                    label={i18n.t("default:_GENRE")}
                                >
                                    {GENRES.map((genre, i)=>{
                                        return <MenuItem key={i} value={genre.value}>{genre.name}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                autoComplete="code"
                                name="code"
                                variant="outlined"
                                fullWidth
                                id="code"
                                label={i18n.t("default:_BOOK_CODE")}
                                onChange={onEnterCode}
                                value={code}
                                placeholder="Code for book recognition"
                            />
                        </Grid>         
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="goodreads-link"
                            name="goodreads-link"
                            variant="outlined"
                            fullWidth
                            id="goodreads-link"
                            label={i18n.t("default:_GOODREADS_LINK")}
                            onChange={onEnterLink}
                            value={link}
                            placeholder="e.g. https://www.goodreads.com/book/show/43615.The_Gunslinger"
                        />
                    </Grid>
                </Grid>
                <Grid container className={classes.footer} justify="flex-end" alignItems="flex-start">
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={onSetBook}
                    >
                        {bookMode === "add" ? i18n.t("default:_ADD") : i18n.t("default:_EDIT")}
                    </Button>
                </Grid>
            </Grid>
        </Modal>
    )
}

export default connect(mapStateToProps)(BookModal);