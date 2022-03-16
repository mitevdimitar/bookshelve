import React, { useCallback, useEffect, useState } from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "../services/firebase";
import Pergament from '../img/pergament.jpg';
import { isMobileDevice } from '../services/mobile';
import { mapStateToProps } from '../services/redux';
import { connect } from "react-redux";
import AuthorsPieChart from '../Components/Dashboard/authors_pie_chart';
import GenresPieChart from '../Components/Dashboard/genres_pie_chart';
import Counter from '../Components/Dashboard/counter';
import Typography from '@material-ui/core/Typography';
import i18n from '../i18n';

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
    headerContainer: {
      marginTop: 20
    }
  }));

function Dashboard({
  myBooks,
}) {
    const user = firebase.auth().currentUser;
    const classes = useStyles();
    const { allBooks, authors } = myBooks;
    const [genres, setGenres] = useState(0);

    const extractGenresInfo = useCallback(() => {
      const bookGenres = allBooks.map((book) => book && book[1] && book[1].genre);
      const uniqueBookGenres = [...new Set(bookGenres)]; 
      setGenres(uniqueBookGenres.length)
    }, [allBooks])

    useEffect(()=>{
      extractGenresInfo();
      // eslint-disable-next-line
    }, [allBooks])

    return (
      <>
        {allBooks.length > 0 ? (
          <Grid container>
            <Grid container item>
              <Grid container justify='center' item className={classes.headerContainer}>
                <Typography variant="h4" color="textSecondary">
                  {i18n.t("default:_STATISTICS")}
                </Typography>
              </Grid>
              <Grid container justify='space-around' item>
                <Counter
                  label={i18n.t("default:_MY_BOOKS")}
                  value={allBooks.length}
                />
                <Counter
                  label={i18n.t("default:_AUTHORS")}
                  value={authors.length}
                />
                <Counter
                  label={i18n.t("default:_GENRES")}
                  value={genres}
                />
              </Grid>
            </Grid>
            <Grid container justify="space-around" item>
              <Grid container item style={{height: 300, width: 300}}>
                <AuthorsPieChart books={allBooks} />
              </Grid>
              <Grid container item style={{height: 300, width: 300}}>
                <GenresPieChart books={allBooks} />
              </Grid>
            </Grid>
          </Grid>
        ) : (
        <Grid container className={classes.root}>
          <Grid container item alignItems="center" justify="center">
              {user && `Welcome, ${user.displayName}!`}
          </Grid>
        </Grid>
        )}
      </>
    )
}

export default connect(mapStateToProps)(Dashboard);