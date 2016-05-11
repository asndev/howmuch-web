import React from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href='/'>howmuch</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href='#'>
            dashboard
          </NavItem>
          <NavItem eventKey={2} href='#'>
            Link
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href='#'>
            username
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar
