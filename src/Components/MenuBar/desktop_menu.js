import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import LanguagePanel from "./language_panel";
import { connect } from "react-redux";
import { mapStateToProps } from '../../services/redux';
import Header from './header';
import LogoutButton from './logout_button';

function DesktopMenu({ firebase }) {
    return (
        <Grid container justify="space-between">
            <Grid container item xs={6} alignItems="center">
                <Header />
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
                                <LogoutButton />
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