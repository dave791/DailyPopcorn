import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

const classes = "nav-link";

const AuthAboutUsButton = withRouter (({history}) => {
    return <NavLink className={classes} to="/about">About</NavLink>;
});

export default AuthAboutUsButton;
