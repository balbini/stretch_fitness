import React, { Component } from 'react';
import Nutrition from '../Nutrition/Nutrition';
import Articles from '../Articles/Articles';

class Home extends Component {
  render(){
    return(
      <div>
        <h1>Welcome to Stretch Fitness & Nutrition</h1>
        <p>Work alongside us to gain a better understanding of how to take care of your body through exercise and nutrition</p>
        <Nutrition /><Articles />
      </div>
    )
  }
}

export default Home;
