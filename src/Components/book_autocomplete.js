import React from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { isMobileDevice } from "../services/mobile";
import SearchIcon from '@material-ui/icons/Search';

function BookAutocomplete() {
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
            options={top100Films.map((option) => option.title)}
            renderInput={(params) => 
                <TextField 
                    variant="outlined" 
                    color="primary" 
                    {...params} 
                    label="Search by book or Author"
                    InputProps={{
                        endAdornment: <SearchIcon color="primary" style={{cursor: "pointer"}} />,
                    }}
                />
            }
        />
    )
}

export default BookAutocomplete;