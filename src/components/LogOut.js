import React, { Component } from 'react';
import axios from 'axios';

const SERVER_PREFIX = 'http://localhost:5000/';

class LogOut extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.logout = this.logout.bind(this);
  }

  logout() {
    axios.delete(SERVER_PREFIX + 'login',{
      withCredentials: true
    }).then((results) => {
      this.setState({
        user: null,
        route: '/'
      });
    });
  }

  render() {
    return(
      <div className='logout'>
        <Nav user={this.state.user} logout={this.logout} />
      </div>
    );
  }
}

export default LogOut;
