import React from 'react';
import { Redirect } from 'react-router-dom';

class LoginPage extends React.Component {
  render() {
    return (
          <div className="form-inline login_image1">
            <div className='col-12 log-in'><h1>Login</h1></div>
            <div className="col center-block">

              <div className="input-group">
                <input
                  type="text"
                  placeholder="username"
                  className="form-control mr-3 rounded log-in"
                />
              </div>
            </div>
          <div className="form-group mr-2">
            <div className="col-sm-9 col-md-9 ">
              <input
                type="password"
                placeholder="password"
                className="form-control mr-6 rounded log-in"
              />
            </div>
          </div>
            <button className="btn btn-primary button center-button log-in "> Login </button>
          </div>
    );
  }
}

export default LoginPage;
