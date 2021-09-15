import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { mapStateToProps } from '../../services/redux';
import { signout } from '../../services/auth';
import { useHistory } from "react-router-dom";
import i18n from '../../i18n';
import { isMobileDevice } from '../../services/mobile';
import MobileMenu from './mobile_menu';
import LanguagePanel from "./language_panel";

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#9D383B",
    },
    appBar: {
        minHeight: 54
    },
}));

function MenuBar({
    firebase,
}) {
    const classes = useStyles();
    const history = useHistory();

    const onLogoutClick = async () => {
        const response = await signout();
        if (response.success) {
            history.push('/');
        }
    }

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar className={classes.appBar}>
                {isMobileDevice() ? (
                    <MobileMenu />
                ) : (
                    <Grid container justify="space-between">
                        <Grid container item xs={6} alignItems="center">        
                            <IconButton href="/" edge="start" color="inherit" aria-label="menu">
                                <HomeIcon />
                            </IconButton>
                            <Typography variant="h6">
                                Header
                            </Typography>
                        </Grid>
                        <Grid container item xs={6} justify="flex-end" alignItems="center">
                            <Grid container item xs={10} justify="flex-end" alignItems="center">
                                {
                                    firebase.isEmpty ? (
                                        <Button href="/login" color="inherit">
                                            Login
                                        </Button>
                                    ) : (
                                        <>
                                            <Button href="/my-books" color="inherit">
                                                My books
                                            </Button>
                                            <Button onClick={()=>onLogoutClick()} color="inherit">
                                                {i18n.t("default:_LOGOUT")}
                                            </Button>
                                        </>
                                    )
                                }
                            </Grid>
                            <Grid item xs={1}>
                                <LanguagePanel />
                            </Grid>
                        </Grid>
                    </Grid>
                )}
                
            </Toolbar>
        </AppBar>
    )
}

export default connect(mapStateToProps)(MenuBar);