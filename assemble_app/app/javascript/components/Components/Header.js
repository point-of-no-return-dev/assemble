import React, { Component } from 'react'
import {
    Collapse,
    Container,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavbarToggler
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            collapsed: true
        }
    }
    // ternary operator that allows us to toggle between having the navbar collapsed or expanded
    toggleNavbar = () => {
        this.state.collapsed === true ?
        this.setState({ collapsed: false }) :
        this.setState({ collapsed: true })
    }
    render(){
    return (
        <React.Fragment>
            {/* sets the navbar's color/theme */}
            <Navbar color="faded" light>
                {/* navbar logo */}
                <NavbarBrand href="/" className="mr-auto">Assemble</NavbarBrand>
                {/* button that allows us to toggle navbar open/closed */}
                <NavbarToggler onClick={ this.toggleNavbar } className="mr-2" />
                <Collapse isOpen={ !this.state.collapsed } navbar>
                    {/* Actual Navbar */}
                    <Nav navbar>
                        {/* link to index */}
                        <NavItem>
                            <NavLink to="/index">View Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/project_new">Add a Project</NavLink>
                        </NavItem>
                        {/* you see this if you're signed in */}
                        { this.props.logged_in &&
                        <>
                            <NavItem>
                                <a href={ this.props.sign_out_route }>Sign Out</a>
                            </NavItem>
                        </>
                        }
                        {/* you see this if you're signed out */}
                        { !this.props.logged_in &&
                        <>
                            <NavItem>
                                <a href={this.props.sign_in_route}>Sign In</a>
                            </NavItem>
                            <NavItem>
                                <a href="/users/sign_up">Sign Up</a>
                            </NavItem>
                        </>
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        </React.Fragment>
    )
    }
}

export default Header