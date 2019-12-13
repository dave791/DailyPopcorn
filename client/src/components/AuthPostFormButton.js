import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import auth from '../services/auth';

const classes = "nav-link";

const AuthPostFormButton = withRouter(({ history }) => {
  if (auth.isAuthenticated) {
    return <NavLink className={classes} to="/submit_post">Post</NavLink>;
  }
  return null;
});

export default AuthPostFormButton;
