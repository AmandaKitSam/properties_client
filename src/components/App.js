import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


import Properties from './Properties';


class App extends Component {
  render() {
    return (
      <div className="App">

        <nav className="navbar navbar-inverse">
          <div className="container-flui">
            <div className="">
              <Link to="/signup">Sign Up</Link>
              <Link to="/signin">Sign In</Link>
            </div>
          </div>
        </nav>

        <header className="App-header">
          <h1 className="App-title">Sam Properties</h1>
        </header>

        <Properties />

        <footer>Copyright &copy; By Amanda Sam</footer>
      </div>
    );
  }
}

export default App;
