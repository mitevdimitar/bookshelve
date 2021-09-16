import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import i18n from '../../i18n';
import LanguagePanel from "./language_panel";
import { signout } from '../../services/auth';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps } from '../../services/redux';

function DesktopMenu({ firebase }) {
    const history = useHistory();

    const onLogoutClick = async () => {
        const response = await signout();
        if (response.success) {
            history.push('/');
        }
    }

    return (
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
    )
}

export default connect(mapStateToProps)(DesktopMenu);