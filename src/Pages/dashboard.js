import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "../services/firebase";
import Pergament from '../img/pergament.jpg';
import { isMobileDevice } from '../services/mobile';
import { mapStateToProps } from '../services/redux';
import { connect } from "react-redux";
import PieComponent from '../Components/Dashboard/pie_chart';
import AuthorsPieChart from '../Components/Dashboard/authors_pie_chart';
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
              <Grid container item>
                <Counter
                  label="Authors"
                  value={authors.length}
                />
              </Grid>
            </Grid>
            <Grid container item>
              <Grid container item style={{height: 300, width: 300}}>
                <PieComponent />
              </Grid>
              <Grid container item style={{height: 300, width: 300}}>
                <AuthorsPieChart books={allBooks} />
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