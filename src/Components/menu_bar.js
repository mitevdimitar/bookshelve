import React, { useState } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { mapStateToProps } from '../services/redux';
import { signout } from '../services/auth';
import { useHistory } from "react-router-dom";
import EngFlag from '../img/eng.png';
import BgFlag from '../img/bg.png';
//import { SET_LANGUAGE } from '../store/actions/action_types';
import i18n from '../i18n';
import { updateSettings } from '../services/settings';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#9D383B",
    },
    appBar: {
        minHeight: 54
    },
    flagContainer: {
        marginLeft: 10,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        position: "relative"
    },
    secondFlag: {
        position: "absolute",
        top: 18
    }
  }));

function MenuBar({
    firebase,
    settings,
    //dispatch
}) {
    const { lang } = settings;
    const classes = useStyles();
    const history = useHistory();
    const [editLangMode, setEditLangMode] = useState(false);

    const onLogoutClick = async () => {
        const response = await signout();
        if (response.success) {
            history.push('/');
        }
    }

    const onFlagClick = () => {
        setEditLangMode(!editLangMode)
    }

    const setLanguage = async () => {
        /* dispatch({
            type: SET_LANGUAGE,
            data: lang === 'en' ? 'bg' : 'en'
        }); */
        const id = firebase.uid;
        const data = {
            lang: lang === 'en' ? 'bg' : 'en'
        }
        await updateSettings(id, data);
        setEditLangMode(false);
        localStorage.setItem("lang", data.lang);
        window.location.reload();
    }

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar className={classes.appBar}>
                <Grid container justify="space-between">
                    <Grid container item xs={8} alignItems="center">        
                        <IconButton href="/" edge="start" color="inherit" aria-label="menu">
                            <HomeIcon />
                        </IconButton>
                        <Typography variant="h6">
                            Header
                        </Typography>
                    </Grid>
                    <Grid container item xs={4} justify="flex-end" alignItems="center">
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
                    <Grid className={classes.flagContainer} item>
                        <Grid className={classes.mainFlag}>
                            <img style={{height: 14}} src={lang === 'en' ? EngFlag : BgFlag} alt="British flag" onClick={onFlagClick}/>
                        </Grid>
                        {editLangMode && (
                            <Grid className={classes.secondFlag} onClick={()=>setLanguage()}>
                                <img style={{height: 14}} src={lang === 'en' ? BgFlag : EngFlag} alt="Bulgarian flag"/>
                            </Grid>
                        )}
                    </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);