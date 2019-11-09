import React from 'react';
import { Redirect } from 'react-router-dom';

import auth from '../services/auth';

class LoginPage extends React.Component {
  state = {
    redirectToReferrer: false,
    failed: false,
    username: "",
    password: "",
  }

  fieldChanged = (name) => {
    return (event) => {
      let { value } = event.target;
      this.setState({ [name]: value });
    }
  }

  login = (e) => {
    e.preventDefault();
    let { username, password } = this.state;
    auth.authenticate(username, password)
      .then((user) => {
        this.setState({ redirectToReferrer: true });
      })
      .catch((err) => {
        this.setState({ failed: true });
      });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/'} };
    const { redirectToReferrer, failed } = this.state;
    if (redirectToReferrer) {
      return <Redirect to ={from} />;
    }
    let err = "";
    if (failed) {
      err =  <div>
              <br/>
              <div className="alert alert-danger col-4 offset-4"
                 role="alert">
                 Login failed
              </div>
            </div>
    }
    return (
      <div className="col-12 welcome_image">
        <form onSubmit={ this.login }>
          <div className="form-inline">
            <div className="col center-block">
              <div className="col-sm-12 col-md-12 col-12">
                <input
                  type="text"
                  className="form-control mr-3 rounded log-in"
                  name="username"
                  placeholder="username"
                  value={this.state.email}
                  onChange={this.fieldChanged('username')}/>
              </div>
              <div className="col-sm-12 col-md-12 col-12">
                <input
                  type="password"
                  className="form-control mr-3 rounded log-in"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.fieldChanged('password')}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary button center-button log-in"
              >Login</button>
              { err }
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
