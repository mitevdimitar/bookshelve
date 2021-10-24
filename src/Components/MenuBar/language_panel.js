import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import EngFlag from '../../img/eng.png';
import BgFlag from '../../img/bg.png';
import { makeStyles } from '@material-ui/core/styles';
import { updateSettings, getSettings } from '../../services/settings';
import { connect } from "react-redux";
import { mapStateToProps } from '../../services/redux';

const useStyles = makeStyles((theme) => ({
    flagContainer: {
        marginLeft: 10,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        position: "relative"
    },
    secondFlag: {
        position: "absolute",
        top: 22
    },
    flagBackground: {
        padding: 5,
        //background: "#D8B77D",
        background: "#913435",
        borderRadius: 5,
        "&:hover": {
            //background: "#A57A32",
            zIndex: 200,
            transform: "scale(1.05)"
        }
    }
}));

function LanguagePanel({
    firebase,
    settings
}) {
    const classes = useStyles();
    const { lang } = settings;
    const token = firebase.stsTokenManager && firebase.stsTokenManager.accessToken;
    const [editLangMode, setEditLangMode] = useState(false);

    const onFlagClick = () => {
        setEditLangMode(!editLangMode)
    }

    useEffect(()=>{
        async function getLanguage() {
            const id = firebase.uid;
            const response = await getSettings(id, token);
            if (response && response.data) {
                const { lang } = response.data.settings;
                if(lang !== localStorage.getItem("lang")) {
                    localStorage.setItem("lang", lang);
                    window.location.reload();
                }
            }
        }
        getLanguage();
        // eslint-disable-next-line
    }, [])

    const setLanguage = async () => {
        /* dispatch({
            type: SET_LANGUAGE,
            data: lang === 'en' ? 'bg' : 'en'
        }); */
        const id = firebase.uid;
        const data = {
            lang: lang === 'en' ? 'bg' : 'en'
        }
        await updateSettings(id, data, token);
        setEditLangMode(false);
        localStorage.setItem("lang", data.lang);
        window.location.reload();
    }

    return (
        <Grid className={classes.flagContainer}>                    
            <Grid className={editLangMode ? classes.flagBackground : ""}>
                <img style={{height: 14}} src={lang === 'en' ? EngFlag : BgFlag} alt="British flag" onClick={onFlagClick}/>
            </Grid>
            {editLangMode && (
                <Grid className={`${classes.secondFlag} ${classes.flagBackground}`} onClick={()=>setLanguage()}>
                    <img style={{height: 14}} src={lang === 'en' ? BgFlag : EngFlag} alt="Bulgarian flag"/>
                </Grid>
            )}
        </Grid>
    )
}

export default connect(mapStateToProps)(LanguagePanel);