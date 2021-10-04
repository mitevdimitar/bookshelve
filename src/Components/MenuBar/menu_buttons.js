import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import LanguagePanel from "./language_panel";
import { connect } from "react-redux";
import { mapStateToProps } from '../../services/redux';
import LogoutButton from './logout_button';
import i18n from '../../i18n';

function MenuButtons({ firebase }) {
    return (
        <>
            <Grid container item xs={10} justify="flex-end" alignItems="center">
                {
                    firebase.isEmpty ? (
                        <Button href="/login" color="inherit">
                            {i18n.t("default:_LOGIN")}
                        </Button>
                    ) : (
                        <>
                            <Button href="/my-books" color="inherit">
                                {i18n.t("default:_MY_BOOKS")}
                            </Button>
                            <LogoutButton />
                        </>
                    )
                }
            </Grid>
            {!firebase.isEmpty && (
                <Grid container justify="flex-end" alignItems="center" item xs={1}>
                    <LanguagePanel />
                </Grid>
            )}
        </>
    )
}

export default connect(mapStateToProps)(MenuButtons);