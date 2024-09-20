import React from 'react'
import { Navbar, Nav, Container, NavDropdown, NavbarBrand } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {

  console.log('세션', JSON.parse(sessionStorage.getItem('info')))

  const logout = () =>{
    sessionStorage.removeItem('info')
    alert('다음에 다시 방문해주세요...')
    window.location.href="/"
  }

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
            {JSON.parse(sessionStorage.getItem('info'))
            ? <button onClick={logout}>로그아웃</button>
            :<>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/join">Join</Nav.Link>
            </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header
