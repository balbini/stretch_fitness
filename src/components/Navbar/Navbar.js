import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';


class Navigation extends Component {
  render(){
    return (
      <div>
        <Navbar fixed>
          <NavItem>About</NavItem>
          <NavItem>Services Offered</NavItem>
          <NavItem>Client Login</NavItem>
        </Navbar>
      </div>
    )
  }
}

export default Navigation;
