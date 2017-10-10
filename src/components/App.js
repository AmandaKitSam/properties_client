import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import LogOut from './LogOut';
import Properties from './Properties';

import { HashRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
    this._setUser = this._setUser.bind(this);
  }

  _setUser(user) {
    this.setState({user});
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={routeProps => <Home {...routeProps} user={this.state.user} />} />
          <Route exact path="/signup" render={routeProps => <SignUp {...routeProps} setUser={this._setUser} />} />
          <Route exact path="/signin" render={routeProps => <SignIn {...routeProps} setUser={this._setUser} />} />
          <Route exact path="/logout" render={routeProps => <LogOut {...routeProps} setUser={this._setUser} />} />
        </div>
      </Router>
    );
  }
}

export default App;
