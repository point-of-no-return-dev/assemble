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
        <Navbar className="footer" color="light" light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem>
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
