import React from 'react'
import { Navbar, Nav, Form, Button, Container, NavDropdown, NavbarBrand } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <NavbarBrand as={Link} to="/">Wonnie's PORTFOLIO 💙</NavbarBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Profile</Nav.Link>
            <NavDropdown title="Click Here!" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/">Introduce</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/project">Project</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/train">Train & Certification</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/link">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/join">Join</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header
