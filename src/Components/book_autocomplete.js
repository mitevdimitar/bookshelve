import React from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { isMobileDevice } from "../services/mobile";
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

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

function BookAutocomplete() {
    const classes = useStyles();
    const top100Films = [
        { title: 'It', author: "Stephen King" },
        { title: 'The Dark Tower', author: "Stephen King" },
    ];

    return (
        <Autocomplete
            id="free-solo-demo"
            freeSolo
            disableClearable={true}
            style={{width: isMobileDevice() ? 300 : 600, marginLeft: isMobileDevice() ? 0 : 30}}
            options={top100Films.map((option) => `${option.title}`)}
            className={classes.autocomplete}
            renderInput={(params) => 
                <>
                    <TextField 
                        variant="outlined" 
                        color="primary" 
                        {...params} 
                        /* InputProps={{
                            endAdornment: <SearchIcon color="primary" style={{cursor: "pointer"}} />,
                        }} */
                        label="Search by book or Author"
                    />
                    <SearchIcon className={classes.searchIcon} color="primary" style={{cursor: "pointer"}} />
                </>
            }
        />
    )
}

export default BookAutocomplete;