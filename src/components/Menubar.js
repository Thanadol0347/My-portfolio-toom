import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Nav ,Navbar, } from 'react-bootstrap'

export default class Menubar extends Component {
  render() {
    return (
      <Navbar className='bg = light shadow-sm mb-' sticky="top" expand="lg">
        <Container fluid>
            <Navbar.Brand href='/'>
                <img
                    alt=''
                    src='./logo192.png'
                    className='App-logo img-fluid'
                />{''} My Portfolio
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <NavLink to='/' className='nav-link'>
                            Home
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/about' className='nav-link'>
                            About
                        </NavLink>
                    </li>
                </ul>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
