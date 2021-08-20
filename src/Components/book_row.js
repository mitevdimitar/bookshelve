import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BookAvatar from '../img/book_avatar.jpg';
import Avatar from '@material-ui/core/Avatar';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    row: {
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: 7,
        margin: "0 2.5% 1% 2.5%",
        padding: 10,
        width: "95%",
        boxShadow: `0 1px 1px rgba(${theme.palette.primary.main} / 0.2)`,
        //cursor: "pointer",
        "&:hover": {
            background: "#FBF7F7"
        }
    },
    avatar: {
        width: 30,
        height: 30,
        paddingLeft: 10
    }
}));

function BookRow({
    book,
    i
}) {
    const classes = useStyles();

    return (
        <Grid container className={classes.row}>
            <Grid container item xs={1}>
                <Avatar className={classes.avatar} alt={`Book cover ${i}`} src={BookAvatar} />
            </Grid>
            <Grid container alignItems="center" item xs={3}>
                {book.author}
            </Grid>
            <Grid container alignItems="center" item xs={4}>
                {book.title}
            </Grid>
            <Grid container alignItems="center" item xs={2}>
                {book.genre}
            </Grid>
            <Grid container alignItems="center" item xs={2}>
                Buttons
            </Grid>
        </Grid>
    )
}

export default BookRow;