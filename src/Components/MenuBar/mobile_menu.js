import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function MobileMenu() {
    return (
        <IconButton
            aria-label="more"
            aria-controls="mobile-menu"
            //onClick={handleClick}
        >
            <MoreVertIcon />
        </IconButton>
    )
}

export default MobileMenu;