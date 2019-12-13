import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import auth from '../services/auth';

const classes = "nav-link";

const AuthSignupButton = withRouter(({ history }) => {
  if(!auth.isAuthenticated) {
    return <NavLink className={classes} to="/signup">Signup</NavLink>;
  }
  //No need to display anything if the user's logged in
  return null;
});

export default AuthSignupButton;
