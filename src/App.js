import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navigation from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Nutrition from './components/Nutrition/Nutrition';
import Articles from './components/Articles/Articles';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
        </div>
      </Router>
    );
  }
}

export default App;
