import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from './header';
import MenuButtons from './menu_buttons';

function DesktopMenu() {
    return (
        <Grid container justify="space-between">
            <Grid container item xs={6} alignItems="center">
                <Header />
            </Grid>
            <Grid container item xs={6} justify="flex-end" alignItems="center">
                <MenuButtons />
            </Grid>
        </Grid>
    )
}

export default DesktopMenu;