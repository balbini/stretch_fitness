import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navbar/Navbar';
import Nutrition from './components/Nutrition/Nutrition';
import { Navbar } from 'react-materialize;'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <h1>Welcome to Stretch Fitness & Nutrition</h1>
        <p>Work alongside us to gain a better understanding of how to take care of your body through exercise and nutrition</p>
        <Nutrition />
      </div>
    );
  }
}

export default App;
