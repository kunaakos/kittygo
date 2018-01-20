import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './App.css';

import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import Cats from '../Cats/Cats'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/cats" component={Cats} />
        </div>
      </Router>
    );
  }
}

export default App
