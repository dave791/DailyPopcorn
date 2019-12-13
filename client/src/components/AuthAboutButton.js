import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import auth from '../services/auth';

const classes = "nav-link";

const AuthAboutUsButton = withRouter (({history}) => {
    if(!auth.isAuthenticated) {
        return <NavLink className={classes} to="/about">About</NavLink>;
    }

    return
});

export default AuthAboutUsButton;