import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand as={NavLink} to="/">
        Marvel
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link as={NavLink} to="/">
            Comics
          </Nav.Link>
          <Nav.Link as={NavLink} to="/stories">
            Stories
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
