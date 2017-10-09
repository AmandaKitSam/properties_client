import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


import Properties from './Properties';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="SignUp">
          <Link to="/signup">Sign Up</Link>
        </div>
        <div className="SignIn">
          <Link to="/signin">Sign In</Link>
        </div>

        <Properties />

        <header className="App-header">
          <h1 className="App-title">Sam Properties</h1>
        </header>
        <h1>This is Properties js</h1>
        <footer>Copyright &copy; By Amanda Sam</footer>
      </div>
    );
  }
}

export default App;
