import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { isMobileDevice } from "../services/mobile";
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { mapStateToProps } from '../services/redux';
import { BooksActions } from '../store/actions/action_types';

const useStyles = makeStyles((theme) => ({
    autocomplete: {
      position: "relative"
    },
    searchIcon: {
        position: "absolute",
        right: 15,
        top: 15
    }
}));

function BookAutocomplete({
    books,
    dispatch
}) {
    const classes = useStyles();
    const [searchValue, setSearchValue] = useState("");

    const onSearchClick = () => {
        dispatch(BooksActions.setFilterValue(searchValue));
        dispatch(BooksActions.setFilterType('autocomplete'));
    }

    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value);
    }

    return (
        <Autocomplete
            id="free-solo-demo"
            freeSolo
            disableClearable={true}
            style={{width: isMobileDevice() ? 300 : 600, marginLeft: isMobileDevice() ? 0 : 30}}
            options={books.map((option) => option && option[1] && `${option[1].title}, ${option[1].author}`)}
            className={classes.autocomplete}
            renderInput={(params) => 
                <>
                    <TextField 
                        variant="outlined" 
                        color="primary" 
                        {...params} 
                        label="Search by book or Author"
                        onChange={onSearchValueChange}
                    />
                    <SearchIcon onClick={onSearchClick} className={classes.searchIcon} color="primary" style={{cursor: "pointer"}} />
                </>
            }
        />
    )
}

export default connect(mapStateToProps)(BookAutocomplete);