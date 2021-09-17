import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { makeStyles } from '@material-ui/core/styles';
import Header from './header';
import MenuButtons from './menu_buttons';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "inherit",
      boxShadow: "unset",
      width: "100%",
      color: "white"
    },
    icon: {
        color: "white"
    },
    /* content: {
        margin: "0px 6px"
    }, */
    buttons: {
        paddingRight: 0,
        borderTop: "1px solid rgba(255,255,255, 0.2)"
    }
}));

function MobileMenu() {
    const classes = useStyles();

    return (
        <Accordion className={classes.root}>
            <AccordionSummary
                expandIcon={<MoreVertIcon className={classes.icon} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
/*                 classes={{
                    content: classes.content
                }} */
            >
                <Header />
            </AccordionSummary>
            <AccordionDetails className={classes.buttons}>
                <MenuButtons />
            </AccordionDetails>
        </Accordion>
    )
}

export default MobileMenu;