import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


import Properties from './Properties';
import SearchBar from './SearchBar';


class Home extends Component {
  render() {
    return (
      <div className="App">

        <nav className="navbar navbar-inverse">
          <div className="container-flui">
            <div className="navbar-header">
            </div>

            <ul className="nav navbar-nav">
              <li className="active"><Link to="#">Home</Link></li>
              <li><Link to="#">Buy</Link></li>
              <li><Link to="#">Rent</Link></li>
            </ul>

            { !this.props.user &&
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link>
              </li>
              <li><Link to="/signin"><span className="glyphicon glyphicon-log-in"></span> Sign In</Link>
              </li>
            </ul> }

            { this.props.user &&
            <ul className="nav navbar-nav navbar-right">
              <li className="currentUser">Welcome { this.props.user.name } <br/>  Email: { this.props.user.email }</li>
              <li><Link to="/logout"><span className="glyphicon glyphicon-log-out"></span> Log Out</Link>
              </li>
            </ul> }

          </div>
        </nav>

        <header className="App-header">
          <h1 className="App-title">SAM Properties</h1>
        </header>

        <Properties />
        <SearchBar />

        <footer>Copyright &copy; By Amanda Sam</footer>
      </div>
    );
  }
}

export default Home;
