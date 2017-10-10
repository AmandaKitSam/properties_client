import React, { Component } from 'react';
import axios from 'axios';
import Home from './Home';
import './App.css';

// const SERVER_PREFIX = 'http://localhost:5000/';
const SERVER_PREFIX = 'https://properties-server.herokuapp.com/';

class LogOut extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.logout = this.logout.bind(this);
  }

  // to do: need the logout message disappear in 5 secs
  logout() {
    axios.delete(`${SERVER_PREFIX}login`,{
      withCredentials: true
    }).then(function (result) {
      this.setState({
        user: null,
        route: '/'
      });
    });
  }

  render() {
    return(
      <div>
        <nav user={this.state.user} logout={this.logout}></nav>
        <h4 className='logout'>You have successfully logged out</h4>
        <Home />
      </div>
    );
  }
}

export default LogOut;
