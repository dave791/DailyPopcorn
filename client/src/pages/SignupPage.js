import React from 'react';
import { Redirect } from 'react-router-dom';

const PASSWORD_LENGTH = 8;

class SignupPage extends React.Component {

  state = {
    error: false,
    errorMessage: '',
    success: false,
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    firstPassword: '',
    secondPassword: ''
  }

  fieldChanged = (name) => {
    return (event) => {
      let { value } = event.target;
      this.setState({ [name]: value });
    }
  }

  validUserCredentials = () => {
    if (
        this.state.firstName === '' ||
        this.state.lastName === '' ||
        this.state.email === '' ||
        this.state.username === '' ||
        this.state.firstPassword === '' ||
        this.state.secondPassword === ''
      ) {
        this.setState({
          error: true,
          errorMessage: 'All fields are required'
        });
        return false;
      }
    if (this.state.firstPassword !== this.state.secondPassword) {
      this.setState({
        error: true,
        errorMessage: 'Passwords do not match'
      });
      return false;
    }
    if (this.state.firstPassword.length < PASSWORD_LENGTH) {
      this.setState({
        error: true,
        errorMessage: 'Password must be at least 8 characters'
      });
      return false;
    }
    return true;
  }

  signUpUser = (event) => {
    if (this.validUserCredentials()) {
      fetch("/api/auth/signup/", {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          username: this.state.username,
          password: this.state.firstPassword,
        }),
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(user => {
          this.setState({
            success: true,
          });
        })
        .catch(error => {
          this.setState({
            error: true,
            errorMessage: 'There was an error signing you up'
          });
        });
    }
  }

  render() {
    if (this.state.success) return <Redirect to="/login" />;
    let errorMessage = '';
    if (this.state.error) {
      errorMessage = (
        <div className="alert alert-danger">
          {this.state.errorMessage}
        </div>
      );
    }
    return (
      <div className="col-12 welcome_image2">
        <div className="form-inline">
         <div className="col center-block">
         { errorMessage }
         <div className="col-sm-12 col-md-12 col-12">
             <input
               type="text"
               placeholder="First Name"
               value={this.state.firstName}
               className="form-control mr-3 rounded"
               onChange={this.fieldChanged('firstName')}
             />

         </div>
         <div className="col-sm-12 col-md-12 col-12">
             <input
               type="text"
               placeholder="Last Name"
               value={this.state.lastName}
               className="form-control mr-3 rounded"
               onChange={this.fieldChanged('lastName')}
             />

         </div>
          <div className="col-sm-12 col-md-12 col-12">
              <input
                type="text"
                placeholder="email"
                value={this.state.email}
                className="form-control mr-3 rounded"
                onChange={this.fieldChanged('email')}
              />
          </div>
            <div className="col-sm-12 col-md-12 col-12">
              <input
                type="text"
                placeholder="username"
                value={this.state.username}
                className="form-control mr-3 rounded"
                onChange={this.fieldChanged('username')}
              />
            </div>
            <div className="col-sm-12 col-md-12 col-12">
              <input
                type="password"
                placeholder="password"
                value={this.state.firstPassword}
                className="form-control mr-3 rounded"
                onChange={this.fieldChanged('firstPassword')}
              />
            </div>
            <div className="col-sm-12 col-md-12 col-12">
              <input
                type="password"
                placeholder="re-enter password"
                value={this.state.secondPassword}
                className="form-control mr-3 rounded"
                onChange={this.fieldChanged('secondPassword')}
              />
            </div>
            <button className="btn btn-primary center-button-signup sign-up-button2" onClick={this.signUpUser}> Sign Up </button>
          </div>
        </div>
      </div>

    );
  }
}

export default SignupPage;
