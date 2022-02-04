import React, { useCallback, useEffect } from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "../services/firebase";
import Pergament from '../img/pergament.jpg';
import { isMobileDevice } from '../services/mobile';
import { mapStateToProps } from '../services/redux';
import { connect } from "react-redux";
import { getBooks, getAuthors } from "../services/books";
import { BooksActions } from '../store/actions/action_types';

const useStyles = makeStyles((theme) => ({
    root: {
      height: "80vh",
      backgroundImage: !isMobileDevice() && `url(${Pergament})`,
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      fontSize: 35,
      color: "grey",
      textAlign: "center"
    },
  }));

function Dashboard({
  firebaseReducer,
  myBooks,
  dispatch
}) {
    const user = firebase.auth().currentUser;
    const token = firebaseReducer.stsTokenManager && firebaseReducer.stsTokenManager.accessToken;
    const id = firebaseReducer.uid;
    const classes = useStyles();
    const { allBooks } = myBooks;
    console.log({allBooks, id})

    const getAllBooks = useCallback(async () => {   
      const response = token && await getBooks(id, token);
      if (response && response.data) {
          const books = Object.entries(response.data);
          dispatch(BooksActions.setAllBooks(books));
      }
      // eslint-disable-next-line
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

    return (
        <Grid container className={classes.root}>
          <Grid container item alignItems="center" justify="center">
              {user && `Welcome, ${user.displayName}!`}
          </Grid>
        </Grid>
    )
}

export default connect(mapStateToProps)(Dashboard);