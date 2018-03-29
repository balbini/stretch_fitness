import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import Services from '../Services/Services';
import { Navbar, NavItem } from 'react-materialize';


class Navigation extends Component {
  render(){
    return (
      <div>
        <Navbar fixed>
          <NavItem><Link to="/">Home</Link></NavItem>
          <NavItem>About</NavItem>
          <NavItem><Link to="/services">Services</Link></NavItem>
          <NavItem>Client Login</NavItem>
        </Navbar>

        <Route exact path="/" component={Home}/>
        <Route path="/services" component={Services} />

      </div>
    )
  }
}

export default Navigation;
