import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BookAvatar from '../img/book_avatar.jpg';
import GoodreadsAvatar from '../img/goodreads.png';
import Avatar from '@material-ui/core/Avatar';
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { isMobileDevice } from '../services/mobile';
import { connect } from "react-redux";
import { mapStateToProps } from '../services/redux';
import { BooksActions } from '../store/actions/action_types';

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
        height: 30
    },
    iconButton: {
        padding: isMobileDevice() && 0
    }
}));

function BookRow({
    book,
    i,
    dispatch
}) {
    const classes = useStyles();

    const onEditClick = () => {
        dispatch(BooksActions.setBookModalOpen(true));
        dispatch(BooksActions.setCurrentBook(book));
    }

    return (
        <Grid container className={classes.row}>
            {!isMobileDevice() && (
                <Grid container alignItems="center"  item xs={1}>
                    <Avatar style={{paddingLeft: 10}} className={classes.avatar} alt={`Book cover ${i}`} src={BookAvatar} />
                </Grid>
            )}
            <Grid container alignItems="center" item xs={4} sm={3}>
                {book.author}
            </Grid>
            <Grid container alignItems="center" item xs={4}>
                {book.title}
            </Grid>
            <Grid container alignItems="center" item xs={2}>
                {book.genre}
            </Grid>
            <Grid container alignItems="center" justify="flex-end" item xs={2}>
                {book.link && !isMobileDevice() && (
                    <IconButton onClick={() => window.open(book.link, "_blank")}>
                        <Avatar className={classes.avatar} alt="goodreads logo" src={GoodreadsAvatar} />
                    </IconButton>
                )}
                <IconButton className={classes.iconButton} color="primary">
                    <EditIcon onClick={() => onEditClick()}/>
                </IconButton>
                <IconButton className={classes.iconButton}  color="primary">
                    <DeleteIcon />
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default connect(mapStateToProps)(BookRow);