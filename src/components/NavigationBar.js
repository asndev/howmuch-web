import React from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'

const NavigationBar = (props) => {
  const email = props.user ? props.user.email : null
  const title = email ? `hello ${email}` : 'howmuch'

  let signout = ''
  if (props.user) {
    signout = (
      <NavItem eventKey={1} onClick={props.signout}>
        logout
      </NavItem>
    )
  }

  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href='/'>{title}</a>
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
          {signout}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar
