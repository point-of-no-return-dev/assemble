import React, { Component } from 'react'
import {
  Navbar,
  Nav,
  NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom'


class Footer extends Component{
  render(){
    return(
      <React.Fragment>
        <Navbar className="footer" id="footer" expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem id="footer-text">
              <NavLink to="/aboutus">About Us</NavLink>
              <p> © 2020 Assemble.</p>
            </NavItem>
          </Nav>
        </Navbar>
      </React.Fragment>
    )
  }
}
export default Footer
