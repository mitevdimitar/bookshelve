import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { isMobileDevice } from '../../services/mobile';
import MobileMenu from './mobile_menu';
import DesktopMenu from "./desktop_menu";

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#9D383B",
    },
    appBar: {
        minHeight: 54
    },
}));

function MenuBar() {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar className={classes.appBar}>
                {isMobileDevice() ? (
                    <MobileMenu />
                ) : (
                    <DesktopMenu />
                )}   
            </Toolbar>
        </AppBar>
    )
}

export default MenuBar;