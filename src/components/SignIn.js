import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


// TO RUN: rails server -p 5000
// const SERVER_PREFIX = 'http://localhost:5000/';
const SERVER_PREFIX = 'https://properties-server.herokuapp.com/';


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChangeEmail = this._handleChangeEmail.bind(this);
    this._handleChangePassword = this._handleChangePassword.bind(this);
  }

  _handleChangePassword(p) {
    this.setState( { password: p.target.value } );
  }

  _handleChangeEmail(e) {
    this.setState( { email: e.target.value } );
  }

  _handleSubmit(si) {
    si.preventDefault(si);
    this.getUser();
  }

  getUser() {
    axios.post(`${SERVER_PREFIX}login`, {
      email: this.state.email,
      password: this.state.password,
    }, {
      withCredentials: true
    }).then(function (result) {
      this.props.setUser(result.data);
      this.props.history.push( `/` );
    }.bind(this));
  }

  render() {
    return (
      <div className="signin">
        <form onSubmit={ this._handleSubmit }>
          <h3>Sign In</h3>

          <input type="email" placeholder="Email" onChange={ this._handleChangeEmail } value={ this.state.email } autoFocus/>
          <br />

          <input type="password" placeholder="Password" onChange={ this._handleChangePassword } value={ this.state.password } />
          <br />

          <button type="submit" method="post">Sign In</button>
        </form>
      </div>
    );
  }
}


export default SignIn;
