import React from 'react';
import Button from '@material-ui/core/Button';
import i18n from '../../i18n';
import { signout } from '../../services/auth';
import { useHistory } from "react-router-dom";

function LogoutButton() {
    const history = useHistory();

    const onLogoutClick = async () => {
        const response = await signout();
        if (response.success) {
            history.push('/');
        }
    }

    return (
        <Button onClick={()=>onLogoutClick()} color="inherit">
            {i18n.t("default:_LOGOUT")}
        </Button>
    )
}

export default LogoutButton;