import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

function Header() {
    return (
        <Grid container alignItems="center">        
            <IconButton href="/" edge="start" color="inherit" aria-label="menu">
                <HomeIcon />
            </IconButton>
            <Typography variant="h6">
                Book shelves
            </Typography>
        </Grid>
    )
}

export default Header;