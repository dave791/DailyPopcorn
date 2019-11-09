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

  return (
    <div>
      Welcome!
      <button className={classes} onClick={logout}>Logout</button>
    </div>
  );
});

export default AuthLoginButton;
