import React from 'react';
import { Redirect } from 'react-router-dom';



class SignupPage extends React.Component {
  render() {
    return (
      <div className="col-12 welcome_image2">
        <div className="form-inline">
         <div className="col center-block">
          <div className="col-sm-12 col-md-12 col-12"> 
              <input 
                type="text"
                placeholder="email"
                className="form-control mr-3 rounded"
              />
            
          </div>
            <div className="col-sm-12 col-md-12 col-12"> 
              <input
                type="text"
                placeholder="username"
                className="form-control mr-3 rounded"
              /> 
            </div>
            <div className="col-sm-12 col-md-12 col-12">    
              <input
                type="password"
                placeholder="password"
                className="form-control mr-3 rounded"
              /> 
            </div>
            <div className="col-sm-12 col-md-12 col-12">
              <input
                type="password"
                placeholder="re-enter password"
                className="form-control mr-3 rounded"
              /> 
            </div>
            <button className="btn btn-primary center-button-signup sign-up-button2" > Sign Up </button>
          </div>
        {/*cool*/}
        </div>
      </div>
      
    );
  }
}

export default SignupPage;
