import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import auth from '../services/auth';

const classes = "nav-link";

const AuthSignupButton = withRouter(({ history }) => {
  if(!auth.isAuthenticated) {
    return <NavLink className={classes} to="/signup">Signup</NavLink>;
  }
  
  return null;
});

export default AuthSignupButton;
