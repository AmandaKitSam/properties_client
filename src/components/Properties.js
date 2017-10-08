import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

// TO RUN: rails server -p 5000
const SERVER_URL = 'http://localhost:5000/';



class Properties extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Sam Properties</h1>
        </header>
        <h1>This is Properties js</h1>
        <footer>Copyright &copy; By Amanda Sam</footer>
      </div>
    );
  }
}

export default Properties;
