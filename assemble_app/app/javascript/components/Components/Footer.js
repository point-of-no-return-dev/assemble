import React, { Component } from 'react'
import {
  Navbar,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class Footer extends Component{
  render(){
    return(
      <React.Fragment>
        <Navbar className="footer" color="light" light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">About Us</NavLink>
              <p> © 2020 Assemble.</p>
            </NavItem>
          </Nav>
        </Navbar>
      </React.Fragment>
    )
  }
}
export default Footer
