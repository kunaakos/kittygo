import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';

import Cats from '../Cats/Cats'

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cats">Cats</Link></li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/cats" component={Cats} />
        </div>
      </Router>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        <h2>O hai!</h2>
      </div>
    )
  }
}

export default App;
