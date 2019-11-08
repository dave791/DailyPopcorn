import React from 'react';
import { Redirect } from 'react-router-dom';

class LoginPage extends React.Component {
  render() {
    return (
        <div className="col-12 welcome_image">
          <div className="form-inline">
            <div className="col center-block">
              <div className="col-sm-12 col-md-12 col-12">
                <input
                  type="text"
                  placeholder="username"
                  className="form-control mr-3 rounded log-in"
                />
              </div>
              <div className="col-sm-12 col-md-12 col-12">
                <input
                  type="password"
                  placeholder="password"
                  className="form-control mr-3 rounded log-in"
                />
              </div>
              <button className="btn btn-primary button center-button log-in">
              Login
              </button>
            </div>
          </div>
        </div>
    );
  }
}

export default LoginPage;
