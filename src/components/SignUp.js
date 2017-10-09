import React, { Component } from 'react';
import axios from 'axios';

// TO RUN: rails server -p 5000
const SERVER_PREFIX = 'http://localhost:5000/';


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Emma', email: 'emma@ga.co', password: 'chicken', password_confirmation: 'chicken' };
    this._handleSubmit = this._handleSubmit.bind(this);

    this._handleNameChange = this._handleNameChange.bind(this);
    this._handleChangeEmail = this._handleChangeEmail.bind(this);
    this._handleChangePassword = this._handleChangePassword.bind(this);
    this._handleConfirmChange = this._handleConfirmChange.bind(this);
  }

  _handleNameChange(n) {
    this.setState( { name: n.target.value } );
  }

  _handleConfirmChange(c) {
    this.setState( { password_confirmation: c.target.value } );
  }

  _handleChangePassword(p) {
    this.setState( { password: p.target.value } );
  }

  _handleChangeEmail(e) {
    this.setState( { email: e.target.value } );
  }

  _handleSubmit(f) {
    f.preventDefault(f);
    this.saveUser();
  }

  saveUser() {
    axios.post( `${SERVER_PREFIX}users`, {
      user: {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation
      }
    }, {
      withCredentials: true
    }).then(function (result) {
      this.props.setUser(result.data);
      this.props.history.push( `/` );
    }.bind(this));
  }

  render() {
    return (
      <div className='signup'>
        <form onSubmit={ this._handleSubmit }>
          <h3>Please Sign Up Here</h3>
          <br />
          <input type='text' placeholder='Name' onInput={ this._handleNameChange } value={ this.state.name } autoFocus />
          <br />
          <input type='email' placeholder='Email' onInput={ this._handleChangeEmail } value={ this.state.email } />
          <br />
          <input type='password' placeholder='Password' onInput={ this._handleChangePassword } value={ this.state.password } />
          <br />
          <input type='password' placeholder='Confirm Password' onInput={ this._handleConfirmChange } value={ this.state.password_confirmation } />
          <br />
          <button type='submit' method='post'>Sign Up</button>
        </form>
      </div>
    );
  }
}


export default SignUp;
