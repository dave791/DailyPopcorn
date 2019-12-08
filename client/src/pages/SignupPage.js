import React from 'react';
import { Redirect } from 'react-router-dom';

class SignupPage extends React.Component {
  render() {
    return (
      <div className="col-9 col-md-7 col-lg-5 col-lg6">
        <div className="row center-block">
        <div className='col-12'><h1>Sign Up</h1></div>
          <div className="input-group">
            <input 
              type="text"
              placeholder="email"
              className="form-control mr-3 rounded"
            />
            </div> 
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
            <button className="btn btn-primary center-button sign-up-button" > Sign Up </button>
        </div>
        {/*cool*/}
      </div>
    );
  }
}

export default SignupPage;
