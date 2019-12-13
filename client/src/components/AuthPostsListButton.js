import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

const classes = "nav-link";

const AuthPostsListButton = withRouter(({ history }) => {
    return <NavLink className={classes} to="/view_posts">Feed</NavLink>;
});

export default AuthPostsListButton;
