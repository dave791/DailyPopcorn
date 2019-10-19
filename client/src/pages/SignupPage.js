import React from 'react';
import { Redirect } from 'react-router-dom';

class SignupPage extends React.Component {
  render() {
    return (
      <div className="col-10 col-md-8 col-lg-7">
        <div className="input-group">
          <input
            type="text"
            placeholder="username"
            className="form-control mr-3 rounded"
          />
          <input
            type="password"
            placeholder="password"
            className="form-control mr-3 rounded"
          />
          <input
            type="password"
            placeholder="re-enter password"
            className="form-control mr-3 rounded"
          />
          <button className="btn btn-primary"> Sign Up </button>
        </div>
      </div>
    );
  }
}

export default SignupPage;
