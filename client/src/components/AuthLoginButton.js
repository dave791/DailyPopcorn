import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import auth from '../services/auth';

const classes = "nav-link";

const AuthLoginButton = withRouter(({ history }) => {
  if(!auth.isAuthenticated) {
    return <NavLink className={classes} to="/login">Login</NavLink>;
  }

  const logout = () => {
    auth.signout().then(() => history.push('/'));
  }

  return <NavLink className="nav-link justify-content-center" onClick={logout} to="/">Logout</NavLink>;
});

export default AuthLoginButton;
