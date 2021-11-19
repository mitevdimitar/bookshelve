import React, { useCallback, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import BookModal from "../Components/book_modal";
import { getBooks, getAuthors } from "../services/books";
import BookRow from "../Components/book_row";
import { connect } from "react-redux";
import { mapStateToProps } from '../services/redux';
import i18n from '../i18n';
import { BooksActions } from '../store/actions/action_types';
import IconButton from "@material-ui/core/IconButton";
import FilterListIcon from '@material-ui/icons/FilterList';
import FiltersModal from "../Components/filters_modal";

const useStyles = makeStyles((theme) => ({
    root: {
      //height: '100vh',
      marginTop: 20
    },
    button: {
        margin: 20
    },
    headerRow: {
        margin: "0 2.5%",
        padding: 10,
        width: "95%",
        fontWeight: 600,
        fontStyle: "oblique"
    },
}));
  

function MyBooks({
    firebase,
    myBooks,
    dispatch
}) {
    const classes = useStyles();
    const { filtersModalOpen, bookModalOpen, filterValue } = myBooks;
    const [books, setBooks] = useState([]);
    console.log({filterValue})

    const token = firebase.stsTokenManager && firebase.stsTokenManager.accessToken;
    const id = firebase.uid;

    const filterBooks = (book) => {
        console.log(book)
        return book
    }

    const getAllBooks = useCallback(async () => {   
        const response = token && await getBooks(id, token);
        if (response && response.data) {
            const books = Object.entries(response.data);
            setBooks(books.filter(filterBooks));
        }
    }, [id, token]);

    const getAllAuthors = useCallback(async () => {   
        const response = token && await getAuthors(id, token);
        if (response && response.data) {
            const authorsArr = Object.values(response.data)
            dispatch(BooksActions.setAuthors(authorsArr));
        }
    }, [id, token, dispatch]);
    
    useEffect(()=>{
        getAllBooks();
        getAllAuthors();
    }, [getAllBooks, getAllAuthors]);

    const openBookModal = () => {
        dispatch(BooksActions.setBookModalOpen(true));
        dispatch(BooksActions.setBookMode("add"));
    };

    const handleClose = () => {
        dispatch(BooksActions.setBookModalOpen(false));
        dispatch(BooksActions.setCurrentBook(null));
    };
    
    const openFiltersModal = () => {
        dispatch(BooksActions.setFiltersModalOpen(true));
    };

    const handleFiltersClose = () => {
        dispatch(BooksActions.setFiltersModalOpen(false));
    };

    return(
        <Grid container className={classes.root}>
            {bookModalOpen && (
                <BookModal
                    handleClose={handleClose}
                    refresh={getAllBooks}
                />
            )}
            {filtersModalOpen && (
                <FiltersModal 
                    handleClose={handleFiltersClose}
                />
            )}
            <Grid container justify="space-between" item className={classes.button}>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={openBookModal}
                >
                    {i18n.t("default:_ADD_BOOK")}
                </Button>
                <IconButton 
                    color="primary"
                    onClick={openFiltersModal}
                >
                    <FilterListIcon />
                </IconButton>
            </Grid>
            {books.length > 0 && (
                <Grid container className={classes.headerRow}>
                    <Grid container item sm={1}>
                    </Grid>
                    <Grid container alignItems="center" item xs={4} sm={3}>
                        {i18n.t("default:_AUTHOR")}
                    </Grid>
                    <Grid container alignItems="center" item xs={4}>
                        {i18n.t("default:_BOOK_TITLE")}
                    </Grid>
                    <Grid container alignItems="center" item xs={2}>
                        {i18n.t("default:_GENRE")}
                    </Grid>
                    <Grid container alignItems="center" item xs={2}>
                    </Grid>
                </Grid>
            )}
            <>
                {books.map((bookArr, i)=>{
                    const [bookId, book] = bookArr;
                    book.id = bookId;
                    return (
                        <BookRow 
                            key={i} 
                            book={book} 
                            i={i}
                            refresh={getAllBooks}
                        />
                    )
                })}
            </>
        </Grid>
    )
}

export default connect(mapStateToProps)(MyBooks);