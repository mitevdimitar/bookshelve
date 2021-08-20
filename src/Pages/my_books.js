import React, { useCallback, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddBookModal from "../Components/add_book_modal";
import { getBooks } from "../services/books";
import BookRow from "../Components/book_row";

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
  

function MyBooks() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [books, setBooks] = useState([]);

    const getAllBooks = useCallback(async () => {   
        const response = await getBooks();
        if (response.data) {
            setBooks(Object.values(response.data));
        }
    }, []);
    
    useEffect(()=>{
        getAllBooks();
    }, [getAllBooks]);

    const openAddBookModal = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <Grid container className={classes.root}>
            <AddBookModal 
                open={open}
                handleClose={handleClose}
            />
            <Grid container item className={classes.button}>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={openAddBookModal}
                >
                    Add book
                </Button>
            </Grid>
            <Grid container className={classes.headerRow}>
                <Grid container item xs={1}>
                </Grid>
                <Grid container alignItems="center" item xs={3}>
                    Author
                </Grid>
                <Grid container alignItems="center" item xs={4}>
                    Title
                </Grid>
                <Grid container alignItems="center" item xs={2}>
                    Genre
                </Grid>
                <Grid container alignItems="center" item xs={2}>
                </Grid>
            </Grid>
            <>
                {books.map((book, i)=>{
                    console.log(book)
                    return (
                        <BookRow key={i} book={book} i={i}/>
                    )
                })}
            </>
        </Grid>
    )
}

export default MyBooks;