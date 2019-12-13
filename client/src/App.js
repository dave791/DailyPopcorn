import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AboutUsPage from './pages/AboutUsPage';
import PostFormPage from './pages/PostFormPage';
import PostsListPage from './pages/PostsListPage';
import PrivateRoute from './components/PrivateRoute';
import AuthLoginButton from './components/AuthLoginButton';
import AuthSignupButton from './components/AuthSignupButton';
import AuthAboutButton from './components/AuthAboutButton';
import AuthPostsListButton from './components/AuthPostsListButton';
import AuthPostFormButton from './components/AuthPostFormButton';

import './App.css';


function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="/"> Daily Popcorn</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <AuthPostsListButton/>
        </li>
        <li className="nav-item">
          <AuthPostFormButton/>
        </li>
        <li className="nav-item">
          <AuthAboutButton/>
        </li>
        <li className="nav-item">
          <AuthLoginButton/>
        </li>
        <li className="nav-item">
          <AuthSignupButton/>
        </li>
      </ul>
    </nav>
  );
}


class App extends React.Component {
  render() {
    return (
        <Router>
          <Navigation />
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                <Route path="/signup" component={SignupPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/about" component={AboutUsPage} />
                <PrivateRoute path="/submit_post" component={PostFormPage} />
                <Route path="/view_posts" component={PostsListPage} />
                <Route path="/" component={HomePage} />
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}


export default App;
