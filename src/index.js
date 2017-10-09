import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { HashRouter as Router, Route } from 'react-router-dom';

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Properties from './components/Properties';

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
    </div>
  </Router>
);


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
ReactDOM.render(Routes, document.body);
