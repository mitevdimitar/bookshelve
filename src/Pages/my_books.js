import React, { useCallback, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import BookModal from "../Components/book_modal";
import BookRow from "../Components/book_row";
import { connect } from "react-redux";
import { mapStateToProps } from '../services/redux';
import i18n from '../i18n';
import { BooksActions } from '../store/actions/action_types';
import IconButton from "@material-ui/core/IconButton";
import FilterListIcon from '@material-ui/icons/FilterList';
import FiltersModal from "../Components/filters_modal";
import Chip from '@material-ui/core/Chip';
import Pagination from '@material-ui/lab/Pagination';
import BookAutocomplete from "../Components/book_autocomplete";

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
    pagination: {
        marginTop: 20
    }
}));
  

function MyBooks({
    myBooks,
    dispatch
}) {
    const classes = useStyles();
    const { filtersModalOpen, bookModalOpen, filterValue, filterType, allBooks } = myBooks;
    const [books, setBooks] = useState(allBooks);
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(1);

    const filterBooks = (book) => {
        const bookValue = book[1];
        if (filterValue) {
            switch (filterType) {
                case 'author':
                    if (filterValue === bookValue.author) {
                        return book;
                    }
                    break;
                case 'genre':
                    if (filterValue === bookValue.genre) {
                        return book;
                    }
                    break;
                case 'nationality':
                    if (filterValue === bookValue.nationality) {
                        return book;
                    }
                    break;
                case 'autocomplete':
                    if (bookValue.author.toLowerCase().includes(filterValue.toLowerCase()) || bookValue.title.toLowerCase().includes(filterValue.toLowerCase)) {
                        return book;
                    }
                    break;
                case 'option-select':
                    if (bookValue.title === filterValue) {
                        return book;
                    }
                    break;
                default:
                    return book;
                }
        } else {
            return book;
        }
    }

    const getCurrentBooks = useCallback(async (num) => {
        const filteredBooks = allBooks.filter(filterBooks);
        const start = (num - 1) * 10;
        const end = start + 10;
        const booksOnPage = filteredBooks.slice(start, end);
        const currentCount = Math.ceil(filteredBooks.length / 10);
        setBooks(booksOnPage);
        setCount(currentCount);
        // eslint-disable-next-line
    }, [allBooks, filterValue]);

    useEffect(()=>{
        getCurrentBooks(1);
    }, [getCurrentBooks]);

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

    const handleDelete = () => {
        dispatch(BooksActions.setFilterValue(""));
    };

    const changePage = (e, num) => {
        setPage(num);
        getCurrentBooks(num);
    }

    return(
        <Grid container className={classes.root}>
            {bookModalOpen && (
                <BookModal
                    handleClose={handleClose}
                />
            )}
            {filtersModalOpen && (
                <FiltersModal 
                    handleClose={handleFiltersClose}
                />
            )}
            <Grid container justify="space-between" item className={classes.button}>
                <Grid container item xs={9}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={openBookModal}
                    >
                        {i18n.t("default:_ADD_BOOK")}
                    </Button>
                    <BookAutocomplete filter books={allBooks} />
                </Grid>
                <Grid item xs={1}>
                    {filterValue && (
                        <Chip variant="outlined" color="primary" label={filterValue} onDelete={handleDelete} />
                    )}
                    <IconButton 
                        color="primary"
                        onClick={openFiltersModal}
                    >
                        <FilterListIcon />
                    </IconButton>
                </Grid>
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
                        />
                    )
                })}
            </>
            {books.length > 0 && (
                <Grid container justify="center" className={classes.pagination}>
                    <Pagination 
                        count={count}
                        color="primary" 
                        page={page} 
                        onChange={changePage} 
                    />
                </Grid>
            )}
        </Grid>
    )
}

export default connect(mapStateToProps)(MyBooks);